## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 308887.4 ms | 305122.4 ms | 3765.0 ms | 268066.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 303959.0 ms | 300346.1 ms | 3612.9 ms | 263765.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 300226.6 ms | 296631.2 ms | 3595.3 ms | 265211.6 ms |
| XGo | LLGoNoLTO | 280316.5 ms | 274599.3 ms | 5717.2 ms | 277328.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 228391.3 ms | 224293.9 ms | 4097.4 ms | 200698.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 215581.4 ms | 212387.3 ms | 3194.1 ms | 220318.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 199654.9 ms | 196587.5 ms | 3067.5 ms | 171710.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 195698.7 ms | 192784.1 ms | 2914.6 ms | 167903.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 183100.2 ms | 180169.7 ms | 2930.5 ms | 155931.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 177188.0 ms | 174540.9 ms | 2647.1 ms | 164045.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 166999.8 ms | 163464.5 ms | 3535.2 ms | 149000.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 163582.6 ms | 160590.6 ms | 2992.0 ms | 170099.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 160811.0 ms | 157724.9 ms | 3086.0 ms | 167221.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 159669.9 ms | 156726.5 ms | 2943.4 ms | 136027.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 137891.8 ms | 134972.6 ms | 2919.2 ms | 133085.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 129412.6 ms | 126022.3 ms | 3390.4 ms | 165413.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 107024.8 ms | 104554.4 ms | 2470.4 ms | 94350.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97961.5 ms | 95579.4 ms | 2382.1 ms | 80789.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 87354.2 ms | 84897.6 ms | 2456.6 ms | 80782.1 ms |
| Etcdctl | LLGoNoLTO | 80304.7 ms | 77637.6 ms | 2667.1 ms | 42950.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 77253.6 ms | 75393.2 ms | 1860.5 ms | 65853.1 ms |
| XGo | LLGoDeadcodeDrop | 71562.0 ms | 69223.6 ms | 2338.4 ms | 43988.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68211.4 ms | 66757.6 ms | 1453.8 ms | 58670.1 ms |
| Aws_restjson | LLGoNoLTO | 64330.7 ms | 62232.6 ms | 2098.1 ms | 45503.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58882.6 ms | 57490.0 ms | 1392.6 ms | 50984.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 56743.6 ms | 55324.5 ms | 1419.1 ms | 47282.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 52982.0 ms | 51433.5 ms | 1548.5 ms | 57745.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 52156.3 ms | 50600.5 ms | 1555.7 ms | 46156.0 ms |
| Uber_zap | LLGoNoLTO | 49136.3 ms | 46794.9 ms | 2341.4 ms | 28717.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 48809.7 ms | 47464.7 ms | 1345.0 ms | 42282.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 47478.2 ms | 45385.7 ms | 2092.5 ms | 29482.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 42979.4 ms | 40708.0 ms | 2271.4 ms | 39528.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 39235.9 ms | 37836.9 ms | 1399.0 ms | 33761.6 ms |
| Etcdctl | Go | 35815.6 ms | 33729.6 ms | 2086.0 ms | 15033.8 ms |
| K8s_workqueue | LLGoNoLTO | 34699.1 ms | 32657.1 ms | 2042.0 ms | 21944.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31318.9 ms | 29939.9 ms | 1379.0 ms | 24176.8 ms |
| Gorm_schema | LLGoNoLTO | 28671.5 ms | 27315.6 ms | 1355.9 ms | 18965.3 ms |
| Toml | LLGoDeadcodeDrop | 24776.0 ms | 23433.3 ms | 1342.7 ms | 18217.0 ms |
| Toml | LLGoNoLTO | 15629.9 ms | 14479.6 ms | 1150.3 ms | 8398.9 ms |
| Dustin_humanize | LLGoNoLTO | 13531.8 ms | 12405.7 ms | 1126.1 ms | 6711.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13209.3 ms | 12065.7 ms | 1143.5 ms | 6825.7 ms |
| XGo | Go | 9160.5 ms | 8672.6 ms | 488.0 ms | 3690.8 ms |
| Aws_restjson | Go | 5404.7 ms | 4923.4 ms | 481.3 ms | 2127.7 ms |
| Gorm_schema | Go | 4076.6 ms | 3847.0 ms | 229.6 ms | 2972.9 ms |
| Uber_zap | Go | 3085.0 ms | 2868.5 ms | 216.5 ms | 1380.6 ms |
| K8s_workqueue | Go | 1992.5 ms | 1804.2 ms | 188.3 ms | 943.8 ms |
| Dustin_humanize | Go | 966.4 ms | 751.6 ms | 214.8 ms | 878.4 ms |
| Toml | Go | 813.1 ms | 666.3 ms | 146.7 ms | 1250.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1183641.0 ms | 1122275.0 ms | 8 |
| LLGoFullLTONoGlobalDCE | 1176286.2 ms | 1096583.6 ms | 8 |
| LLGoFullLTOGlobalDCE | 1101997.9 ms | 956818.4 ms | 8 |
| LLGoNoLTO | 566620.5 ms | 450519.5 ms | 8 |
| LLGoDeadcodeDrop | 547069.2 ms | 443699.0 ms | 8 |
| Go | 61314.5 ms | 28278.0 ms | 8 |

Dependency download details are in `download-timings.log`.
