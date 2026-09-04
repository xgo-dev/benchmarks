## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 406938.1 ms | 402157.6 ms | 4780.5 ms | 261856.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 406421.0 ms | 401632.0 ms | 4788.9 ms | 261842.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 402396.1 ms | 397770.7 ms | 4625.4 ms | 257515.0 ms |
| IXGo | LLGoDeadcodeDrop | 275368.2 ms | 271315.6 ms | 4052.6 ms | 92170.6 ms |
| IXGo | LLGoNoLTO | 270064.5 ms | 266045.2 ms | 4019.3 ms | 89572.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 168356.9 ms | 164905.8 ms | 3451.1 ms | 103112.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 166175.2 ms | 162764.5 ms | 3410.7 ms | 102091.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 164896.1 ms | 161557.6 ms | 3338.5 ms | 101923.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 122978.7 ms | 119980.2 ms | 2998.5 ms | 41629.2 ms |
| Etcdctl | LLGoNoLTO | 119725.3 ms | 116957.7 ms | 2767.6 ms | 40558.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 113665.0 ms | 111369.9 ms | 2295.1 ms | 80220.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 112899.4 ms | 110585.3 ms | 2314.1 ms | 80093.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 112083.1 ms | 109853.0 ms | 2230.2 ms | 79088.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 90411.3 ms | 88818.4 ms | 1592.9 ms | 68204.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 83249.9 ms | 81681.9 ms | 1567.9 ms | 60582.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 82088.0 ms | 80359.5 ms | 1728.5 ms | 59441.6 ms |
| XGo | LLGoDeadcodeDrop | 68870.9 ms | 66900.2 ms | 1970.6 ms | 26716.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 68044.9 ms | 66823.2 ms | 1221.7 ms | 52811.7 ms |
| XGo | LLGoNoLTO | 66138.7 ms | 64320.1 ms | 1818.5 ms | 25121.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 64374.4 ms | 63146.5 ms | 1227.9 ms | 51266.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 64210.7 ms | 62990.9 ms | 1219.8 ms | 50749.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 63108.1 ms | 61877.6 ms | 1230.4 ms | 46798.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 62492.0 ms | 61251.5 ms | 1240.5 ms | 46396.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 55927.7 ms | 54790.0 ms | 1137.7 ms | 42188.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 52209.4 ms | 50789.0 ms | 1420.4 ms | 25491.2 ms |
| Aws_restjson | LLGoNoLTO | 51204.0 ms | 49820.6 ms | 1383.4 ms | 24933.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 39270.2 ms | 38389.7 ms | 880.5 ms | 28162.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 39195.8 ms | 38221.3 ms | 974.6 ms | 27391.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 36107.1 ms | 35062.3 ms | 1044.8 ms | 16639.7 ms |
| Uber_zap | LLGoNoLTO | 35932.5 ms | 34936.9 ms | 995.6 ms | 16561.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 33214.5 ms | 32289.5 ms | 925.1 ms | 21375.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 31558.0 ms | 30770.4 ms | 787.5 ms | 24601.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30526.6 ms | 29481.3 ms | 1045.3 ms | 14560.3 ms |
| K8s_workqueue | LLGoNoLTO | 30338.6 ms | 29317.1 ms | 1021.5 ms | 14381.2 ms |
| IXGo | Go | 26931.1 ms | 24885.3 ms | 2045.8 ms | 7945.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 26780.4 ms | 26062.4 ms | 718.0 ms | 19642.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 26576.8 ms | 25804.5 ms | 772.3 ms | 19427.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 22935.7 ms | 22098.2 ms | 837.5 ms | 7665.6 ms |
| Gorm_schema | LLGoNoLTO | 22705.5 ms | 21845.6 ms | 859.9 ms | 7595.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 21040.5 ms | 20443.3 ms | 597.2 ms | 16540.0 ms |
| Etcdctl | Go | 20263.8 ms | 18852.8 ms | 1411.0 ms | 6114.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 15374.7 ms | 14820.5 ms | 554.2 ms | 11008.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 15269.8 ms | 14682.3 ms | 587.6 ms | 11040.4 ms |
| Toml | LLGoDeadcodeDrop | 14012.4 ms | 13345.9 ms | 666.4 ms | 5118.4 ms |
| Toml | LLGoNoLTO | 13523.6 ms | 12879.1 ms | 644.5 ms | 5019.9 ms |
| XGo | Go | 11547.4 ms | 10680.2 ms | 867.2 ms | 3413.0 ms |
| Dustin_humanize | LLGoNoLTO | 8020.1 ms | 7477.8 ms | 542.3 ms | 3525.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 7977.4 ms | 7476.0 ms | 501.3 ms | 3508.6 ms |
| Aws_restjson | Go | 4792.7 ms | 4315.9 ms | 476.8 ms | 1938.3 ms |
| Gorm_schema | Go | 3403.6 ms | 3126.5 ms | 277.1 ms | 1306.6 ms |
| Uber_zap | Go | 3196.8 ms | 2906.1 ms | 290.7 ms | 1253.7 ms |
| K8s_workqueue | Go | 2850.3 ms | 2545.5 ms | 304.8 ms | 1009.9 ms |
| Toml | Go | 1233.1 ms | 1093.7 ms | 139.4 ms | 560.4 ms |
| Dustin_humanize | Go | 489.8 ms | 382.7 ms | 107.1 ms | 234.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 994727.1 ms | 680602.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 975193.4 ms | 658000.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 966098.3 ms | 646771.2 ms | 9 |
| LLGoDeadcodeDrop | 630986.4 ms | 233499.7 ms | 9 |
| LLGoNoLTO | 617652.8 ms | 227269.3 ms | 9 |
| Go | 74708.6 ms | 23775.9 ms | 9 |

Dependency download details are in `download-timings.log`.
