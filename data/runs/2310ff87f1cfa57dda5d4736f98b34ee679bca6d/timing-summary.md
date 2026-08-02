## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCE | 533147.5 ms | 518144.9 ms | 15002.6 ms | 530849.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 475212.8 ms | 461710.8 ms | 13502.0 ms | 449720.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 470747.3 ms | 444783.2 ms | 25964.1 ms | 470165.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 462711.4 ms | 452761.3 ms | 9950.1 ms | 417603.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 436900.5 ms | 427436.9 ms | 9463.6 ms | 406594.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 395524.2 ms | 376371.8 ms | 19152.5 ms | 406291.8 ms |
| IXGo | LLGoDeadcodeDrop | 356179.4 ms | 336849.9 ms | 19329.5 ms | 328790.9 ms |
| IXGo | LLGoNoLTO | 334809.8 ms | 316245.1 ms | 18564.7 ms | 271491.4 ms |
| XGo | LLGoDeadcodeDrop | 332374.1 ms | 311147.4 ms | 21226.8 ms | 351472.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 326708.9 ms | 319431.1 ms | 7277.9 ms | 301397.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 325145.4 ms | 318910.2 ms | 6235.2 ms | 289695.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 207040.2 ms | 202434.8 ms | 4605.4 ms | 181838.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 199787.1 ms | 195137.2 ms | 4649.9 ms | 188534.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 192270.7 ms | 185447.1 ms | 6823.6 ms | 174402.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 186923.7 ms | 182717.6 ms | 4206.1 ms | 171929.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 151952.0 ms | 147607.5 ms | 4344.5 ms | 142951.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 137375.4 ms | 134028.2 ms | 3347.2 ms | 120710.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130576.7 ms | 127419.5 ms | 3157.2 ms | 114515.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 118798.5 ms | 115563.9 ms | 3234.6 ms | 117458.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 113464.4 ms | 110415.4 ms | 3048.9 ms | 98947.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 102425.6 ms | 100001.0 ms | 2424.6 ms | 105808.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97311.1 ms | 94451.5 ms | 2859.6 ms | 84535.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96558.0 ms | 93638.3 ms | 2919.6 ms | 83207.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 87196.9 ms | 85097.2 ms | 2099.6 ms | 91318.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 82061.4 ms | 79429.3 ms | 2632.1 ms | 75434.2 ms |
| Etcdctl | LLGoNoLTO | 81159.4 ms | 78028.3 ms | 3131.1 ms | 49552.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 76057.9 ms | 71926.1 ms | 4131.9 ms | 60291.9 ms |
| XGo | LLGoNoLTO | 70642.4 ms | 67261.1 ms | 3381.3 ms | 58537.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 60728.3 ms | 58884.0 ms | 1844.3 ms | 65332.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 59454.1 ms | 55962.4 ms | 3491.7 ms | 52630.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58361.9 ms | 56097.2 ms | 2264.6 ms | 59501.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 57138.9 ms | 53659.8 ms | 3479.1 ms | 47866.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 49315.0 ms | 47548.1 ms | 1766.9 ms | 41164.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49133.8 ms | 47427.7 ms | 1706.1 ms | 44641.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 45821.3 ms | 42904.8 ms | 2916.5 ms | 42308.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 40003.2 ms | 38377.6 ms | 1625.6 ms | 36355.6 ms |
| Gorm_schema | LLGoNoLTO | 39298.5 ms | 36657.6 ms | 2640.9 ms | 33135.3 ms |
| Aws_restjson | LLGoNoLTO | 39111.6 ms | 36599.7 ms | 2511.9 ms | 32210.6 ms |
| IXGo | Go | 36255.9 ms | 33384.3 ms | 2871.5 ms | 17643.6 ms |
| Uber_zap | LLGoNoLTO | 34309.6 ms | 32002.0 ms | 2307.6 ms | 23154.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 33463.1 ms | 30823.1 ms | 2640.1 ms | 20469.7 ms |
| K8s_workqueue | LLGoNoLTO | 33353.1 ms | 30709.1 ms | 2644.0 ms | 20333.9 ms |
| Toml | LLGoDeadcodeDrop | 27972.4 ms | 25927.1 ms | 2045.4 ms | 30596.8 ms |
| Toml | LLGoNoLTO | 22094.2 ms | 20392.9 ms | 1701.3 ms | 17109.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 18547.7 ms | 16963.3 ms | 1584.4 ms | 12665.6 ms |
| Etcdctl | Go | 16229.9 ms | 15238.2 ms | 991.6 ms | 5526.1 ms |
| Dustin_humanize | LLGoNoLTO | 14903.8 ms | 13401.0 ms | 1502.7 ms | 17072.6 ms |
| XGo | Go | 10862.7 ms | 9940.0 ms | 922.7 ms | 9496.2 ms |
| Aws_restjson | Go | 4892.4 ms | 4437.7 ms | 454.7 ms | 1871.1 ms |
| Gorm_schema | Go | 3399.6 ms | 3172.1 ms | 227.5 ms | 1490.5 ms |
| Uber_zap | Go | 3293.2 ms | 3040.6 ms | 252.5 ms | 2289.3 ms |
| K8s_workqueue | Go | 2753.2 ms | 2271.4 ms | 481.8 ms | 4174.0 ms |
| Dustin_humanize | Go | 840.2 ms | 684.3 ms | 155.9 ms | 1334.1 ms |
| Toml | Go | 711.8 ms | 577.5 ms | 134.3 ms | 716.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1928749.2 ms | 1862520.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1712095.6 ms | 1585867.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1535243.8 ms | 1404982.8 ms | 9 |
| LLGoDeadcodeDrop | 1418302.3 ms | 1364627.6 ms | 9 |
| LLGoNoLTO | 669682.4 ms | 522597.3 ms | 9 |
| Go | 79238.8 ms | 44541.0 ms | 9 |

Dependency download details are in `download-timings.log`.
