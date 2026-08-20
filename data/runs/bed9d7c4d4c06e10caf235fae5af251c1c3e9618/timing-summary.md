## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 377393.9 ms | 371731.1 ms | 5662.7 ms | 254837.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 373983.9 ms | 368313.7 ms | 5670.2 ms | 252604.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 363967.9 ms | 358375.5 ms | 5592.4 ms | 251500.7 ms |
| IXGo | LLGoNoLTO | 360184.2 ms | 354801.7 ms | 5382.5 ms | 108180.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 350973.4 ms | 346242.1 ms | 4731.3 ms | 105680.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 311928.2 ms | 307667.7 ms | 4260.5 ms | 203332.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 308104.8 ms | 304024.2 ms | 4080.6 ms | 199985.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 304430.2 ms | 300403.4 ms | 4026.9 ms | 199980.1 ms |
| IXGo | LLGoDeadcodeDrop | 266128.6 ms | 260928.4 ms | 5200.1 ms | 84127.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 228745.9 ms | 224832.3 ms | 3913.6 ms | 133371.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 181828.9 ms | 178651.4 ms | 3177.4 ms | 130856.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 180455.1 ms | 177256.4 ms | 3198.6 ms | 105470.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173126.1 ms | 169944.4 ms | 3181.7 ms | 130780.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 169197.1 ms | 166069.0 ms | 3128.1 ms | 126401.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 134862.1 ms | 132195.9 ms | 2666.2 ms | 100247.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 130293.5 ms | 127724.8 ms | 2568.7 ms | 84765.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 107518.9 ms | 104992.0 ms | 2526.8 ms | 84706.5 ms |
| XGo | LLGoDeadcodeDrop | 106859.9 ms | 104160.5 ms | 2699.5 ms | 33874.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 102675.1 ms | 100019.0 ms | 2656.1 ms | 81630.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102508.1 ms | 99986.4 ms | 2521.6 ms | 81319.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101443.9 ms | 99152.7 ms | 2291.2 ms | 81361.3 ms |
| Toml | LLGoNoLTO | 101169.2 ms | 98794.5 ms | 2374.7 ms | 36750.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94533.7 ms | 92018.4 ms | 2515.2 ms | 71260.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 90069.4 ms | 87657.8 ms | 2411.6 ms | 50613.5 ms |
| Etcdctl | LLGoNoLTO | 87149.9 ms | 84079.8 ms | 3070.1 ms | 29860.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 85034.1 ms | 82797.5 ms | 2236.7 ms | 48637.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 74454.0 ms | 71944.4 ms | 2509.6 ms | 30430.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 69546.7 ms | 67893.2 ms | 1653.5 ms | 51371.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64230.4 ms | 62707.9 ms | 1522.5 ms | 48748.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56567.2 ms | 55118.6 ms | 1448.6 ms | 45646.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 51119.6 ms | 49025.7 ms | 2093.8 ms | 16228.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46421.0 ms | 45037.3 ms | 1383.7 ms | 35674.2 ms |
| XGo | LLGoNoLTO | 42883.9 ms | 40435.3 ms | 2448.7 ms | 16387.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42085.9 ms | 40811.4 ms | 1274.5 ms | 34967.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36284.1 ms | 34292.8 ms | 1991.3 ms | 12441.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34970.7 ms | 33638.7 ms | 1332.0 ms | 26520.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32214.1 ms | 30974.7 ms | 1239.4 ms | 25001.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30910.4 ms | 29578.2 ms | 1332.2 ms | 10199.8 ms |
| Gorm_schema | LLGoNoLTO | 30888.6 ms | 29512.9 ms | 1375.7 ms | 10121.5 ms |
| Aws_restjson | LLGoNoLTO | 29584.4 ms | 27476.6 ms | 2107.8 ms | 10529.6 ms |
| Uber_zap | LLGoNoLTO | 27436.3 ms | 25413.6 ms | 2022.7 ms | 9797.4 ms |
| K8s_workqueue | LLGoNoLTO | 25607.9 ms | 23713.1 ms | 1894.8 ms | 9343.1 ms |
| Toml | LLGoDeadcodeDrop | 20281.2 ms | 18996.3 ms | 1284.9 ms | 7510.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11982.2 ms | 10853.6 ms | 1128.5 ms | 4863.2 ms |
| Dustin_humanize | LLGoNoLTO | 10958.5 ms | 9847.4 ms | 1111.2 ms | 4209.8 ms |
| IXGo | Go | 2061.1 ms | 1743.8 ms | 317.3 ms | 1519.8 ms |
| Etcdctl | Go | 1524.5 ms | 1284.8 ms | 239.7 ms | 795.7 ms |
| XGo | Go | 1117.6 ms | 946.5 ms | 171.1 ms | 774.8 ms |
| Aws_restjson | Go | 809.3 ms | 683.1 ms | 126.2 ms | 510.7 ms |
| K8s_workqueue | Go | 688.0 ms | 582.1 ms | 106.0 ms | 415.1 ms |
| Uber_zap | Go | 672.0 ms | 546.2 ms | 125.8 ms | 419.9 ms |
| Gorm_schema | Go | 542.1 ms | 442.3 ms | 99.7 ms | 285.3 ms |
| Toml | Go | 525.6 ms | 422.5 ms | 103.0 ms | 319.0 ms |
| Dustin_humanize | Go | 352.2 ms | 292.7 ms | 59.5 ms | 189.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1455542.4 ms | 1014399.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1419975.5 ms | 980527.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1392618.9 ms | 946664.6 ms | 9 |
| LLGoDeadcodeDrop | 948993.3 ms | 305356.9 ms | 9 |
| LLGoNoLTO | 715863.1 ms | 235179.0 ms | 9 |
| Go | 8292.4 ms | 5229.8 ms | 9 |

Dependency download details are in `download-timings.log`.
