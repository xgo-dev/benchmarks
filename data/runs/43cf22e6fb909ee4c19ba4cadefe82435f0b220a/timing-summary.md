## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 457707.9 ms | 448698.9 ms | 9009.1 ms | 307463.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 409675.0 ms | 403099.0 ms | 6576.0 ms | 285723.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 406977.2 ms | 399169.1 ms | 7808.1 ms | 236711.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 365890.8 ms | 359768.5 ms | 6122.3 ms | 265086.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 314759.6 ms | 310006.0 ms | 4753.6 ms | 211918.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 312133.1 ms | 307517.0 ms | 4616.1 ms | 211799.2 ms |
| IXGo | LLGoDeadcodeDrop | 296797.4 ms | 291410.2 ms | 5387.2 ms | 92717.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 294499.8 ms | 287605.0 ms | 6894.9 ms | 180318.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 197628.3 ms | 193812.0 ms | 3816.3 ms | 58394.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 192494.3 ms | 189069.5 ms | 3424.7 ms | 122773.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 182464.8 ms | 179100.6 ms | 3364.3 ms | 136193.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 164849.2 ms | 160717.6 ms | 4131.5 ms | 53827.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 160728.5 ms | 157339.4 ms | 3389.1 ms | 127677.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137259.3 ms | 133992.0 ms | 3267.3 ms | 101545.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125521.0 ms | 122512.0 ms | 3009.1 ms | 95692.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108523.3 ms | 105792.7 ms | 2730.6 ms | 86793.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98302.5 ms | 95575.8 ms | 2726.7 ms | 81444.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 97541.1 ms | 94862.2 ms | 2678.9 ms | 63073.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97184.3 ms | 94458.5 ms | 2725.7 ms | 70977.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96361.6 ms | 93807.9 ms | 2553.7 ms | 79357.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 95334.1 ms | 92787.7 ms | 2546.4 ms | 78482.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 89405.0 ms | 86758.4 ms | 2646.6 ms | 67915.7 ms |
| Etcdctl | LLGoNoLTO | 82089.7 ms | 78958.0 ms | 3131.7 ms | 28060.6 ms |
| Aws_restjson | LLGoNoLTO | 66471.5 ms | 63831.4 ms | 2640.1 ms | 27433.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66133.1 ms | 64410.1 ms | 1723.1 ms | 49834.0 ms |
| IXGo | LLGoNoLTO | 63513.3 ms | 59831.8 ms | 3681.5 ms | 22074.6 ms |
| XGo | LLGoDeadcodeDrop | 62734.3 ms | 59966.7 ms | 2767.6 ms | 22818.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 62449.8 ms | 59909.9 ms | 2539.9 ms | 26484.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54869.3 ms | 53266.2 ms | 1603.0 ms | 44774.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52374.7 ms | 50643.3 ms | 1731.4 ms | 37609.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 45628.4 ms | 44063.7 ms | 1564.7 ms | 35360.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45608.8 ms | 44172.7 ms | 1436.1 ms | 35482.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42898.1 ms | 41580.5 ms | 1317.5 ms | 36285.6 ms |
| XGo | LLGoNoLTO | 42543.8 ms | 39893.6 ms | 2650.2 ms | 16334.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 41045.7 ms | 38854.3 ms | 2191.5 ms | 13615.7 ms |
| IXGo | Go | 36380.7 ms | 33926.3 ms | 2454.5 ms | 10564.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32225.7 ms | 30894.4 ms | 1331.3 ms | 25410.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31827.7 ms | 30471.8 ms | 1356.0 ms | 25179.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29615.5 ms | 28177.6 ms | 1437.9 ms | 9818.1 ms |
| Uber_zap | LLGoNoLTO | 25394.6 ms | 23190.5 ms | 2204.1 ms | 9353.0 ms |
| K8s_workqueue | LLGoNoLTO | 23319.9 ms | 21296.8 ms | 2023.1 ms | 8558.0 ms |
| Toml | LLGoDeadcodeDrop | 21047.3 ms | 19580.5 ms | 1466.8 ms | 7849.9 ms |
| Etcdctl | Go | 16349.7 ms | 15517.9 ms | 831.9 ms | 5574.0 ms |
| Gorm_schema | LLGoNoLTO | 15101.9 ms | 13655.9 ms | 1446.0 ms | 5629.8 ms |
| Toml | LLGoNoLTO | 12420.4 ms | 11165.7 ms | 1254.6 ms | 4814.0 ms |
| Dustin_humanize | LLGoNoLTO | 11821.2 ms | 10627.1 ms | 1194.0 ms | 4792.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11339.2 ms | 10121.6 ms | 1217.6 ms | 4783.0 ms |
| XGo | Go | 6168.2 ms | 5753.7 ms | 414.6 ms | 2391.8 ms |
| Uber_zap | Go | 5537.6 ms | 5114.3 ms | 423.3 ms | 1928.3 ms |
| Aws_restjson | Go | 4855.1 ms | 4443.5 ms | 411.5 ms | 1890.1 ms |
| Gorm_schema | Go | 3379.6 ms | 3164.9 ms | 214.7 ms | 1496.4 ms |
| K8s_workqueue | Go | 1764.5 ms | 1575.8 ms | 188.7 ms | 821.6 ms |
| Dustin_humanize | Go | 629.2 ms | 519.4 ms | 109.7 ms | 320.6 ms |
| Toml | Go | 547.2 ms | 425.8 ms | 121.4 ms | 311.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1520202.5 ms | 1047020.6 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1455117.1 ms | 1048224.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1439009.4 ms | 1005638.8 ms | 9 |
| LLGoDeadcodeDrop | 887506.7 ms | 290308.7 ms | 9 |
| LLGoNoLTO | 342676.3 ms | 127050.6 ms | 9 |
| Go | 75611.8 ms | 25299.5 ms | 9 |

Dependency download details are in `download-timings.log`.
