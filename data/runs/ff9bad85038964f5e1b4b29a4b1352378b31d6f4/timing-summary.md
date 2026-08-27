## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 751305.4 ms | 743744.6 ms | 7560.8 ms | 527226.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 662602.9 ms | 655344.9 ms | 7258.1 ms | 464957.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 653057.1 ms | 645734.3 ms | 7322.7 ms | 459509.5 ms |
| IXGo | LLGoDeadcodeDrop | 404350.3 ms | 397789.4 ms | 6560.9 ms | 148067.8 ms |
| IXGo | LLGoNoLTO | 366146.3 ms | 359859.1 ms | 6287.3 ms | 135423.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 288001.9 ms | 282659.7 ms | 5342.2 ms | 171809.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 281845.0 ms | 276613.4 ms | 5231.6 ms | 168855.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 277014.8 ms | 271700.8 ms | 5314.0 ms | 163845.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 207948.0 ms | 203281.4 ms | 4666.6 ms | 68752.1 ms |
| Etcdctl | LLGoNoLTO | 203381.7 ms | 198921.6 ms | 4460.1 ms | 67325.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 178087.4 ms | 174645.3 ms | 3442.1 ms | 127693.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 176381.2 ms | 173046.8 ms | 3334.4 ms | 125321.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 175182.7 ms | 171790.7 ms | 3392.0 ms | 125159.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 153443.0 ms | 151066.4 ms | 2376.6 ms | 120692.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 152220.3 ms | 149708.3 ms | 2511.9 ms | 118636.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137289.3 ms | 134974.0 ms | 2315.3 ms | 104720.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106281.4 ms | 104574.1 ms | 1707.3 ms | 82613.3 ms |
| XGo | LLGoDeadcodeDrop | 104387.0 ms | 101503.1 ms | 2883.9 ms | 41833.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103994.3 ms | 102214.7 ms | 1779.6 ms | 82299.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 102091.8 ms | 100373.1 ms | 1718.7 ms | 76953.6 ms |
| XGo | LLGoNoLTO | 101522.2 ms | 98646.7 ms | 2875.5 ms | 39868.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101247.1 ms | 99498.4 ms | 1748.7 ms | 79694.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97939.1 ms | 96166.7 ms | 1772.4 ms | 73369.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90426.1 ms | 88657.0 ms | 1769.1 ms | 68610.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79939.8 ms | 77918.8 ms | 2021.0 ms | 39025.8 ms |
| Aws_restjson | LLGoNoLTO | 78633.6 ms | 76598.8 ms | 2034.8 ms | 40138.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62192.5 ms | 60867.9 ms | 1324.6 ms | 45104.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62011.2 ms | 60685.6 ms | 1325.6 ms | 44561.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 55819.7 ms | 54223.1 ms | 1596.5 ms | 24887.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54102.3 ms | 52782.2 ms | 1320.1 ms | 36223.4 ms |
| Uber_zap | LLGoNoLTO | 53409.5 ms | 51905.1 ms | 1504.4 ms | 24261.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52482.0 ms | 51387.1 ms | 1094.8 ms | 41579.8 ms |
| K8s_workqueue | LLGoNoLTO | 47455.2 ms | 46035.4 ms | 1419.8 ms | 22694.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 47291.9 ms | 45913.9 ms | 1378.0 ms | 23026.3 ms |
| IXGo | Go | 43992.9 ms | 40765.4 ms | 3227.5 ms | 12697.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43601.6 ms | 42608.0 ms | 993.6 ms | 32380.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 42079.9 ms | 41101.0 ms | 978.8 ms | 31371.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35270.5 ms | 34129.5 ms | 1141.0 ms | 12346.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33810.7 ms | 33004.4 ms | 806.3 ms | 27402.4 ms |
| Gorm_schema | LLGoNoLTO | 33720.8 ms | 32548.4 ms | 1172.4 ms | 11894.2 ms |
| Etcdctl | Go | 32438.8 ms | 30187.5 ms | 2251.3 ms | 9772.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25239.0 ms | 24447.2 ms | 791.7 ms | 18554.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24496.8 ms | 23721.6 ms | 775.3 ms | 17884.8 ms |
| Toml | LLGoDeadcodeDrop | 21539.4 ms | 20688.7 ms | 850.7 ms | 8167.5 ms |
| Toml | LLGoNoLTO | 21233.1 ms | 20299.7 ms | 933.4 ms | 7956.3 ms |
| XGo | Go | 19160.2 ms | 17852.3 ms | 1307.9 ms | 5684.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12004.3 ms | 11312.7 ms | 691.6 ms | 5278.5 ms |
| Dustin_humanize | LLGoNoLTO | 11800.2 ms | 11211.9 ms | 588.3 ms | 5092.6 ms |
| Aws_restjson | Go | 7869.4 ms | 7167.8 ms | 701.6 ms | 3194.8 ms |
| Gorm_schema | Go | 5545.5 ms | 5130.7 ms | 414.8 ms | 2127.3 ms |
| Uber_zap | Go | 5254.0 ms | 4812.0 ms | 442.0 ms | 2067.8 ms |
| K8s_workqueue | Go | 4681.1 ms | 4161.9 ms | 519.2 ms | 1674.2 ms |
| Toml | Go | 2000.3 ms | 1751.9 ms | 248.4 ms | 921.5 ms |
| Dustin_humanize | Go | 797.2 ms | 643.6 ms | 153.6 ms | 377.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1664285.9 ms | 1158215.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1631834.5 ms | 1158663.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1592306.3 ms | 1120151.3 ms | 9 |
| LLGoDeadcodeDrop | 968551.0 ms | 371385.3 ms | 9 |
| LLGoNoLTO | 917302.6 ms | 354654.4 ms | 9 |
| Go | 121739.3 ms | 38517.7 ms | 9 |

Dependency download details are in `download-timings.log`.
