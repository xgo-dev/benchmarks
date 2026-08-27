## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 899490.6 ms | 892029.5 ms | 7461.1 ms | 651114.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 844978.2 ms | 837290.7 ms | 7687.4 ms | 605052.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 791766.9 ms | 784659.8 ms | 7107.1 ms | 584309.0 ms |
| IXGo | LLGoDeadcodeDrop | 440910.3 ms | 434399.1 ms | 6511.2 ms | 162655.0 ms |
| IXGo | LLGoNoLTO | 426086.2 ms | 419541.1 ms | 6545.1 ms | 156862.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 295352.3 ms | 289550.2 ms | 5802.1 ms | 177173.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 284140.8 ms | 278800.1 ms | 5340.7 ms | 168989.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 282568.7 ms | 277336.2 ms | 5232.4 ms | 169464.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 218551.0 ms | 213585.9 ms | 4965.1 ms | 72434.0 ms |
| Etcdctl | LLGoNoLTO | 205159.9 ms | 200491.4 ms | 4668.4 ms | 67602.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181547.6 ms | 177990.3 ms | 3557.3 ms | 129597.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 181404.9 ms | 177910.9 ms | 3494.0 ms | 129309.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 179288.4 ms | 176835.8 ms | 2452.6 ms | 146169.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177418.7 ms | 174146.1 ms | 3272.6 ms | 127889.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 150861.6 ms | 148537.3 ms | 2324.4 ms | 116664.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 147026.4 ms | 144685.8 ms | 2340.6 ms | 113069.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115208.0 ms | 113328.9 ms | 1879.2 ms | 89976.7 ms |
| XGo | LLGoDeadcodeDrop | 105852.9 ms | 102835.8 ms | 3017.1 ms | 41631.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105219.6 ms | 103485.8 ms | 1733.9 ms | 82939.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 105055.2 ms | 103283.8 ms | 1771.5 ms | 84006.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 102717.4 ms | 100826.5 ms | 1890.9 ms | 77619.4 ms |
| XGo | LLGoNoLTO | 102115.8 ms | 99148.9 ms | 2967.0 ms | 40127.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98634.7 ms | 96871.5 ms | 1763.2 ms | 74138.1 ms |
| Aws_restjson | LLGoNoLTO | 94168.2 ms | 92064.3 ms | 2104.0 ms | 53167.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90142.2 ms | 88445.6 ms | 1696.7 ms | 68352.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82238.0 ms | 80118.9 ms | 2119.1 ms | 41286.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64780.7 ms | 63398.6 ms | 1382.0 ms | 46972.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64544.7 ms | 63211.6 ms | 1333.1 ms | 47184.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 55137.5 ms | 53651.7 ms | 1485.8 ms | 24849.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54722.5 ms | 53608.8 ms | 1113.6 ms | 43557.1 ms |
| Uber_zap | LLGoNoLTO | 54062.7 ms | 52666.2 ms | 1396.5 ms | 24581.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51999.0 ms | 50769.0 ms | 1230.0 ms | 34589.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48356.5 ms | 46759.5 ms | 1597.0 ms | 23183.3 ms |
| K8s_workqueue | LLGoNoLTO | 46210.4 ms | 44716.5 ms | 1493.9 ms | 22145.3 ms |
| IXGo | Go | 45936.9 ms | 42526.9 ms | 3410.0 ms | 13325.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 42950.4 ms | 41960.2 ms | 990.2 ms | 32151.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42863.4 ms | 41835.4 ms | 1028.0 ms | 32067.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34802.6 ms | 33619.5 ms | 1183.1 ms | 12266.2 ms |
| Gorm_schema | LLGoNoLTO | 34054.8 ms | 32873.7 ms | 1181.2 ms | 11953.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33552.4 ms | 32735.1 ms | 817.3 ms | 27302.6 ms |
| Etcdctl | Go | 32485.7 ms | 30285.8 ms | 2199.8 ms | 9760.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24828.0 ms | 24094.5 ms | 733.5 ms | 18302.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24316.4 ms | 23589.9 ms | 726.6 ms | 17772.0 ms |
| Toml | LLGoNoLTO | 21639.6 ms | 20739.9 ms | 899.7 ms | 8208.0 ms |
| Toml | LLGoDeadcodeDrop | 21173.8 ms | 20281.8 ms | 892.0 ms | 7855.0 ms |
| XGo | Go | 18575.7 ms | 17278.6 ms | 1297.1 ms | 5754.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12163.7 ms | 11500.2 ms | 663.5 ms | 5335.6 ms |
| Dustin_humanize | LLGoNoLTO | 12033.7 ms | 11406.0 ms | 627.7 ms | 5246.5 ms |
| Aws_restjson | Go | 7743.2 ms | 7044.6 ms | 698.6 ms | 3161.1 ms |
| Gorm_schema | Go | 5830.0 ms | 5384.0 ms | 446.0 ms | 2273.4 ms |
| Uber_zap | Go | 5244.1 ms | 4805.0 ms | 439.1 ms | 2063.0 ms |
| K8s_workqueue | Go | 4622.3 ms | 4134.8 ms | 487.6 ms | 1670.4 ms |
| Toml | Go | 2084.3 ms | 1824.3 ms | 260.0 ms | 990.1 ms |
| Dustin_humanize | Go | 808.3 ms | 662.8 ms | 145.5 ms | 393.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1855882.4 ms | 1323532.1 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1804125.5 ms | 1319860.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1777371.8 ms | 1252342.6 ms | 9 |
| LLGoDeadcodeDrop | 1019186.3 ms | 391496.3 ms | 9 |
| LLGoNoLTO | 995531.4 ms | 389894.9 ms | 9 |
| Go | 123330.6 ms | 39391.2 ms | 9 |

Dependency download details are in `download-timings.log`.
