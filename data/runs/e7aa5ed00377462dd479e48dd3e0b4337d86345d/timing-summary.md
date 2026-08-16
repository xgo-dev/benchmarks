## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 513106.4 ms | 504016.4 ms | 9090.0 ms | 304933.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 396374.2 ms | 389751.3 ms | 6622.8 ms | 117627.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 387896.4 ms | 383434.6 ms | 4461.8 ms | 236415.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 377974.1 ms | 372340.3 ms | 5633.9 ms | 268383.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 371370.7 ms | 366008.3 ms | 5362.4 ms | 264215.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 316824.5 ms | 312533.7 ms | 4290.8 ms | 208159.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 311798.4 ms | 307724.5 ms | 4073.9 ms | 203644.3 ms |
| IXGo | LLGoNoLTO | 273768.0 ms | 268863.7 ms | 4904.3 ms | 85988.0 ms |
| IXGo | LLGoDeadcodeDrop | 262314.2 ms | 257244.1 ms | 5070.2 ms | 83152.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 206022.0 ms | 201067.6 ms | 4954.4 ms | 113687.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 195198.0 ms | 191856.1 ms | 3342.0 ms | 141112.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 188005.8 ms | 184910.2 ms | 3095.6 ms | 137278.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 166052.3 ms | 163029.0 ms | 3023.3 ms | 130649.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 143827.4 ms | 141033.2 ms | 2794.2 ms | 111739.0 ms |
| XGo | LLGoNoLTO | 133412.1 ms | 129661.6 ms | 3750.5 ms | 41880.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 131741.0 ms | 128945.7 ms | 2795.4 ms | 100032.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127136.6 ms | 124393.6 ms | 2743.0 ms | 93613.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110583.3 ms | 108032.4 ms | 2551.0 ms | 87739.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104750.7 ms | 102056.9 ms | 2693.8 ms | 84512.2 ms |
| XGo | LLGoDeadcodeDrop | 104593.3 ms | 101907.3 ms | 2686.1 ms | 33266.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 98728.6 ms | 96432.1 ms | 2296.5 ms | 80679.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98021.9 ms | 95605.0 ms | 2416.9 ms | 80157.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93560.5 ms | 91214.3 ms | 2346.2 ms | 70004.7 ms |
| Etcdctl | LLGoNoLTO | 88480.7 ms | 85484.0 ms | 2996.7 ms | 30449.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 76399.9 ms | 73612.1 ms | 2787.7 ms | 29828.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 75918.6 ms | 73867.1 ms | 2051.5 ms | 50981.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 74770.4 ms | 72955.3 ms | 1815.1 ms | 54032.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66329.6 ms | 64700.5 ms | 1629.1 ms | 50165.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55279.1 ms | 53825.3 ms | 1453.9 ms | 44413.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53336.7 ms | 51764.8 ms | 1571.9 ms | 37554.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 47050.8 ms | 45635.1 ms | 1415.7 ms | 35883.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46947.6 ms | 45560.4 ms | 1387.2 ms | 36046.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 44196.1 ms | 42003.1 ms | 2192.9 ms | 14486.1 ms |
| IXGo | Go | 38933.8 ms | 36580.4 ms | 2353.4 ms | 11313.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36453.1 ms | 34990.3 ms | 1462.8 ms | 11511.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35336.9 ms | 33990.8 ms | 1346.1 ms | 27815.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34792.3 ms | 33484.5 ms | 1307.8 ms | 26476.0 ms |
| Toml | LLGoNoLTO | 31510.3 ms | 30071.0 ms | 1439.4 ms | 10283.9 ms |
| Aws_restjson | LLGoNoLTO | 30356.6 ms | 28342.8 ms | 2013.8 ms | 10736.6 ms |
| Toml | LLGoDeadcodeDrop | 29989.6 ms | 28630.9 ms | 1358.7 ms | 9936.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29953.8 ms | 27948.4 ms | 2005.4 ms | 10389.8 ms |
| K8s_workqueue | LLGoNoLTO | 29781.1 ms | 27803.2 ms | 1977.9 ms | 10229.9 ms |
| Uber_zap | LLGoNoLTO | 27411.7 ms | 25330.1 ms | 2081.6 ms | 9821.4 ms |
| Etcdctl | Go | 18039.1 ms | 17088.5 ms | 950.6 ms | 6097.7 ms |
| Gorm_schema | LLGoNoLTO | 16066.3 ms | 14681.1 ms | 1385.2 ms | 5908.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12356.4 ms | 11160.2 ms | 1196.2 ms | 5028.6 ms |
| Dustin_humanize | LLGoNoLTO | 11489.8 ms | 10350.7 ms | 1139.1 ms | 4434.9 ms |
| XGo | Go | 6454.7 ms | 6073.0 ms | 381.6 ms | 2465.1 ms |
| Aws_restjson | Go | 5142.1 ms | 4739.0 ms | 403.2 ms | 1974.5 ms |
| Gorm_schema | Go | 3495.3 ms | 3300.2 ms | 195.1 ms | 1512.1 ms |
| Uber_zap | Go | 3144.2 ms | 2925.4 ms | 218.8 ms | 1409.2 ms |
| K8s_workqueue | Go | 1809.3 ms | 1625.7 ms | 183.6 ms | 812.8 ms |
| Dustin_humanize | Go | 655.0 ms | 572.0 ms | 83.1 ms | 324.5 ms |
| Toml | Go | 561.4 ms | 456.7 ms | 104.7 ms | 323.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1505673.7 ms | 1066972.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1471597.2 ms | 1018817.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1455090.0 ms | 994536.2 ms | 9 |
| LLGoDeadcodeDrop | 992630.5 ms | 315227.4 ms | 9 |
| LLGoNoLTO | 642276.5 ms | 209731.9 ms | 9 |
| Go | 78234.9 ms | 26233.2 ms | 9 |

Dependency download details are in `download-timings.log`.
