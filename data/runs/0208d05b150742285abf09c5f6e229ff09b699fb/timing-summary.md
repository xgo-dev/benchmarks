## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 669517.7 ms | 662897.0 ms | 6620.7 ms | 461845.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 629605.4 ms | 623006.2 ms | 6599.3 ms | 426118.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 610522.0 ms | 604041.2 ms | 6480.9 ms | 411654.6 ms |
| IXGo | LLGoDeadcodeDrop | 369646.5 ms | 363875.4 ms | 5771.1 ms | 135406.1 ms |
| IXGo | LLGoNoLTO | 362021.3 ms | 356359.9 ms | 5661.4 ms | 132617.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 265523.2 ms | 260786.3 ms | 4736.9 ms | 162142.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 263943.5 ms | 259130.4 ms | 4813.1 ms | 160462.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 260375.8 ms | 255799.2 ms | 4576.6 ms | 159918.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 196203.3 ms | 192145.8 ms | 4057.6 ms | 66828.3 ms |
| Etcdctl | LLGoNoLTO | 192866.4 ms | 188955.4 ms | 3911.1 ms | 65012.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 178601.4 ms | 175390.4 ms | 3211.0 ms | 125258.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 176996.3 ms | 173644.3 ms | 3351.9 ms | 124223.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 175406.3 ms | 172248.2 ms | 3158.1 ms | 123807.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 149136.7 ms | 146912.4 ms | 2224.3 ms | 115596.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 140629.2 ms | 138275.7 ms | 2353.5 ms | 104345.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 139282.2 ms | 136928.3 ms | 2354.0 ms | 103080.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110004.8 ms | 108271.0 ms | 1733.8 ms | 85213.0 ms |
| XGo | LLGoNoLTO | 106151.1 ms | 103445.3 ms | 2705.8 ms | 42197.7 ms |
| XGo | LLGoDeadcodeDrop | 105896.4 ms | 103184.7 ms | 2711.6 ms | 41583.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104034.2 ms | 102349.0 ms | 1685.2 ms | 81696.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103932.4 ms | 102157.2 ms | 1775.2 ms | 81385.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 100545.8 ms | 98737.0 ms | 1808.8 ms | 75180.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99541.7 ms | 97749.3 ms | 1792.4 ms | 73782.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90033.1 ms | 88319.5 ms | 1713.6 ms | 67297.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82228.4 ms | 80263.6 ms | 1964.8 ms | 39947.0 ms |
| Aws_restjson | LLGoNoLTO | 79240.9 ms | 77279.0 ms | 1962.0 ms | 38361.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64372.3 ms | 63047.9 ms | 1324.5 ms | 46373.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64080.6 ms | 62681.4 ms | 1399.1 ms | 45716.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 57981.7 ms | 56384.7 ms | 1596.9 ms | 26567.9 ms |
| Uber_zap | LLGoNoLTO | 57070.1 ms | 55642.9 ms | 1427.2 ms | 25757.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53734.5 ms | 52425.2 ms | 1309.3 ms | 35503.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52376.3 ms | 51269.9 ms | 1106.4 ms | 41214.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49916.0 ms | 48378.5 ms | 1537.5 ms | 24426.5 ms |
| K8s_workqueue | LLGoNoLTO | 49682.4 ms | 48193.6 ms | 1488.7 ms | 24182.6 ms |
| IXGo | Go | 44994.6 ms | 42150.5 ms | 2844.1 ms | 13070.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44635.9 ms | 43527.1 ms | 1108.8 ms | 33134.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 44489.3 ms | 43413.5 ms | 1075.8 ms | 33082.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36938.7 ms | 35747.5 ms | 1191.2 ms | 12899.5 ms |
| Gorm_schema | LLGoNoLTO | 35659.0 ms | 34446.7 ms | 1212.2 ms | 12550.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33014.7 ms | 32169.5 ms | 845.2 ms | 26308.1 ms |
| Etcdctl | Go | 32766.6 ms | 30836.4 ms | 1930.1 ms | 9847.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24536.7 ms | 23709.2 ms | 827.6 ms | 17666.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24475.2 ms | 23638.8 ms | 836.4 ms | 17743.0 ms |
| Toml | LLGoDeadcodeDrop | 21828.9 ms | 20909.1 ms | 919.7 ms | 8415.6 ms |
| Toml | LLGoNoLTO | 21807.9 ms | 20875.7 ms | 932.1 ms | 8330.6 ms |
| XGo | Go | 18818.8 ms | 17655.2 ms | 1163.6 ms | 5418.6 ms |
| Dustin_humanize | LLGoNoLTO | 12795.5 ms | 12056.6 ms | 738.8 ms | 5526.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12530.0 ms | 11791.4 ms | 738.6 ms | 5603.1 ms |
| Aws_restjson | Go | 7758.0 ms | 7097.7 ms | 660.3 ms | 3115.2 ms |
| Gorm_schema | Go | 5690.2 ms | 5320.3 ms | 369.9 ms | 2192.9 ms |
| Uber_zap | Go | 5164.8 ms | 4825.4 ms | 339.3 ms | 1991.2 ms |
| K8s_workqueue | Go | 4617.9 ms | 4183.3 ms | 434.6 ms | 1632.5 ms |
| Toml | Go | 1982.0 ms | 1767.4 ms | 214.6 ms | 894.2 ms |
| Dustin_humanize | Go | 812.9 ms | 666.5 ms | 146.4 ms | 380.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1565148.4 ms | 1079939.8 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1559243.1 ms | 1091781.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1548955.8 ms | 1068026.0 ms | 9 |
| LLGoDeadcodeDrop | 933169.9 ms | 361677.5 ms | 9 |
| LLGoNoLTO | 917294.5 ms | 354537.6 ms | 9 |
| Go | 122605.7 ms | 38543.1 ms | 9 |

Dependency download details are in `download-timings.log`.
