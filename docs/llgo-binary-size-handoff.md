# LLGo binary-size CI & Pages 交接

更新时间：2026-07-22（Asia/Shanghai）

## 目标与仓库

- 正式仓库：`xgo-dev/benchmarks`
- 正式工作分支：`main`
- 个人调测仓库：`zhouguangyuan0718/benchmarks`（仅保留下面的历史运行记录）
- 历史/站点源码分支：`pages`
- 仪表盘地址：https://xgo-dev.github.io/benchmarks/（首次部署后可用）
- 目标：对每次更新到 `xgo-dev/llgo:main` 的精确提交构建二进制大小，将 JSON 结果固化并在 Pages 上浏览、比较。

## 当前状态快照

下表是个人调测阶段的已验证运行记录；正式仓库从首次成功发布开始独立积累历史。

| Run | 提交 | 状态 | 说明 |
| --- | --- | --- | --- |
| [#15](https://github.com/zhouguangyuan0718/benchmarks/actions/runs/29910425368) | [40bedb5](https://github.com/zhouguangyuan0718/benchmarks/commit/40bedb5b4bbd48e9ed0d3b46ed9219a8ba24639a) | success | 已确认 LLVM/Clang 版本修复有效。 |
| [#16](https://github.com/zhouguangyuan0718/benchmarks/actions/runs/29917227390) | [9f49cb9](https://github.com/zhouguangyuan0718/benchmarks/commit/9f49cb91f9c319a4aeaf6ed36dd918e4ce4575d6) | success | Jekyll Pages 迁移已验证。 |
| [#17](https://github.com/zhouguangyuan0718/benchmarks/actions/runs/29917749490) | [7fbe18a](https://github.com/zhouguangyuan0718/benchmarks/commit/7fbe18ad2ab96146c036a1a463dd3779961c601a) | cancelled | 在新提交推送前主动停止。 |
| [#18](https://github.com/zhouguangyuan0718/benchmarks/actions/runs/29923518473) | [6563c96](https://github.com/zhouguangyuan0718/benchmarks/commit/6563c9658a0d1486d4b266126e31bbdfde71ed5b) | success | 五配置构建和 Pages 部署均成功；结果确认缺少 Sarama。 |

工作流设置了 `concurrency.group: llgo-binary-size-pages` 且 `cancel-in-progress: false`，因此同一分支的运行会串行发布 Pages 历史。

## CI 结构

入口工作流：[.github/workflows/llgo-binary-size.yml](../.github/workflows/llgo-binary-size.yml)

1. 读取 [ci/llgo-size/llgo-version.env](../ci/llgo-size/llgo-version.env) 的默认 LLGo、Go 和 LLVM 版本；LLGo `main` 的跨仓库事件会先更新该 pin，再显式启动一次构建和 Pages 发布。
2. 安装 LLVM 19、构建 LLGo 命令与 LTO plugin。
3. 用 Bent 对每个 suite 运行 Go + 4 个 LLGo 配置，产出 `benchsize` 的 JSON/TSV/raw 文件；CI 通过 `-j="$BENT_BUILD_WORKERS"` 并发构建，当前值为 4。
4. [report.sh](../ci/llgo-size/report.sh) 整理结果和构建/下载耗时。
5. [publish.sh](../ci/llgo-size/publish.sh) 将结果归档到 `pages/data/runs/<run>-<attempt>/`，更新 `data/index.json`。
6. `deploy-pages` job 检出 `pages` 分支，用 Jekyll 构建后通过 GitHub Pages artifact 部署。

只修改仪表盘源码或页面发布脚本时，不进入二进制大小构建；独立的
`llgo-binary-size-pages.yml` 会直接刷新 `pages` 分支并部署站点。该工作流和
主工作流的发布 job 都限制在 `main`，PR 构建只验证和上传 artifact，不会发布。
两个工作流使用独立的并发队列，页面刷新不会淘汰等待中的二进制大小构建。

核心文件：

- [Bent suites](../cmd/bent/configs/benchmarks-llgo-size.toml)
- [五种编译配置](../cmd/bent/configs/configurations-llgo-size.toml)
- [结果发布脚本](../ci/llgo-size/publish.sh)
- [工作流计时 helper](../ci/llgo-size/timing.sh)
- [仪表盘页面](../ci/llgo-size/site/index.html)
- [仪表盘脚本](../ci/llgo-size/site/app.js)
- [Jekyll 配置](../ci/llgo-size/site/_config.yml)

## 当前 benchmark 集合

- `toml`
- `aws_restjson`
- `dustin_humanize`（`BenchmarkParseBigBytes`）
- `k8s_workqueue`
- `uber_zap`
- `gorm_schema`

`hugo_hugolib` 已在 [7fbe18a](https://github.com/zhouguangyuan0718/benchmarks/commit/7fbe18ad2ab96146c036a1a463dd3779961c601a) 中移除：它使 LTO 构建阶段显著变慢。Sarama 在 #18 中被 Bent 静默禁用，现替换为已验证能构建并生成 `benchsize` 的 `dustin_humanize`。

## 已解决的关键问题

### Bent 的 `go env` 输出被计时包装器吞掉

提交：[061cfcc](https://github.com/zhouguangyuan0718/benchmarks/commit/061cfcc70861eebae800a962053e600f7402ae9f)

Bent 会执行 `go env GOROOT GOVERSION` 并读取 stdout。早期下载计时包装器重定向了所有 `go` 子命令的输出，导致 `go env returned 1 values for 2 variables`。现在包装器只记录 `go get`，其他命令直接 `exec` 真实 Go。

### LLVM 19 bitcode 被 LLVM 18 链接器读取

提交：[40bedb5](https://github.com/zhouguangyuan0718/benchmarks/commit/40bedb5b4bbd48e9ed0d3b46ed9219a8ba24639a)

失败特征：

```
Invalid attribute group entry (Producer: 'LLVM19.1.1' Reader: 'LLVM 18.1.3')
```

工作流现在安装 `clang-19`，并把 `/usr/lib/llvm-19/bin` 加到 PATH 前部。日志会输出选中的 `llvm-config` 与 `clang++` 版本。#15 已成功验证。

## Jekyll Pages 迁移

提交：[9f49cb9](https://github.com/zhouguangyuan0718/benchmarks/commit/9f49cb91f9c319a4aeaf6ed36dd918e4ce4575d6)

- `pages` 分支继续保存站点源码和累积数据；它不是一次性的构建产物。
- 发布脚本复制 `_config.yml` 并移除旧的 `.nojekyll`。
- 新 job 使用 `actions/configure-pages@v5`、`actions/jekyll-build-pages@v1`、`actions/upload-pages-artifact@v4`、`actions/deploy-pages@v4`。

个人调测仓库已验证该部署链路。正式仓库首次运行前，需要在 **Settings → Pages → Build and deployment → Source** 设置为 **GitHub Actions**；发布脚本会自动创建首个 `pages` 分支。

## 后续建议

1. 在 `xgo-dev/llgo` 配置 `BENCHMARKS_DISPATCH_TOKEN` 后，观察每次 `main` 更新自动触发的运行：它会固定到对应提交、使用四个 Bent 构建 worker，并要求六个用例完整结果。
2. 若运行失败，优先查看其 `binary-size` job 的失败步骤和日志中的 `[toolchain]`、`[timing]`、`[bent-download]` 行。
3. 成功后检查 Pages 仪表盘是否出现新 run，并与上一条历史结果比较。
5. 若仍需缩短时间，优先依据 `build-times.tsv` 和 `timing-summary.md` 找出最慢 suite，再替换单个 suite；不要移除五种编译配置，否则会降低 LTO/GlobalDCE 的对比价值。

## 常用排查入口

- Actions 列表：https://github.com/xgo-dev/benchmarks/actions
- Pages 仪表盘：https://xgo-dev.github.io/benchmarks/
- Pages 历史索引：https://xgo-dev.github.io/benchmarks/data/index.json
- GitHub Pages 自定义工作流文档：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
