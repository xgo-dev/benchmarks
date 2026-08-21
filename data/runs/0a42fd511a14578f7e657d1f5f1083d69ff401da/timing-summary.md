## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 389676.4 ms | 384476.5 ms | 5199.9 ms | 230988.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 384659.9 ms | 379318.9 ms | 5341.0 ms | 261159.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 382393.8 ms | 376907.8 ms | 5486.0 ms | 260679.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 376199.1 ms | 370705.5 ms | 5493.7 ms | 257098.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 310497.9 ms | 306492.7 ms | 4005.2 ms | 203890.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 307596.4 ms | 303694.2 ms | 3902.2 ms | 204302.5 ms |
| IXGo | LLGoDeadcodeDrop | 275878.4 ms | 270855.7 ms | 5022.7 ms | 84709.8 ms |
| IXGo | LLGoNoLTO | 267355.3 ms | 262602.8 ms | 4752.4 ms | 85180.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 227681.4 ms | 223891.2 ms | 3790.2 ms | 135295.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 208868.6 ms | 205538.5 ms | 3330.1 ms | 64109.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 184376.5 ms | 181034.8 ms | 3341.7 ms | 57272.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 182222.1 ms | 178559.4 ms | 3662.7 ms | 107815.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 172971.0 ms | 169865.6 ms | 3105.5 ms | 133114.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 172374.2 ms | 169143.8 ms | 3230.4 ms | 130834.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 171564.3 ms | 168400.8 ms | 3163.5 ms | 130283.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125484.5 ms | 122895.9 ms | 2588.6 ms | 92991.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124433.9 ms | 121777.0 ms | 2657.0 ms | 93520.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109757.4 ms | 107085.9 ms | 2671.5 ms | 87497.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 107079.4 ms | 104447.0 ms | 2632.4 ms | 84417.9 ms |
| XGo | LLGoDeadcodeDrop | 105056.5 ms | 102419.1 ms | 2637.4 ms | 34467.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103749.0 ms | 101174.8 ms | 2574.3 ms | 84276.8 ms |
| XGo | LLGoNoLTO | 102205.8 ms | 99678.3 ms | 2527.5 ms | 33473.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97563.8 ms | 94973.3 ms | 2590.4 ms | 74726.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 95646.3 ms | 93118.7 ms | 2527.6 ms | 73213.3 ms |
| Etcdctl | LLGoNoLTO | 85499.2 ms | 82286.5 ms | 3212.7 ms | 30614.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 69798.2 ms | 67350.3 ms | 2447.9 ms | 27709.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64479.4 ms | 62906.9 ms | 1572.6 ms | 50057.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63357.8 ms | 61807.6 ms | 1550.2 ms | 48558.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55670.1 ms | 54257.1 ms | 1413.0 ms | 45654.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52504.5 ms | 50941.0 ms | 1563.5 ms | 37587.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 48078.1 ms | 46631.7 ms | 1446.4 ms | 37449.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46837.0 ms | 45368.9 ms | 1468.1 ms | 36554.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42562.4 ms | 41241.8 ms | 1320.5 ms | 36038.3 ms |
| K8s_workqueue | LLGoNoLTO | 36527.1 ms | 34416.3 ms | 2110.8 ms | 12850.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36110.0 ms | 33999.2 ms | 2110.8 ms | 13033.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34454.1 ms | 33080.7 ms | 1373.4 ms | 11440.2 ms |
| Gorm_schema | LLGoNoLTO | 33475.9 ms | 32071.4 ms | 1404.5 ms | 11292.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32741.4 ms | 31517.0 ms | 1224.4 ms | 25872.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32493.4 ms | 31250.6 ms | 1242.8 ms | 25792.6 ms |
| Aws_restjson | LLGoNoLTO | 29554.4 ms | 27384.4 ms | 2170.1 ms | 11292.2 ms |
| Uber_zap | LLGoNoLTO | 26225.0 ms | 24227.9 ms | 1997.1 ms | 10216.5 ms |
| Toml | LLGoDeadcodeDrop | 20440.3 ms | 19143.8 ms | 1296.4 ms | 8033.7 ms |
| Toml | LLGoNoLTO | 20439.2 ms | 19199.3 ms | 1239.9 ms | 7963.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11853.9 ms | 10702.2 ms | 1151.8 ms | 5159.8 ms |
| Dustin_humanize | LLGoNoLTO | 11780.6 ms | 10684.5 ms | 1096.1 ms | 5034.0 ms |
| IXGo | Go | 1973.2 ms | 1748.9 ms | 224.2 ms | 1164.6 ms |
| Etcdctl | Go | 1507.0 ms | 1261.2 ms | 245.9 ms | 816.4 ms |
| XGo | Go | 1103.3 ms | 946.3 ms | 157.1 ms | 605.8 ms |
| Aws_restjson | Go | 814.0 ms | 684.6 ms | 129.4 ms | 450.2 ms |
| K8s_workqueue | Go | 689.1 ms | 578.3 ms | 110.8 ms | 409.0 ms |
| Uber_zap | Go | 663.9 ms | 556.4 ms | 107.5 ms | 368.8 ms |
| Gorm_schema | Go | 533.5 ms | 437.0 ms | 96.5 ms | 286.5 ms |
| Toml | Go | 521.0 ms | 415.4 ms | 105.7 ms | 289.5 ms |
| Dustin_humanize | Go | 358.9 ms | 288.1 ms | 70.8 ms | 186.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1460666.2 ms | 1033334.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1412796.0 ms | 981304.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1406812.5 ms | 975031.0 ms | 9 |
| LLGoDeadcodeDrop | 946836.5 ms | 305935.7 ms | 9 |
| LLGoNoLTO | 613062.5 ms | 207917.6 ms | 9 |
| Go | 8163.9 ms | 4577.3 ms | 9 |

Dependency download details are in `download-timings.log`.
