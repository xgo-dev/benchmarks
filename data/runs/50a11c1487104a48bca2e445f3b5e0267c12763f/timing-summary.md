## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 666618.0 ms | 658292.4 ms | 8325.6 ms | 479901.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 642637.6 ms | 634736.3 ms | 7901.3 ms | 430303.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 582100.8 ms | 573923.6 ms | 8177.3 ms | 394815.7 ms |
| IXGo | LLGoDeadcodeDrop | 396007.8 ms | 388474.6 ms | 7533.1 ms | 141325.3 ms |
| IXGo | LLGoNoLTO | 390575.7 ms | 383380.2 ms | 7195.5 ms | 143347.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 283338.9 ms | 276835.7 ms | 6503.2 ms | 168097.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 278766.5 ms | 272537.8 ms | 6228.7 ms | 165550.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 277331.1 ms | 271284.0 ms | 6047.1 ms | 166091.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 216820.7 ms | 210942.9 ms | 5877.8 ms | 72576.3 ms |
| Etcdctl | LLGoNoLTO | 208629.3 ms | 203089.8 ms | 5539.5 ms | 68910.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181413.5 ms | 176895.9 ms | 4517.6 ms | 128376.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177113.2 ms | 172828.6 ms | 4284.6 ms | 125896.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 176834.8 ms | 172478.6 ms | 4356.2 ms | 125487.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150575.0 ms | 147309.1 ms | 3265.9 ms | 117441.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 141038.0 ms | 137615.0 ms | 3423.0 ms | 106818.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 140256.4 ms | 137061.5 ms | 3194.8 ms | 106320.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109572.6 ms | 106779.0 ms | 2793.6 ms | 85294.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 108000.8 ms | 105192.0 ms | 2808.8 ms | 85493.5 ms |
| XGo | LLGoDeadcodeDrop | 107571.4 ms | 103711.9 ms | 3859.5 ms | 43057.8 ms |
| XGo | LLGoNoLTO | 103256.8 ms | 99481.1 ms | 3775.7 ms | 41646.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102986.6 ms | 100192.0 ms | 2794.6 ms | 80599.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102050.5 ms | 99317.4 ms | 2733.0 ms | 80142.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99092.8 ms | 96415.8 ms | 2677.0 ms | 73852.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97645.7 ms | 94932.9 ms | 2712.8 ms | 72590.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82763.9 ms | 79656.6 ms | 3107.3 ms | 41738.4 ms |
| Aws_restjson | LLGoNoLTO | 79683.4 ms | 76639.9 ms | 3043.5 ms | 40344.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63216.8 ms | 61247.7 ms | 1969.1 ms | 45645.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62438.8 ms | 60488.1 ms | 1950.7 ms | 44629.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 57119.6 ms | 54634.5 ms | 2485.0 ms | 25700.2 ms |
| Uber_zap | LLGoNoLTO | 55947.2 ms | 53489.6 ms | 2457.6 ms | 25846.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53527.2 ms | 51593.6 ms | 1933.7 ms | 35297.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53310.4 ms | 51585.1 ms | 1725.4 ms | 42402.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49481.3 ms | 46989.6 ms | 2491.8 ms | 23671.0 ms |
| K8s_workqueue | LLGoNoLTO | 48973.0 ms | 46534.1 ms | 2438.9 ms | 23309.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 45323.6 ms | 43725.7 ms | 1597.8 ms | 33795.9 ms |
| IXGo | Go | 43999.8 ms | 40755.3 ms | 3244.5 ms | 12810.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43551.8 ms | 42011.7 ms | 1540.1 ms | 32255.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36244.8 ms | 34439.7 ms | 1805.2 ms | 12888.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 35052.9 ms | 33579.6 ms | 1473.3 ms | 27948.4 ms |
| Gorm_schema | LLGoNoLTO | 34894.0 ms | 33135.8 ms | 1758.2 ms | 12566.9 ms |
| Etcdctl | Go | 33029.0 ms | 30764.3 ms | 2264.7 ms | 9889.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 26786.3 ms | 25419.3 ms | 1367.0 ms | 19538.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25108.4 ms | 23792.9 ms | 1315.6 ms | 18120.9 ms |
| Toml | LLGoDeadcodeDrop | 22470.3 ms | 20963.7 ms | 1506.6 ms | 8822.2 ms |
| Toml | LLGoNoLTO | 21794.5 ms | 20391.4 ms | 1403.1 ms | 8486.5 ms |
| XGo | Go | 18530.6 ms | 17264.0 ms | 1266.7 ms | 5465.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13158.9 ms | 11914.5 ms | 1244.4 ms | 5905.8 ms |
| Dustin_humanize | LLGoNoLTO | 13157.5 ms | 11930.7 ms | 1226.8 ms | 5955.9 ms |
| Aws_restjson | Go | 7640.5 ms | 6900.1 ms | 740.5 ms | 3121.3 ms |
| Gorm_schema | Go | 5497.1 ms | 5095.4 ms | 401.7 ms | 2111.6 ms |
| Uber_zap | Go | 5144.0 ms | 4689.0 ms | 455.0 ms | 1988.0 ms |
| K8s_workqueue | Go | 4452.2 ms | 3951.9 ms | 500.3 ms | 1603.6 ms |
| Toml | Go | 1963.5 ms | 1716.1 ms | 247.4 ms | 907.2 ms |
| Dustin_humanize | Go | 790.4 ms | 632.1 ms | 158.3 ms | 376.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1610860.4 ms | 1121166.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1602585.7 ms | 1129133.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1512243.2 ms | 1042408.2 ms | 9 |
| LLGoDeadcodeDrop | 981638.6 ms | 375685.9 ms | 9 |
| LLGoNoLTO | 956911.3 ms | 370414.8 ms | 9 |
| Go | 121047.1 ms | 38273.7 ms | 9 |

Dependency download details are in `download-timings.log`.
