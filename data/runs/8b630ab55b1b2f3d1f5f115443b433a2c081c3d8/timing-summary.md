## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 848231.2 ms | 842590.5 ms | 5640.8 ms | 608205.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 840586.6 ms | 835139.3 ms | 5447.3 ms | 608137.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 829557.4 ms | 824310.2 ms | 5247.2 ms | 600828.5 ms |
| IXGo | LLGoDeadcodeDrop | 442843.7 ms | 437933.8 ms | 4909.8 ms | 147272.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 314263.4 ms | 309718.5 ms | 4544.9 ms | 204064.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 312990.2 ms | 308732.9 ms | 4257.3 ms | 206396.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 312887.0 ms | 308277.9 ms | 4609.2 ms | 203442.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 223979.3 ms | 220636.9 ms | 3342.4 ms | 135329.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 218981.7 ms | 215185.8 ms | 3796.0 ms | 134967.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 214518.5 ms | 211050.9 ms | 3467.6 ms | 157723.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 208495.0 ms | 204682.1 ms | 3812.9 ms | 70013.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 206132.9 ms | 202322.7 ms | 3810.2 ms | 125343.6 ms |
| Etcdctl | LLGoNoLTO | 205015.8 ms | 201402.8 ms | 3613.0 ms | 69071.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 203748.1 ms | 200135.3 ms | 3612.8 ms | 156382.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 203486.0 ms | 199993.4 ms | 3492.6 ms | 157767.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 174209.5 ms | 171376.3 ms | 2833.2 ms | 142005.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 161660.5 ms | 158759.7 ms | 2900.8 ms | 124106.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 140391.9 ms | 137607.6 ms | 2784.3 ms | 47629.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 126975.1 ms | 124310.3 ms | 2664.8 ms | 105215.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 125479.6 ms | 122800.7 ms | 2678.8 ms | 102957.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 125441.9 ms | 122688.4 ms | 2753.5 ms | 102770.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 117362.2 ms | 114756.3 ms | 2605.9 ms | 92859.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 110411.6 ms | 108051.3 ms | 2360.3 ms | 71557.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 106522.4 ms | 104318.7 ms | 2203.6 ms | 36933.0 ms |
| XGo | LLGoDeadcodeDrop | 99991.6 ms | 97106.0 ms | 2885.6 ms | 39972.0 ms |
| Aws_restjson | LLGoNoLTO | 84447.5 ms | 81994.3 ms | 2453.2 ms | 40462.6 ms |
| IXGo | LLGoNoLTO | 83416.2 ms | 79619.4 ms | 3796.8 ms | 35042.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82289.5 ms | 79789.7 ms | 2499.8 ms | 41246.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 77113.8 ms | 75400.1 ms | 1713.7 ms | 61292.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 66027.8 ms | 64327.3 ms | 1700.6 ms | 47673.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 65517.0 ms | 63958.4 ms | 1558.6 ms | 54711.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 54943.7 ms | 53408.3 ms | 1535.4 ms | 43703.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 54583.6 ms | 53091.6 ms | 1492.0 ms | 43586.3 ms |
| XGo | LLGoNoLTO | 54514.2 ms | 51959.0 ms | 2555.2 ms | 27173.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46383.1 ms | 45020.9 ms | 1362.2 ms | 39291.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46294.2 ms | 44135.1 ms | 2159.1 ms | 22131.9 ms |
| Uber_zap | LLGoNoLTO | 38050.0 ms | 35952.9 ms | 2097.0 ms | 19608.6 ms |
| K8s_workqueue | LLGoNoLTO | 35881.8 ms | 33839.5 ms | 2042.3 ms | 19125.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34620.4 ms | 33299.3 ms | 1321.0 ms | 27328.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34459.2 ms | 33123.9 ms | 1335.2 ms | 27188.2 ms |
| Toml | LLGoDeadcodeDrop | 22187.8 ms | 20858.2 ms | 1329.5 ms | 8736.5 ms |
| Gorm_schema | LLGoNoLTO | 17485.8 ms | 16020.7 ms | 1465.1 ms | 7174.5 ms |
| Toml | LLGoNoLTO | 14150.6 ms | 12868.5 ms | 1282.1 ms | 5846.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12969.9 ms | 11775.7 ms | 1194.2 ms | 5709.3 ms |
| Dustin_humanize | LLGoNoLTO | 11750.4 ms | 10514.0 ms | 1236.4 ms | 4886.9 ms |
| IXGo | Go | 2083.6 ms | 1860.2 ms | 223.4 ms | 1198.8 ms |
| Etcdctl | Go | 1635.3 ms | 1375.9 ms | 259.4 ms | 904.1 ms |
| XGo | Go | 1156.3 ms | 990.8 ms | 165.6 ms | 666.0 ms |
| Aws_restjson | Go | 852.8 ms | 737.1 ms | 115.7 ms | 480.0 ms |
| K8s_workqueue | Go | 813.9 ms | 683.9 ms | 130.0 ms | 499.0 ms |
| Uber_zap | Go | 724.5 ms | 601.7 ms | 122.8 ms | 425.1 ms |
| Toml | Go | 568.6 ms | 469.5 ms | 99.1 ms | 319.3 ms |
| Gorm_schema | Go | 561.8 ms | 460.6 ms | 101.1 ms | 319.0 ms |
| Dustin_humanize | Go | 391.1 ms | 307.1 ms | 84.1 ms | 214.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 2055213.8 ms | 1502475.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 2024996.9 ms | 1442017.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 2024340.4 ms | 1440344.3 ms | 9 |
| LLGoDeadcodeDrop | 1161985.9 ms | 419644.4 ms | 9 |
| LLGoNoLTO | 544712.2 ms | 228392.5 ms | 9 |
| Go | 8788.0 ms | 5025.8 ms | 9 |

Dependency download details are in `download-timings.log`.
