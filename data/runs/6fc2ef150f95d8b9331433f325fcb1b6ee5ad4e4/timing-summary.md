## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 505350.9 ms | 500141.4 ms | 5209.5 ms | 352480.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 485414.7 ms | 479752.5 ms | 5662.2 ms | 332470.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 465827.7 ms | 460203.5 ms | 5624.1 ms | 323189.9 ms |
| IXGo | LLGoDeadcodeDrop | 295222.4 ms | 290361.8 ms | 4860.6 ms | 109674.9 ms |
| IXGo | LLGoNoLTO | 286735.4 ms | 281890.4 ms | 4844.9 ms | 107371.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 219874.7 ms | 215668.6 ms | 4206.1 ms | 131583.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 217377.6 ms | 213249.4 ms | 4128.2 ms | 129793.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 216583.8 ms | 212621.9 ms | 3961.9 ms | 130206.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 161246.1 ms | 157499.8 ms | 3746.3 ms | 53698.0 ms |
| Etcdctl | LLGoNoLTO | 158698.7 ms | 155192.1 ms | 3506.6 ms | 52254.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 137915.2 ms | 135238.7 ms | 2676.5 ms | 97979.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 136766.8 ms | 134186.9 ms | 2579.9 ms | 97940.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 136528.6 ms | 133811.5 ms | 2717.1 ms | 97573.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 120132.7 ms | 118253.8 ms | 1879.0 ms | 94974.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 110276.0 ms | 108554.7 ms | 1721.3 ms | 84395.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 106056.0 ms | 104231.9 ms | 1824.0 ms | 81028.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 84512.8 ms | 83125.0 ms | 1387.8 ms | 65888.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 79662.5 ms | 78301.4 ms | 1361.1 ms | 63050.2 ms |
| XGo | LLGoDeadcodeDrop | 79589.4 ms | 77436.1 ms | 2153.3 ms | 31395.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 79227.4 ms | 77841.4 ms | 1386.0 ms | 62771.0 ms |
| XGo | LLGoNoLTO | 78490.7 ms | 76282.7 ms | 2207.9 ms | 31023.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 77071.1 ms | 75706.5 ms | 1364.5 ms | 58099.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 75459.0 ms | 74039.5 ms | 1419.6 ms | 56664.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 68158.7 ms | 66853.2 ms | 1305.6 ms | 51752.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 62242.5 ms | 60551.1 ms | 1691.4 ms | 30686.6 ms |
| Aws_restjson | LLGoNoLTO | 60109.3 ms | 58607.2 ms | 1502.1 ms | 30007.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 48416.3 ms | 47407.1 ms | 1009.2 ms | 35275.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 48159.6 ms | 47007.5 ms | 1152.2 ms | 34720.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 41984.9 ms | 40870.0 ms | 1114.9 ms | 19277.7 ms |
| Uber_zap | LLGoNoLTO | 41221.6 ms | 40092.3 ms | 1129.2 ms | 18910.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 39867.5 ms | 38938.0 ms | 929.5 ms | 26890.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 39379.1 ms | 38538.1 ms | 841.0 ms | 31257.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36613.5 ms | 35452.4 ms | 1161.1 ms | 17662.0 ms |
| K8s_workqueue | LLGoNoLTO | 35932.0 ms | 34880.6 ms | 1051.4 ms | 17352.4 ms |
| IXGo | Go | 33594.6 ms | 31178.7 ms | 2415.9 ms | 9776.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 33284.2 ms | 32494.6 ms | 789.6 ms | 24854.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 32823.3 ms | 32077.0 ms | 746.3 ms | 24745.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 27304.7 ms | 26417.3 ms | 887.3 ms | 9634.5 ms |
| Gorm_schema | LLGoNoLTO | 26278.8 ms | 25392.3 ms | 886.5 ms | 9336.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 25490.8 ms | 24893.9 ms | 596.9 ms | 20631.8 ms |
| Etcdctl | Go | 24944.7 ms | 23237.0 ms | 1707.7 ms | 7549.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 18996.6 ms | 18428.3 ms | 568.4 ms | 14193.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 18589.1 ms | 18010.8 ms | 578.3 ms | 13814.4 ms |
| Toml | LLGoDeadcodeDrop | 16325.4 ms | 15588.9 ms | 736.5 ms | 6273.7 ms |
| Toml | LLGoNoLTO | 16137.0 ms | 15443.1 ms | 693.9 ms | 6157.2 ms |
| XGo | Go | 14464.4 ms | 13500.2 ms | 964.2 ms | 4259.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9279.0 ms | 8785.5 ms | 493.5 ms | 4287.2 ms |
| Dustin_humanize | LLGoNoLTO | 9093.4 ms | 8585.1 ms | 508.4 ms | 4037.4 ms |
| Aws_restjson | Go | 5929.1 ms | 5397.7 ms | 531.4 ms | 2450.0 ms |
| Gorm_schema | Go | 4251.4 ms | 3932.1 ms | 319.3 ms | 1630.7 ms |
| Uber_zap | Go | 3984.0 ms | 3642.8 ms | 341.2 ms | 1563.5 ms |
| K8s_workqueue | Go | 3485.3 ms | 3124.0 ms | 361.3 ms | 1252.6 ms |
| Toml | Go | 1546.8 ms | 1321.3 ms | 225.6 ms | 711.2 ms |
| Dustin_humanize | Go | 620.1 ms | 498.2 ms | 121.9 ms | 292.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1255860.6 ms | 891425.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1186958.4 ms | 828842.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1184383.6 ms | 817958.2 ms | 9 |
| LLGoDeadcodeDrop | 729807.9 ms | 282589.8 ms | 9 |
| LLGoNoLTO | 712696.8 ms | 276450.1 ms | 9 |
| Go | 92820.4 ms | 29485.8 ms | 9 |

Dependency download details are in `download-timings.log`.
