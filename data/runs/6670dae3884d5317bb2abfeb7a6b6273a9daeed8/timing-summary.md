## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 349918.5 ms | 343365.9 ms | 6552.6 ms | 318163.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 332685.1 ms | 327861.5 ms | 4823.6 ms | 307763.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 329693.7 ms | 325169.2 ms | 4524.5 ms | 297420.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 322006.6 ms | 317693.7 ms | 4312.9 ms | 288100.7 ms |
| IXGo | LLGoDeadcodeDrop | 303157.2 ms | 296378.7 ms | 6778.5 ms | 253402.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 265808.1 ms | 262090.5 ms | 3717.5 ms | 251078.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 244016.3 ms | 240509.2 ms | 3507.1 ms | 223111.4 ms |
| XGo | LLGoNoLTO | 212333.5 ms | 207224.1 ms | 5109.3 ms | 196614.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 211270.5 ms | 206722.9 ms | 4547.6 ms | 210406.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 158787.3 ms | 156267.5 ms | 2519.8 ms | 160763.6 ms |
| Etcdctl | LLGoNoLTO | 156643.3 ms | 153106.4 ms | 3536.9 ms | 145340.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 144522.8 ms | 141868.6 ms | 2654.2 ms | 127300.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 143372.2 ms | 140722.9 ms | 2649.3 ms | 122475.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 142414.0 ms | 139803.0 ms | 2611.0 ms | 121366.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 121221.1 ms | 118688.1 ms | 2533.0 ms | 93581.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 109895.7 ms | 107572.7 ms | 2322.9 ms | 99468.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 102701.7 ms | 100132.2 ms | 2569.5 ms | 87240.9 ms |
| IXGo | LLGoNoLTO | 89568.2 ms | 86269.0 ms | 3299.2 ms | 68912.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 88685.2 ms | 86597.1 ms | 2088.1 ms | 75818.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 87463.3 ms | 85088.2 ms | 2375.1 ms | 84459.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 84911.6 ms | 82719.7 ms | 2191.9 ms | 82006.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 84727.6 ms | 82490.5 ms | 2237.0 ms | 80063.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 73090.7 ms | 71213.4 ms | 1877.3 ms | 60885.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64348.0 ms | 62718.4 ms | 1629.6 ms | 60787.8 ms |
| XGo | LLGoDeadcodeDrop | 63376.0 ms | 60900.7 ms | 2475.2 ms | 52855.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 56080.0 ms | 54436.1 ms | 1643.9 ms | 49089.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 55905.4 ms | 54521.1 ms | 1384.3 ms | 53922.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 54599.6 ms | 52621.4 ms | 1978.2 ms | 43716.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46682.5 ms | 45263.7 ms | 1418.8 ms | 49950.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 46190.7 ms | 44815.7 ms | 1375.0 ms | 41069.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 39239.9 ms | 37310.0 ms | 1929.9 ms | 31263.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 36802.3 ms | 35570.6 ms | 1231.7 ms | 31433.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35516.4 ms | 34232.2 ms | 1284.2 ms | 40017.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 35290.9 ms | 33925.0 ms | 1365.9 ms | 37382.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 35189.0 ms | 34070.3 ms | 1118.7 ms | 30365.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 32291.4 ms | 30293.0 ms | 1998.4 ms | 30169.1 ms |
| Aws_restjson | LLGoNoLTO | 27678.6 ms | 26072.6 ms | 1606.0 ms | 13808.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 27333.5 ms | 25944.0 ms | 1389.5 ms | 27117.9 ms |
| Gorm_schema | LLGoNoLTO | 27067.9 ms | 25808.8 ms | 1259.1 ms | 24650.1 ms |
| IXGo | Go | 26751.8 ms | 24539.4 ms | 2212.4 ms | 8775.4 ms |
| K8s_workqueue | LLGoNoLTO | 25890.7 ms | 24161.8 ms | 1728.8 ms | 14199.2 ms |
| Uber_zap | LLGoNoLTO | 24434.6 ms | 22767.7 ms | 1667.0 ms | 12303.9 ms |
| Toml | LLGoDeadcodeDrop | 17797.5 ms | 16650.3 ms | 1147.2 ms | 12658.5 ms |
| Etcdctl | Go | 14836.5 ms | 13962.4 ms | 874.2 ms | 14050.8 ms |
| Toml | LLGoNoLTO | 14381.0 ms | 13146.5 ms | 1234.5 ms | 14994.5 ms |
| Dustin_humanize | LLGoNoLTO | 11613.2 ms | 10472.5 ms | 1140.7 ms | 12590.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9875.8 ms | 8958.2 ms | 917.6 ms | 5218.5 ms |
| XGo | Go | 6962.1 ms | 6414.4 ms | 547.7 ms | 3603.7 ms |
| Gorm_schema | Go | 5516.2 ms | 5160.5 ms | 355.7 ms | 12360.4 ms |
| Aws_restjson | Go | 3941.5 ms | 3530.0 ms | 411.5 ms | 1568.2 ms |
| Uber_zap | Go | 2930.7 ms | 2692.1 ms | 238.6 ms | 3937.8 ms |
| K8s_workqueue | Go | 1455.8 ms | 1273.3 ms | 182.5 ms | 816.5 ms |
| Toml | Go | 723.7 ms | 544.4 ms | 179.3 ms | 3479.7 ms |
| Dustin_humanize | Go | 661.4 ms | 564.7 ms | 96.7 ms | 1026.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1303903.6 ms | 1197271.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1218281.4 ms | 1128955.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1165791.1 ms | 1065684.2 ms | 9 |
| LLGoDeadcodeDrop | 668891.9 ms | 549983.7 ms | 9 |
| LLGoNoLTO | 589610.9 ms | 503413.3 ms | 9 |
| Go | 63779.6 ms | 49618.8 ms | 9 |

Dependency download details are in `download-timings.log`.
