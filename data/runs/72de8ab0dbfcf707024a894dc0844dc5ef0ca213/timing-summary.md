## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCE | 188137.5 ms | 190006.8 ms | 5698.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 186405.5 ms | 193315.1 ms | 5216.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 154994.5 ms | 160583.5 ms | 3280.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 134759.8 ms | 136707.0 ms | 3972.6 ms |
| Aws_restjson | LLGoNoLTO | 124512.7 ms | 125393.8 ms | 5916.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106524.2 ms | 109280.7 ms | 2601.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96236.0 ms | 98941.7 ms | 2527.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 81909.3 ms | 88434.5 ms | 2333.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 73766.0 ms | 72597.9 ms | 2916.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 73102.8 ms | 80702.9 ms | 2245.7 ms |
| Toml | LLGoNoLTO | 71831.5 ms | 69646.2 ms | 6303.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 70582.5 ms | 79411.2 ms | 2197.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62849.1 ms | 61477.6 ms | 1530.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 55368.2 ms | 60155.7 ms | 1614.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 54655.5 ms | 57897.7 ms | 1655.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 44839.5 ms | 48174.9 ms | 1659.0 ms |
| Uber_zap | LLGoNoLTO | 43397.6 ms | 46618.7 ms | 2907.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 38694.9 ms | 40415.3 ms | 1214.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 37367.2 ms | 40577.3 ms | 1347.4 ms |
| Gorm_schema | LLGoNoLTO | 26900.1 ms | 30119.9 ms | 2008.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25855.4 ms | 28221.9 ms | 1186.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25828.3 ms | 28117.4 ms | 1167.9 ms |
| K8s_workqueue | LLGoNoLTO | 21754.1 ms | 28418.1 ms | 2256.8 ms |
| Dustin_humanize | LLGoNoLTO | 18086.0 ms | 16015.7 ms | 1339.9 ms |
| Aws_restjson | Go | 1375.9 ms | 881.5 ms | 171.0 ms |
| K8s_workqueue | Go | 959.0 ms | 752.0 ms | 161.7 ms |
| Uber_zap | Go | 906.7 ms | 606.2 ms | 115.1 ms |
| Dustin_humanize | Go | 389.2 ms | 332.0 ms | 58.9 ms |
| Toml | Go | 367.8 ms | 416.1 ms | 83.3 ms |
| Gorm_schema | Go | 260.8 ms | 382.0 ms | 84.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 546078.0 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 504770.6 ms | 6 |
| LLGoFullLTOGlobalDCE | 461027.8 ms | 6 |
| LLGoNoLTO | 306482.1 ms | 6 |
| Go | 4259.4 ms | 6 |

Dependency download details are in `download-timings.log`.
