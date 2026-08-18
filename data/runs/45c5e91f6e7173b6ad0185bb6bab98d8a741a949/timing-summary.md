## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 370146.7 ms | 364836.9 ms | 5309.8 ms | 235857.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 341724.1 ms | 337791.8 ms | 3932.3 ms | 229139.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 340620.6 ms | 336826.7 ms | 3793.9 ms | 227550.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 254829.6 ms | 251150.0 ms | 3679.6 ms | 155588.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 220166.1 ms | 216560.0 ms | 3606.0 ms | 120691.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 208108.8 ms | 205165.3 ms | 2943.5 ms | 62890.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 204234.8 ms | 200195.0 ms | 4039.8 ms | 116281.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 182220.8 ms | 179423.6 ms | 2797.2 ms | 130439.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 180318.0 ms | 177673.5 ms | 2644.5 ms | 130556.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 146043.7 ms | 143804.2 ms | 2239.5 ms | 112873.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130523.8 ms | 128284.5 ms | 2239.3 ms | 97411.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96633.7 ms | 94448.3 ms | 2185.4 ms | 77186.6 ms |
| Etcdctl | LLGoNoLTO | 95967.7 ms | 93139.9 ms | 2827.8 ms | 32489.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94567.3 ms | 92571.3 ms | 1995.9 ms | 76499.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 93728.4 ms | 91712.0 ms | 2016.4 ms | 75416.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93520.0 ms | 91562.8 ms | 1957.2 ms | 67885.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 90032.7 ms | 87981.7 ms | 2051.1 ms | 66398.2 ms |
| XGo | LLGoDeadcodeDrop | 77756.1 ms | 74887.1 ms | 2869.0 ms | 27027.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 71018.1 ms | 69369.7 ms | 1648.4 ms | 49996.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65124.8 ms | 63798.6 ms | 1326.2 ms | 48480.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64703.3 ms | 62802.7 ms | 1900.6 ms | 27597.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53896.4 ms | 52563.3 ms | 1333.0 ms | 36833.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51746.8 ms | 50658.8 ms | 1088.0 ms | 41292.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 46769.3 ms | 44979.7 ms | 1789.6 ms | 14944.1 ms |
| XGo | LLGoNoLTO | 44366.1 ms | 42377.8 ms | 1988.3 ms | 16876.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 43913.0 ms | 42777.8 ms | 1135.1 ms | 33080.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43710.0 ms | 42557.9 ms | 1152.1 ms | 32989.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41202.3 ms | 40208.7 ms | 993.6 ms | 34008.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32027.9 ms | 30992.1 ms | 1035.9 ms | 24635.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31572.3 ms | 30532.2 ms | 1040.2 ms | 24329.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31379.0 ms | 30162.0 ms | 1217.0 ms | 10165.4 ms |
| Aws_restjson | LLGoNoLTO | 30820.3 ms | 29022.1 ms | 1798.1 ms | 10928.2 ms |
| K8s_workqueue | LLGoNoLTO | 30033.8 ms | 28435.5 ms | 1598.4 ms | 10172.8 ms |
| Gorm_schema | LLGoNoLTO | 29873.0 ms | 28724.6 ms | 1148.4 ms | 9803.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29509.0 ms | 27859.8 ms | 1649.2 ms | 10318.8 ms |
| Uber_zap | LLGoNoLTO | 27627.4 ms | 26005.7 ms | 1621.7 ms | 9750.6 ms |
| Toml | LLGoNoLTO | 19263.4 ms | 18155.3 ms | 1108.2 ms | 7060.5 ms |
| Toml | LLGoDeadcodeDrop | 18852.3 ms | 17812.3 ms | 1040.0 ms | 7021.8 ms |
| Etcdctl | Go | 16320.5 ms | 15564.0 ms | 756.5 ms | 5381.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12519.5 ms | 11559.6 ms | 959.9 ms | 4996.2 ms |
| Dustin_humanize | LLGoNoLTO | 11129.2 ms | 10240.7 ms | 888.6 ms | 4152.7 ms |
| XGo | Go | 8686.5 ms | 8221.8 ms | 464.6 ms | 3288.7 ms |
| Aws_restjson | Go | 4887.2 ms | 4511.3 ms | 375.9 ms | 1856.3 ms |
| Gorm_schema | Go | 3356.8 ms | 3184.5 ms | 172.3 ms | 1440.9 ms |
| Uber_zap | Go | 2945.7 ms | 2740.6 ms | 205.1 ms | 1253.9 ms |
| Toml | Go | 1863.2 ms | 1686.6 ms | 176.6 ms | 833.3 ms |
| K8s_workqueue | Go | 1715.9 ms | 1560.2 ms | 155.7 ms | 770.0 ms |
| Dustin_humanize | Go | 615.2 ms | 546.1 ms | 69.2 ms | 309.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1153384.4 ms | 795849.1 ms | 8 |
| LLGoFullLTOGlobalDCE | 1074831.1 ms | 729797.3 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1045306.4 ms | 719776.2 ms | 8 |
| LLGoDeadcodeDrop | 489597.3 ms | 164962.4 ms | 8 |
| LLGoNoLTO | 289081.0 ms | 101233.6 ms | 8 |
| Go | 40390.9 ms | 15133.8 ms | 8 |

Dependency download details are in `download-timings.log`.
