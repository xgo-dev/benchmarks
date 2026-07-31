## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 444530.5 ms | 459239.4 ms | 9286.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 435653.4 ms | 461826.1 ms | 10148.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 433973.2 ms | 457393.7 ms | 9232.2 ms |
| IXGo | LLGoNoLTO | 352812.0 ms | 385767.6 ms | 18998.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 285554.4 ms | 315513.4 ms | 5394.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 277684.6 ms | 329777.1 ms | 6849.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 270754.2 ms | 302647.8 ms | 5379.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 241457.9 ms | 232732.2 ms | 4966.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 230461.3 ms | 241091.1 ms | 4986.8 ms |
| XGo | LLGoNoLTO | 213796.3 ms | 219892.8 ms | 10653.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 204104.9 ms | 212672.9 ms | 4760.5 ms |
| Etcdctl | LLGoNoLTO | 198809.4 ms | 215439.4 ms | 9705.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 192364.0 ms | 213036.9 ms | 6777.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 159637.1 ms | 157456.9 ms | 4180.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 153056.1 ms | 173993.8 ms | 3507.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 145813.5 ms | 151978.8 ms | 3411.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 139491.3 ms | 136133.6 ms | 3207.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 119963.0 ms | 104537.1 ms | 2408.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 116634.6 ms | 120645.7 ms | 2950.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 107026.2 ms | 86664.0 ms | 3806.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105320.2 ms | 116959.0 ms | 2628.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 98021.5 ms | 98254.0 ms | 4216.3 ms |
| Aws_restjson | LLGoNoLTO | 93778.1 ms | 94945.5 ms | 4650.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 92794.9 ms | 103612.1 ms | 2333.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 82243.5 ms | 94307.1 ms | 2442.4 ms |
| Toml | LLGoNoLTO | 79028.9 ms | 79465.9 ms | 7260.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63500.3 ms | 69979.3 ms | 1760.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 60604.7 ms | 57912.4 ms | 1516.7 ms |
| Gorm_schema | LLGoNoLTO | 48282.5 ms | 43588.0 ms | 2638.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 47590.5 ms | 53803.5 ms | 1723.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46557.6 ms | 49699.5 ms | 1468.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 45963.0 ms | 44762.5 ms | 1486.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 44800.9 ms | 47937.4 ms | 1459.9 ms |
| K8s_workqueue | LLGoNoLTO | 43560.8 ms | 44461.8 ms | 2928.5 ms |
| Uber_zap | LLGoNoLTO | 32018.2 ms | 44470.6 ms | 2555.9 ms |
| IXGo | Go | 25877.2 ms | 39460.1 ms | 2400.4 ms |
| Etcdctl | Go | 7833.8 ms | 16903.2 ms | 868.1 ms |
| Dustin_humanize | LLGoNoLTO | 7770.8 ms | 12333.6 ms | 1121.7 ms |
| XGo | Go | 7439.0 ms | 7262.0 ms | 486.3 ms |
| Gorm_schema | Go | 7433.4 ms | 6341.9 ms | 396.2 ms |
| Uber_zap | Go | 2168.6 ms | 3158.7 ms | 235.8 ms |
| Dustin_humanize | Go | 2027.4 ms | 849.3 ms | 125.4 ms |
| Aws_restjson | Go | 2012.4 ms | 4620.9 ms | 410.1 ms |
| K8s_workqueue | Go | 985.2 ms | 1660.7 ms | 206.2 ms |
| Toml | Go | 555.1 ms | 560.2 ms | 115.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1611688.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1528289.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1505579.8 ms | 9 |
| LLGoNoLTO | 1069856.9 ms | 9 |
| Go | 56332.0 ms | 9 |

Dependency download details are in `download-timings.log`.
