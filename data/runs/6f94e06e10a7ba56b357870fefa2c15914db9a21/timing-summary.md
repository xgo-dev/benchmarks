## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 243198.5 ms | 243874.2 ms | 6748.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 149851.3 ms | 161246.9 ms | 3802.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 139052.1 ms | 152306.1 ms | 3521.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 125381.5 ms | 131696.6 ms | 3063.1 ms |
| Aws_restjson | LLGoNoLTO | 123463.5 ms | 133475.9 ms | 6738.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 121802.5 ms | 116819.4 ms | 4435.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 120476.3 ms | 113696.5 ms | 4382.2 ms |
| Dustin_humanize | LLGoNoLTO | 114029.1 ms | 92946.3 ms | 8209.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 105582.9 ms | 109351.4 ms | 2717.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 91808.4 ms | 101110.4 ms | 2504.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 90600.9 ms | 101642.9 ms | 2411.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 85515.2 ms | 95533.0 ms | 2541.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 79174.1 ms | 90977.7 ms | 2296.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 74560.2 ms | 74925.8 ms | 1982.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68661.9 ms | 73311.2 ms | 1784.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 66838.5 ms | 66868.0 ms | 1731.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 59429.7 ms | 58930.4 ms | 1525.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42634.5 ms | 46803.7 ms | 1442.5 ms |
| K8s_workqueue | LLGoNoLTO | 34852.0 ms | 39637.1 ms | 2764.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32226.1 ms | 34907.5 ms | 1244.9 ms |
| Gorm_schema | LLGoNoLTO | 31532.8 ms | 36021.7 ms | 2362.3 ms |
| Uber_zap | LLGoNoLTO | 31247.8 ms | 42756.4 ms | 2583.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 27398.8 ms | 31736.5 ms | 1197.5 ms |
| Toml | LLGoNoLTO | 17886.8 ms | 21374.7 ms | 1635.2 ms |
| Uber_zap | Go | 1176.9 ms | 867.3 ms | 192.6 ms |
| K8s_workqueue | Go | 1135.7 ms | 747.3 ms | 128.2 ms |
| Aws_restjson | Go | 1028.2 ms | 872.1 ms | 146.5 ms |
| Toml | Go | 871.3 ms | 572.7 ms | 106.1 ms |
| Dustin_humanize | Go | 324.0 ms | 331.1 ms | 90.2 ms |
| Gorm_schema | Go | 283.0 ms | 432.3 ms | 96.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 654111.0 ms | 6 |
| LLGoFullLTOGlobalDCE | 543638.2 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 526444.1 ms | 6 |
| LLGoNoLTO | 353012.1 ms | 6 |
| Go | 4819.1 ms | 6 |

Dependency download details are in `download-timings.log`.
