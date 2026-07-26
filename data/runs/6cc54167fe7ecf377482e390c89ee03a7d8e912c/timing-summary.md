## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Uber_zap | LLGoFullLTONoGlobalDCE | 169384.7 ms | 171361.2 ms | 4675.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 155382.8 ms | 150779.6 ms | 3142.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 139545.0 ms | 142082.3 ms | 2849.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 131910.1 ms | 129106.9 ms | 2452.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 126913.1 ms | 139274.9 ms | 2407.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 126036.4 ms | 120942.6 ms | 2338.5 ms |
| Uber_zap | LLGoNoLTO | 122995.5 ms | 127473.9 ms | 6136.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 121174.0 ms | 129317.0 ms | 4134.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 106048.6 ms | 118546.5 ms | 2308.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 104150.7 ms | 103083.2 ms | 2309.0 ms |
| Aws_restjson | LLGoNoLTO | 97176.1 ms | 93341.7 ms | 3925.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 78133.7 ms | 73996.3 ms | 1730.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 68545.2 ms | 66203.4 ms | 1620.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 67017.0 ms | 65307.8 ms | 1721.3 ms |
| Dustin_humanize | LLGoNoLTO | 62080.8 ms | 59654.4 ms | 4466.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 61140.3 ms | 60588.5 ms | 2581.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 60138.9 ms | 57414.8 ms | 1350.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 58389.1 ms | 61873.0 ms | 1470.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 48738.9 ms | 50294.0 ms | 1157.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 45889.5 ms | 40638.9 ms | 1205.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34234.5 ms | 38424.8 ms | 996.1 ms |
| Gorm_schema | LLGoNoLTO | 27648.5 ms | 32008.6 ms | 1783.4 ms |
| K8s_workqueue | LLGoNoLTO | 17795.7 ms | 27523.1 ms | 1860.2 ms |
| Toml | LLGoNoLTO | 12302.1 ms | 17243.8 ms | 1147.0 ms |
| Aws_restjson | Go | 1217.9 ms | 906.7 ms | 134.6 ms |
| Uber_zap | Go | 424.9 ms | 452.7 ms | 118.7 ms |
| Toml | Go | 381.4 ms | 431.4 ms | 71.6 ms |
| K8s_workqueue | Go | 308.2 ms | 484.7 ms | 87.9 ms |
| Gorm_schema | Go | 254.9 ms | 413.0 ms | 66.9 ms |
| Dustin_humanize | Go | 196.0 ms | 258.9 ms | 62.6 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 595781.0 ms | 6 |
| LLGoFullLTONoGlobalDCE | 563696.8 ms | 6 |
| LLGoFullLTOGlobalDCE | 543294.8 ms | 6 |
| LLGoNoLTO | 339998.7 ms | 6 |
| Go | 2783.3 ms | 6 |

Dependency download details are in `download-timings.log`.
