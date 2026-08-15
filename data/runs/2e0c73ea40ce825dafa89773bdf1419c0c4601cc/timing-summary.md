## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 418794.4 ms | 412348.8 ms | 6445.6 ms | 237607.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 400343.5 ms | 394610.2 ms | 5733.3 ms | 276197.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 397175.5 ms | 392011.6 ms | 5163.9 ms | 236127.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 377004.1 ms | 371322.9 ms | 5681.2 ms | 269700.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 368462.9 ms | 363022.6 ms | 5440.3 ms | 263161.2 ms |
| IXGo | LLGoNoLTO | 320596.1 ms | 314075.6 ms | 6520.4 ms | 99284.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 308965.2 ms | 305045.8 ms | 3919.4 ms | 205673.1 ms |
| IXGo | LLGoDeadcodeDrop | 289106.1 ms | 284050.3 ms | 5055.8 ms | 90300.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 276488.0 ms | 271387.6 ms | 5100.5 ms | 166163.0 ms |
| Aws_restjson | LLGoNoLTO | 233897.2 ms | 229139.2 ms | 4758.0 ms | 74646.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 213330.2 ms | 209770.4 ms | 3559.7 ms | 64430.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 207965.6 ms | 204504.0 ms | 3461.6 ms | 61138.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 183559.6 ms | 180426.5 ms | 3133.1 ms | 133201.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 163683.1 ms | 160523.9 ms | 3159.2 ms | 129181.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 141077.3 ms | 138409.9 ms | 2667.4 ms | 110958.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127066.5 ms | 124484.8 ms | 2581.7 ms | 95259.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124398.2 ms | 121832.2 ms | 2565.9 ms | 94104.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109853.4 ms | 107437.8 ms | 2415.5 ms | 87084.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101166.8 ms | 98634.5 ms | 2532.4 ms | 81243.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 98612.9 ms | 96103.3 ms | 2509.6 ms | 80533.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 98329.6 ms | 96022.2 ms | 2307.4 ms | 80206.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92510.2 ms | 90136.0 ms | 2374.2 ms | 69487.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92407.9 ms | 90027.9 ms | 2380.0 ms | 68568.4 ms |
| Etcdctl | LLGoNoLTO | 87307.5 ms | 84253.8 ms | 3053.8 ms | 30074.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66409.9 ms | 64920.3 ms | 1489.7 ms | 49530.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65521.7 ms | 63921.7 ms | 1600.0 ms | 50270.5 ms |
| XGo | LLGoDeadcodeDrop | 64392.5 ms | 61821.9 ms | 2570.6 ms | 23058.1 ms |
| XGo | LLGoNoLTO | 63545.5 ms | 61027.3 ms | 2518.2 ms | 22427.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58846.8 ms | 57317.0 ms | 1529.8 ms | 47483.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53223.4 ms | 51632.9 ms | 1590.6 ms | 37627.2 ms |
| Uber_zap | LLGoNoLTO | 49027.8 ms | 46700.7 ms | 2327.0 ms | 16079.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 46336.1 ms | 44864.0 ms | 1472.1 ms | 35459.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45718.0 ms | 44358.7 ms | 1359.3 ms | 35181.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 43494.3 ms | 41484.1 ms | 2010.2 ms | 14277.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42706.5 ms | 41493.2 ms | 1213.3 ms | 35828.1 ms |
| IXGo | Go | 42140.6 ms | 39614.3 ms | 2526.4 ms | 12388.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 37002.1 ms | 35705.6 ms | 1296.5 ms | 26897.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36578.2 ms | 35323.3 ms | 1254.9 ms | 26640.2 ms |
| Gorm_schema | LLGoNoLTO | 36013.2 ms | 34341.9 ms | 1671.3 ms | 11913.0 ms |
| K8s_workqueue | LLGoNoLTO | 31943.9 ms | 29699.8 ms | 2244.2 ms | 10975.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30820.1 ms | 29464.7 ms | 1355.4 ms | 10148.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29285.3 ms | 27325.4 ms | 1959.9 ms | 10213.2 ms |
| Toml | LLGoDeadcodeDrop | 19419.6 ms | 18131.4 ms | 1288.2 ms | 7116.8 ms |
| Etcdctl | Go | 16728.2 ms | 15965.6 ms | 762.6 ms | 5582.7 ms |
| Toml | LLGoNoLTO | 13151.4 ms | 12011.2 ms | 1140.1 ms | 4957.6 ms |
| Dustin_humanize | LLGoNoLTO | 12050.0 ms | 10862.8 ms | 1187.2 ms | 4838.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11862.5 ms | 10755.4 ms | 1107.2 ms | 4809.4 ms |
| XGo | Go | 6318.8 ms | 5949.5 ms | 369.4 ms | 2408.4 ms |
| Aws_restjson | Go | 4959.0 ms | 4590.3 ms | 368.7 ms | 1871.0 ms |
| Gorm_schema | Go | 3420.8 ms | 3230.1 ms | 190.7 ms | 1483.6 ms |
| Uber_zap | Go | 2923.1 ms | 2727.5 ms | 195.5 ms | 1276.6 ms |
| Toml | Go | 1905.9 ms | 1678.3 ms | 227.6 ms | 883.7 ms |
| K8s_workqueue | Go | 1771.8 ms | 1598.9 ms | 172.9 ms | 801.4 ms |
| Dustin_humanize | Go | 648.6 ms | 547.9 ms | 100.7 ms | 325.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1473088.7 ms | 1047866.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1433900.3 ms | 985571.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1425252.9 ms | 995940.8 ms | 9 |
| LLGoDeadcodeDrop | 909676.3 ms | 285492.3 ms | 9 |
| LLGoNoLTO | 847532.6 ms | 275197.6 ms | 9 |
| Go | 80816.8 ms | 27021.6 ms | 9 |

Dependency download details are in `download-timings.log`.
