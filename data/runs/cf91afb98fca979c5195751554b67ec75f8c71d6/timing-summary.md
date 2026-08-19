## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 270815.5 ms | 265614.7 ms | 5200.9 ms | 174622.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 254099.6 ms | 250299.3 ms | 3800.3 ms | 172606.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 246646.6 ms | 242965.0 ms | 3681.6 ms | 165585.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 216128.2 ms | 211596.5 ms | 4531.8 ms | 129245.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 179227.0 ms | 175684.1 ms | 3543.0 ms | 107113.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 162169.1 ms | 159114.3 ms | 3054.8 ms | 49252.2 ms |
| Etcdctl | LLGoNoLTO | 154457.8 ms | 151530.6 ms | 2927.2 ms | 47127.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 154178.5 ms | 151193.9 ms | 2984.6 ms | 114508.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 148318.9 ms | 145448.3 ms | 2870.6 ms | 110572.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 148211.0 ms | 144339.7 ms | 3871.3 ms | 87443.7 ms |
| XGo | LLGoDeadcodeDrop | 141473.3 ms | 138610.3 ms | 2863.0 ms | 42131.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 109162.8 ms | 106838.7 ms | 2324.1 ms | 85172.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 101358.4 ms | 99036.4 ms | 2321.9 ms | 76104.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 90814.4 ms | 88469.7 ms | 2344.6 ms | 70941.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 80756.5 ms | 78541.7 ms | 2214.9 ms | 66871.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 75982.3 ms | 73973.3 ms | 2009.0 ms | 62914.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 75848.8 ms | 73628.1 ms | 2220.7 ms | 57400.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 74101.3 ms | 72086.2 ms | 2015.1 ms | 26141.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 72082.7 ms | 69946.5 ms | 2136.2 ms | 55038.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 53949.0 ms | 51876.5 ms | 2072.5 ms | 23025.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 53891.4 ms | 52490.7 ms | 1400.7 ms | 41465.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 52008.6 ms | 50643.3 ms | 1365.4 ms | 39111.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 43655.6 ms | 42256.0 ms | 1399.6 ms | 31867.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 42651.7 ms | 41405.4 ms | 1246.3 ms | 34995.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 37421.7 ms | 36152.8 ms | 1268.9 ms | 27797.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 36737.9 ms | 35543.6 ms | 1194.4 ms | 28391.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34050.4 ms | 32934.9 ms | 1115.5 ms | 28847.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 33677.2 ms | 31820.4 ms | 1856.8 ms | 11716.3 ms |
| XGo | LLGoNoLTO | 33441.3 ms | 31369.8 ms | 2071.5 ms | 13265.6 ms |
| Uber_zap | LLGoNoLTO | 32216.8 ms | 30443.0 ms | 1773.9 ms | 11170.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 26510.3 ms | 25366.2 ms | 1144.0 ms | 21112.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 26495.2 ms | 25332.7 ms | 1162.4 ms | 21272.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 23698.6 ms | 21918.0 ms | 1780.6 ms | 8541.3 ms |
| Aws_restjson | LLGoNoLTO | 23129.1 ms | 21362.6 ms | 1766.5 ms | 8478.1 ms |
| K8s_workqueue | LLGoNoLTO | 18679.2 ms | 17046.2 ms | 1633.0 ms | 7046.4 ms |
| Toml | LLGoDeadcodeDrop | 14982.0 ms | 13921.2 ms | 1060.8 ms | 5761.3 ms |
| Toml | LLGoNoLTO | 14599.8 ms | 13547.0 ms | 1052.8 ms | 5698.4 ms |
| Etcdctl | Go | 13054.9 ms | 12328.7 ms | 726.2 ms | 4490.2 ms |
| Gorm_schema | LLGoNoLTO | 11995.1 ms | 10886.9 ms | 1108.2 ms | 4606.1 ms |
| Dustin_humanize | LLGoNoLTO | 9743.5 ms | 8746.2 ms | 997.3 ms | 4140.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9122.4 ms | 8192.3 ms | 930.1 ms | 3938.5 ms |
| XGo | Go | 6801.9 ms | 6399.4 ms | 402.5 ms | 2648.4 ms |
| Aws_restjson | Go | 3988.5 ms | 3641.5 ms | 347.0 ms | 1587.4 ms |
| Gorm_schema | Go | 2712.7 ms | 2553.7 ms | 159.0 ms | 1198.4 ms |
| Uber_zap | Go | 2287.0 ms | 2092.8 ms | 194.2 ms | 1014.1 ms |
| K8s_workqueue | Go | 1417.0 ms | 1220.8 ms | 196.2 ms | 645.3 ms |
| Dustin_humanize | Go | 617.6 ms | 491.3 ms | 126.3 ms | 306.2 ms |
| Toml | Go | 444.3 ms | 356.8 ms | 87.4 ms | 254.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 900525.8 ms | 635430.3 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 838809.3 ms | 588116.6 ms | 8 |
| LLGoFullLTOGlobalDCE | 837718.9 ms | 587454.6 ms | 8 |
| LLGoDeadcodeDrop | 513172.9 ms | 170508.3 ms | 8 |
| LLGoNoLTO | 298262.7 ms | 101532.5 ms | 8 |
| Go | 31323.9 ms | 12144.6 ms | 8 |

Dependency download details are in `download-timings.log`.
