## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 294448.4 ms | 290893.5 ms | 3554.9 ms | 215879.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 293520.7 ms | 290004.0 ms | 3516.7 ms | 215392.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 288893.5 ms | 285419.0 ms | 3474.5 ms | 207831.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 226068.5 ms | 221153.3 ms | 4915.1 ms | 65910.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 189538.4 ms | 185728.0 ms | 3810.4 ms | 120539.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 156141.5 ms | 153480.9 ms | 2660.6 ms | 116037.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 151535.9 ms | 148847.5 ms | 2688.4 ms | 111891.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 123216.4 ms | 121064.3 ms | 2152.1 ms | 99488.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 108751.4 ms | 106650.0 ms | 2101.4 ms | 84762.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 107450.6 ms | 105431.2 ms | 2019.4 ms | 83946.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96508.4 ms | 94434.7 ms | 2073.7 ms | 71400.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 95263.5 ms | 93276.7 ms | 1986.8 ms | 69479.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 87945.1 ms | 85966.8 ms | 1978.3 ms | 70814.3 ms |
| K8s_workqueue | LLGoNoLTO | 82097.4 ms | 79383.8 ms | 2713.6 ms | 27093.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 78065.8 ms | 75988.1 ms | 2077.8 ms | 57763.3 ms |
| XGo | LLGoDeadcodeDrop | 77283.8 ms | 75192.7 ms | 2091.1 ms | 25842.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 76909.9 ms | 75091.4 ms | 1818.5 ms | 63604.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 75152.1 ms | 73181.4 ms | 1970.7 ms | 57488.6 ms |
| Etcdctl | LLGoNoLTO | 72024.4 ms | 69451.7 ms | 2572.7 ms | 25714.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 67382.8 ms | 65681.4 ms | 1701.4 ms | 43345.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 60295.2 ms | 58548.3 ms | 1746.9 ms | 36168.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 56918.4 ms | 55045.5 ms | 1872.9 ms | 25954.3 ms |
| Aws_restjson | LLGoNoLTO | 55361.6 ms | 53238.7 ms | 2122.9 ms | 26298.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 52325.4 ms | 51108.3 ms | 1217.1 ms | 39767.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 51832.0 ms | 50586.0 ms | 1246.0 ms | 39532.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 51122.5 ms | 49421.8 ms | 1700.8 ms | 20122.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 44905.6 ms | 43480.0 ms | 1425.6 ms | 30709.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 41180.7 ms | 39859.0 ms | 1321.8 ms | 25627.9 ms |
| XGo | LLGoNoLTO | 35503.9 ms | 33657.1 ms | 1846.8 ms | 14040.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 35303.6 ms | 34194.9 ms | 1108.7 ms | 27195.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33521.9 ms | 32555.4 ms | 966.5 ms | 27783.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 31936.1 ms | 30211.3 ms | 1724.8 ms | 11118.5 ms |
| Uber_zap | LLGoNoLTO | 30926.5 ms | 29428.7 ms | 1497.8 ms | 10650.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 25821.5 ms | 24698.8 ms | 1122.7 ms | 9087.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25740.9 ms | 24780.5 ms | 960.5 ms | 19806.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 23012.2 ms | 21427.3 ms | 1584.8 ms | 8453.6 ms |
| Gorm_schema | LLGoNoLTO | 22700.1 ms | 21613.5 ms | 1086.6 ms | 7923.4 ms |
| Toml | LLGoDeadcodeDrop | 14808.2 ms | 13860.5 ms | 947.7 ms | 5689.2 ms |
| Toml | LLGoNoLTO | 14135.9 ms | 13209.5 ms | 926.4 ms | 5437.7 ms |
| Etcdctl | Go | 12793.9 ms | 12006.1 ms | 787.8 ms | 4321.8 ms |
| Dustin_humanize | LLGoNoLTO | 8827.9 ms | 7953.5 ms | 874.4 ms | 3554.2 ms |
| XGo | Go | 6493.3 ms | 6066.7 ms | 426.5 ms | 2525.6 ms |
| Aws_restjson | Go | 5515.5 ms | 4957.5 ms | 558.0 ms | 2214.2 ms |
| Gorm_schema | Go | 2562.2 ms | 2368.3 ms | 193.8 ms | 1125.7 ms |
| Uber_zap | Go | 2375.6 ms | 2170.3 ms | 205.3 ms | 1067.1 ms |
| K8s_workqueue | Go | 1369.5 ms | 1208.2 ms | 161.3 ms | 636.1 ms |
| Dustin_humanize | Go | 487.0 ms | 410.7 ms | 76.3 ms | 255.2 ms |
| Toml | Go | 447.4 ms | 362.8 ms | 84.6 ms | 256.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 910562.3 ms | 684029.7 ms | 8 |
| LLGoFullLTOGlobalDCE | 869174.6 ms | 626040.6 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 856093.0 ms | 626185.2 ms | 8 |
| LLGoDeadcodeDrop | 506971.3 ms | 172178.0 ms | 8 |
| LLGoNoLTO | 321577.6 ms | 120712.8 ms | 8 |
| Go | 32044.3 ms | 12401.7 ms | 8 |

Dependency download details are in `download-timings.log`.
