## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 419501.2 ms | 414154.0 ms | 5347.2 ms | 288264.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 389055.2 ms | 383256.2 ms | 5799.0 ms | 279232.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 383977.5 ms | 377345.6 ms | 6631.9 ms | 113939.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 380267.6 ms | 374842.7 ms | 5424.9 ms | 274072.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 320004.6 ms | 315891.1 ms | 4113.5 ms | 212658.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 316011.0 ms | 311728.0 ms | 4283.0 ms | 209294.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 313356.4 ms | 309351.8 ms | 4004.7 ms | 207767.4 ms |
| IXGo | LLGoNoLTO | 282676.4 ms | 275787.2 ms | 6889.2 ms | 89934.6 ms |
| IXGo | LLGoDeadcodeDrop | 265025.1 ms | 260274.1 ms | 4751.0 ms | 84795.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 204946.4 ms | 201275.3 ms | 3671.1 ms | 114862.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 184497.3 ms | 181380.4 ms | 3116.9 ms | 133108.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 183435.1 ms | 180238.8 ms | 3196.3 ms | 133411.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 163366.7 ms | 160332.1 ms | 3034.6 ms | 130067.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 144273.3 ms | 141597.7 ms | 2675.6 ms | 99050.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 143158.8 ms | 140464.4 ms | 2694.4 ms | 110548.4 ms |
| XGo | LLGoNoLTO | 129603.9 ms | 125986.9 ms | 3617.1 ms | 40617.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127523.1 ms | 124707.1 ms | 2816.0 ms | 94341.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 126924.9 ms | 124348.7 ms | 2576.2 ms | 90154.4 ms |
| XGo | LLGoDeadcodeDrop | 109370.9 ms | 106735.0 ms | 2635.9 ms | 34599.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98213.6 ms | 95773.8 ms | 2439.8 ms | 80388.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 96511.5 ms | 94206.4 ms | 2305.1 ms | 78695.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95255.6 ms | 92794.5 ms | 2461.1 ms | 71302.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 93747.8 ms | 90824.6 ms | 2923.1 ms | 56751.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92325.7 ms | 89915.6 ms | 2410.1 ms | 69174.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 92199.3 ms | 89842.5 ms | 2356.8 ms | 56609.1 ms |
| Etcdctl | LLGoNoLTO | 87992.4 ms | 84854.4 ms | 3138.0 ms | 30137.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75637.0 ms | 73177.7 ms | 2459.3 ms | 29779.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 71072.1 ms | 69365.7 ms | 1706.5 ms | 53886.0 ms |
| Aws_restjson | LLGoNoLTO | 67942.1 ms | 65376.5 ms | 2565.7 ms | 26920.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66541.5 ms | 64934.2 ms | 1607.3 ms | 49500.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 60545.8 ms | 58712.2 ms | 1833.7 ms | 40300.3 ms |
| Uber_zap | LLGoNoLTO | 52617.4 ms | 50133.9 ms | 2483.6 ms | 17091.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 46754.6 ms | 45262.8 ms | 1491.9 ms | 35732.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44314.6 ms | 43028.3 ms | 1286.4 ms | 37263.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 43165.1 ms | 41038.8 ms | 2126.4 ms | 14398.8 ms |
| IXGo | Go | 38489.6 ms | 36144.7 ms | 2344.9 ms | 11208.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35395.9 ms | 33991.5 ms | 1404.4 ms | 11234.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34212.0 ms | 32951.4 ms | 1260.5 ms | 26753.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33117.0 ms | 31816.8 ms | 1300.1 ms | 25596.4 ms |
| K8s_workqueue | LLGoNoLTO | 31817.7 ms | 29595.2 ms | 2222.4 ms | 10859.5 ms |
| Gorm_schema | LLGoNoLTO | 30187.6 ms | 28870.1 ms | 1317.6 ms | 9868.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30119.8 ms | 28044.8 ms | 2075.0 ms | 10558.5 ms |
| Toml | LLGoDeadcodeDrop | 19727.2 ms | 18419.1 ms | 1308.1 ms | 7245.4 ms |
| Toml | LLGoNoLTO | 18843.8 ms | 17581.2 ms | 1262.7 ms | 6953.2 ms |
| Etcdctl | Go | 16648.2 ms | 15867.5 ms | 780.7 ms | 5564.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12313.6 ms | 11138.6 ms | 1175.0 ms | 4992.0 ms |
| Dustin_humanize | LLGoNoLTO | 11876.0 ms | 10749.0 ms | 1127.0 ms | 4733.7 ms |
| Aws_restjson | Go | 7622.3 ms | 7048.4 ms | 573.9 ms | 3095.4 ms |
| XGo | Go | 6372.4 ms | 5999.4 ms | 373.1 ms | 2403.0 ms |
| Gorm_schema | Go | 3462.8 ms | 3270.0 ms | 192.8 ms | 1501.5 ms |
| Uber_zap | Go | 3087.7 ms | 2831.8 ms | 255.9 ms | 1437.3 ms |
| K8s_workqueue | Go | 1801.8 ms | 1617.4 ms | 184.4 ms | 818.5 ms |
| Dustin_humanize | Go | 655.0 ms | 553.1 ms | 102.0 ms | 321.7 ms |
| Toml | Go | 561.5 ms | 464.0 ms | 97.5 ms | 324.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1496104.2 ms | 1068737.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1429793.0 ms | 996656.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1415235.5 ms | 993395.3 ms | 9 |
| LLGoDeadcodeDrop | 974732.1 ms | 311543.2 ms | 9 |
| LLGoNoLTO | 713557.5 ms | 237116.3 ms | 9 |
| Go | 78701.3 ms | 26674.7 ms | 9 |

Dependency download details are in `download-timings.log`.
