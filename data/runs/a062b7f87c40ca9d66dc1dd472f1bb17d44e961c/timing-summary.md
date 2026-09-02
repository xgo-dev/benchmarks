## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 606807.1 ms | 600072.7 ms | 6734.4 ms | 404735.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 582957.6 ms | 576591.8 ms | 6365.8 ms | 396492.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 578953.6 ms | 572445.5 ms | 6508.1 ms | 395954.3 ms |
| IXGo | LLGoNoLTO | 370279.8 ms | 364712.4 ms | 5567.4 ms | 136837.6 ms |
| IXGo | LLGoDeadcodeDrop | 357963.4 ms | 352339.8 ms | 5623.6 ms | 130622.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 266580.1 ms | 261841.6 ms | 4738.5 ms | 162499.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 264721.5 ms | 260259.0 ms | 4462.4 ms | 160972.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 262587.1 ms | 258152.2 ms | 4434.9 ms | 160711.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 195993.0 ms | 191968.9 ms | 4024.1 ms | 65749.1 ms |
| Etcdctl | LLGoNoLTO | 195532.3 ms | 191648.3 ms | 3883.9 ms | 66266.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 179755.9 ms | 176493.3 ms | 3262.6 ms | 125668.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 178483.3 ms | 175357.7 ms | 3125.6 ms | 126340.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 177406.7 ms | 174240.0 ms | 3166.7 ms | 125045.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 151512.5 ms | 149253.2 ms | 2259.3 ms | 117000.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141740.4 ms | 139422.9 ms | 2317.5 ms | 105069.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 138718.0 ms | 136513.9 ms | 2204.1 ms | 102692.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109441.5 ms | 107819.4 ms | 1622.1 ms | 84309.6 ms |
| XGo | LLGoDeadcodeDrop | 109093.6 ms | 106422.0 ms | 2671.6 ms | 42827.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105130.6 ms | 103457.6 ms | 1673.0 ms | 82374.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 105010.6 ms | 103317.3 ms | 1693.3 ms | 82499.5 ms |
| XGo | LLGoNoLTO | 104830.1 ms | 102157.1 ms | 2673.0 ms | 40651.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101550.9 ms | 99790.3 ms | 1760.6 ms | 75529.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99730.7 ms | 98089.0 ms | 1641.7 ms | 73986.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 91408.4 ms | 89834.5 ms | 1573.9 ms | 68147.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82727.0 ms | 80800.7 ms | 1926.3 ms | 39668.5 ms |
| Aws_restjson | LLGoNoLTO | 81303.0 ms | 79475.1 ms | 1827.8 ms | 39196.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65163.1 ms | 63911.7 ms | 1251.3 ms | 46881.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64729.1 ms | 63506.5 ms | 1222.5 ms | 46191.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 58591.9 ms | 57139.6 ms | 1452.2 ms | 26512.9 ms |
| Uber_zap | LLGoNoLTO | 57678.4 ms | 56215.9 ms | 1462.4 ms | 26246.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54509.8 ms | 53269.1 ms | 1240.7 ms | 35732.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52937.9 ms | 51862.6 ms | 1075.3 ms | 41300.6 ms |
| K8s_workqueue | LLGoNoLTO | 49076.1 ms | 47789.1 ms | 1287.0 ms | 23248.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49073.8 ms | 47823.2 ms | 1250.6 ms | 23235.3 ms |
| IXGo | Go | 45162.0 ms | 42287.1 ms | 2874.9 ms | 13198.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44827.2 ms | 43890.6 ms | 936.6 ms | 33219.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 44256.4 ms | 43294.4 ms | 962.0 ms | 32902.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36140.6 ms | 35063.7 ms | 1076.9 ms | 12678.7 ms |
| Gorm_schema | LLGoNoLTO | 35701.9 ms | 34618.2 ms | 1083.7 ms | 12456.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33281.8 ms | 32502.5 ms | 779.3 ms | 26510.6 ms |
| Etcdctl | Go | 33100.1 ms | 31177.1 ms | 1922.9 ms | 9919.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25115.1 ms | 24390.5 ms | 724.6 ms | 17687.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24458.1 ms | 23770.8 ms | 687.3 ms | 17615.4 ms |
| Toml | LLGoDeadcodeDrop | 22070.8 ms | 21245.0 ms | 825.8 ms | 8299.8 ms |
| Toml | LLGoNoLTO | 21647.9 ms | 20777.7 ms | 870.2 ms | 7991.5 ms |
| XGo | Go | 19166.6 ms | 17974.2 ms | 1192.4 ms | 5547.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12386.6 ms | 11748.6 ms | 638.0 ms | 5412.4 ms |
| Dustin_humanize | LLGoNoLTO | 12241.4 ms | 11636.3 ms | 605.1 ms | 5287.9 ms |
| Aws_restjson | Go | 7819.0 ms | 7206.4 ms | 612.6 ms | 3162.3 ms |
| Gorm_schema | Go | 5726.7 ms | 5315.2 ms | 411.5 ms | 2174.6 ms |
| Uber_zap | Go | 5285.3 ms | 4881.9 ms | 403.4 ms | 2037.9 ms |
| K8s_workqueue | Go | 4653.3 ms | 4185.3 ms | 468.1 ms | 1634.4 ms |
| Toml | Go | 2013.6 ms | 1783.9 ms | 229.7 ms | 911.8 ms |
| Dustin_humanize | Go | 810.9 ms | 677.0 ms | 133.9 ms | 373.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1541375.5 ms | 1082046.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1512295.0 ms | 1028288.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1498104.7 ms | 1037735.3 ms | 9 |
| LLGoNoLTO | 928290.8 ms | 358183.4 ms | 9 |
| LLGoDeadcodeDrop | 924040.6 ms | 355006.6 ms | 9 |
| Go | 123737.5 ms | 38959.5 ms | 9 |

Dependency download details are in `download-timings.log`.
