## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 763141.1 ms | 756140.9 ms | 7000.2 ms | 554910.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 684643.8 ms | 677542.5 ms | 7101.3 ms | 495188.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 635067.9 ms | 627967.2 ms | 7100.7 ms | 443270.2 ms |
| IXGo | LLGoNoLTO | 385924.4 ms | 379765.0 ms | 6159.4 ms | 142082.8 ms |
| IXGo | LLGoDeadcodeDrop | 382398.8 ms | 376213.0 ms | 6185.8 ms | 140680.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 281714.8 ms | 276745.9 ms | 4968.9 ms | 169266.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 281233.2 ms | 275915.7 ms | 5317.5 ms | 166659.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 277216.1 ms | 272216.1 ms | 5000.0 ms | 165602.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 207255.4 ms | 202687.6 ms | 4567.8 ms | 68576.7 ms |
| Etcdctl | LLGoNoLTO | 205925.9 ms | 201343.5 ms | 4582.4 ms | 67591.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 178887.0 ms | 175429.3 ms | 3457.7 ms | 127421.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 178786.8 ms | 175374.2 ms | 3412.6 ms | 127412.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 174071.0 ms | 170761.1 ms | 3310.0 ms | 124998.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 166111.7 ms | 163771.9 ms | 2339.8 ms | 132148.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154421.7 ms | 152032.7 ms | 2388.9 ms | 121318.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 147225.5 ms | 145047.4 ms | 2178.1 ms | 113972.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108307.3 ms | 106499.7 ms | 1807.6 ms | 84212.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103345.9 ms | 101738.6 ms | 1607.3 ms | 82517.2 ms |
| XGo | LLGoDeadcodeDrop | 101623.3 ms | 98726.9 ms | 2896.4 ms | 39835.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 101402.5 ms | 99699.4 ms | 1703.2 ms | 77088.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101051.5 ms | 99314.4 ms | 1737.1 ms | 79751.7 ms |
| XGo | LLGoNoLTO | 100576.7 ms | 97763.9 ms | 2812.8 ms | 39394.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100188.5 ms | 98412.9 ms | 1775.7 ms | 79039.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98626.2 ms | 96912.4 ms | 1713.8 ms | 74059.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80635.0 ms | 78542.1 ms | 2092.9 ms | 39926.1 ms |
| Aws_restjson | LLGoNoLTO | 76812.9 ms | 74895.1 ms | 1917.8 ms | 38144.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66387.5 ms | 64862.9 ms | 1524.6 ms | 48167.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61865.7 ms | 60548.6 ms | 1317.1 ms | 44813.2 ms |
| Uber_zap | LLGoNoLTO | 53796.6 ms | 52378.0 ms | 1418.6 ms | 24554.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 53756.9 ms | 52355.4 ms | 1401.5 ms | 24364.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52791.8 ms | 51514.3 ms | 1277.5 ms | 35252.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52257.5 ms | 51203.3 ms | 1054.1 ms | 41476.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46917.6 ms | 45489.8 ms | 1427.8 ms | 22458.2 ms |
| K8s_workqueue | LLGoNoLTO | 46178.2 ms | 44831.0 ms | 1347.2 ms | 22042.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 43567.7 ms | 42544.0 ms | 1023.6 ms | 32725.7 ms |
| IXGo | Go | 42737.0 ms | 39593.5 ms | 3143.5 ms | 12432.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42514.4 ms | 41601.7 ms | 912.7 ms | 31760.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34829.9 ms | 33669.6 ms | 1160.3 ms | 12141.8 ms |
| Gorm_schema | LLGoNoLTO | 34099.0 ms | 33031.8 ms | 1067.2 ms | 12015.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32843.2 ms | 32086.6 ms | 756.6 ms | 26645.1 ms |
| Etcdctl | Go | 32800.6 ms | 30593.4 ms | 2207.2 ms | 9846.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24980.1 ms | 24184.2 ms | 795.8 ms | 18343.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24480.7 ms | 23746.0 ms | 734.7 ms | 17611.9 ms |
| Toml | LLGoNoLTO | 20999.5 ms | 20133.4 ms | 866.2 ms | 7779.5 ms |
| Toml | LLGoDeadcodeDrop | 20598.3 ms | 19763.6 ms | 834.7 ms | 7820.2 ms |
| XGo | Go | 18371.3 ms | 17085.9 ms | 1285.4 ms | 5462.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12279.7 ms | 11608.6 ms | 671.1 ms | 5371.3 ms |
| Dustin_humanize | LLGoNoLTO | 11877.8 ms | 11254.5 ms | 623.4 ms | 5211.9 ms |
| Aws_restjson | Go | 7731.5 ms | 7052.8 ms | 678.7 ms | 3157.3 ms |
| Gorm_schema | Go | 5679.8 ms | 5239.5 ms | 440.3 ms | 2204.1 ms |
| Uber_zap | Go | 5142.9 ms | 4719.8 ms | 423.1 ms | 2025.6 ms |
| K8s_workqueue | Go | 4722.4 ms | 4231.3 ms | 491.1 ms | 1725.5 ms |
| Toml | Go | 2007.8 ms | 1752.6 ms | 255.2 ms | 921.2 ms |
| Dustin_humanize | Go | 823.2 ms | 664.7 ms | 158.5 ms | 402.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1731968.1 ms | 1250158.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1626822.6 ms | 1159526.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1578340.4 ms | 1105948.3 ms | 9 |
| LLGoDeadcodeDrop | 940294.8 ms | 361174.4 ms | 9 |
| LLGoNoLTO | 936191.1 ms | 358816.2 ms | 9 |
| Go | 120016.3 ms | 38176.4 ms | 9 |

Dependency download details are in `download-timings.log`.
