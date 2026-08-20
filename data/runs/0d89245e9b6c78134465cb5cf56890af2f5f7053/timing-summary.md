## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 472188.6 ms | 464424.8 ms | 7763.7 ms | 292554.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 448756.0 ms | 441673.2 ms | 7082.8 ms | 282613.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 385037.8 ms | 379083.7 ms | 5954.1 ms | 267961.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 378560.2 ms | 372860.2 ms | 5699.9 ms | 227980.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 308526.0 ms | 303954.3 ms | 4571.7 ms | 206167.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 307526.9 ms | 302967.4 ms | 4559.5 ms | 206258.9 ms |
| IXGo | LLGoDeadcodeDrop | 301560.0 ms | 295899.7 ms | 5660.3 ms | 95995.8 ms |
| IXGo | LLGoNoLTO | 295276.1 ms | 289633.4 ms | 5642.8 ms | 94077.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 198388.4 ms | 194655.8 ms | 3732.7 ms | 60744.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 178553.9 ms | 175143.1 ms | 3410.8 ms | 138426.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 173036.2 ms | 169522.0 ms | 3514.2 ms | 131924.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 172598.5 ms | 168887.8 ms | 3710.7 ms | 53316.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 171356.0 ms | 168002.4 ms | 3353.6 ms | 130777.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150918.9 ms | 147900.3 ms | 3018.6 ms | 119715.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127193.1 ms | 124241.9 ms | 2951.2 ms | 95880.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 122782.5 ms | 119986.7 ms | 2795.9 ms | 93918.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111722.0 ms | 108962.1 ms | 2759.9 ms | 87039.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104210.8 ms | 101549.3 ms | 2661.4 ms | 84506.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103537.6 ms | 100811.7 ms | 2726.0 ms | 83932.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 100982.6 ms | 98346.7 ms | 2635.9 ms | 82175.1 ms |
| Toml | LLGoNoLTO | 94008.2 ms | 91386.0 ms | 2622.2 ms | 34321.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93939.2 ms | 91282.1 ms | 2657.1 ms | 72337.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93808.4 ms | 91149.6 ms | 2658.8 ms | 71974.2 ms |
| Etcdctl | LLGoNoLTO | 83415.7 ms | 80186.5 ms | 3229.1 ms | 28659.5 ms |
| XGo | LLGoDeadcodeDrop | 79686.9 ms | 76776.9 ms | 2910.0 ms | 26980.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 66239.4 ms | 63545.6 ms | 2693.8 ms | 29263.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65901.9 ms | 64248.5 ms | 1653.4 ms | 49976.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63093.8 ms | 61388.5 ms | 1705.3 ms | 48038.7 ms |
| Aws_restjson | LLGoNoLTO | 60555.5 ms | 58045.7 ms | 2509.8 ms | 25730.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 58058.2 ms | 56044.5 ms | 2013.7 ms | 35219.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55089.5 ms | 53503.2 ms | 1586.3 ms | 45079.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51962.4 ms | 50327.5 ms | 1634.9 ms | 37001.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48121.3 ms | 46542.5 ms | 1578.8 ms | 37666.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 45715.4 ms | 44181.5 ms | 1533.9 ms | 35600.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41926.3 ms | 40550.5 ms | 1375.8 ms | 35324.4 ms |
| XGo | LLGoNoLTO | 40351.0 ms | 37877.6 ms | 2473.4 ms | 15681.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 34568.0 ms | 32287.3 ms | 2280.7 ms | 12092.5 ms |
| K8s_workqueue | LLGoNoLTO | 33697.6 ms | 31442.6 ms | 2254.9 ms | 11663.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31860.0 ms | 30557.6 ms | 1302.4 ms | 25064.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30161.8 ms | 28641.9 ms | 1520.0 ms | 10066.6 ms |
| Uber_zap | LLGoNoLTO | 26233.6 ms | 24130.7 ms | 2102.9 ms | 9478.4 ms |
| Toml | LLGoDeadcodeDrop | 19137.5 ms | 17813.9 ms | 1323.6 ms | 7309.2 ms |
| Gorm_schema | LLGoNoLTO | 15525.5 ms | 14097.3 ms | 1428.2 ms | 5745.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11341.7 ms | 10130.1 ms | 1211.6 ms | 4749.3 ms |
| Dustin_humanize | LLGoNoLTO | 10667.5 ms | 9455.7 ms | 1211.8 ms | 4222.1 ms |
| IXGo | Go | 2225.1 ms | 1857.6 ms | 367.5 ms | 1466.5 ms |
| Etcdctl | Go | 1464.5 ms | 1243.0 ms | 221.5 ms | 979.5 ms |
| XGo | Go | 1178.0 ms | 1003.5 ms | 174.5 ms | 758.6 ms |
| Aws_restjson | Go | 825.3 ms | 678.1 ms | 147.3 ms | 481.0 ms |
| K8s_workqueue | Go | 773.7 ms | 601.6 ms | 172.1 ms | 452.2 ms |
| Uber_zap | Go | 730.3 ms | 596.0 ms | 134.3 ms | 453.6 ms |
| Gorm_schema | Go | 700.8 ms | 538.2 ms | 162.6 ms | 345.5 ms |
| Toml | Go | 539.9 ms | 427.4 ms | 112.5 ms | 306.7 ms |
| Dustin_humanize | Go | 374.2 ms | 279.4 ms | 94.8 ms | 205.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1471248.1 ms | 1055436.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1415438.9 ms | 989270.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1407678.6 ms | 980408.9 ms | 9 |
| LLGoDeadcodeDrop | 913682.3 ms | 300518.7 ms | 9 |
| LLGoNoLTO | 659730.5 ms | 229579.7 ms | 9 |
| Go | 8811.8 ms | 5448.9 ms | 9 |

Dependency download details are in `download-timings.log`.
