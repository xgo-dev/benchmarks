## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 526743.4 ms | 517333.5 ms | 9409.9 ms | 481399.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 502347.9 ms | 494053.2 ms | 8294.7 ms | 457925.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 446117.0 ms | 440372.5 ms | 5744.5 ms | 418678.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 421469.6 ms | 413786.0 ms | 7683.6 ms | 394893.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 332350.1 ms | 325665.9 ms | 6684.2 ms | 303905.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 327458.7 ms | 322701.9 ms | 4756.8 ms | 307623.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 288390.9 ms | 284659.6 ms | 3731.3 ms | 259235.5 ms |
| IXGo | LLGoDeadcodeDrop | 237923.8 ms | 233539.9 ms | 4384.0 ms | 197434.2 ms |
| IXGo | LLGoNoLTO | 216775.5 ms | 212610.7 ms | 4164.8 ms | 175598.5 ms |
| Aws_restjson | LLGoNoLTO | 209173.0 ms | 204379.2 ms | 4793.8 ms | 219401.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 188293.8 ms | 184991.2 ms | 3302.5 ms | 165305.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 182524.9 ms | 179343.8 ms | 3181.1 ms | 159668.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 178732.3 ms | 175324.7 ms | 3407.6 ms | 161476.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 152248.3 ms | 149191.7 ms | 3056.7 ms | 153944.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150862.4 ms | 148246.9 ms | 2615.5 ms | 133036.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 142303.2 ms | 139652.5 ms | 2650.7 ms | 131599.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 136018.8 ms | 132355.5 ms | 3663.3 ms | 135131.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 131768.5 ms | 128293.1 ms | 3475.4 ms | 154512.6 ms |
| XGo | LLGoDeadcodeDrop | 127791.0 ms | 124189.1 ms | 3601.9 ms | 108917.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111734.0 ms | 109211.7 ms | 2522.2 ms | 95728.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 108592.8 ms | 106028.6 ms | 2564.3 ms | 101814.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 105491.5 ms | 102970.7 ms | 2520.8 ms | 99243.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103280.6 ms | 100695.3 ms | 2585.3 ms | 90724.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97775.8 ms | 95436.7 ms | 2339.1 ms | 84049.8 ms |
| Etcdctl | LLGoNoLTO | 93510.8 ms | 90337.3 ms | 3173.5 ms | 76626.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 83585.5 ms | 80960.2 ms | 2625.3 ms | 83742.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 82811.9 ms | 80896.4 ms | 1915.5 ms | 89137.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 79816.8 ms | 77272.4 ms | 2544.4 ms | 89776.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 71149.0 ms | 68743.5 ms | 2405.5 ms | 96726.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 62080.8 ms | 60307.0 ms | 1773.8 ms | 61057.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 61032.7 ms | 59493.7 ms | 1539.0 ms | 56125.8 ms |
| XGo | LLGoNoLTO | 56511.4 ms | 54078.2 ms | 2433.1 ms | 30152.3 ms |
| Uber_zap | LLGoNoLTO | 52330.3 ms | 49896.7 ms | 2433.6 ms | 51875.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 48762.5 ms | 46373.2 ms | 2389.3 ms | 40693.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 47876.2 ms | 46028.7 ms | 1847.6 ms | 69442.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46610.4 ms | 45175.2 ms | 1435.2 ms | 41194.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44566.4 ms | 43199.3 ms | 1367.1 ms | 40404.6 ms |
| IXGo | Go | 43815.6 ms | 40669.4 ms | 3146.2 ms | 28736.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36217.6 ms | 34021.2 ms | 2196.3 ms | 25000.4 ms |
| K8s_workqueue | LLGoNoLTO | 34929.3 ms | 32502.8 ms | 2426.5 ms | 21457.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34269.7 ms | 33008.3 ms | 1261.4 ms | 27866.1 ms |
| Toml | LLGoNoLTO | 22427.2 ms | 21017.2 ms | 1409.9 ms | 16600.6 ms |
| Toml | LLGoDeadcodeDrop | 20004.1 ms | 18768.3 ms | 1235.8 ms | 12299.2 ms |
| Etcdctl | Go | 18554.7 ms | 17627.9 ms | 926.8 ms | 19014.5 ms |
| Gorm_schema | LLGoNoLTO | 17869.8 ms | 16494.2 ms | 1375.6 ms | 8812.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 14685.9 ms | 13353.6 ms | 1332.3 ms | 15038.1 ms |
| Dustin_humanize | LLGoNoLTO | 14371.9 ms | 13098.4 ms | 1273.4 ms | 14775.1 ms |
| XGo | Go | 7579.1 ms | 7123.5 ms | 455.7 ms | 9083.8 ms |
| Aws_restjson | Go | 4927.1 ms | 4505.0 ms | 422.0 ms | 1927.0 ms |
| Uber_zap | Go | 3592.6 ms | 3309.7 ms | 282.8 ms | 4734.4 ms |
| Gorm_schema | Go | 3398.8 ms | 3189.2 ms | 209.6 ms | 1527.0 ms |
| K8s_workqueue | Go | 2055.7 ms | 1832.0 ms | 223.7 ms | 1444.9 ms |
| Dustin_humanize | Go | 796.1 ms | 686.1 ms | 110.1 ms | 845.2 ms |
| Toml | Go | 747.2 ms | 612.8 ms | 134.4 ms | 895.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1645283.8 ms | 1530313.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1639269.3 ms | 1532733.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1499939.0 ms | 1425233.6 ms | 9 |
| LLGoDeadcodeDrop | 949196.7 ms | 856472.9 ms | 9 |
| LLGoNoLTO | 717899.1 ms | 615299.7 ms | 9 |
| Go | 85466.9 ms | 68208.5 ms | 9 |

Dependency download details are in `download-timings.log`.
