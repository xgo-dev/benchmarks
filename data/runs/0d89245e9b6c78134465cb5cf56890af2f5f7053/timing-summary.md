## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 393476.6 ms | 387938.2 ms | 5538.5 ms | 263550.2 ms |
| IXGo | LLGoFullLTOGlobalDCE | 385780.6 ms | 380256.7 ms | 5523.9 ms | 258919.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 373133.2 ms | 367799.6 ms | 5333.6 ms | 254668.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 311330.8 ms | 307450.7 ms | 3880.1 ms | 205398.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 311076.7 ms | 306993.2 ms | 4083.4 ms | 203370.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 307654.6 ms | 303735.4 ms | 3919.2 ms | 201471.4 ms |
| IXGo | LLGoDeadcodeDrop | 296100.9 ms | 291337.3 ms | 4763.6 ms | 91967.5 ms |
| XGo | LLGoNoLTO | 239107.9 ms | 235333.8 ms | 3774.0 ms | 78696.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 221256.9 ms | 217599.3 ms | 3657.6 ms | 130517.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 208043.6 ms | 204657.5 ms | 3386.2 ms | 62265.8 ms |
| Etcdctl | LLGoNoLTO | 203797.6 ms | 200585.8 ms | 3211.7 ms | 61029.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 183285.7 ms | 180046.6 ms | 3239.0 ms | 55940.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 179604.9 ms | 176147.0 ms | 3457.9 ms | 105891.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173524.6 ms | 170444.9 ms | 3079.7 ms | 131657.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 172162.5 ms | 169058.2 ms | 3104.3 ms | 129555.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 172053.5 ms | 168907.1 ms | 3146.4 ms | 129282.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 145847.4 ms | 143022.0 ms | 2825.3 ms | 86900.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124668.2 ms | 122020.3 ms | 2647.9 ms | 93269.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 123510.3 ms | 120922.4 ms | 2587.9 ms | 92512.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108874.6 ms | 106240.7 ms | 2633.9 ms | 86276.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103652.3 ms | 101326.8 ms | 2325.5 ms | 82957.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103532.4 ms | 101158.7 ms | 2373.7 ms | 83132.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96608.0 ms | 94243.3 ms | 2364.7 ms | 73129.9 ms |
| XGo | LLGoDeadcodeDrop | 84181.1 ms | 81620.2 ms | 2561.0 ms | 28197.3 ms |
| IXGo | LLGoNoLTO | 67700.9 ms | 64117.1 ms | 3583.8 ms | 23382.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64941.7 ms | 63407.5 ms | 1534.2 ms | 49869.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 63895.2 ms | 61538.2 ms | 2356.9 ms | 25843.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63338.3 ms | 61761.4 ms | 1576.9 ms | 47888.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 60913.8 ms | 59108.9 ms | 1804.9 ms | 36036.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56048.2 ms | 54612.5 ms | 1435.7 ms | 45259.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52442.4 ms | 50894.8 ms | 1547.7 ms | 37202.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 46916.0 ms | 45556.9 ms | 1359.2 ms | 35983.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46763.1 ms | 45441.7 ms | 1321.4 ms | 35943.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42664.8 ms | 41471.2 ms | 1193.6 ms | 35699.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36871.8 ms | 34732.7 ms | 2139.1 ms | 12438.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32417.3 ms | 31224.5 ms | 1192.7 ms | 25218.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30549.5 ms | 29094.9 ms | 1454.5 ms | 10041.2 ms |
| Aws_restjson | LLGoNoLTO | 29719.9 ms | 27613.1 ms | 2106.7 ms | 10588.5 ms |
| Gorm_schema | LLGoNoLTO | 29411.4 ms | 28043.4 ms | 1368.0 ms | 9743.5 ms |
| Uber_zap | LLGoNoLTO | 26730.0 ms | 24736.3 ms | 1993.8 ms | 9593.2 ms |
| K8s_workqueue | LLGoNoLTO | 25111.7 ms | 23164.9 ms | 1946.8 ms | 9224.3 ms |
| Toml | LLGoDeadcodeDrop | 20185.3 ms | 18950.1 ms | 1235.2 ms | 7585.7 ms |
| Toml | LLGoNoLTO | 19885.2 ms | 18646.9 ms | 1238.3 ms | 7443.7 ms |
| Dustin_humanize | LLGoNoLTO | 11832.9 ms | 10711.9 ms | 1121.0 ms | 4816.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11830.1 ms | 10716.7 ms | 1113.4 ms | 4863.4 ms |
| IXGo | Go | 1930.1 ms | 1721.9 ms | 208.2 ms | 1137.1 ms |
| Etcdctl | Go | 1313.3 ms | 1135.6 ms | 177.7 ms | 752.9 ms |
| XGo | Go | 1069.2 ms | 930.1 ms | 139.1 ms | 596.1 ms |
| Aws_restjson | Go | 1011.0 ms | 808.2 ms | 202.7 ms | 491.1 ms |
| K8s_workqueue | Go | 686.1 ms | 560.5 ms | 125.6 ms | 375.1 ms |
| Uber_zap | Go | 663.7 ms | 554.2 ms | 109.5 ms | 376.1 ms |
| Toml | Go | 519.7 ms | 414.6 ms | 105.0 ms | 288.1 ms |
| Gorm_schema | Go | 518.1 ms | 421.6 ms | 96.5 ms | 305.3 ms |
| Dustin_humanize | Go | 345.1 ms | 267.1 ms | 78.0 ms | 186.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1455307.1 ms | 1022478.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1413089.0 ms | 973851.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1405797.6 ms | 965231.8 ms | 9 |
| LLGoDeadcodeDrop | 934943.3 ms | 299142.4 ms | 9 |
| LLGoNoLTO | 653297.6 ms | 214517.9 ms | 9 |
| Go | 8056.2 ms | 4508.3 ms | 9 |

Dependency download details are in `download-timings.log`.
