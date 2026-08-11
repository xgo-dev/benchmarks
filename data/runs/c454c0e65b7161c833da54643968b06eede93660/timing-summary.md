## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 579019.7 ms | 568684.8 ms | 10334.8 ms | 347938.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 492505.6 ms | 486120.4 ms | 6385.3 ms | 307737.2 ms |
| IXGo | LLGoDeadcodeDrop | 462692.3 ms | 456501.0 ms | 6191.3 ms | 153530.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 392680.8 ms | 387074.4 ms | 5606.4 ms | 279622.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 361281.2 ms | 355481.1 ms | 5800.1 ms | 225627.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 330126.7 ms | 325957.0 ms | 4169.7 ms | 216703.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 327867.8 ms | 323790.8 ms | 4077.0 ms | 213407.0 ms |
| XGo | LLGoNoLTO | 254729.7 ms | 250690.8 ms | 4038.8 ms | 82269.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 224913.1 ms | 221346.0 ms | 3567.1 ms | 71473.8 ms |
| Etcdctl | LLGoNoLTO | 221951.7 ms | 218527.6 ms | 3424.1 ms | 70199.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 197653.0 ms | 194466.7 ms | 3186.3 ms | 140108.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 186907.2 ms | 183144.6 ms | 3762.7 ms | 138669.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 185624.5 ms | 181609.4 ms | 4015.1 ms | 99467.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 182158.4 ms | 179003.7 ms | 3154.7 ms | 141800.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 146518.1 ms | 143866.6 ms | 2651.5 ms | 113730.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 136204.7 ms | 133465.0 ms | 2739.7 ms | 100860.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 132692.2 ms | 129916.2 ms | 2776.0 ms | 98353.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 116108.1 ms | 113550.0 ms | 2558.1 ms | 90377.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 104674.6 ms | 102061.0 ms | 2613.6 ms | 82578.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103879.0 ms | 101545.4 ms | 2333.6 ms | 83077.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100232.4 ms | 97988.3 ms | 2244.0 ms | 80583.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98790.5 ms | 96313.2 ms | 2477.3 ms | 71956.9 ms |
| IXGo | LLGoNoLTO | 94209.0 ms | 90705.2 ms | 3503.8 ms | 40369.5 ms |
| XGo | LLGoDeadcodeDrop | 76105.0 ms | 73485.8 ms | 2619.2 ms | 29787.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 73191.6 ms | 70526.2 ms | 2665.4 ms | 30802.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 68577.9 ms | 66928.0 ms | 1649.8 ms | 50316.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68526.0 ms | 66968.6 ms | 1557.4 ms | 51988.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 63028.4 ms | 61180.1 ms | 1848.4 ms | 41034.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56079.9 ms | 54631.2 ms | 1448.6 ms | 44708.6 ms |
| Uber_zap | LLGoNoLTO | 51998.8 ms | 49940.2 ms | 2058.6 ms | 17672.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 48467.8 ms | 46280.6 ms | 2187.2 ms | 17291.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48100.6 ms | 46658.1 ms | 1442.5 ms | 36455.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 47575.4 ms | 46148.2 ms | 1427.1 ms | 36025.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44137.1 ms | 42873.8 ms | 1263.3 ms | 36426.0 ms |
| IXGo | Go | 38608.4 ms | 36313.4 ms | 2295.0 ms | 11242.1 ms |
| Aws_restjson | LLGoNoLTO | 37206.2 ms | 34983.2 ms | 2223.0 ms | 14823.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35468.5 ms | 34193.8 ms | 1274.6 ms | 27286.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 35166.4 ms | 33162.5 ms | 2003.9 ms | 13332.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34582.4 ms | 33337.8 ms | 1244.6 ms | 26520.0 ms |
| K8s_workqueue | LLGoNoLTO | 34470.7 ms | 32493.4 ms | 1977.3 ms | 12870.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34338.5 ms | 32942.5 ms | 1396.0 ms | 11893.2 ms |
| Toml | LLGoDeadcodeDrop | 27033.0 ms | 25647.4 ms | 1385.6 ms | 9873.9 ms |
| Gorm_schema | LLGoNoLTO | 18313.8 ms | 16940.3 ms | 1373.5 ms | 7267.7 ms |
| Etcdctl | Go | 16867.7 ms | 16072.9 ms | 794.7 ms | 5756.3 ms |
| Toml | LLGoNoLTO | 15047.2 ms | 13881.1 ms | 1166.1 ms | 6084.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13622.3 ms | 12493.5 ms | 1128.8 ms | 5620.7 ms |
| Dustin_humanize | LLGoNoLTO | 13256.7 ms | 12194.7 ms | 1062.0 ms | 5521.4 ms |
| Aws_restjson | Go | 7815.2 ms | 7187.2 ms | 628.0 ms | 3113.9 ms |
| XGo | Go | 6395.3 ms | 5996.2 ms | 399.1 ms | 2403.6 ms |
| Gorm_schema | Go | 3474.4 ms | 3286.2 ms | 188.2 ms | 1501.1 ms |
| Uber_zap | Go | 2993.7 ms | 2776.8 ms | 216.9 ms | 1304.8 ms |
| K8s_workqueue | Go | 1781.9 ms | 1596.2 ms | 185.7 ms | 801.5 ms |
| Dustin_humanize | Go | 645.9 ms | 549.0 ms | 96.9 ms | 322.0 ms |
| Toml | Go | 537.6 ms | 425.5 ms | 112.1 ms | 301.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1610544.9 ms | 1076757.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1540039.0 ms | 1086550.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1490416.9 ms | 1020054.9 ms | 9 |
| LLGoDeadcodeDrop | 995529.9 ms | 343606.0 ms | 9 |
| LLGoNoLTO | 741183.7 ms | 257077.4 ms | 9 |
| Go | 79120.0 ms | 26747.2 ms | 9 |

Dependency download details are in `download-timings.log`.
