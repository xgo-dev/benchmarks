## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 449194.4 ms | 444228.5 ms | 4965.8 ms | 413976.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 421055.1 ms | 416260.6 ms | 4794.5 ms | 387461.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 419243.8 ms | 414509.1 ms | 4734.7 ms | 386118.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 383994.4 ms | 378039.2 ms | 5955.3 ms | 334703.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 347141.6 ms | 343481.4 ms | 3660.2 ms | 306411.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 329067.8 ms | 325639.2 ms | 3428.6 ms | 298700.4 ms |
| IXGo | LLGoDeadcodeDrop | 307826.7 ms | 301320.0 ms | 6506.7 ms | 240839.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 297970.1 ms | 292807.8 ms | 5162.3 ms | 281911.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 228273.5 ms | 223535.3 ms | 4738.2 ms | 222246.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 217066.7 ms | 213322.2 ms | 3744.6 ms | 203085.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 210341.1 ms | 205900.8 ms | 4440.3 ms | 205594.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 205763.2 ms | 202828.9 ms | 2934.3 ms | 193362.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 203863.2 ms | 201046.6 ms | 2816.6 ms | 209040.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 202143.3 ms | 199199.2 ms | 2944.2 ms | 187581.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 197718.3 ms | 193057.2 ms | 4661.0 ms | 193722.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 155092.5 ms | 152540.9 ms | 2551.6 ms | 151236.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 151609.2 ms | 149043.4 ms | 2565.7 ms | 145515.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104787.9 ms | 102441.3 ms | 2346.6 ms | 89810.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104454.2 ms | 102131.2 ms | 2323.0 ms | 89901.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97360.8 ms | 95377.7 ms | 1983.1 ms | 86390.9 ms |
| IXGo | LLGoNoLTO | 95024.8 ms | 92227.0 ms | 2797.8 ms | 50255.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 90521.2 ms | 88539.1 ms | 1982.2 ms | 77878.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 82843.3 ms | 80996.3 ms | 1847.0 ms | 92624.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82062.3 ms | 79530.0 ms | 2532.3 ms | 66582.6 ms |
| Etcdctl | LLGoNoLTO | 82040.8 ms | 79522.7 ms | 2518.1 ms | 42491.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 81086.3 ms | 78562.1 ms | 2524.2 ms | 93374.0 ms |
| XGo | LLGoDeadcodeDrop | 71426.9 ms | 69227.2 ms | 2199.7 ms | 42884.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 69323.3 ms | 67717.4 ms | 1605.9 ms | 59279.0 ms |
| XGo | LLGoNoLTO | 69155.5 ms | 66789.4 ms | 2366.2 ms | 57391.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68604.6 ms | 67174.9 ms | 1429.8 ms | 61376.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 63337.3 ms | 61853.9 ms | 1483.3 ms | 67133.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57500.7 ms | 56163.0 ms | 1337.7 ms | 49664.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 51455.3 ms | 50210.6 ms | 1244.7 ms | 53943.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48120.1 ms | 46868.4 ms | 1251.7 ms | 43131.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 47297.4 ms | 46036.3 ms | 1261.0 ms | 57651.7 ms |
| Aws_restjson | LLGoNoLTO | 44029.6 ms | 42041.0 ms | 1988.5 ms | 41035.7 ms |
| IXGo | Go | 43133.1 ms | 39862.2 ms | 3270.9 ms | 12577.4 ms |
| K8s_workqueue | LLGoNoLTO | 40428.6 ms | 38295.6 ms | 2133.0 ms | 32926.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 37066.0 ms | 35197.8 ms | 1868.2 ms | 32605.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35059.1 ms | 33674.2 ms | 1384.9 ms | 37090.9 ms |
| Uber_zap | LLGoNoLTO | 33455.3 ms | 31573.7 ms | 1881.6 ms | 20132.3 ms |
| Gorm_schema | LLGoNoLTO | 28890.5 ms | 27656.9 ms | 1233.6 ms | 20859.8 ms |
| Toml | LLGoNoLTO | 24129.2 ms | 22882.9 ms | 1246.4 ms | 27472.3 ms |
| Toml | LLGoDeadcodeDrop | 21591.6 ms | 20441.8 ms | 1149.8 ms | 16595.9 ms |
| Etcdctl | Go | 18515.0 ms | 17521.8 ms | 993.2 ms | 14272.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13300.1 ms | 12253.4 ms | 1046.7 ms | 6664.7 ms |
| Dustin_humanize | LLGoNoLTO | 13071.2 ms | 12038.9 ms | 1032.3 ms | 8230.3 ms |
| XGo | Go | 7259.8 ms | 6798.6 ms | 461.2 ms | 5950.4 ms |
| Gorm_schema | Go | 6564.6 ms | 6148.4 ms | 416.2 ms | 7336.2 ms |
| Aws_restjson | Go | 5840.2 ms | 5343.8 ms | 496.4 ms | 7222.9 ms |
| Uber_zap | Go | 2944.7 ms | 2740.2 ms | 204.5 ms | 1320.1 ms |
| K8s_workqueue | Go | 1940.2 ms | 1672.8 ms | 267.3 ms | 1359.6 ms |
| Toml | Go | 698.6 ms | 598.0 ms | 100.6 ms | 1423.9 ms |
| Dustin_humanize | Go | 657.8 ms | 567.9 ms | 89.8 ms | 345.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1668226.5 ms | 1564353.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1657372.4 ms | 1540451.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1645846.9 ms | 1541213.0 ms | 9 |
| LLGoDeadcodeDrop | 983117.8 ms | 840071.3 ms | 9 |
| LLGoNoLTO | 430225.4 ms | 300795.7 ms | 9 |
| Go | 87553.8 ms | 51808.7 ms | 9 |

Dependency download details are in `download-timings.log`.
