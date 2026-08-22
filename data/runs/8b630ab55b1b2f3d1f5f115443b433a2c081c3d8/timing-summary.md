## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 602793.3 ms | 597660.7 ms | 5132.5 ms | 422352.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 600092.8 ms | 594415.4 ms | 5677.4 ms | 414308.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 586461.3 ms | 580817.8 ms | 5643.5 ms | 411749.0 ms |
| IXGo | LLGoDeadcodeDrop | 343346.2 ms | 338971.0 ms | 4375.2 ms | 112086.0 ms |
| IXGo | LLGoNoLTO | 332249.3 ms | 328058.5 ms | 4190.9 ms | 112299.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 295216.6 ms | 291114.3 ms | 4102.3 ms | 192838.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 293934.4 ms | 289841.3 ms | 4093.2 ms | 189637.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 293822.7 ms | 289760.9 ms | 4061.8 ms | 189501.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 278779.0 ms | 274377.2 ms | 4401.8 ms | 179505.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 227785.8 ms | 224081.2 ms | 3704.5 ms | 131203.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 203326.9 ms | 199904.2 ms | 3422.7 ms | 68830.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 201236.8 ms | 197889.0 ms | 3347.8 ms | 147938.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 200546.1 ms | 197136.0 ms | 3410.0 ms | 67666.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 200269.0 ms | 196887.1 ms | 3382.0 ms | 147814.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 193164.1 ms | 189664.7 ms | 3499.4 ms | 112065.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 158907.3 ms | 156085.0 ms | 2822.3 ms | 125828.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 143600.3 ms | 140716.7 ms | 2883.6 ms | 109623.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 124602.7 ms | 122112.5 ms | 2490.2 ms | 101711.7 ms |
| XGo | LLGoDeadcodeDrop | 121623.6 ms | 118967.3 ms | 2656.3 ms | 44801.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 119053.0 ms | 116405.6 ms | 2647.4 ms | 98244.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 118668.9 ms | 116189.9 ms | 2479.0 ms | 97328.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 118273.9 ms | 115823.4 ms | 2450.5 ms | 97197.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 112168.8 ms | 109646.4 ms | 2522.5 ms | 87579.5 ms |
| Toml | LLGoNoLTO | 102357.9 ms | 100058.5 ms | 2299.3 ms | 35069.4 ms |
| Etcdctl | LLGoNoLTO | 101437.2 ms | 98136.6 ms | 3300.6 ms | 40357.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 77836.0 ms | 76182.4 ms | 1653.6 ms | 58535.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 77646.7 ms | 75258.8 ms | 2387.9 ms | 36573.1 ms |
| Aws_restjson | LLGoNoLTO | 76384.3 ms | 74008.0 ms | 2376.3 ms | 35706.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 70506.8 ms | 68884.8 ms | 1622.0 ms | 55088.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 61930.5 ms | 60441.8 ms | 1488.8 ms | 51353.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61509.9 ms | 59870.2 ms | 1639.7 ms | 45496.8 ms |
| XGo | LLGoNoLTO | 53772.7 ms | 51353.0 ms | 2419.7 ms | 26359.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51904.1 ms | 50473.4 ms | 1430.6 ms | 40955.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 51558.1 ms | 50116.9 ms | 1441.2 ms | 40977.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46756.2 ms | 44547.8 ms | 2208.5 ms | 21987.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43321.6 ms | 42058.8 ms | 1262.8 ms | 36425.7 ms |
| Uber_zap | LLGoNoLTO | 36656.2 ms | 34631.8 ms | 2024.3 ms | 19065.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35894.0 ms | 34358.1 ms | 1536.0 ms | 12089.8 ms |
| K8s_workqueue | LLGoNoLTO | 35598.8 ms | 33653.3 ms | 1945.5 ms | 18712.5 ms |
| Gorm_schema | LLGoNoLTO | 34964.3 ms | 33555.8 ms | 1408.4 ms | 11803.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32145.9 ms | 30863.0 ms | 1282.9 ms | 25147.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32092.0 ms | 30875.4 ms | 1216.5 ms | 25104.9 ms |
| Toml | LLGoDeadcodeDrop | 21222.0 ms | 19915.4 ms | 1306.6 ms | 8256.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12247.8 ms | 11119.5 ms | 1128.3 ms | 5344.9 ms |
| Dustin_humanize | LLGoNoLTO | 11621.0 ms | 10461.9 ms | 1159.0 ms | 4843.3 ms |
| IXGo | Go | 1957.7 ms | 1709.8 ms | 247.9 ms | 1127.1 ms |
| Etcdctl | Go | 1300.1 ms | 1143.7 ms | 156.4 ms | 734.1 ms |
| XGo | Go | 1107.1 ms | 939.5 ms | 167.5 ms | 793.2 ms |
| Aws_restjson | Go | 801.0 ms | 684.1 ms | 116.9 ms | 442.8 ms |
| Uber_zap | Go | 744.8 ms | 621.1 ms | 123.8 ms | 399.9 ms |
| Gorm_schema | Go | 692.1 ms | 549.4 ms | 142.7 ms | 339.9 ms |
| K8s_workqueue | Go | 677.4 ms | 563.0 ms | 114.4 ms | 381.6 ms |
| Toml | Go | 527.9 ms | 419.4 ms | 108.5 ms | 304.1 ms |
| Dustin_humanize | Go | 350.2 ms | 287.8 ms | 62.5 ms | 197.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1762440.1 ms | 1266795.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1696257.0 ms | 1182502.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1692938.3 ms | 1186216.1 ms | 9 |
| LLGoDeadcodeDrop | 1062609.5 ms | 377635.9 ms | 9 |
| LLGoNoLTO | 785041.6 ms | 304218.0 ms | 9 |
| Go | 8158.3 ms | 4720.0 ms | 9 |

Dependency download details are in `download-timings.log`.
