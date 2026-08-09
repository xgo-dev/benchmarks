## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 411353.1 ms | 403433.7 ms | 7919.4 ms | 368888.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 344038.7 ms | 338959.5 ms | 5079.2 ms | 311682.9 ms |
| IXGo | LLGoNoLTO | 318930.7 ms | 311370.6 ms | 7560.1 ms | 278673.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 303767.6 ms | 299553.9 ms | 4213.7 ms | 277312.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 227526.9 ms | 224623.6 ms | 2903.3 ms | 206299.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 221743.4 ms | 218756.4 ms | 2987.0 ms | 197577.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 218489.3 ms | 215578.0 ms | 2911.3 ms | 192293.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 186307.7 ms | 182057.6 ms | 4250.0 ms | 149401.7 ms |
| IXGo | LLGoDeadcodeDrop | 174309.9 ms | 170918.8 ms | 3391.1 ms | 147448.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 155922.1 ms | 153173.0 ms | 2749.1 ms | 144775.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 139720.2 ms | 137249.8 ms | 2470.4 ms | 126348.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 133373.1 ms | 130982.1 ms | 2391.0 ms | 113250.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 117044.6 ms | 114879.8 ms | 2164.8 ms | 106887.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 105011.3 ms | 102856.0 ms | 2155.3 ms | 94106.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 103283.8 ms | 101088.8 ms | 2195.0 ms | 104488.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99696.2 ms | 97452.1 ms | 2244.1 ms | 97898.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 97510.0 ms | 95437.7 ms | 2072.3 ms | 83879.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 88331.7 ms | 86279.9 ms | 2051.8 ms | 83998.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 86230.5 ms | 84203.9 ms | 2026.5 ms | 73733.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 81026.9 ms | 78903.3 ms | 2123.6 ms | 74898.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 78049.9 ms | 75526.6 ms | 2523.3 ms | 94358.3 ms |
| XGo | LLGoDeadcodeDrop | 76934.6 ms | 74884.1 ms | 2050.5 ms | 57599.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 76913.6 ms | 75132.9 ms | 1780.7 ms | 66252.4 ms |
| Etcdctl | LLGoNoLTO | 71204.7 ms | 68776.1 ms | 2428.6 ms | 51421.0 ms |
| XGo | LLGoNoLTO | 62675.1 ms | 60176.6 ms | 2498.5 ms | 40385.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61978.6 ms | 60607.7 ms | 1370.9 ms | 63626.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 54212.8 ms | 52412.7 ms | 1800.1 ms | 48749.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 53196.8 ms | 51891.2 ms | 1305.6 ms | 48768.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52881.6 ms | 51412.3 ms | 1469.4 ms | 52276.4 ms |
| Aws_restjson | LLGoNoLTO | 52413.3 ms | 50370.8 ms | 2042.5 ms | 39493.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 46381.7 ms | 44733.4 ms | 1648.3 ms | 51982.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 42734.4 ms | 41504.6 ms | 1229.8 ms | 38917.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 41745.1 ms | 40497.0 ms | 1248.1 ms | 41621.3 ms |
| Uber_zap | LLGoNoLTO | 37142.4 ms | 35359.2 ms | 1783.2 ms | 32816.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34653.0 ms | 33654.6 ms | 998.4 ms | 30384.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33857.8 ms | 32716.3 ms | 1141.5 ms | 35027.2 ms |
| K8s_workqueue | LLGoNoLTO | 32877.6 ms | 30969.6 ms | 1907.9 ms | 31999.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 32232.3 ms | 30596.7 ms | 1635.6 ms | 21952.7 ms |
| IXGo | Go | 31016.6 ms | 29004.9 ms | 2011.7 ms | 19382.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 29285.8 ms | 28148.2 ms | 1137.6 ms | 27075.9 ms |
| Gorm_schema | LLGoNoLTO | 28037.7 ms | 26696.7 ms | 1341.1 ms | 31798.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 25066.4 ms | 23400.0 ms | 1666.4 ms | 15419.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 22140.3 ms | 20984.3 ms | 1156.0 ms | 17325.5 ms |
| Toml | LLGoDeadcodeDrop | 15761.6 ms | 14727.2 ms | 1034.3 ms | 11516.1 ms |
| Toml | LLGoNoLTO | 13315.0 ms | 12310.6 ms | 1004.4 ms | 12755.5 ms |
| Etcdctl | Go | 13295.0 ms | 12596.6 ms | 698.3 ms | 6108.5 ms |
| Dustin_humanize | LLGoNoLTO | 11055.0 ms | 10069.9 ms | 985.1 ms | 11907.7 ms |
| Aws_restjson | Go | 7445.2 ms | 6825.9 ms | 619.3 ms | 11584.2 ms |
| XGo | Go | 5789.4 ms | 5388.2 ms | 401.3 ms | 6258.3 ms |
| Gorm_schema | Go | 5398.0 ms | 5039.5 ms | 358.5 ms | 11009.6 ms |
| Uber_zap | Go | 4466.8 ms | 4162.5 ms | 304.3 ms | 2436.6 ms |
| K8s_workqueue | Go | 1668.5 ms | 1518.1 ms | 150.4 ms | 1355.7 ms |
| Dustin_humanize | Go | 615.7 ms | 533.8 ms | 81.9 ms | 673.8 ms |
| Toml | Go | 588.5 ms | 491.0 ms | 97.5 ms | 698.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1188660.6 ms | 1062407.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1146387.6 ms | 1084584.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1104317.8 ms | 1009635.0 ms | 9 |
| LLGoDeadcodeDrop | 633347.2 ms | 521394.9 ms | 9 |
| LLGoNoLTO | 627651.5 ms | 531251.4 ms | 9 |
| Go | 70283.7 ms | 59507.2 ms | 9 |

Dependency download details are in `download-timings.log`.
