## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCE | 417880.9 ms | 410913.2 ms | 6967.6 ms | 390953.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 305426.3 ms | 298192.3 ms | 7234.1 ms | 276876.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 295056.2 ms | 291026.3 ms | 4029.9 ms | 255982.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 289347.9 ms | 285275.4 ms | 4072.5 ms | 250310.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 265631.7 ms | 260914.7 ms | 4717.0 ms | 283326.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 202732.5 ms | 199006.4 ms | 3726.2 ms | 186929.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 187782.4 ms | 184571.4 ms | 3211.0 ms | 160958.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181711.2 ms | 178263.8 ms | 3447.4 ms | 158042.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 167190.8 ms | 162741.0 ms | 4449.7 ms | 148858.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 162502.4 ms | 159197.8 ms | 3304.6 ms | 145262.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 141923.8 ms | 138756.2 ms | 3167.6 ms | 147310.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 130966.4 ms | 128180.0 ms | 2786.5 ms | 113139.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 130478.5 ms | 127145.4 ms | 3333.1 ms | 136576.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 114703.2 ms | 111530.6 ms | 3172.6 ms | 107699.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 113856.3 ms | 110987.9 ms | 2868.4 ms | 110646.3 ms |
| XGo | LLGoDeadcodeDrop | 107438.9 ms | 104010.1 ms | 3428.9 ms | 72109.3 ms |
| K8s_workqueue | LLGoNoLTO | 101194.3 ms | 97985.8 ms | 3208.5 ms | 114403.6 ms |
| Etcdctl | LLGoNoLTO | 100138.0 ms | 96343.3 ms | 3794.7 ms | 84465.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 95416.1 ms | 92420.7 ms | 2995.4 ms | 98919.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93986.2 ms | 91395.3 ms | 2590.9 ms | 77535.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 83369.7 ms | 80426.9 ms | 2942.8 ms | 74540.6 ms |
| Aws_restjson | LLGoNoLTO | 76121.8 ms | 73224.1 ms | 2897.7 ms | 69205.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 75783.3 ms | 73741.8 ms | 2041.5 ms | 73670.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 73906.3 ms | 71622.8 ms | 2283.5 ms | 64474.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 72708.5 ms | 70876.4 ms | 1832.2 ms | 69159.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 68795.7 ms | 66860.4 ms | 1935.3 ms | 69977.6 ms |
| XGo | LLGoNoLTO | 57549.7 ms | 54906.2 ms | 2643.5 ms | 34780.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55574.0 ms | 53769.9 ms | 1804.2 ms | 48228.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51932.3 ms | 50249.2 ms | 1683.1 ms | 47085.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44968.2 ms | 43479.1 ms | 1489.1 ms | 40337.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 42469.6 ms | 40376.3 ms | 2093.3 ms | 25632.2 ms |
| Uber_zap | LLGoNoLTO | 38430.2 ms | 35977.1 ms | 2453.0 ms | 32535.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 34476.6 ms | 32063.6 ms | 2413.0 ms | 23496.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34137.4 ms | 32728.6 ms | 1408.8 ms | 27631.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33708.5 ms | 32294.7 ms | 1413.8 ms | 27698.9 ms |
| Toml | LLGoDeadcodeDrop | 20354.6 ms | 18921.6 ms | 1433.0 ms | 14317.1 ms |
| Toml | LLGoNoLTO | 19250.7 ms | 17929.5 ms | 1321.3 ms | 11457.8 ms |
| Gorm_schema | LLGoNoLTO | 17785.0 ms | 16309.0 ms | 1475.9 ms | 8765.1 ms |
| Etcdctl | Go | 16922.8 ms | 15895.0 ms | 1027.7 ms | 5915.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 15988.7 ms | 14560.5 ms | 1428.1 ms | 14348.9 ms |
| Dustin_humanize | LLGoNoLTO | 14598.8 ms | 13075.6 ms | 1523.2 ms | 16634.2 ms |
| XGo | Go | 10796.4 ms | 10116.7 ms | 679.7 ms | 12647.9 ms |
| Uber_zap | Go | 6440.7 ms | 5944.9 ms | 495.8 ms | 6848.1 ms |
| Aws_restjson | Go | 5112.9 ms | 4519.1 ms | 593.8 ms | 2253.3 ms |
| Gorm_schema | Go | 3433.2 ms | 3242.1 ms | 191.1 ms | 1503.0 ms |
| K8s_workqueue | Go | 2980.4 ms | 2642.4 ms | 338.0 ms | 5149.8 ms |
| Dustin_humanize | Go | 679.6 ms | 553.2 ms | 126.5 ms | 421.0 ms |
| Toml | Go | 613.7 ms | 481.3 ms | 132.4 ms | 457.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1177513.8 ms | 1096564.1 ms | 8 |
| LLGoFullLTONoGlobalDCE | 1125072.7 ms | 1014937.9 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1104678.0 ms | 1030294.5 ms | 8 |
| LLGoDeadcodeDrop | 704940.5 ms | 600241.0 ms | 8 |
| LLGoNoLTO | 425068.5 ms | 372247.7 ms | 8 |
| Go | 46979.8 ms | 35196.2 ms | 8 |

Dependency download details are in `download-timings.log`.
