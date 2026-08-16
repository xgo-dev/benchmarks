## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 473464.3 ms | 465814.6 ms | 7649.7 ms | 295720.5 ms |
| IXGo | LLGoNoLTO | 457698.2 ms | 447503.3 ms | 10194.9 ms | 144860.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 389098.9 ms | 382870.5 ms | 6228.4 ms | 232434.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 382917.8 ms | 376589.6 ms | 6328.2 ms | 269647.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 365637.6 ms | 359679.1 ms | 5958.5 ms | 262019.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 308861.9 ms | 304087.1 ms | 4774.7 ms | 207873.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 305490.3 ms | 300847.9 ms | 4642.3 ms | 205347.0 ms |
| IXGo | LLGoDeadcodeDrop | 258829.2 ms | 253323.3 ms | 5505.9 ms | 80406.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 256204.9 ms | 252099.4 ms | 4105.5 ms | 73294.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 185581.1 ms | 181821.6 ms | 3759.5 ms | 134051.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 181215.7 ms | 177751.0 ms | 3464.7 ms | 135124.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 159622.7 ms | 156230.0 ms | 3392.7 ms | 126657.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 151734.0 ms | 148384.7 ms | 3349.4 ms | 113812.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 137589.9 ms | 134369.2 ms | 3220.8 ms | 91031.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 130169.8 ms | 127303.6 ms | 2866.1 ms | 101114.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 125761.2 ms | 122944.7 ms | 2816.5 ms | 95640.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109350.6 ms | 106648.4 ms | 2702.2 ms | 87874.8 ms |
| XGo | LLGoDeadcodeDrop | 99721.4 ms | 96910.5 ms | 2810.8 ms | 31977.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96570.7 ms | 94031.3 ms | 2539.4 ms | 79656.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 94603.7 ms | 92105.5 ms | 2498.2 ms | 77849.8 ms |
| Toml | LLGoDeadcodeDrop | 92214.4 ms | 89627.8 ms | 2586.5 ms | 31691.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 90657.7 ms | 88002.9 ms | 2654.9 ms | 68592.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 89494.1 ms | 86890.6 ms | 2603.4 ms | 67571.4 ms |
| Etcdctl | LLGoNoLTO | 82517.8 ms | 79076.2 ms | 3441.5 ms | 28198.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67115.4 ms | 65402.4 ms | 1713.0 ms | 51239.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64563.8 ms | 62041.8 ms | 2522.0 ms | 27265.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64063.8 ms | 62340.3 ms | 1723.5 ms | 49517.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 58755.5 ms | 56649.6 ms | 2105.9 ms | 35955.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58605.9 ms | 56682.9 ms | 1923.0 ms | 39011.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54847.3 ms | 53230.5 ms | 1616.9 ms | 45006.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 45957.4 ms | 44334.8 ms | 1622.6 ms | 34682.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44746.4 ms | 43280.4 ms | 1466.0 ms | 34534.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43873.8 ms | 42505.8 ms | 1368.0 ms | 37043.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 43303.3 ms | 40974.9 ms | 2328.3 ms | 14663.6 ms |
| XGo | LLGoNoLTO | 40152.5 ms | 37706.9 ms | 2445.6 ms | 15572.1 ms |
| IXGo | Go | 33704.4 ms | 31251.4 ms | 2453.0 ms | 10226.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33154.6 ms | 31651.8 ms | 1502.8 ms | 10658.2 ms |
| K8s_workqueue | LLGoNoLTO | 31952.0 ms | 29792.9 ms | 2159.1 ms | 11329.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31950.2 ms | 30600.3 ms | 1350.0 ms | 25208.5 ms |
| Etcdctl | Go | 31481.8 ms | 29454.1 ms | 2027.6 ms | 9371.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 28790.9 ms | 26636.0 ms | 2155.0 ms | 10114.9 ms |
| Gorm_schema | LLGoNoLTO | 28402.7 ms | 26950.5 ms | 1452.2 ms | 9424.5 ms |
| Aws_restjson | LLGoNoLTO | 27971.1 ms | 25749.4 ms | 2221.8 ms | 10186.0 ms |
| Uber_zap | LLGoNoLTO | 25305.3 ms | 23167.8 ms | 2137.5 ms | 9274.5 ms |
| XGo | Go | 17839.2 ms | 16709.8 ms | 1129.4 ms | 5262.3 ms |
| Toml | LLGoNoLTO | 12592.1 ms | 11330.7 ms | 1261.5 ms | 4825.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11301.3 ms | 10060.8 ms | 1240.4 ms | 4725.9 ms |
| Dustin_humanize | LLGoNoLTO | 10518.9 ms | 9357.4 ms | 1161.5 ms | 4175.3 ms |
| Uber_zap | Go | 5354.0 ms | 4979.9 ms | 374.1 ms | 1958.3 ms |
| Aws_restjson | Go | 4890.8 ms | 4460.7 ms | 430.0 ms | 1884.2 ms |
| Gorm_schema | Go | 3330.4 ms | 3128.6 ms | 201.8 ms | 1451.2 ms |
| K8s_workqueue | Go | 1781.5 ms | 1587.0 ms | 194.5 ms | 816.1 ms |
| Dustin_humanize | Go | 635.7 ms | 536.0 ms | 99.7 ms | 321.5 ms |
| Toml | Go | 553.8 ms | 441.3 ms | 112.6 ms | 313.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1459444.0 ms | 1044212.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1399351.5 ms | 987216.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1388942.2 ms | 972791.5 ms | 9 |
| LLGoDeadcodeDrop | 888083.7 ms | 284796.8 ms | 9 |
| LLGoNoLTO | 717110.7 ms | 237846.5 ms | 9 |
| Go | 99571.6 ms | 31605.6 ms | 9 |

Dependency download details are in `download-timings.log`.
