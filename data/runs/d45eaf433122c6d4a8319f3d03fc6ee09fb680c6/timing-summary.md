## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 451228.1 ms | 445552.8 ms | 5675.3 ms | 287612.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 412127.2 ms | 406475.9 ms | 5651.3 ms | 277123.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 401528.9 ms | 396344.3 ms | 5184.6 ms | 234622.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 393848.4 ms | 388160.8 ms | 5687.6 ms | 271324.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 318722.6 ms | 314454.5 ms | 4268.0 ms | 211108.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 317341.4 ms | 313117.0 ms | 4224.4 ms | 212356.5 ms |
| IXGo | LLGoDeadcodeDrop | 304006.7 ms | 299182.3 ms | 4824.3 ms | 94661.1 ms |
| XGo | LLGoDeadcodeDrop | 250185.6 ms | 246155.5 ms | 4030.0 ms | 78008.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 209094.8 ms | 205540.5 ms | 3554.3 ms | 64415.4 ms |
| Etcdctl | LLGoNoLTO | 205691.6 ms | 202170.7 ms | 3520.9 ms | 63481.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 189844.6 ms | 186624.2 ms | 3220.4 ms | 137801.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 176910.4 ms | 173631.5 ms | 3278.9 ms | 136148.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 176371.9 ms | 173118.8 ms | 3253.0 ms | 134007.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 148023.6 ms | 145346.1 ms | 2677.5 ms | 117775.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 143795.2 ms | 140905.4 ms | 2889.8 ms | 99941.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 131086.2 ms | 128260.8 ms | 2825.4 ms | 98734.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 128721.2 ms | 125989.0 ms | 2732.2 ms | 97999.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 113633.5 ms | 110869.4 ms | 2764.0 ms | 91015.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 110143.0 ms | 107458.6 ms | 2684.4 ms | 86947.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104170.6 ms | 101691.7 ms | 2478.9 ms | 85193.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99712.8 ms | 97105.1 ms | 2607.7 ms | 76678.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 99223.1 ms | 96848.5 ms | 2374.6 ms | 61101.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98791.7 ms | 96134.8 ms | 2656.9 ms | 75699.6 ms |
| Gorm_schema | LLGoNoLTO | 97843.1 ms | 95774.6 ms | 2068.5 ms | 40181.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 92213.3 ms | 89796.4 ms | 2416.9 ms | 52701.2 ms |
| IXGo | LLGoNoLTO | 68489.4 ms | 64864.4 ms | 3625.0 ms | 25024.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68203.4 ms | 65789.8 ms | 2413.5 ms | 28590.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67435.3 ms | 65791.9 ms | 1643.4 ms | 52154.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65495.6 ms | 63917.1 ms | 1578.4 ms | 50231.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53984.1 ms | 52406.6 ms | 1577.6 ms | 38676.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 49189.0 ms | 46851.0 ms | 2338.1 ms | 16789.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 48465.3 ms | 46984.3 ms | 1481.0 ms | 37849.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44246.4 ms | 42961.3 ms | 1285.0 ms | 37478.7 ms |
| XGo | LLGoNoLTO | 42510.8 ms | 39937.8 ms | 2573.1 ms | 17695.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 37076.2 ms | 34821.9 ms | 2254.3 ms | 13519.0 ms |
| K8s_workqueue | LLGoNoLTO | 35939.4 ms | 33673.2 ms | 2266.2 ms | 12877.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33335.4 ms | 32006.8 ms | 1328.6 ms | 26482.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33302.0 ms | 32028.8 ms | 1273.3 ms | 26555.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31163.3 ms | 29728.3 ms | 1435.1 ms | 10748.5 ms |
| Aws_restjson | LLGoNoLTO | 30098.5 ms | 27959.8 ms | 2138.7 ms | 11578.6 ms |
| Uber_zap | LLGoNoLTO | 26601.5 ms | 24635.7 ms | 1965.8 ms | 10316.0 ms |
| Toml | LLGoDeadcodeDrop | 21212.1 ms | 19883.2 ms | 1328.8 ms | 8340.6 ms |
| Toml | LLGoNoLTO | 21038.6 ms | 19757.5 ms | 1281.1 ms | 8204.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11956.2 ms | 10828.1 ms | 1128.2 ms | 5283.6 ms |
| Dustin_humanize | LLGoNoLTO | 11774.1 ms | 10603.9 ms | 1170.2 ms | 5228.0 ms |
| IXGo | Go | 1963.7 ms | 1724.8 ms | 238.9 ms | 1172.6 ms |
| Etcdctl | Go | 1458.5 ms | 1261.2 ms | 197.3 ms | 841.2 ms |
| XGo | Go | 1053.6 ms | 909.0 ms | 144.6 ms | 601.8 ms |
| Aws_restjson | Go | 835.9 ms | 700.4 ms | 135.5 ms | 468.7 ms |
| K8s_workqueue | Go | 761.9 ms | 635.2 ms | 126.7 ms | 435.9 ms |
| Uber_zap | Go | 687.8 ms | 559.0 ms | 128.8 ms | 393.2 ms |
| Gorm_schema | Go | 543.9 ms | 450.0 ms | 93.9 ms | 304.6 ms |
| Dustin_humanize | Go | 531.9 ms | 398.9 ms | 133.0 ms | 257.2 ms |
| Toml | Go | 521.0 ms | 407.4 ms | 113.6 ms | 292.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1522212.4 ms | 1080836.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1471095.2 ms | 1019938.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1460394.3 ms | 1014548.6 ms | 9 |
| LLGoDeadcodeDrop | 982087.2 ms | 320356.4 ms | 9 |
| LLGoNoLTO | 539987.0 ms | 194587.5 ms | 9 |
| Go | 8358.2 ms | 4767.5 ms | 9 |

Dependency download details are in `download-timings.log`.
