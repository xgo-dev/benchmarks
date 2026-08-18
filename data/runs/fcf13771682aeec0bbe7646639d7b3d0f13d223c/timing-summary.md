## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 345769.7 ms | 339933.2 ms | 5836.5 ms | 216286.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 315459.8 ms | 311305.4 ms | 4154.4 ms | 208440.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 314897.2 ms | 310819.8 ms | 4077.5 ms | 206260.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 291689.2 ms | 285786.7 ms | 5902.5 ms | 174867.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 207797.6 ms | 204228.0 ms | 3569.7 ms | 61202.7 ms |
| Etcdctl | LLGoNoLTO | 202833.8 ms | 199265.1 ms | 3568.7 ms | 59071.1 ms |
| Uber_zap | LLGoNoLTO | 188784.8 ms | 184991.1 ms | 3793.7 ms | 57616.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 185082.0 ms | 181903.6 ms | 3178.4 ms | 134996.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 182612.0 ms | 179404.3 ms | 3207.7 ms | 132168.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 176094.6 ms | 172290.3 ms | 3804.3 ms | 104212.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 174034.0 ms | 170403.1 ms | 3630.9 ms | 104323.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 141560.4 ms | 138813.0 ms | 2747.5 ms | 110973.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130516.1 ms | 127788.4 ms | 2727.6 ms | 96266.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127156.3 ms | 124578.7 ms | 2577.5 ms | 93714.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 114926.4 ms | 112443.7 ms | 2482.7 ms | 90537.7 ms |
| XGo | LLGoNoLTO | 104315.7 ms | 101730.4 ms | 2585.3 ms | 32962.3 ms |
| XGo | LLGoDeadcodeDrop | 103690.0 ms | 101013.0 ms | 2677.0 ms | 33212.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 97247.6 ms | 94857.0 ms | 2390.6 ms | 79982.6 ms |
| Toml | LLGoDeadcodeDrop | 96220.1 ms | 93888.5 ms | 2331.6 ms | 32589.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94945.2 ms | 92561.6 ms | 2383.6 ms | 71130.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93882.0 ms | 91410.5 ms | 2471.4 ms | 70197.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 86814.7 ms | 84437.0 ms | 2377.6 ms | 28009.1 ms |
| Aws_restjson | LLGoNoLTO | 71675.7 ms | 69060.0 ms | 2615.7 ms | 27816.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70215.6 ms | 68533.5 ms | 1682.1 ms | 52763.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68726.0 ms | 66316.8 ms | 2409.1 ms | 26245.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66678.0 ms | 65072.2 ms | 1605.8 ms | 49660.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55776.4 ms | 54242.1 ms | 1534.3 ms | 38583.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55182.5 ms | 53727.6 ms | 1454.9 ms | 44833.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 48374.0 ms | 46912.1 ms | 1462.0 ms | 36247.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45639.3 ms | 44182.3 ms | 1457.1 ms | 34854.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 43817.1 ms | 41692.2 ms | 2124.9 ms | 14431.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43461.5 ms | 42176.0 ms | 1285.5 ms | 36339.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35464.7 ms | 34082.9 ms | 1381.8 ms | 11299.6 ms |
| Gorm_schema | LLGoNoLTO | 34520.5 ms | 33090.0 ms | 1430.5 ms | 11128.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33431.6 ms | 32211.5 ms | 1220.1 ms | 26285.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33276.8 ms | 32044.1 ms | 1232.7 ms | 26097.1 ms |
| K8s_workqueue | LLGoNoLTO | 24585.5 ms | 22673.3 ms | 1912.2 ms | 8996.0 ms |
| Etcdctl | Go | 16630.3 ms | 15885.9 ms | 744.4 ms | 5592.3 ms |
| Toml | LLGoNoLTO | 13209.9 ms | 11986.2 ms | 1223.7 ms | 4989.4 ms |
| Dustin_humanize | LLGoNoLTO | 12362.0 ms | 11195.4 ms | 1166.6 ms | 4960.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11872.8 ms | 10753.1 ms | 1119.7 ms | 4843.5 ms |
| XGo | Go | 9215.8 ms | 8702.2 ms | 513.6 ms | 3543.3 ms |
| Aws_restjson | Go | 7515.1 ms | 6998.8 ms | 516.3 ms | 3007.9 ms |
| Gorm_schema | Go | 5512.6 ms | 5226.8 ms | 285.8 ms | 2102.4 ms |
| Uber_zap | Go | 2970.0 ms | 2767.6 ms | 202.3 ms | 1302.6 ms |
| K8s_workqueue | Go | 1800.4 ms | 1611.1 ms | 189.3 ms | 825.0 ms |
| Dustin_humanize | Go | 642.7 ms | 547.3 ms | 95.4 ms | 315.6 ms |
| Toml | Go | 539.1 ms | 425.0 ms | 114.0 ms | 297.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1160052.9 ms | 806583.1 ms | 8 |
| LLGoFullLTOGlobalDCE | 1043535.2 ms | 721686.6 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1034320.2 ms | 711754.0 ms | 8 |
| LLGoDeadcodeDrop | 654403.0 ms | 211832.8 ms | 8 |
| LLGoNoLTO | 652287.9 ms | 207539.9 ms | 8 |
| Go | 44826.0 ms | 16986.8 ms | 8 |

Dependency download details are in `download-timings.log`.
