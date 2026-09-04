## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 739709.7 ms | 732808.7 ms | 6900.9 ms | 537324.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 709384.1 ms | 702704.9 ms | 6679.2 ms | 481358.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 593988.7 ms | 587152.2 ms | 6836.6 ms | 405726.6 ms |
| IXGo | LLGoDeadcodeDrop | 447368.6 ms | 441297.7 ms | 6070.9 ms | 154032.1 ms |
| IXGo | LLGoNoLTO | 416492.2 ms | 410376.4 ms | 6115.8 ms | 146677.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 283473.2 ms | 278398.8 ms | 5074.4 ms | 173083.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 282401.8 ms | 277184.2 ms | 5217.6 ms | 172153.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 278752.7 ms | 273834.7 ms | 4918.0 ms | 171632.1 ms |
| Etcdctl | LLGoNoLTO | 203480.7 ms | 199100.0 ms | 4380.7 ms | 68160.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 200081.3 ms | 195728.6 ms | 4352.7 ms | 68147.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 179537.1 ms | 176312.1 ms | 3225.0 ms | 125426.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 178738.6 ms | 175439.2 ms | 3299.5 ms | 125522.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177985.7 ms | 174690.9 ms | 3294.9 ms | 125175.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 153064.4 ms | 150648.6 ms | 2415.8 ms | 117353.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 143995.1 ms | 141543.1 ms | 2452.1 ms | 107115.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137794.2 ms | 135305.1 ms | 2489.2 ms | 100527.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115504.1 ms | 113633.8 ms | 1870.3 ms | 89402.9 ms |
| XGo | LLGoDeadcodeDrop | 113015.2 ms | 109985.3 ms | 3029.9 ms | 43688.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 112409.6 ms | 110465.2 ms | 1944.4 ms | 88490.8 ms |
| XGo | LLGoNoLTO | 110951.6 ms | 107933.4 ms | 3018.2 ms | 43293.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 105370.5 ms | 103565.9 ms | 1804.6 ms | 78511.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104207.4 ms | 102329.6 ms | 1877.8 ms | 81842.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 100221.6 ms | 98439.6 ms | 1782.0 ms | 73889.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97641.2 ms | 95813.6 ms | 1827.6 ms | 73481.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 87995.6 ms | 85785.7 ms | 2209.9 ms | 43877.5 ms |
| Aws_restjson | LLGoNoLTO | 87342.4 ms | 85228.6 ms | 2113.9 ms | 43328.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70116.2 ms | 68697.5 ms | 1418.7 ms | 51077.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64425.8 ms | 62989.3 ms | 1436.5 ms | 45856.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 60524.8 ms | 58808.9 ms | 1716.0 ms | 26753.5 ms |
| Uber_zap | LLGoNoLTO | 58213.5 ms | 56601.8 ms | 1611.7 ms | 26032.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55922.1 ms | 54722.5 ms | 1199.5 ms | 44164.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54558.3 ms | 53173.0 ms | 1385.3 ms | 35814.9 ms |
| K8s_workqueue | LLGoNoLTO | 50948.2 ms | 49394.3 ms | 1554.0 ms | 24349.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50874.4 ms | 49266.0 ms | 1608.4 ms | 24228.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47659.6 ms | 46516.1 ms | 1143.5 ms | 35636.9 ms |
| IXGo | Go | 47280.2 ms | 44217.4 ms | 3062.8 ms | 13518.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 46104.4 ms | 44989.8 ms | 1114.6 ms | 34457.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 38091.2 ms | 36778.7 ms | 1312.5 ms | 13568.6 ms |
| Gorm_schema | LLGoNoLTO | 37687.4 ms | 36306.6 ms | 1380.8 ms | 13383.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 36139.3 ms | 35248.4 ms | 891.0 ms | 28748.8 ms |
| Etcdctl | Go | 34712.3 ms | 32588.5 ms | 2123.8 ms | 10708.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25738.4 ms | 24847.2 ms | 891.2 ms | 18252.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24482.9 ms | 23647.2 ms | 835.6 ms | 17580.6 ms |
| Toml | LLGoNoLTO | 23151.5 ms | 22057.4 ms | 1094.1 ms | 8912.6 ms |
| Toml | LLGoDeadcodeDrop | 22174.8 ms | 21169.4 ms | 1005.5 ms | 8338.2 ms |
| XGo | Go | 18880.2 ms | 17754.9 ms | 1125.3 ms | 5592.8 ms |
| Dustin_humanize | LLGoNoLTO | 13652.1 ms | 12852.2 ms | 799.9 ms | 5921.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13042.2 ms | 12287.9 ms | 754.3 ms | 5675.2 ms |
| Aws_restjson | Go | 7706.6 ms | 7036.3 ms | 670.4 ms | 3110.7 ms |
| Gorm_schema | Go | 5941.6 ms | 5542.1 ms | 399.5 ms | 2304.9 ms |
| Uber_zap | Go | 5248.6 ms | 4830.3 ms | 418.3 ms | 2035.0 ms |
| K8s_workqueue | Go | 4830.9 ms | 4373.3 ms | 457.5 ms | 1730.5 ms |
| Toml | Go | 2044.6 ms | 1807.2 ms | 237.5 ms | 926.9 ms |
| Dustin_humanize | Go | 838.8 ms | 679.5 ms | 159.3 ms | 406.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1701076.0 ms | 1190755.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1697638.3 ms | 1207012.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1520612.3 ms | 1041839.8 ms | 9 |
| LLGoDeadcodeDrop | 1033168.2 ms | 388309.8 ms | 9 |
| LLGoNoLTO | 1001919.7 ms | 380059.7 ms | 9 |
| Go | 127483.9 ms | 40334.3 ms | 9 |

Dependency download details are in `download-timings.log`.
