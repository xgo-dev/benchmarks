## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 663249.1 ms | 657707.5 ms | 5541.7 ms | 482054.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 655733.1 ms | 650335.1 ms | 5398.0 ms | 461717.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 654591.4 ms | 649242.4 ms | 5349.0 ms | 452511.8 ms |
| IXGo | LLGoDeadcodeDrop | 371824.8 ms | 367241.3 ms | 4583.4 ms | 125068.8 ms |
| IXGo | LLGoNoLTO | 358057.6 ms | 353664.0 ms | 4393.6 ms | 120890.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 357432.5 ms | 352823.6 ms | 4608.9 ms | 211061.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 305453.8 ms | 301358.9 ms | 4094.8 ms | 196272.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 300402.1 ms | 296203.7 ms | 4198.4 ms | 193199.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 281781.4 ms | 277114.1 ms | 4667.4 ms | 175440.6 ms |
| XGo | LLGoDeadcodeDrop | 263293.7 ms | 259331.3 ms | 3962.4 ms | 91404.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 204692.9 ms | 201272.3 ms | 3420.5 ms | 151369.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 201699.1 ms | 198366.7 ms | 3332.4 ms | 68807.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 193931.0 ms | 190619.9 ms | 3311.1 ms | 150063.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 166079.3 ms | 163234.1 ms | 2845.1 ms | 131480.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 155559.8 ms | 152687.9 ms | 2871.9 ms | 111339.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 151555.5 ms | 148667.2 ms | 2888.3 ms | 115045.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 145302.7 ms | 142586.9 ms | 2715.8 ms | 112222.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 125686.9 ms | 123292.3 ms | 2394.5 ms | 102512.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 120385.9 ms | 117858.1 ms | 2527.8 ms | 99845.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 119999.2 ms | 117477.8 ms | 2521.4 ms | 98728.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 112258.2 ms | 109788.1 ms | 2470.1 ms | 88558.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 111954.3 ms | 109570.3 ms | 2384.0 ms | 88491.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 106325.8 ms | 104059.8 ms | 2266.0 ms | 70100.6 ms |
| Etcdctl | LLGoNoLTO | 99259.0 ms | 96332.2 ms | 2926.8 ms | 40153.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 95771.6 ms | 93443.1 ms | 2328.6 ms | 56065.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75869.1 ms | 73493.2 ms | 2376.0 ms | 36288.2 ms |
| Aws_restjson | LLGoNoLTO | 75130.9 ms | 72758.1 ms | 2372.8 ms | 36340.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 71616.1 ms | 69983.8 ms | 1632.3 ms | 56031.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62975.1 ms | 61511.5 ms | 1463.6 ms | 52225.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61165.8 ms | 59608.5 ms | 1557.4 ms | 44122.3 ms |
| Uber_zap | LLGoNoLTO | 53187.2 ms | 51007.7 ms | 2179.6 ms | 23600.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 53119.7 ms | 50897.2 ms | 2222.6 ms | 23864.2 ms |
| XGo | LLGoNoLTO | 52910.6 ms | 50476.1 ms | 2434.4 ms | 26331.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 52848.0 ms | 51420.3 ms | 1427.6 ms | 42107.3 ms |
| K8s_workqueue | LLGoNoLTO | 46779.4 ms | 44556.1 ms | 2223.3 ms | 21981.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46054.4 ms | 44061.1 ms | 1993.2 ms | 21851.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44191.7 ms | 42888.3 ms | 1303.4 ms | 37210.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34864.6 ms | 33528.3 ms | 1336.2 ms | 26031.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32503.8 ms | 31183.7 ms | 1320.2 ms | 25295.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31830.1 ms | 30390.2 ms | 1440.0 ms | 11144.8 ms |
| Gorm_schema | LLGoNoLTO | 31058.4 ms | 29632.8 ms | 1425.6 ms | 10924.6 ms |
| Toml | LLGoDeadcodeDrop | 21063.8 ms | 19748.5 ms | 1315.3 ms | 8326.5 ms |
| Toml | LLGoNoLTO | 20759.7 ms | 19496.7 ms | 1263.0 ms | 8175.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 19078.5 ms | 17911.9 ms | 1166.7 ms | 7113.1 ms |
| Dustin_humanize | LLGoNoLTO | 11383.3 ms | 10292.8 ms | 1090.6 ms | 4688.9 ms |
| IXGo | Go | 2003.7 ms | 1773.7 ms | 230.0 ms | 1168.2 ms |
| Etcdctl | Go | 1309.4 ms | 1140.5 ms | 168.9 ms | 758.8 ms |
| XGo | Go | 1128.1 ms | 977.6 ms | 150.5 ms | 640.4 ms |
| Uber_zap | Go | 918.0 ms | 735.7 ms | 182.3 ms | 468.6 ms |
| Aws_restjson | Go | 801.9 ms | 673.4 ms | 128.5 ms | 455.5 ms |
| K8s_workqueue | Go | 719.1 ms | 596.7 ms | 122.4 ms | 399.0 ms |
| Gorm_schema | Go | 536.9 ms | 458.6 ms | 78.3 ms | 291.5 ms |
| Toml | Go | 532.4 ms | 436.5 ms | 95.9 ms | 298.4 ms |
| Dustin_humanize | Go | 371.3 ms | 292.7 ms | 78.6 ms | 204.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1831599.5 ms | 1307013.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1782017.5 ms | 1274306.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1774694.5 ms | 1249788.0 ms | 9 |
| LLGoDeadcodeDrop | 1083833.3 ms | 393868.8 ms | 9 |
| LLGoNoLTO | 748526.1 ms | 293086.5 ms | 9 |
| Go | 8320.7 ms | 4685.0 ms | 9 |

Dependency download details are in `download-timings.log`.
