## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 606793.8 ms | 599895.7 ms | 6898.1 ms | 403709.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 598694.0 ms | 591976.1 ms | 6717.8 ms | 393156.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 597576.3 ms | 591097.8 ms | 6478.4 ms | 405144.6 ms |
| IXGo | LLGoNoLTO | 385460.8 ms | 379527.4 ms | 5933.5 ms | 138704.7 ms |
| IXGo | LLGoDeadcodeDrop | 356866.5 ms | 351170.8 ms | 5695.7 ms | 129917.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 270540.8 ms | 265691.7 ms | 4849.0 ms | 166539.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 268654.0 ms | 263726.0 ms | 4928.0 ms | 162558.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 260752.1 ms | 256080.8 ms | 4671.3 ms | 160078.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 201909.0 ms | 197482.8 ms | 4426.3 ms | 67717.3 ms |
| Etcdctl | LLGoNoLTO | 199710.6 ms | 195409.4 ms | 4301.2 ms | 68068.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 183133.1 ms | 179774.1 ms | 3359.0 ms | 129119.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 182915.7 ms | 179691.2 ms | 3224.5 ms | 129873.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 176215.3 ms | 173128.6 ms | 3086.7 ms | 124769.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 152331.6 ms | 149964.5 ms | 2367.1 ms | 117539.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141079.6 ms | 138642.1 ms | 2437.6 ms | 103625.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 140680.9 ms | 138218.9 ms | 2461.9 ms | 104866.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111260.9 ms | 109415.3 ms | 1845.6 ms | 86014.1 ms |
| XGo | LLGoDeadcodeDrop | 108175.1 ms | 105352.9 ms | 2822.2 ms | 42048.0 ms |
| XGo | LLGoNoLTO | 106992.7 ms | 104278.9 ms | 2713.8 ms | 42392.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104346.3 ms | 102476.9 ms | 1869.4 ms | 81881.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 104087.7 ms | 102189.9 ms | 1897.8 ms | 77316.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103999.0 ms | 102175.2 ms | 1823.8 ms | 81103.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99928.3 ms | 98044.6 ms | 1883.8 ms | 74212.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90796.0 ms | 88988.9 ms | 1807.1 ms | 67867.6 ms |
| Aws_restjson | LLGoNoLTO | 83450.7 ms | 81349.4 ms | 2101.3 ms | 41432.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81710.2 ms | 79626.4 ms | 2083.8 ms | 39032.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64721.2 ms | 63371.1 ms | 1350.1 ms | 46571.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64482.6 ms | 62992.5 ms | 1490.2 ms | 45969.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 58313.9 ms | 56722.4 ms | 1591.5 ms | 25892.1 ms |
| Uber_zap | LLGoNoLTO | 56674.6 ms | 55107.7 ms | 1566.9 ms | 25281.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54619.3 ms | 53268.6 ms | 1350.7 ms | 35886.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52021.2 ms | 50919.4 ms | 1101.9 ms | 40972.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50201.4 ms | 48555.6 ms | 1645.8 ms | 24046.1 ms |
| K8s_workqueue | LLGoNoLTO | 49852.2 ms | 48372.1 ms | 1480.0 ms | 24299.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44880.0 ms | 43815.9 ms | 1064.1 ms | 33316.6 ms |
| IXGo | Go | 44820.5 ms | 41902.3 ms | 2918.1 ms | 12833.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 44361.5 ms | 43241.5 ms | 1120.0 ms | 32904.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37347.0 ms | 36143.7 ms | 1203.3 ms | 13125.5 ms |
| Gorm_schema | LLGoNoLTO | 36052.2 ms | 34813.7 ms | 1238.5 ms | 12735.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33901.2 ms | 33036.8 ms | 864.4 ms | 27266.6 ms |
| Etcdctl | Go | 33165.8 ms | 31185.7 ms | 1980.1 ms | 9879.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25792.1 ms | 24894.0 ms | 898.2 ms | 18329.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24490.0 ms | 23657.6 ms | 832.3 ms | 17628.0 ms |
| Toml | LLGoDeadcodeDrop | 22253.0 ms | 21230.9 ms | 1022.1 ms | 8592.2 ms |
| Toml | LLGoNoLTO | 22092.0 ms | 21082.8 ms | 1009.2 ms | 8269.9 ms |
| XGo | Go | 19067.3 ms | 17925.5 ms | 1141.9 ms | 5532.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13095.9 ms | 12321.3 ms | 774.6 ms | 5892.2 ms |
| Dustin_humanize | LLGoNoLTO | 12650.5 ms | 11886.9 ms | 763.6 ms | 5578.3 ms |
| Aws_restjson | Go | 7838.6 ms | 7235.9 ms | 602.7 ms | 3149.9 ms |
| Gorm_schema | Go | 5739.4 ms | 5340.1 ms | 399.3 ms | 2158.0 ms |
| Uber_zap | Go | 5369.2 ms | 4957.7 ms | 411.5 ms | 2118.9 ms |
| K8s_workqueue | Go | 4718.7 ms | 4233.1 ms | 485.6 ms | 1673.0 ms |
| Toml | Go | 2028.2 ms | 1784.0 ms | 244.2 ms | 920.1 ms |
| Dustin_humanize | Go | 806.2 ms | 672.0 ms | 134.2 ms | 376.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1553126.2 ms | 1090237.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1530092.7 ms | 1046254.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1519835.6 ms | 1031727.8 ms | 9 |
| LLGoNoLTO | 952936.3 ms | 366761.8 ms | 9 |
| LLGoDeadcodeDrop | 929872.0 ms | 356263.3 ms | 9 |
| Go | 123553.9 ms | 38641.2 ms | 9 |

Dependency download details are in `download-timings.log`.
