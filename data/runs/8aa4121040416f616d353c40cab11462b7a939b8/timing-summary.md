## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 561009.1 ms | 592827.9 ms | 14084.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 443320.8 ms | 469155.8 ms | 11170.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 419217.4 ms | 450497.5 ms | 9206.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 344689.1 ms | 371743.7 ms | 7530.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 320252.1 ms | 339043.1 ms | 6168.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 298781.5 ms | 277227.3 ms | 6988.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 298289.6 ms | 320714.0 ms | 5968.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 291844.9 ms | 266702.0 ms | 7488.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 291245.3 ms | 266967.2 ms | 7764.7 ms |
| IXGo | LLGoNoLTO | 286566.8 ms | 310755.6 ms | 15419.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 210621.6 ms | 224019.4 ms | 4568.7 ms |
| Etcdctl | LLGoNoLTO | 206773.6 ms | 220611.1 ms | 10050.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 167680.6 ms | 194076.0 ms | 4387.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 161242.1 ms | 180124.7 ms | 3646.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 145995.8 ms | 150970.5 ms | 3339.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 144713.3 ms | 161242.5 ms | 3459.7 ms |
| K8s_workqueue | LLGoNoLTO | 142140.0 ms | 138773.4 ms | 10820.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 134249.2 ms | 133440.3 ms | 2791.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 126393.5 ms | 137315.4 ms | 2914.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 121447.3 ms | 129543.5 ms | 3223.9 ms |
| XGo | LLGoNoLTO | 107106.9 ms | 122913.5 ms | 6328.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 105518.4 ms | 108174.7 ms | 2746.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 82924.3 ms | 82324.9 ms | 3885.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 75037.8 ms | 81061.0 ms | 2095.6 ms |
| Aws_restjson | LLGoNoLTO | 74056.9 ms | 83718.8 ms | 4074.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63924.0 ms | 67604.4 ms | 1771.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55911.7 ms | 62087.1 ms | 2009.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53895.4 ms | 60211.0 ms | 1797.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 53512.0 ms | 47623.1 ms | 1478.1 ms |
| Uber_zap | LLGoNoLTO | 50251.2 ms | 56177.1 ms | 3186.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48831.8 ms | 51211.0 ms | 1542.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46957.2 ms | 48539.4 ms | 1354.1 ms |
| Gorm_schema | LLGoNoLTO | 42909.2 ms | 40450.4 ms | 2508.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36063.3 ms | 35728.6 ms | 1368.8 ms |
| Toml | LLGoNoLTO | 31480.2 ms | 27116.1 ms | 1855.3 ms |
| Etcdctl | Go | 12932.8 ms | 32414.5 ms | 2024.1 ms |
| IXGo | Go | 10866.3 ms | 33702.5 ms | 2459.5 ms |
| XGo | Go | 9904.4 ms | 10023.4 ms | 583.7 ms |
| Dustin_humanize | LLGoNoLTO | 8895.8 ms | 13239.1 ms | 1245.5 ms |
| Gorm_schema | Go | 5711.3 ms | 6186.1 ms | 374.5 ms |
| Aws_restjson | Go | 4670.8 ms | 5364.2 ms | 473.8 ms |
| Dustin_humanize | Go | 2803.6 ms | 966.8 ms | 367.7 ms |
| K8s_workqueue | Go | 2784.8 ms | 2038.0 ms | 225.2 ms |
| Uber_zap | Go | 2388.2 ms | 3235.1 ms | 289.7 ms |
| Toml | Go | 1957.3 ms | 657.1 ms | 153.7 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1885424.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1708391.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1509752.5 ms | 9 |
| LLGoNoLTO | 950180.7 ms | 9 |
| Go | 54019.6 ms | 9 |

Dependency download details are in `download-timings.log`.
