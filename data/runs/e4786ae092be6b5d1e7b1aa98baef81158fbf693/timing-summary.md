## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 653168.5 ms | 645384.8 ms | 7783.7 ms | 446058.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 631864.1 ms | 624482.9 ms | 7381.2 ms | 431651.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 598170.5 ms | 590333.3 ms | 7837.2 ms | 406460.9 ms |
| IXGo | LLGoDeadcodeDrop | 399483.3 ms | 392745.8 ms | 6737.5 ms | 132603.4 ms |
| IXGo | LLGoNoLTO | 357314.0 ms | 350829.2 ms | 6484.8 ms | 119835.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 321218.7 ms | 315348.6 ms | 5870.1 ms | 196868.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 320337.4 ms | 314268.3 ms | 6069.2 ms | 190896.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 313822.8 ms | 308236.5 ms | 5586.3 ms | 188935.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 239146.5 ms | 233710.9 ms | 5435.6 ms | 79828.1 ms |
| Etcdctl | LLGoNoLTO | 225395.2 ms | 220431.9 ms | 4963.4 ms | 75259.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 218967.3 ms | 214643.2 ms | 4324.0 ms | 159327.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 199255.5 ms | 195138.9 ms | 4116.6 ms | 142392.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 197034.7 ms | 193018.5 ms | 4016.2 ms | 141022.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 162280.7 ms | 159149.5 ms | 3131.2 ms | 125878.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 147535.3 ms | 144370.5 ms | 3164.8 ms | 109674.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 143776.2 ms | 140554.5 ms | 3221.7 ms | 105361.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 121422.6 ms | 118885.9 ms | 2536.7 ms | 94941.6 ms |
| XGo | LLGoDeadcodeDrop | 118637.7 ms | 114881.3 ms | 3756.4 ms | 45268.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 116680.0 ms | 114060.2 ms | 2619.7 ms | 92910.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 114965.1 ms | 112325.1 ms | 2639.9 ms | 91117.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 114746.9 ms | 112138.7 ms | 2608.2 ms | 90908.1 ms |
| XGo | LLGoNoLTO | 111474.1 ms | 107937.3 ms | 3536.7 ms | 42551.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 108998.5 ms | 106522.7 ms | 2475.8 ms | 81706.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 108546.8 ms | 105989.8 ms | 2557.1 ms | 81435.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 83714.8 ms | 80939.5 ms | 2775.3 ms | 39206.5 ms |
| Aws_restjson | LLGoNoLTO | 82060.0 ms | 79155.6 ms | 2904.4 ms | 38484.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 74383.7 ms | 72515.1 ms | 1868.6 ms | 54981.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 72859.6 ms | 70973.4 ms | 1886.2 ms | 53111.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 63762.1 ms | 61820.7 ms | 1941.4 ms | 43065.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 59481.5 ms | 57933.9 ms | 1547.6 ms | 47565.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 59287.7 ms | 56880.5 ms | 2407.2 ms | 25747.0 ms |
| Uber_zap | LLGoNoLTO | 57573.1 ms | 55286.8 ms | 2286.3 ms | 24947.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50276.9 ms | 48036.5 ms | 2240.4 ms | 23157.8 ms |
| K8s_workqueue | LLGoNoLTO | 49580.6 ms | 47348.6 ms | 2231.9 ms | 22734.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 49541.1 ms | 48107.3 ms | 1433.8 ms | 37252.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49122.3 ms | 47622.2 ms | 1500.1 ms | 36997.2 ms |
| IXGo | Go | 47726.8 ms | 44679.0 ms | 3047.8 ms | 13721.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 40443.8 ms | 39093.3 ms | 1350.5 ms | 32864.9 ms |
| Gorm_schema | LLGoNoLTO | 40162.5 ms | 38446.7 ms | 1715.8 ms | 14140.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 39556.2 ms | 37858.1 ms | 1698.1 ms | 13730.3 ms |
| Etcdctl | Go | 33216.0 ms | 31266.7 ms | 1949.4 ms | 9976.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28335.0 ms | 26994.5 ms | 1340.6 ms | 20619.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 28298.9 ms | 26954.8 ms | 1344.1 ms | 20747.9 ms |
| Toml | LLGoDeadcodeDrop | 23383.4 ms | 21995.0 ms | 1388.4 ms | 8978.1 ms |
| Toml | LLGoNoLTO | 22969.5 ms | 21563.6 ms | 1405.9 ms | 8759.6 ms |
| XGo | Go | 18933.8 ms | 17768.9 ms | 1164.9 ms | 5577.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13827.1 ms | 12758.9 ms | 1068.2 ms | 6095.2 ms |
| Dustin_humanize | LLGoNoLTO | 13742.4 ms | 12548.6 ms | 1193.8 ms | 6038.5 ms |
| Aws_restjson | Go | 7924.2 ms | 7263.0 ms | 661.2 ms | 3197.1 ms |
| Gorm_schema | Go | 5729.0 ms | 5332.6 ms | 396.4 ms | 2171.3 ms |
| Uber_zap | Go | 5525.6 ms | 5125.2 ms | 400.5 ms | 2170.0 ms |
| K8s_workqueue | Go | 4729.5 ms | 4277.0 ms | 452.5 ms | 1659.9 ms |
| Toml | Go | 2034.5 ms | 1795.3 ms | 239.2 ms | 921.7 ms |
| Dustin_humanize | Go | 798.2 ms | 664.6 ms | 133.5 ms | 383.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1746742.3 ms | 1236989.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1694741.8 ms | 1172747.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1617535.6 ms | 1115016.2 ms | 9 |
| LLGoDeadcodeDrop | 1027313.7 ms | 374615.0 ms | 9 |
| LLGoNoLTO | 960271.3 ms | 352751.3 ms | 9 |
| Go | 126617.5 ms | 39778.7 ms | 9 |

Dependency download details are in `download-timings.log`.
