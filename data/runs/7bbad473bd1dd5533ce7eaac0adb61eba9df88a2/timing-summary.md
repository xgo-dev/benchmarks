## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 548619.0 ms | 542299.3 ms | 6319.7 ms | 383504.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 526091.2 ms | 519899.8 ms | 6191.5 ms | 369991.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 523788.1 ms | 517599.1 ms | 6189.0 ms | 364555.4 ms |
| IXGo | LLGoDeadcodeDrop | 324462.7 ms | 319009.2 ms | 5453.5 ms | 119698.4 ms |
| IXGo | LLGoNoLTO | 307498.0 ms | 302279.2 ms | 5218.7 ms | 113058.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 238991.9 ms | 234504.5 ms | 4487.4 ms | 147778.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 238084.3 ms | 233484.1 ms | 4600.1 ms | 147355.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 233885.0 ms | 229560.9 ms | 4324.1 ms | 147018.2 ms |
| Etcdctl | LLGoNoLTO | 168129.6 ms | 164224.6 ms | 3905.0 ms | 54568.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 167809.2 ms | 163872.6 ms | 3936.6 ms | 54934.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 163126.3 ms | 160082.0 ms | 3044.4 ms | 115429.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 160530.0 ms | 157619.3 ms | 2910.7 ms | 113320.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 159883.9 ms | 157042.5 ms | 2841.4 ms | 113057.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 124319.1 ms | 122253.1 ms | 2066.0 ms | 93291.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 116486.8 ms | 114289.7 ms | 2197.1 ms | 83470.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 116406.5 ms | 114313.3 ms | 2093.2 ms | 84482.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 98694.4 ms | 97025.0 ms | 1669.4 ms | 77586.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 96566.5 ms | 94907.4 ms | 1659.1 ms | 74944.9 ms |
| XGo | LLGoDeadcodeDrop | 94800.3 ms | 92219.2 ms | 2581.1 ms | 35475.0 ms |
| XGo | LLGoNoLTO | 93500.9 ms | 90935.9 ms | 2565.1 ms | 34574.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 91719.2 ms | 90149.1 ms | 1570.1 ms | 72232.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 89933.7 ms | 88338.1 ms | 1595.6 ms | 66709.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 86874.0 ms | 85267.8 ms | 1606.1 ms | 64845.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 78781.1 ms | 77291.1 ms | 1490.0 ms | 59044.0 ms |
| Aws_restjson | LLGoNoLTO | 72066.5 ms | 70272.1 ms | 1794.4 ms | 34027.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 70379.9 ms | 68623.0 ms | 1756.9 ms | 33310.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 55919.0 ms | 54682.9 ms | 1236.1 ms | 39412.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 55759.4 ms | 54643.4 ms | 1116.0 ms | 39558.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 49554.6 ms | 48327.3 ms | 1227.4 ms | 31486.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 48884.5 ms | 47555.5 ms | 1328.9 ms | 20795.8 ms |
| Uber_zap | LLGoNoLTO | 46290.2 ms | 44970.8 ms | 1319.4 ms | 19615.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 46221.3 ms | 45304.0 ms | 917.3 ms | 35558.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 41620.1 ms | 40264.8 ms | 1355.3 ms | 18599.5 ms |
| K8s_workqueue | LLGoNoLTO | 40555.0 ms | 39247.8 ms | 1307.2 ms | 18043.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 38841.8 ms | 37826.5 ms | 1015.2 ms | 28245.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 38113.3 ms | 37221.2 ms | 892.0 ms | 27946.0 ms |
| IXGo | Go | 37080.4 ms | 34250.1 ms | 2830.3 ms | 10475.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 32802.2 ms | 31750.8 ms | 1051.4 ms | 10724.7 ms |
| Gorm_schema | LLGoNoLTO | 31895.3 ms | 30832.7 ms | 1062.6 ms | 10407.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 28954.7 ms | 28296.2 ms | 658.6 ms | 23030.5 ms |
| Etcdctl | Go | 28163.0 ms | 26365.8 ms | 1797.3 ms | 8351.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 22314.5 ms | 21614.2 ms | 700.3 ms | 15764.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 21808.3 ms | 21151.8 ms | 656.5 ms | 15538.7 ms |
| Toml | LLGoDeadcodeDrop | 21235.1 ms | 20388.8 ms | 846.3 ms | 7873.0 ms |
| Toml | LLGoNoLTO | 20544.1 ms | 19721.2 ms | 822.9 ms | 7692.3 ms |
| XGo | Go | 16612.7 ms | 15462.2 ms | 1150.4 ms | 4848.6 ms |
| Dustin_humanize | LLGoNoLTO | 11433.8 ms | 10800.2 ms | 633.6 ms | 5072.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11375.7 ms | 10751.5 ms | 624.2 ms | 4904.8 ms |
| Aws_restjson | Go | 6546.8 ms | 5968.0 ms | 578.8 ms | 2584.0 ms |
| Gorm_schema | Go | 4893.5 ms | 4540.8 ms | 352.7 ms | 1837.8 ms |
| Uber_zap | Go | 4555.5 ms | 4197.4 ms | 358.1 ms | 1753.0 ms |
| K8s_workqueue | Go | 4020.4 ms | 3628.6 ms | 391.8 ms | 1405.2 ms |
| Toml | Go | 1714.8 ms | 1532.5 ms | 182.3 ms | 764.1 ms |
| Dustin_humanize | Go | 705.6 ms | 591.2 ms | 114.4 ms | 331.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1389170.6 ms | 984568.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1342631.3 ms | 936643.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1318465.9 ms | 913946.7 ms | 9 |
| LLGoDeadcodeDrop | 813369.7 ms | 306315.7 ms | 9 |
| LLGoNoLTO | 791913.4 ms | 297060.1 ms | 9 |
| Go | 104292.7 ms | 32350.6 ms | 9 |

Dependency download details are in `download-timings.log`.
