## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 773316.8 ms | 768070.5 ms | 5246.3 ms | 564137.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 672382.6 ms | 666975.7 ms | 5406.9 ms | 467010.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 647039.5 ms | 641594.2 ms | 5445.3 ms | 451563.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 391264.6 ms | 385878.4 ms | 5386.2 ms | 223697.6 ms |
| IXGo | LLGoDeadcodeDrop | 343142.6 ms | 338612.5 ms | 4530.2 ms | 113898.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 295787.4 ms | 291563.4 ms | 4224.0 ms | 189928.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 294806.2 ms | 290569.6 ms | 4236.7 ms | 192408.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 209143.8 ms | 205550.2 ms | 3593.6 ms | 74740.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 205960.1 ms | 202435.5 ms | 3524.7 ms | 70174.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 203373.3 ms | 200101.6 ms | 3271.7 ms | 150376.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 192252.5 ms | 188783.6 ms | 3468.9 ms | 147441.9 ms |
| Etcdctl | LLGoNoLTO | 192017.1 ms | 188752.9 ms | 3264.1 ms | 65916.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 191221.5 ms | 187884.8 ms | 3336.7 ms | 147544.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 174856.0 ms | 171568.9 ms | 3287.1 ms | 118452.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 158876.1 ms | 156129.3 ms | 2746.8 ms | 125337.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 150953.0 ms | 148212.4 ms | 2740.6 ms | 109210.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 142219.7 ms | 139488.8 ms | 2731.0 ms | 109631.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141400.1 ms | 138716.4 ms | 2683.7 ms | 109366.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 127174.8 ms | 124728.4 ms | 2446.5 ms | 103572.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 125407.1 ms | 122827.7 ms | 2579.4 ms | 100661.1 ms |
| XGo | LLGoDeadcodeDrop | 124615.7 ms | 121901.1 ms | 2714.6 ms | 46337.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 112110.3 ms | 109609.9 ms | 2500.5 ms | 88955.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 110834.7 ms | 108309.8 ms | 2524.9 ms | 87197.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 93431.6 ms | 91034.5 ms | 2397.1 ms | 54446.2 ms |
| IXGo | LLGoNoLTO | 80304.3 ms | 76692.5 ms | 3611.7 ms | 33860.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 79717.2 ms | 77944.5 ms | 1772.7 ms | 61549.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75533.7 ms | 73145.9 ms | 2387.8 ms | 36235.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 74711.0 ms | 72694.1 ms | 2016.9 ms | 49272.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 73510.9 ms | 71815.0 ms | 1695.9 ms | 57667.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62196.5 ms | 60743.5 ms | 1452.9 ms | 51680.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58000.4 ms | 56446.2 ms | 1554.2 ms | 42952.8 ms |
| XGo | LLGoNoLTO | 54598.6 ms | 52129.6 ms | 2469.0 ms | 26751.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51638.2 ms | 50172.9 ms | 1465.3 ms | 40762.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46341.6 ms | 44129.5 ms | 2212.1 ms | 21979.0 ms |
| Aws_restjson | LLGoNoLTO | 40123.2 ms | 38004.8 ms | 2118.4 ms | 20152.2 ms |
| Uber_zap | LLGoNoLTO | 36936.0 ms | 34873.7 ms | 2062.3 ms | 19092.2 ms |
| Gorm_schema | LLGoNoLTO | 35626.0 ms | 34240.3 ms | 1385.7 ms | 11890.5 ms |
| K8s_workqueue | LLGoNoLTO | 35546.4 ms | 33652.2 ms | 1894.3 ms | 18620.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33838.3 ms | 32508.2 ms | 1330.2 ms | 25847.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 32940.8 ms | 31436.8 ms | 1504.0 ms | 11429.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32126.0 ms | 30792.1 ms | 1333.9 ms | 24985.7 ms |
| Toml | LLGoDeadcodeDrop | 20521.7 ms | 19261.1 ms | 1260.6 ms | 8118.2 ms |
| Toml | LLGoNoLTO | 13897.8 ms | 12594.3 ms | 1303.5 ms | 5748.6 ms |
| Dustin_humanize | LLGoNoLTO | 12539.3 ms | 11405.2 ms | 1134.1 ms | 5436.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12235.9 ms | 11075.5 ms | 1160.4 ms | 5339.4 ms |
| IXGo | Go | 2119.0 ms | 1854.4 ms | 264.6 ms | 1270.0 ms |
| Etcdctl | Go | 1623.8 ms | 1370.4 ms | 253.4 ms | 898.7 ms |
| XGo | Go | 1137.3 ms | 980.0 ms | 157.3 ms | 661.3 ms |
| Aws_restjson | Go | 870.9 ms | 737.7 ms | 133.2 ms | 481.1 ms |
| K8s_workqueue | Go | 698.0 ms | 577.7 ms | 120.3 ms | 392.7 ms |
| Uber_zap | Go | 676.6 ms | 570.1 ms | 106.5 ms | 377.1 ms |
| Toml | Go | 541.2 ms | 440.8 ms | 100.4 ms | 298.5 ms |
| Gorm_schema | Go | 532.0 ms | 457.7 ms | 74.2 ms | 297.3 ms |
| Dustin_humanize | Go | 354.6 ms | 286.5 ms | 68.1 ms | 189.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1949028.0 ms | 1416785.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1765210.9 ms | 1248381.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1750207.7 ms | 1230489.1 ms | 9 |
| LLGoDeadcodeDrop | 1070436.0 ms | 388251.9 ms | 9 |
| LLGoNoLTO | 501588.8 ms | 207468.5 ms | 9 |
| Go | 8553.3 ms | 4865.9 ms | 9 |

Dependency download details are in `download-timings.log`.
