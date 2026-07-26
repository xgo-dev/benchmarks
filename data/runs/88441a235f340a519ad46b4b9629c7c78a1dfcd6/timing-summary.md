## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 142118.4 ms | 142663.5 ms | 4982.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 132187.6 ms | 133634.2 ms | 5062.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 131965.0 ms | 136415.0 ms | 3086.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 118006.2 ms | 122878.4 ms | 3264.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 99662.0 ms | 106230.9 ms | 2618.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 93145.8 ms | 96140.7 ms | 2379.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 90156.6 ms | 99839.2 ms | 2377.5 ms |
| Aws_restjson | LLGoNoLTO | 88666.2 ms | 95015.9 ms | 4462.5 ms |
| Uber_zap | LLGoNoLTO | 76084.3 ms | 80933.3 ms | 4856.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 73612.0 ms | 80165.5 ms | 2169.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 66300.9 ms | 73515.3 ms | 2165.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 65050.1 ms | 63658.5 ms | 2967.0 ms |
| Dustin_humanize | LLGoNoLTO | 60999.9 ms | 54800.1 ms | 5782.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 56464.2 ms | 57691.6 ms | 1743.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 52543.0 ms | 55590.1 ms | 1610.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 49334.9 ms | 50926.8 ms | 1634.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 39752.8 ms | 43389.8 ms | 1263.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 35454.9 ms | 37708.4 ms | 1206.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 34094.8 ms | 36635.0 ms | 1260.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33119.9 ms | 33207.3 ms | 1226.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25101.1 ms | 27044.5 ms | 1141.8 ms |
| Gorm_schema | LLGoNoLTO | 22132.6 ms | 26350.0 ms | 1937.3 ms |
| Toml | LLGoNoLTO | 18470.9 ms | 19175.4 ms | 1463.6 ms |
| K8s_workqueue | LLGoNoLTO | 16008.3 ms | 24249.2 ms | 2006.1 ms |
| Aws_restjson | Go | 935.5 ms | 739.7 ms | 141.2 ms |
| K8s_workqueue | Go | 864.1 ms | 598.3 ms | 125.5 ms |
| Uber_zap | Go | 702.2 ms | 538.2 ms | 110.6 ms |
| Toml | Go | 654.2 ms | 531.1 ms | 148.3 ms |
| Gorm_schema | Go | 622.5 ms | 470.7 ms | 86.4 ms |
| Dustin_humanize | Go | 400.6 ms | 293.8 ms | 62.7 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 500462.9 ms | 6 |
| LLGoFullLTOGlobalDCE | 421121.7 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 416485.5 ms | 6 |
| LLGoNoLTO | 282362.2 ms | 6 |
| Go | 4179.2 ms | 6 |

Dependency download details are in `download-timings.log`.
