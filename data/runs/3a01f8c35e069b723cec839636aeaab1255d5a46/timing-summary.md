## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 379880.4 ms | 409271.2 ms | 10081.7 ms |
| IXGo | LLGoNoLTO | 362259.7 ms | 365239.7 ms | 22617.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 313880.3 ms | 340998.1 ms | 7064.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 313221.1 ms | 337502.3 ms | 7230.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 306499.0 ms | 333801.1 ms | 9303.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 298024.3 ms | 312591.3 ms | 6420.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 284694.7 ms | 293459.8 ms | 5707.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 209999.1 ms | 218859.9 ms | 5268.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 201115.8 ms | 204146.2 ms | 4714.0 ms |
| Etcdctl | LLGoNoLTO | 193343.5 ms | 198398.6 ms | 9831.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 181020.3 ms | 184933.0 ms | 4330.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 146046.4 ms | 147504.3 ms | 5198.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 143592.9 ms | 141316.6 ms | 3064.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 137333.3 ms | 153478.1 ms | 3543.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 123489.3 ms | 118700.9 ms | 2453.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 113621.1 ms | 106301.6 ms | 2720.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 106236.7 ms | 114141.8 ms | 2645.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 105517.1 ms | 92892.4 ms | 2931.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 96952.2 ms | 96586.4 ms | 2791.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 89638.7 ms | 73550.6 ms | 3195.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 85181.5 ms | 78360.4 ms | 1934.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 83864.0 ms | 91608.0 ms | 2158.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 80760.2 ms | 86795.6 ms | 2123.5 ms |
| XGo | LLGoNoLTO | 79651.2 ms | 83341.1 ms | 4491.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 56347.9 ms | 52261.4 ms | 1590.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 50787.6 ms | 51146.4 ms | 1416.4 ms |
| Aws_restjson | LLGoNoLTO | 46977.7 ms | 56820.6 ms | 3173.6 ms |
| Gorm_schema | LLGoNoLTO | 43797.7 ms | 39521.4 ms | 2395.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 42637.6 ms | 43298.6 ms | 1495.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 37518.0 ms | 42282.5 ms | 1487.1 ms |
| Uber_zap | LLGoNoLTO | 30772.0 ms | 37463.8 ms | 2417.9 ms |
| IXGo | Go | 29203.3 ms | 36989.2 ms | 2686.6 ms |
| K8s_workqueue | LLGoNoLTO | 27770.8 ms | 31272.6 ms | 2362.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 21925.8 ms | 25040.7 ms | 1005.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 21885.3 ms | 24957.2 ms | 1079.1 ms |
| Etcdctl | Go | 12188.2 ms | 13979.7 ms | 863.9 ms |
| Toml | LLGoNoLTO | 11298.4 ms | 14931.7 ms | 1352.0 ms |
| Gorm_schema | Go | 6658.0 ms | 3282.9 ms | 235.7 ms |
| Dustin_humanize | LLGoNoLTO | 6421.8 ms | 9429.0 ms | 1050.0 ms |
| XGo | Go | 3077.4 ms | 4720.8 ms | 412.4 ms |
| Aws_restjson | Go | 2462.1 ms | 3867.1 ms | 389.5 ms |
| Uber_zap | Go | 1504.9 ms | 3913.4 ms | 280.3 ms |
| K8s_workqueue | Go | 1454.8 ms | 1491.6 ms | 195.1 ms |
| Dustin_humanize | Go | 385.4 ms | 476.6 ms | 95.1 ms |
| Toml | Go | 302.0 ms | 340.2 ms | 109.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1528986.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1268249.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1234434.6 ms | 9 |
| LLGoNoLTO | 802292.7 ms | 9 |
| Go | 57236.1 ms | 9 |

Dependency download details are in `download-timings.log`.
