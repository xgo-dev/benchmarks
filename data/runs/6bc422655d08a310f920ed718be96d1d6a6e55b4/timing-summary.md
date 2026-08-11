## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 436631.0 ms | 431760.5 ms | 4870.5 ms | 409399.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 418605.1 ms | 413600.5 ms | 5004.6 ms | 388044.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 403869.2 ms | 399528.9 ms | 4340.3 ms | 364542.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 351950.3 ms | 348521.1 ms | 3429.2 ms | 332454.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 334092.3 ms | 330775.3 ms | 3317.0 ms | 309156.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 302661.4 ms | 299576.8 ms | 3084.6 ms | 260068.0 ms |
| IXGo | LLGoNoLTO | 298204.3 ms | 292599.5 ms | 5604.8 ms | 241694.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 282752.3 ms | 278167.1 ms | 4585.3 ms | 254794.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 229544.7 ms | 226191.8 ms | 3353.0 ms | 200340.0 ms |
| IXGo | LLGoDeadcodeDrop | 226258.1 ms | 222716.6 ms | 3541.4 ms | 177915.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 200765.2 ms | 196742.7 ms | 4022.5 ms | 198406.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 197499.9 ms | 194757.7 ms | 2742.2 ms | 180960.7 ms |
| Etcdctl | LLGoNoLTO | 180345.9 ms | 176502.9 ms | 3843.0 ms | 125352.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 165514.0 ms | 163029.1 ms | 2484.9 ms | 159008.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 158353.3 ms | 155878.1 ms | 2475.2 ms | 115585.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 142474.3 ms | 140258.4 ms | 2215.8 ms | 135395.7 ms |
| XGo | LLGoDeadcodeDrop | 133579.2 ms | 131275.6 ms | 2303.6 ms | 103947.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 133005.7 ms | 130951.6 ms | 2054.1 ms | 115384.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 131150.7 ms | 128908.1 ms | 2242.6 ms | 136067.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 124949.3 ms | 122747.5 ms | 2201.8 ms | 121631.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 117609.2 ms | 115442.2 ms | 2167.1 ms | 115744.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 111374.4 ms | 108694.4 ms | 2679.9 ms | 123649.4 ms |
| Toml | LLGoDeadcodeDrop | 109020.7 ms | 106589.8 ms | 2430.9 ms | 120697.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100989.1 ms | 99052.4 ms | 1936.6 ms | 88372.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 94828.2 ms | 93306.6 ms | 1521.6 ms | 104859.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92389.2 ms | 90515.2 ms | 1874.1 ms | 74907.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 86848.2 ms | 85351.1 ms | 1497.1 ms | 90868.2 ms |
| XGo | LLGoNoLTO | 84773.1 ms | 82495.4 ms | 2277.7 ms | 71125.6 ms |
| K8s_workqueue | LLGoNoLTO | 83131.8 ms | 81139.3 ms | 1992.5 ms | 82300.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81276.7 ms | 79255.6 ms | 2021.1 ms | 74816.5 ms |
| Aws_restjson | LLGoNoLTO | 75609.7 ms | 73445.0 ms | 2164.6 ms | 61500.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 75390.4 ms | 74123.6 ms | 1266.8 ms | 75049.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 74581.7 ms | 73102.1 ms | 1479.6 ms | 72137.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 69709.0 ms | 68275.3 ms | 1433.8 ms | 75016.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 59901.0 ms | 58650.1 ms | 1251.0 ms | 68012.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 55712.2 ms | 53795.7 ms | 1916.6 ms | 51766.2 ms |
| Uber_zap | LLGoNoLTO | 53666.0 ms | 51646.7 ms | 2019.3 ms | 42260.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 48490.4 ms | 46967.2 ms | 1523.2 ms | 43926.4 ms |
| IXGo | Go | 39498.1 ms | 37139.8 ms | 2358.3 ms | 21680.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35358.9 ms | 34320.6 ms | 1038.3 ms | 30682.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 34542.3 ms | 32870.8 ms | 1671.4 ms | 22874.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33791.1 ms | 32763.6 ms | 1027.5 ms | 27121.1 ms |
| Etcdctl | Go | 32614.3 ms | 30817.8 ms | 1796.6 ms | 17377.5 ms |
| Toml | LLGoNoLTO | 18742.0 ms | 17669.2 ms | 1072.8 ms | 20666.3 ms |
| Gorm_schema | LLGoNoLTO | 18669.9 ms | 17628.6 ms | 1041.3 ms | 8686.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13448.0 ms | 12526.1 ms | 921.9 ms | 8245.3 ms |
| Dustin_humanize | LLGoNoLTO | 12356.5 ms | 11410.8 ms | 945.6 ms | 5640.1 ms |
| Aws_restjson | Go | 9119.2 ms | 8479.1 ms | 640.1 ms | 10553.4 ms |
| XGo | Go | 7457.4 ms | 7045.0 ms | 412.5 ms | 9299.0 ms |
| Gorm_schema | Go | 4043.9 ms | 3849.7 ms | 194.3 ms | 3421.5 ms |
| Uber_zap | Go | 3503.8 ms | 3292.6 ms | 211.2 ms | 3165.7 ms |
| K8s_workqueue | Go | 1739.1 ms | 1566.3 ms | 172.8 ms | 792.3 ms |
| Dustin_humanize | Go | 781.6 ms | 697.1 ms | 84.5 ms | 1421.3 ms |
| Toml | Go | 725.5 ms | 637.9 ms | 87.7 ms | 1399.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1660014.7 ms | 1574308.0 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1617398.6 ms | 1518546.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1530822.7 ms | 1419217.3 ms | 9 |
| LLGoDeadcodeDrop | 860680.9 ms | 719773.8 ms | 9 |
| LLGoNoLTO | 825499.2 ms | 659226.0 ms | 9 |
| Go | 99483.0 ms | 69110.2 ms | 9 |

Dependency download details are in `download-timings.log`.
