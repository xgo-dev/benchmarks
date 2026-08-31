## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 501448.2 ms | 495679.1 ms | 5769.1 ms | 356552.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 497025.5 ms | 491081.4 ms | 5944.0 ms | 350489.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 493004.5 ms | 487300.2 ms | 5704.3 ms | 350280.7 ms |
| IXGo | LLGoDeadcodeDrop | 292306.1 ms | 287252.0 ms | 5054.2 ms | 114351.4 ms |
| IXGo | LLGoNoLTO | 290143.9 ms | 285132.2 ms | 5011.7 ms | 115651.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 219052.8 ms | 214629.5 ms | 4423.2 ms | 135321.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 217984.9 ms | 213810.2 ms | 4174.6 ms | 133888.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 213353.0 ms | 209175.0 ms | 4178.0 ms | 132975.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 158777.9 ms | 154919.0 ms | 3858.9 ms | 53041.4 ms |
| Etcdctl | LLGoNoLTO | 157288.6 ms | 153503.2 ms | 3785.4 ms | 52057.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 146470.4 ms | 143595.8 ms | 2874.5 ms | 103106.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 146079.8 ms | 143292.9 ms | 2787.0 ms | 103739.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 145987.0 ms | 143156.7 ms | 2830.3 ms | 102361.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 127997.6 ms | 126097.0 ms | 1900.5 ms | 100813.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 119185.1 ms | 117179.1 ms | 2006.0 ms | 90052.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 119072.6 ms | 117095.6 ms | 1977.0 ms | 89825.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 88261.3 ms | 86787.1 ms | 1474.3 ms | 68054.4 ms |
| XGo | LLGoDeadcodeDrop | 85420.6 ms | 82960.9 ms | 2459.6 ms | 32685.2 ms |
| XGo | LLGoNoLTO | 85079.1 ms | 82870.0 ms | 2209.1 ms | 32296.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 83275.6 ms | 81858.0 ms | 1417.5 ms | 64963.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 82983.6 ms | 81539.9 ms | 1443.7 ms | 65130.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 80278.0 ms | 78804.5 ms | 1473.5 ms | 59348.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 79170.7 ms | 77722.9 ms | 1447.8 ms | 58542.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 71611.5 ms | 70140.7 ms | 1470.8 ms | 53054.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 67585.6 ms | 65985.8 ms | 1599.8 ms | 33987.7 ms |
| Aws_restjson | LLGoNoLTO | 66803.0 ms | 65156.4 ms | 1646.6 ms | 33309.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 51962.4 ms | 50870.1 ms | 1092.3 ms | 37391.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 51667.1 ms | 50535.6 ms | 1131.5 ms | 36954.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 44825.6 ms | 43598.6 ms | 1227.0 ms | 19192.0 ms |
| Uber_zap | LLGoNoLTO | 43704.3 ms | 42549.6 ms | 1154.7 ms | 18849.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 43017.2 ms | 41917.3 ms | 1100.0 ms | 28021.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 41578.2 ms | 40750.4 ms | 827.8 ms | 32573.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 38646.0 ms | 37393.7 ms | 1252.4 ms | 17520.7 ms |
| K8s_workqueue | LLGoNoLTO | 37716.0 ms | 36561.6 ms | 1154.3 ms | 17261.9 ms |
| IXGo | Go | 35772.4 ms | 33110.7 ms | 2661.8 ms | 10101.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 35354.8 ms | 34544.7 ms | 810.1 ms | 26157.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 35059.4 ms | 34226.0 ms | 833.4 ms | 25880.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29094.0 ms | 28087.6 ms | 1006.5 ms | 10259.3 ms |
| Gorm_schema | LLGoNoLTO | 28610.3 ms | 27601.9 ms | 1008.4 ms | 10017.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 27537.9 ms | 26910.1 ms | 627.8 ms | 22045.8 ms |
| Etcdctl | Go | 26713.9 ms | 24880.1 ms | 1833.8 ms | 7926.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 20274.3 ms | 19667.5 ms | 606.7 ms | 14610.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 20126.3 ms | 19531.3 ms | 595.0 ms | 14588.6 ms |
| Toml | LLGoDeadcodeDrop | 17764.1 ms | 17042.4 ms | 721.7 ms | 6906.4 ms |
| Toml | LLGoNoLTO | 17478.1 ms | 16770.5 ms | 707.6 ms | 6677.0 ms |
| XGo | Go | 15357.9 ms | 14350.2 ms | 1007.6 ms | 4464.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 10249.6 ms | 9714.9 ms | 534.7 ms | 4511.1 ms |
| Dustin_humanize | LLGoNoLTO | 10009.7 ms | 9491.7 ms | 517.9 ms | 4337.5 ms |
| Aws_restjson | Go | 6285.2 ms | 5717.7 ms | 567.5 ms | 2505.8 ms |
| Gorm_schema | Go | 4711.9 ms | 4375.7 ms | 336.2 ms | 1757.6 ms |
| Uber_zap | Go | 4330.8 ms | 3995.0 ms | 335.8 ms | 1640.3 ms |
| K8s_workqueue | Go | 3771.5 ms | 3407.9 ms | 363.6 ms | 1308.2 ms |
| Toml | Go | 1654.7 ms | 1491.6 ms | 163.1 ms | 727.3 ms |
| Dustin_humanize | Go | 653.2 ms | 547.1 ms | 106.1 ms | 304.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1272758.3 ms | 913004.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1253904.2 ms | 883783.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1232157.1 ms | 859934.4 ms | 9 |
| LLGoDeadcodeDrop | 744669.5 ms | 292455.1 ms | 9 |
| LLGoNoLTO | 736833.0 ms | 290457.7 ms | 9 |
| Go | 99251.5 ms | 30736.3 ms | 9 |

Dependency download details are in `download-timings.log`.
