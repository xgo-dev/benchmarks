## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 503218.8 ms | 526022.6 ms | 12316.2 ms |
| IXGo | LLGoNoLTO | 466131.7 ms | 503031.9 ms | 21498.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 385448.4 ms | 417025.2 ms | 8226.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 383148.0 ms | 419467.4 ms | 8119.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 335654.5 ms | 336127.4 ms | 7830.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 320517.7 ms | 317394.7 ms | 8194.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 299455.4 ms | 326518.9 ms | 5991.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 284104.8 ms | 316308.6 ms | 5436.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 264080.9 ms | 296435.2 ms | 5262.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 217338.9 ms | 238916.1 ms | 5641.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 191373.3 ms | 212860.1 ms | 4203.7 ms |
| Etcdctl | LLGoNoLTO | 181045.4 ms | 229111.1 ms | 10510.1 ms |
| K8s_workqueue | LLGoNoLTO | 168194.2 ms | 170538.0 ms | 11743.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 158133.7 ms | 179314.1 ms | 3555.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 127998.7 ms | 132755.4 ms | 2990.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127091.0 ms | 136641.2 ms | 3045.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 118490.3 ms | 120552.8 ms | 2851.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 114001.4 ms | 117869.1 ms | 2797.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 106680.0 ms | 114467.5 ms | 3278.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96758.5 ms | 107633.6 ms | 2494.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 93569.5 ms | 90451.2 ms | 2023.4 ms |
| Aws_restjson | LLGoNoLTO | 91997.1 ms | 96591.0 ms | 4220.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 86714.5 ms | 85896.2 ms | 2327.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 85727.7 ms | 97835.0 ms | 2526.5 ms |
| XGo | LLGoNoLTO | 80136.7 ms | 92508.2 ms | 4700.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 75972.5 ms | 76850.3 ms | 1986.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 65426.4 ms | 62242.8 ms | 1781.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 58426.1 ms | 59355.3 ms | 1629.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54693.1 ms | 60036.1 ms | 1503.3 ms |
| Uber_zap | LLGoNoLTO | 49444.5 ms | 54610.3 ms | 3222.2 ms |
| Gorm_schema | LLGoNoLTO | 44254.9 ms | 42325.4 ms | 2564.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 43865.8 ms | 43412.8 ms | 1511.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43267.1 ms | 47720.1 ms | 1355.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 29094.7 ms | 33623.3 ms | 1307.8 ms |
| Toml | LLGoNoLTO | 27279.1 ms | 26266.3 ms | 1824.5 ms |
| IXGo | Go | 22627.5 ms | 46649.4 ms | 2995.7 ms |
| Etcdctl | Go | 14078.5 ms | 18707.9 ms | 896.8 ms |
| Dustin_humanize | LLGoNoLTO | 8747.6 ms | 12973.1 ms | 1247.7 ms |
| XGo | Go | 7700.7 ms | 7418.6 ms | 464.1 ms |
| Aws_restjson | Go | 6303.2 ms | 5679.1 ms | 464.7 ms |
| Toml | Go | 5508.9 ms | 2319.6 ms | 225.5 ms |
| K8s_workqueue | Go | 4841.9 ms | 2822.2 ms | 309.1 ms |
| Gorm_schema | Go | 2341.7 ms | 5571.0 ms | 352.5 ms |
| Uber_zap | Go | 2248.7 ms | 3232.4 ms | 250.1 ms |
| Dustin_humanize | Go | 323.4 ms | 548.1 ms | 94.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1612867.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1601424.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1455959.0 ms | 9 |
| LLGoNoLTO | 1117231.3 ms | 9 |
| Go | 65974.5 ms | 9 |

Dependency download details are in `download-timings.log`.
