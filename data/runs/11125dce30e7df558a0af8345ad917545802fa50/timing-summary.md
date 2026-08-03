## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 475108.6 ms | 467173.8 ms | 7934.8 ms | 412657.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 434867.8 ms | 428068.0 ms | 6799.8 ms | 380307.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 416858.4 ms | 411734.0 ms | 5124.4 ms | 374878.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 414294.1 ms | 408911.8 ms | 5382.3 ms | 377977.0 ms |
| IXGo | LLGoNoLTO | 314090.0 ms | 310089.9 ms | 4000.1 ms | 268747.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 293938.1 ms | 290389.1 ms | 3549.0 ms | 254886.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 292921.7 ms | 289620.9 ms | 3300.8 ms | 253847.9 ms |
| IXGo | LLGoDeadcodeDrop | 292442.6 ms | 287914.0 ms | 4528.6 ms | 251456.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 237708.6 ms | 233430.8 ms | 4277.8 ms | 205341.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 216186.4 ms | 212789.1 ms | 3397.3 ms | 188239.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 207796.5 ms | 203391.0 ms | 4405.5 ms | 203321.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 194252.3 ms | 191458.8 ms | 2793.5 ms | 166697.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 184307.7 ms | 180791.3 ms | 3516.4 ms | 179492.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 183777.9 ms | 180643.9 ms | 3134.0 ms | 164508.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150833.3 ms | 148383.8 ms | 2449.6 ms | 133392.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 140940.2 ms | 138426.0 ms | 2514.2 ms | 132552.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 132737.6 ms | 130120.4 ms | 2617.1 ms | 127017.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 130746.8 ms | 128453.5 ms | 2293.3 ms | 112287.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 128946.0 ms | 126297.4 ms | 2648.6 ms | 107790.3 ms |
| XGo | LLGoDeadcodeDrop | 122436.1 ms | 119861.0 ms | 2575.1 ms | 100062.9 ms |
| Toml | LLGoNoLTO | 109077.4 ms | 106310.3 ms | 2767.2 ms | 116026.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 108874.9 ms | 106517.8 ms | 2357.0 ms | 98869.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103719.2 ms | 101263.5 ms | 2455.7 ms | 90838.9 ms |
| K8s_workqueue | LLGoNoLTO | 102443.4 ms | 99904.6 ms | 2538.8 ms | 97096.0 ms |
| Toml | LLGoDeadcodeDrop | 100060.7 ms | 97662.2 ms | 2398.5 ms | 101460.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95667.8 ms | 93499.0 ms | 2168.8 ms | 79560.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 84686.2 ms | 82922.7 ms | 1763.5 ms | 79029.0 ms |
| XGo | LLGoNoLTO | 78933.6 ms | 76668.1 ms | 2265.5 ms | 52046.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 76942.8 ms | 75163.4 ms | 1779.4 ms | 74157.5 ms |
| Etcdctl | LLGoNoLTO | 76552.2 ms | 73869.0 ms | 2683.1 ms | 38864.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58036.0 ms | 56674.8 ms | 1361.2 ms | 50205.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 57650.5 ms | 55449.8 ms | 2200.7 ms | 48586.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54939.6 ms | 53397.7 ms | 1541.9 ms | 47864.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 49314.4 ms | 47898.3 ms | 1416.1 ms | 45118.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46947.2 ms | 45636.4 ms | 1310.8 ms | 39331.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 46369.4 ms | 45003.8 ms | 1365.5 ms | 38877.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 45578.1 ms | 44117.8 ms | 1460.3 ms | 45702.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 42914.2 ms | 40658.3 ms | 2255.9 ms | 38506.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 41310.5 ms | 39887.6 ms | 1423.0 ms | 40248.3 ms |
| Uber_zap | LLGoNoLTO | 38415.3 ms | 36152.9 ms | 2262.4 ms | 30744.1 ms |
| IXGo | Go | 36855.4 ms | 34539.6 ms | 2315.8 ms | 15336.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36108.4 ms | 34816.0 ms | 1292.3 ms | 26743.1 ms |
| Aws_restjson | LLGoNoLTO | 35085.3 ms | 33061.2 ms | 2024.0 ms | 17681.0 ms |
| Gorm_schema | LLGoNoLTO | 33723.3 ms | 32326.1 ms | 1397.2 ms | 26383.6 ms |
| Etcdctl | Go | 18648.4 ms | 17821.3 ms | 827.1 ms | 14175.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 16503.3 ms | 15371.6 ms | 1131.7 ms | 10942.3 ms |
| Dustin_humanize | LLGoNoLTO | 14958.0 ms | 13744.8 ms | 1213.1 ms | 13391.9 ms |
| XGo | Go | 8802.8 ms | 8296.3 ms | 506.5 ms | 3467.7 ms |
| Uber_zap | Go | 6746.0 ms | 6286.7 ms | 459.3 ms | 9534.9 ms |
| Gorm_schema | Go | 6097.9 ms | 5777.9 ms | 320.0 ms | 3435.5 ms |
| Aws_restjson | Go | 5024.2 ms | 4629.4 ms | 394.8 ms | 2061.4 ms |
| K8s_workqueue | Go | 2256.8 ms | 2039.7 ms | 217.1 ms | 3290.7 ms |
| Dustin_humanize | Go | 724.9 ms | 628.3 ms | 96.5 ms | 553.6 ms |
| Toml | Go | 551.1 ms | 440.8 ms | 110.3 ms | 390.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1671352.9 ms | 1497257.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1544694.1 ms | 1380384.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1487428.7 ms | 1331325.9 ms | 9 |
| LLGoDeadcodeDrop | 1013248.1 ms | 873787.1 ms | 9 |
| LLGoNoLTO | 803278.4 ms | 660981.3 ms | 9 |
| Go | 85707.4 ms | 52246.9 ms | 9 |

Dependency download details are in `download-timings.log`.
