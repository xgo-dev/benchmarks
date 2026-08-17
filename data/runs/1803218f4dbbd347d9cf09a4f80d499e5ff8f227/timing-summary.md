## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 489292.9 ms | 479930.3 ms | 9362.6 ms | 149700.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 407132.0 ms | 401509.0 ms | 5623.0 ms | 275838.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 383889.2 ms | 378284.7 ms | 5604.5 ms | 266272.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 379664.2 ms | 374104.6 ms | 5559.7 ms | 268938.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 351028.5 ms | 345182.0 ms | 5846.5 ms | 221953.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 313647.1 ms | 309502.2 ms | 4144.9 ms | 205512.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 311964.2 ms | 307675.3 ms | 4288.9 ms | 204800.7 ms |
| IXGo | LLGoDeadcodeDrop | 267973.1 ms | 263196.9 ms | 4776.2 ms | 85406.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 250209.3 ms | 245837.1 ms | 4372.3 ms | 155274.5 ms |
| XGo | LLGoDeadcodeDrop | 241488.5 ms | 237448.9 ms | 4039.5 ms | 73881.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 229833.2 ms | 225731.2 ms | 4101.9 ms | 135222.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 205851.2 ms | 202521.4 ms | 3329.7 ms | 60503.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 185689.6 ms | 182519.5 ms | 3170.2 ms | 134440.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 163950.3 ms | 160878.4 ms | 3071.9 ms | 130800.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 145552.3 ms | 142508.1 ms | 3044.3 ms | 94680.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 131638.1 ms | 128890.5 ms | 2747.6 ms | 97307.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 131350.5 ms | 128684.4 ms | 2666.1 ms | 97459.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111090.6 ms | 108589.0 ms | 2501.6 ms | 87795.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98070.0 ms | 95799.8 ms | 2270.2 ms | 80347.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97512.4 ms | 94970.2 ms | 2542.3 ms | 79293.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93244.8 ms | 90746.4 ms | 2498.4 ms | 69218.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92632.2 ms | 90124.0 ms | 2508.2 ms | 69312.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 89190.9 ms | 86829.7 ms | 2361.2 ms | 50616.3 ms |
| Etcdctl | LLGoNoLTO | 88399.6 ms | 85273.6 ms | 3126.0 ms | 30281.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 69605.9 ms | 68023.0 ms | 1582.9 ms | 52527.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65053.7 ms | 63474.5 ms | 1579.2 ms | 49406.9 ms |
| XGo | LLGoNoLTO | 64646.6 ms | 62070.6 ms | 2576.0 ms | 22839.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64528.2 ms | 62166.9 ms | 2361.4 ms | 26872.1 ms |
| Aws_restjson | LLGoNoLTO | 62739.2 ms | 60398.3 ms | 2341.0 ms | 25788.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 60978.4 ms | 59084.3 ms | 1894.1 ms | 36324.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55119.9 ms | 53622.2 ms | 1497.7 ms | 44545.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46442.1 ms | 45053.9 ms | 1388.3 ms | 35623.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 46406.3 ms | 45000.5 ms | 1405.8 ms | 35571.7 ms |
| Uber_zap | LLGoNoLTO | 44901.6 ms | 42605.4 ms | 2296.2 ms | 15214.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 44076.2 ms | 41870.2 ms | 2206.0 ms | 14390.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43243.2 ms | 41958.8 ms | 1284.4 ms | 36124.4 ms |
| IXGo | Go | 39005.7 ms | 36673.1 ms | 2332.6 ms | 11607.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36313.7 ms | 34180.1 ms | 2133.7 ms | 12320.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35678.1 ms | 34175.1 ms | 1503.0 ms | 11291.5 ms |
| K8s_workqueue | LLGoNoLTO | 34209.9 ms | 32070.0 ms | 2139.9 ms | 11874.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32987.7 ms | 31752.2 ms | 1235.5 ms | 25827.7 ms |
| Gorm_schema | LLGoNoLTO | 30689.9 ms | 29236.1 ms | 1453.8 ms | 10119.8 ms |
| Toml | LLGoNoLTO | 21131.1 ms | 19749.6 ms | 1381.5 ms | 7830.1 ms |
| Toml | LLGoDeadcodeDrop | 19225.8 ms | 17910.4 ms | 1315.5 ms | 7192.2 ms |
| Etcdctl | Go | 16777.8 ms | 15963.6 ms | 814.1 ms | 5642.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12177.9 ms | 11041.1 ms | 1136.8 ms | 4891.7 ms |
| Dustin_humanize | LLGoNoLTO | 12003.2 ms | 10870.5 ms | 1132.6 ms | 4810.6 ms |
| XGo | Go | 6425.2 ms | 6011.4 ms | 413.8 ms | 2487.1 ms |
| Uber_zap | Go | 5830.4 ms | 5392.3 ms | 438.1 ms | 2027.8 ms |
| Aws_restjson | Go | 5109.8 ms | 4695.3 ms | 414.5 ms | 2029.1 ms |
| Gorm_schema | Go | 3512.3 ms | 3311.1 ms | 201.3 ms | 1559.7 ms |
| K8s_workqueue | Go | 1794.0 ms | 1613.5 ms | 180.6 ms | 811.1 ms |
| Dustin_humanize | Go | 648.2 ms | 568.4 ms | 79.8 ms | 322.3 ms |
| Toml | Go | 573.1 ms | 471.6 ms | 101.5 ms | 314.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1529073.5 ms | 1065156.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1433636.5 ms | 987858.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1424416.6 ms | 988023.8 ms | 9 |
| LLGoDeadcodeDrop | 927312.7 ms | 296749.8 ms | 9 |
| LLGoNoLTO | 848014.0 ms | 278459.5 ms | 9 |
| Go | 79676.5 ms | 26800.8 ms | 9 |

Dependency download details are in `download-timings.log`.
