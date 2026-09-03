## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 736903.0 ms | 729387.5 ms | 7515.5 ms | 531696.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 692533.2 ms | 685326.9 ms | 7206.4 ms | 494912.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 639648.7 ms | 632010.0 ms | 7638.7 ms | 444855.5 ms |
| IXGo | LLGoDeadcodeDrop | 390232.0 ms | 383421.4 ms | 6810.6 ms | 137609.1 ms |
| IXGo | LLGoNoLTO | 372052.3 ms | 365546.4 ms | 6506.0 ms | 131116.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 261518.0 ms | 256241.9 ms | 5276.1 ms | 162384.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 258964.9 ms | 253748.5 ms | 5216.4 ms | 160252.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 253808.7 ms | 248817.2 ms | 4991.5 ms | 159627.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 191533.8 ms | 186547.9 ms | 4985.9 ms | 65614.7 ms |
| Etcdctl | LLGoNoLTO | 186400.2 ms | 181924.2 ms | 4476.1 ms | 64122.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 180824.5 ms | 177228.5 ms | 3596.0 ms | 129352.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 174982.5 ms | 171488.1 ms | 3494.4 ms | 124929.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173276.7 ms | 169813.7 ms | 3463.1 ms | 124563.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 167220.6 ms | 164635.2 ms | 2585.4 ms | 134500.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 144354.8 ms | 141738.6 ms | 2616.2 ms | 110508.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 139574.7 ms | 137086.7 ms | 2488.0 ms | 105828.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 106506.2 ms | 104556.5 ms | 1949.7 ms | 85211.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105955.5 ms | 104041.1 ms | 1914.5 ms | 82638.4 ms |
| XGo | LLGoNoLTO | 103395.9 ms | 100472.7 ms | 2923.2 ms | 42229.6 ms |
| XGo | LLGoDeadcodeDrop | 102823.0 ms | 99897.3 ms | 2925.7 ms | 41635.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101538.9 ms | 99568.3 ms | 1970.6 ms | 80256.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 96422.4 ms | 94513.3 ms | 1909.0 ms | 72530.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96302.5 ms | 94445.5 ms | 1857.0 ms | 72349.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 87631.5 ms | 85725.5 ms | 1906.0 ms | 65807.8 ms |
| Aws_restjson | LLGoNoLTO | 81584.5 ms | 79429.7 ms | 2154.8 ms | 42821.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79698.7 ms | 77560.3 ms | 2138.4 ms | 40429.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64238.6 ms | 62705.5 ms | 1533.2 ms | 46693.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61708.8 ms | 60246.5 ms | 1462.4 ms | 45201.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 54741.0 ms | 53105.6 ms | 1635.5 ms | 24988.7 ms |
| Uber_zap | LLGoNoLTO | 54285.3 ms | 52703.1 ms | 1582.1 ms | 25547.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52344.4 ms | 50926.5 ms | 1418.0 ms | 34897.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 50179.1 ms | 48979.9 ms | 1199.2 ms | 39661.8 ms |
| K8s_workqueue | LLGoNoLTO | 48711.1 ms | 47105.1 ms | 1606.0 ms | 23637.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 47891.7 ms | 46256.8 ms | 1634.9 ms | 23997.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44060.2 ms | 42886.2 ms | 1174.0 ms | 33162.9 ms |
| IXGo | Go | 42972.0 ms | 39756.4 ms | 3215.6 ms | 12320.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 42014.2 ms | 40878.5 ms | 1135.7 ms | 31467.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34346.0 ms | 33404.2 ms | 941.8 ms | 28001.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34127.3 ms | 32883.3 ms | 1244.1 ms | 12322.9 ms |
| Gorm_schema | LLGoNoLTO | 33569.8 ms | 32360.1 ms | 1209.7 ms | 12054.6 ms |
| Etcdctl | Go | 31818.7 ms | 29706.2 ms | 2112.5 ms | 9710.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24278.7 ms | 23389.9 ms | 888.7 ms | 17539.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24183.3 ms | 23280.1 ms | 903.2 ms | 17714.8 ms |
| Toml | LLGoDeadcodeDrop | 20717.0 ms | 19672.9 ms | 1044.0 ms | 7915.7 ms |
| Toml | LLGoNoLTO | 20498.1 ms | 19471.2 ms | 1026.9 ms | 7955.6 ms |
| XGo | Go | 18512.1 ms | 17249.9 ms | 1262.3 ms | 5466.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12598.0 ms | 11777.5 ms | 820.6 ms | 5580.7 ms |
| Dustin_humanize | LLGoNoLTO | 12177.4 ms | 11334.5 ms | 842.9 ms | 5530.9 ms |
| Aws_restjson | Go | 7669.8 ms | 6939.8 ms | 729.9 ms | 3068.8 ms |
| Gorm_schema | Go | 5526.6 ms | 5083.3 ms | 443.2 ms | 2093.5 ms |
| Uber_zap | Go | 5147.1 ms | 4706.4 ms | 440.7 ms | 2016.7 ms |
| K8s_workqueue | Go | 4557.5 ms | 4070.1 ms | 487.4 ms | 1627.9 ms |
| Toml | Go | 1977.6 ms | 1712.0 ms | 265.5 ms | 905.6 ms |
| Dustin_humanize | Go | 786.0 ms | 621.9 ms | 164.2 ms | 372.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1645535.0 ms | 1194317.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1638917.9 ms | 1171195.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1530868.0 ms | 1071034.0 ms | 9 |
| LLGoDeadcodeDrop | 934362.6 ms | 360093.2 ms | 9 |
| LLGoNoLTO | 912674.6 ms | 355016.9 ms | 9 |
| Go | 118967.4 ms | 37582.3 ms | 9 |

Dependency download details are in `download-timings.log`.
