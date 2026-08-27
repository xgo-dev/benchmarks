## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 732619.6 ms | 726826.5 ms | 5793.1 ms | 533434.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 721765.2 ms | 716118.0 ms | 5647.2 ms | 533323.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 715458.0 ms | 709534.6 ms | 5923.5 ms | 526158.6 ms |
| IXGo | LLGoDeadcodeDrop | 366898.4 ms | 361833.8 ms | 5064.6 ms | 137615.7 ms |
| IXGo | LLGoNoLTO | 357932.2 ms | 353046.7 ms | 4885.6 ms | 129304.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 229608.6 ms | 225255.0 ms | 4353.5 ms | 138397.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 227830.8 ms | 223680.2 ms | 4150.7 ms | 137139.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 227516.1 ms | 223331.2 ms | 4184.9 ms | 138328.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 168036.2 ms | 164085.0 ms | 3951.1 ms | 55796.4 ms |
| Etcdctl | LLGoNoLTO | 165918.5 ms | 162192.5 ms | 3725.9 ms | 54561.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 145843.1 ms | 143033.1 ms | 2810.0 ms | 104480.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 144748.0 ms | 141934.1 ms | 2813.9 ms | 104646.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 144075.1 ms | 141405.0 ms | 2670.1 ms | 103772.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 137528.3 ms | 135716.5 ms | 1811.8 ms | 111942.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 126798.2 ms | 125033.2 ms | 1765.0 ms | 100414.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 126581.9 ms | 124781.0 ms | 1800.9 ms | 100354.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 88266.8 ms | 86839.1 ms | 1427.7 ms | 69275.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 84095.6 ms | 82671.0 ms | 1424.5 ms | 66497.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 83476.1 ms | 82065.2 ms | 1410.8 ms | 66313.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 83120.7 ms | 81793.5 ms | 1327.2 ms | 66718.0 ms |
| XGo | LLGoDeadcodeDrop | 82776.5 ms | 80427.5 ms | 2349.0 ms | 32420.2 ms |
| XGo | LLGoNoLTO | 81008.4 ms | 78743.4 ms | 2265.0 ms | 31907.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 79823.3 ms | 78377.8 ms | 1445.5 ms | 60059.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 79000.3 ms | 77595.1 ms | 1405.2 ms | 59878.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64472.6 ms | 62908.1 ms | 1564.4 ms | 33584.2 ms |
| Aws_restjson | LLGoNoLTO | 63980.6 ms | 62424.8 ms | 1555.8 ms | 33337.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 51638.8 ms | 50566.9 ms | 1071.9 ms | 37879.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 51250.6 ms | 50123.9 ms | 1126.7 ms | 37233.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 43557.3 ms | 42319.5 ms | 1237.8 ms | 19831.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 42748.9 ms | 41707.5 ms | 1041.4 ms | 28668.7 ms |
| Uber_zap | LLGoNoLTO | 42716.2 ms | 41530.4 ms | 1185.8 ms | 19252.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 41605.1 ms | 40749.0 ms | 856.0 ms | 33121.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 38903.9 ms | 37677.5 ms | 1226.4 ms | 19107.1 ms |
| K8s_workqueue | LLGoNoLTO | 36961.3 ms | 35816.8 ms | 1144.5 ms | 17659.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 35110.2 ms | 34332.5 ms | 777.6 ms | 26497.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 34925.7 ms | 34097.0 ms | 828.7 ms | 26333.1 ms |
| IXGo | Go | 34849.4 ms | 32300.8 ms | 2548.6 ms | 10125.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 27728.2 ms | 26825.0 ms | 903.2 ms | 9931.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 27481.7 ms | 26828.3 ms | 653.3 ms | 22450.3 ms |
| Gorm_schema | LLGoNoLTO | 27149.6 ms | 26263.4 ms | 886.1 ms | 9746.9 ms |
| Etcdctl | Go | 25980.3 ms | 24234.2 ms | 1746.1 ms | 7918.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 20048.4 ms | 19423.1 ms | 625.4 ms | 14891.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 19937.0 ms | 19370.5 ms | 566.6 ms | 14808.4 ms |
| Toml | LLGoDeadcodeDrop | 16948.6 ms | 16237.6 ms | 711.0 ms | 6361.9 ms |
| Toml | LLGoNoLTO | 16727.8 ms | 16017.6 ms | 710.2 ms | 6362.8 ms |
| XGo | Go | 14833.3 ms | 13856.6 ms | 976.7 ms | 4400.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9907.6 ms | 9376.2 ms | 531.4 ms | 4372.9 ms |
| Dustin_humanize | LLGoNoLTO | 9416.2 ms | 8913.8 ms | 502.4 ms | 4242.2 ms |
| Aws_restjson | Go | 6298.1 ms | 5696.2 ms | 601.9 ms | 2683.4 ms |
| Gorm_schema | Go | 4440.2 ms | 4111.4 ms | 328.8 ms | 1728.0 ms |
| Uber_zap | Go | 4140.8 ms | 3753.7 ms | 387.1 ms | 1648.3 ms |
| K8s_workqueue | Go | 3700.2 ms | 3314.2 ms | 386.1 ms | 1350.6 ms |
| Toml | Go | 1609.7 ms | 1423.3 ms | 186.4 ms | 752.0 ms |
| Dustin_humanize | Go | 639.7 ms | 516.3 ms | 123.4 ms | 314.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1523670.6 ms | 1117685.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1501691.2 ms | 1080586.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1477540.3 ms | 1064747.5 ms | 9 |
| LLGoDeadcodeDrop | 819229.2 ms | 319021.4 ms | 9 |
| LLGoNoLTO | 801810.8 ms | 306373.7 ms | 9 |
| Go | 96491.7 ms | 30921.3 ms | 9 |

Dependency download details are in `download-timings.log`.
