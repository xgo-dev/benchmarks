## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 509826.1 ms | 500764.5 ms | 9061.7 ms | 302940.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 375202.1 ms | 369496.6 ms | 5705.5 ms | 268799.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 374715.2 ms | 369209.2 ms | 5506.0 ms | 267856.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 372545.7 ms | 366310.2 ms | 6235.4 ms | 110030.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 313238.9 ms | 309008.1 ms | 4230.8 ms | 204222.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 312936.3 ms | 308817.6 ms | 4118.7 ms | 204721.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 309662.3 ms | 305621.6 ms | 4040.7 ms | 205824.3 ms |
| IXGo | LLGoDeadcodeDrop | 292011.7 ms | 287026.5 ms | 4985.1 ms | 90849.5 ms |
| IXGo | LLGoNoLTO | 235947.4 ms | 231328.9 ms | 4618.5 ms | 73538.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 234282.1 ms | 230634.7 ms | 3647.4 ms | 148651.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 198135.6 ms | 194341.6 ms | 3794.1 ms | 137513.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 189997.9 ms | 185489.0 ms | 4508.9 ms | 100494.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 165620.7 ms | 162340.3 ms | 3280.4 ms | 130872.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140845.8 ms | 138151.7 ms | 2694.1 ms | 110102.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 126528.2 ms | 123845.4 ms | 2682.8 ms | 93169.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125791.8 ms | 123039.6 ms | 2752.2 ms | 92960.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109879.0 ms | 107393.7 ms | 2485.3 ms | 87066.6 ms |
| XGo | LLGoNoLTO | 103286.8 ms | 100773.9 ms | 2512.9 ms | 32506.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 97550.4 ms | 95182.9 ms | 2367.5 ms | 79749.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97278.3 ms | 94804.9 ms | 2473.4 ms | 78745.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97023.2 ms | 94609.4 ms | 2413.8 ms | 78862.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 91847.1 ms | 89302.5 ms | 2544.6 ms | 68488.3 ms |
| Etcdctl | LLGoNoLTO | 88572.4 ms | 85499.8 ms | 3072.6 ms | 30339.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 88547.6 ms | 86131.9 ms | 2415.6 ms | 50348.0 ms |
| Aws_restjson | LLGoNoLTO | 72948.2 ms | 70279.7 ms | 2668.6 ms | 28115.9 ms |
| Dustin_humanize | LLGoNoLTO | 68663.8 ms | 66919.1 ms | 1744.7 ms | 25703.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66556.2 ms | 64969.7 ms | 1586.6 ms | 49267.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65805.1 ms | 64199.6 ms | 1605.5 ms | 50328.4 ms |
| XGo | LLGoDeadcodeDrop | 65227.7 ms | 62673.4 ms | 2554.3 ms | 23400.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 63780.5 ms | 61409.2 ms | 2371.3 ms | 25908.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58305.2 ms | 56757.7 ms | 1547.5 ms | 44953.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 46014.3 ms | 44625.9 ms | 1388.4 ms | 34972.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45808.4 ms | 44429.6 ms | 1378.9 ms | 34953.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 43865.5 ms | 41724.6 ms | 2140.9 ms | 14343.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42629.0 ms | 41453.8 ms | 1175.2 ms | 35636.7 ms |
| Uber_zap | LLGoNoLTO | 42091.1 ms | 40020.7 ms | 2070.4 ms | 13956.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 40096.9 ms | 37882.6 ms | 2214.3 ms | 13369.4 ms |
| IXGo | Go | 35481.5 ms | 33260.9 ms | 2220.7 ms | 10741.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32920.0 ms | 31684.4 ms | 1235.6 ms | 25546.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32699.5 ms | 31364.7 ms | 1334.7 ms | 25536.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31747.2 ms | 30355.9 ms | 1391.3 ms | 10312.6 ms |
| Gorm_schema | LLGoNoLTO | 30437.3 ms | 29035.6 ms | 1401.7 ms | 9960.1 ms |
| K8s_workqueue | LLGoNoLTO | 24783.2 ms | 22872.8 ms | 1910.4 ms | 9013.0 ms |
| Toml | LLGoNoLTO | 19519.5 ms | 18250.7 ms | 1268.8 ms | 7076.0 ms |
| Toml | LLGoDeadcodeDrop | 19436.6 ms | 18162.9 ms | 1273.7 ms | 7212.0 ms |
| Etcdctl | Go | 16717.1 ms | 15981.7 ms | 735.4 ms | 5671.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12174.2 ms | 11038.6 ms | 1135.6 ms | 4876.9 ms |
| XGo | Go | 8880.1 ms | 8454.4 ms | 425.7 ms | 3390.6 ms |
| Aws_restjson | Go | 5021.8 ms | 4650.2 ms | 371.6 ms | 1907.7 ms |
| Gorm_schema | Go | 3548.3 ms | 3374.1 ms | 174.1 ms | 1599.9 ms |
| Uber_zap | Go | 2971.5 ms | 2760.4 ms | 211.1 ms | 1358.2 ms |
| K8s_workqueue | Go | 2528.4 ms | 2237.1 ms | 291.3 ms | 984.1 ms |
| Dustin_humanize | Go | 639.3 ms | 554.3 ms | 85.0 ms | 317.5 ms |
| Toml | Go | 540.1 ms | 446.7 ms | 93.4 ms | 299.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1500123.7 ms | 1047475.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1444427.8 ms | 991569.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1405094.9 ms | 973540.1 ms | 9 |
| LLGoDeadcodeDrop | 940886.0 ms | 300303.8 ms | 9 |
| LLGoNoLTO | 686249.8 ms | 230209.7 ms | 9 |
| Go | 76328.0 ms | 26269.4 ms | 9 |

Dependency download details are in `download-timings.log`.
