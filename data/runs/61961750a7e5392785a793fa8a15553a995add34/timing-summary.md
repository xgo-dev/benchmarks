## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 880908.8 ms | 873746.4 ms | 7162.4 ms | 657037.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 814823.9 ms | 807425.6 ms | 7398.3 ms | 584310.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 791006.0 ms | 783815.5 ms | 7190.5 ms | 588207.4 ms |
| IXGo | LLGoDeadcodeDrop | 446669.1 ms | 439966.6 ms | 6702.4 ms | 150591.9 ms |
| IXGo | LLGoNoLTO | 424554.2 ms | 418202.5 ms | 6351.6 ms | 155636.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 295182.1 ms | 289580.2 ms | 5601.9 ms | 177068.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 294445.5 ms | 288781.2 ms | 5664.2 ms | 175931.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 276455.5 ms | 271289.8 ms | 5165.7 ms | 164920.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 215569.8 ms | 210582.9 ms | 4986.9 ms | 71174.8 ms |
| Etcdctl | LLGoNoLTO | 205576.5 ms | 200832.1 ms | 4744.4 ms | 67928.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 188601.1 ms | 184932.5 ms | 3668.5 ms | 135880.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 176811.6 ms | 173475.9 ms | 3335.7 ms | 126933.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 175192.9 ms | 171813.7 ms | 3379.3 ms | 124564.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 151840.4 ms | 149471.5 ms | 2368.9 ms | 119301.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 145597.5 ms | 143168.7 ms | 2428.8 ms | 111961.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 139123.1 ms | 136862.7 ms | 2260.4 ms | 105874.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109753.5 ms | 107996.8 ms | 1756.7 ms | 85927.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104102.9 ms | 102356.9 ms | 1746.1 ms | 82936.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103462.3 ms | 101664.0 ms | 1798.4 ms | 78251.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103185.4 ms | 101361.3 ms | 1824.1 ms | 81423.9 ms |
| XGo | LLGoDeadcodeDrop | 102533.6 ms | 99675.9 ms | 2857.7 ms | 40507.2 ms |
| XGo | LLGoNoLTO | 100762.7 ms | 98134.2 ms | 2628.5 ms | 39838.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97678.6 ms | 95925.0 ms | 1753.6 ms | 73405.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 87319.1 ms | 85601.4 ms | 1717.8 ms | 65865.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 85759.0 ms | 83545.0 ms | 2214.1 ms | 44509.9 ms |
| Aws_restjson | LLGoNoLTO | 78904.5 ms | 76875.1 ms | 2029.4 ms | 39756.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64501.1 ms | 63059.2 ms | 1441.9 ms | 46718.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64160.6 ms | 62847.3 ms | 1313.3 ms | 46963.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 54941.3 ms | 53414.6 ms | 1526.7 ms | 24771.3 ms |
| Uber_zap | LLGoNoLTO | 53834.7 ms | 52384.5 ms | 1450.2 ms | 24269.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52021.2 ms | 50739.0 ms | 1282.2 ms | 34508.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51206.8 ms | 50197.0 ms | 1009.8 ms | 40489.3 ms |
| K8s_workqueue | LLGoNoLTO | 47073.1 ms | 45675.8 ms | 1397.3 ms | 22391.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46787.5 ms | 45363.1 ms | 1424.3 ms | 22467.5 ms |
| IXGo | Go | 45247.3 ms | 41834.2 ms | 3413.1 ms | 13368.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 44590.5 ms | 43600.2 ms | 990.3 ms | 33453.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42138.4 ms | 41132.8 ms | 1005.6 ms | 31306.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35728.5 ms | 34553.6 ms | 1175.0 ms | 12766.6 ms |
| Gorm_schema | LLGoNoLTO | 33709.0 ms | 32601.5 ms | 1107.5 ms | 11922.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33157.0 ms | 32325.0 ms | 831.9 ms | 26557.8 ms |
| Etcdctl | Go | 31858.8 ms | 29632.8 ms | 2225.9 ms | 9543.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24913.1 ms | 24144.7 ms | 768.4 ms | 18372.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 23885.8 ms | 23147.7 ms | 738.1 ms | 17375.4 ms |
| Toml | LLGoDeadcodeDrop | 21330.5 ms | 20480.7 ms | 849.8 ms | 7969.5 ms |
| Toml | LLGoNoLTO | 20887.9 ms | 20043.5 ms | 844.4 ms | 7942.2 ms |
| XGo | Go | 19239.7 ms | 17934.8 ms | 1304.9 ms | 5648.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12630.3 ms | 11939.0 ms | 691.3 ms | 5553.4 ms |
| Dustin_humanize | LLGoNoLTO | 11735.2 ms | 11092.7 ms | 642.5 ms | 5208.2 ms |
| Aws_restjson | Go | 7732.9 ms | 7060.1 ms | 672.8 ms | 3202.0 ms |
| Gorm_schema | Go | 5679.1 ms | 5290.5 ms | 388.6 ms | 2157.7 ms |
| Uber_zap | Go | 5095.4 ms | 4654.4 ms | 441.0 ms | 1999.1 ms |
| K8s_workqueue | Go | 4709.2 ms | 4204.5 ms | 504.7 ms | 1690.6 ms |
| Toml | Go | 2053.0 ms | 1786.3 ms | 266.7 ms | 959.5 ms |
| Dustin_humanize | Go | 802.0 ms | 643.8 ms | 158.2 ms | 375.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1848397.2 ms | 1351066.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1764237.9 ms | 1248901.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1723430.0 ms | 1235579.1 ms | 9 |
| LLGoDeadcodeDrop | 1021949.5 ms | 380312.0 ms | 9 |
| LLGoNoLTO | 977037.8 ms | 374893.8 ms | 9 |
| Go | 122417.4 ms | 38944.4 ms | 9 |

Dependency download details are in `download-timings.log`.
