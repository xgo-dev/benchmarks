## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 261523.5 ms | 257783.8 ms | 3739.7 ms | 179475.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 259877.5 ms | 256006.8 ms | 3870.7 ms | 178454.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 245448.7 ms | 241719.1 ms | 3729.5 ms | 165605.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 213633.8 ms | 209565.7 ms | 4068.1 ms | 138088.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 182616.5 ms | 178348.6 ms | 4267.9 ms | 102507.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 182526.2 ms | 177921.9 ms | 4604.3 ms | 54352.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 153101.3 ms | 150186.5 ms | 2914.7 ms | 113799.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 131027.3 ms | 128278.2 ms | 2749.1 ms | 106300.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 129506.4 ms | 126346.1 ms | 3160.3 ms | 41969.5 ms |
| K8s_workqueue | LLGoNoLTO | 129458.6 ms | 126226.1 ms | 3232.5 ms | 42127.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 120290.9 ms | 117794.3 ms | 2496.6 ms | 97534.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 106850.1 ms | 104446.6 ms | 2403.5 ms | 82296.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 86776.0 ms | 84497.5 ms | 2278.4 ms | 70088.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 81160.4 ms | 78953.5 ms | 2206.9 ms | 67395.1 ms |
| XGo | LLGoDeadcodeDrop | 80294.2 ms | 77992.7 ms | 2301.5 ms | 26088.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 77017.0 ms | 74717.9 ms | 2299.0 ms | 58872.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 76662.7 ms | 74468.7 ms | 2194.1 ms | 63207.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 76039.3 ms | 73931.9 ms | 2107.4 ms | 62974.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 71820.9 ms | 69722.3 ms | 2098.6 ms | 54783.8 ms |
| Etcdctl | LLGoNoLTO | 67124.5 ms | 64384.4 ms | 2740.1 ms | 23218.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 60971.2 ms | 59260.5 ms | 1710.7 ms | 45459.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 53871.6 ms | 52402.0 ms | 1469.6 ms | 40968.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 51239.6 ms | 49212.5 ms | 2027.1 ms | 22538.6 ms |
| Aws_restjson | LLGoNoLTO | 48167.1 ms | 46034.2 ms | 2132.9 ms | 20644.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 43874.6 ms | 42632.2 ms | 1242.3 ms | 36192.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 42719.6 ms | 41315.7 ms | 1403.9 ms | 29811.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 39097.8 ms | 37831.7 ms | 1266.2 ms | 28440.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 37669.1 ms | 35574.8 ms | 2094.3 ms | 12745.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 37135.7 ms | 35863.5 ms | 1272.2 ms | 29158.4 ms |
| XGo | LLGoNoLTO | 33763.9 ms | 31667.7 ms | 2096.2 ms | 13667.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33081.8 ms | 31935.1 ms | 1146.7 ms | 28012.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 27600.5 ms | 26237.9 ms | 1362.6 ms | 9002.0 ms |
| Gorm_schema | LLGoNoLTO | 26937.3 ms | 25616.3 ms | 1321.1 ms | 8791.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25521.0 ms | 24420.4 ms | 1100.6 ms | 20352.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25325.6 ms | 24249.0 ms | 1076.6 ms | 20149.8 ms |
| Uber_zap | LLGoNoLTO | 21300.6 ms | 19500.9 ms | 1799.7 ms | 8123.1 ms |
| Toml | LLGoNoLTO | 15161.2 ms | 14020.5 ms | 1140.7 ms | 5666.4 ms |
| Toml | LLGoDeadcodeDrop | 14764.1 ms | 13645.2 ms | 1118.8 ms | 5606.4 ms |
| Etcdctl | Go | 13178.1 ms | 12463.3 ms | 714.7 ms | 4558.7 ms |
| XGo | Go | 12257.0 ms | 11440.6 ms | 816.3 ms | 3994.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9750.8 ms | 8684.7 ms | 1066.1 ms | 4106.4 ms |
| Dustin_humanize | LLGoNoLTO | 8689.0 ms | 7706.0 ms | 983.1 ms | 3416.6 ms |
| Aws_restjson | Go | 4014.4 ms | 3636.6 ms | 377.9 ms | 1547.8 ms |
| Gorm_schema | Go | 2643.0 ms | 2470.2 ms | 172.8 ms | 1156.7 ms |
| Uber_zap | Go | 2284.0 ms | 2090.4 ms | 193.7 ms | 1020.5 ms |
| K8s_workqueue | Go | 1432.0 ms | 1263.7 ms | 168.3 ms | 662.8 ms |
| Dustin_humanize | Go | 521.4 ms | 441.4 ms | 80.0 ms | 267.4 ms |
| Toml | Go | 461.8 ms | 360.8 ms | 101.0 ms | 269.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 855598.9 ms | 597283.0 ms | 8 |
| LLGoFullLTOGlobalDCE | 837907.3 ms | 597628.8 ms | 8 |
| LLGoFullLTONoGlobalDCE | 811938.5 ms | 625016.7 ms | 8 |
| LLGoDeadcodeDrop | 533350.9 ms | 176408.3 ms | 8 |
| LLGoNoLTO | 350602.2 ms | 125655.4 ms | 8 |
| Go | 36791.7 ms | 13478.0 ms | 8 |

Dependency download details are in `download-timings.log`.
