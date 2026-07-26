## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 163189.6 ms | 162670.0 ms | 4099.5 ms |
| Uber_zap | LLGoNoLTO | 163151.6 ms | 159712.9 ms | 11602.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 162149.4 ms | 175046.9 ms | 4078.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159890.7 ms | 173534.5 ms | 3043.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 145473.1 ms | 157353.7 ms | 3026.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 144419.6 ms | 156658.6 ms | 3455.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 135287.5 ms | 128689.6 ms | 4801.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 132720.6 ms | 133063.6 ms | 3139.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 117751.5 ms | 111274.7 ms | 4106.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 112162.4 ms | 106736.6 ms | 4201.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 105988.9 ms | 100558.5 ms | 2310.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102023.6 ms | 111891.9 ms | 2592.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 100865.3 ms | 111994.2 ms | 2587.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 99436.3 ms | 110663.7 ms | 2489.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 98247.7 ms | 89480.6 ms | 4029.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 87001.2 ms | 89055.5 ms | 2295.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 81359.0 ms | 76474.2 ms | 1828.1 ms |
| Aws_restjson | LLGoNoLTO | 73418.9 ms | 86611.4 ms | 4080.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 60841.9 ms | 60982.1 ms | 1662.6 ms |
| Gorm_schema | LLGoNoLTO | 49497.0 ms | 51311.3 ms | 2885.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 30884.7 ms | 35510.5 ms | 1280.1 ms |
| K8s_workqueue | LLGoNoLTO | 27503.3 ms | 36516.5 ms | 2624.9 ms |
| Toml | LLGoNoLTO | 15914.7 ms | 21555.3 ms | 1634.1 ms |
| Dustin_humanize | LLGoNoLTO | 10588.1 ms | 14211.3 ms | 1255.3 ms |
| K8s_workqueue | Go | 1238.5 ms | 827.3 ms | 134.6 ms |
| Aws_restjson | Go | 824.5 ms | 1002.9 ms | 228.3 ms |
| Toml | Go | 477.4 ms | 538.8 ms | 111.2 ms |
| Dustin_humanize | Go | 445.4 ms | 385.9 ms | 81.2 ms |
| Uber_zap | Go | 405.1 ms | 567.7 ms | 129.2 ms |
| Gorm_schema | Go | 321.3 ms | 488.0 ms | 90.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 688306.2 ms | 6 |
| LLGoFullLTOGlobalDCE | 682489.3 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 668897.5 ms | 6 |
| LLGoNoLTO | 340073.6 ms | 6 |
| Go | 3712.1 ms | 6 |

Dependency download details are in `download-timings.log`.
