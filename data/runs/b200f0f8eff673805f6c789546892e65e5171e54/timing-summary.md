## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 545227.5 ms | 539573.3 ms | 5654.2 ms | 382050.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 536601.1 ms | 530899.9 ms | 5701.2 ms | 381744.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 488759.1 ms | 483360.8 ms | 5398.3 ms | 336640.2 ms |
| IXGo | LLGoNoLTO | 297831.4 ms | 292800.9 ms | 5030.5 ms | 110234.9 ms |
| IXGo | LLGoDeadcodeDrop | 296521.5 ms | 291438.4 ms | 5083.1 ms | 109397.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 203276.1 ms | 199225.2 ms | 4050.9 ms | 126584.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 202725.2 ms | 198668.3 ms | 4056.9 ms | 125830.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 200136.7 ms | 196194.4 ms | 3942.3 ms | 125666.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 146189.9 ms | 142712.2 ms | 3477.7 ms | 50041.3 ms |
| Etcdctl | LLGoNoLTO | 144083.6 ms | 140569.5 ms | 3514.1 ms | 48861.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 138208.9 ms | 135618.0 ms | 2591.0 ms | 99008.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 137548.0 ms | 134940.7 ms | 2607.4 ms | 97909.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 137088.2 ms | 134405.6 ms | 2682.6 ms | 98744.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 118782.4 ms | 117000.0 ms | 1782.4 ms | 93976.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 111611.4 ms | 109723.5 ms | 1887.9 ms | 85173.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 109924.9 ms | 108076.0 ms | 1848.9 ms | 84536.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 84868.3 ms | 83444.9 ms | 1423.4 ms | 66168.6 ms |
| XGo | LLGoDeadcodeDrop | 80768.7 ms | 78303.6 ms | 2465.1 ms | 32614.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 80521.5 ms | 79131.8 ms | 1389.6 ms | 63902.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 80050.3 ms | 78631.6 ms | 1418.8 ms | 63823.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 78540.7 ms | 77127.2 ms | 1413.5 ms | 60236.9 ms |
| XGo | LLGoNoLTO | 77687.8 ms | 75500.6 ms | 2187.3 ms | 30845.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 77459.9 ms | 76050.6 ms | 1409.3 ms | 58530.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 68863.0 ms | 67519.8 ms | 1343.2 ms | 52299.1 ms |
| Aws_restjson | LLGoNoLTO | 62864.8 ms | 61305.4 ms | 1559.4 ms | 32175.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 61749.2 ms | 60111.0 ms | 1638.2 ms | 30100.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 48224.1 ms | 47236.3 ms | 987.8 ms | 35286.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 48193.0 ms | 47048.7 ms | 1144.2 ms | 34841.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 43652.3 ms | 42459.3 ms | 1193.1 ms | 20321.5 ms |
| Uber_zap | LLGoNoLTO | 43174.4 ms | 42031.3 ms | 1143.1 ms | 20725.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 40910.0 ms | 39904.3 ms | 1005.6 ms | 27259.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 39729.8 ms | 38869.8 ms | 860.0 ms | 31617.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 37073.1 ms | 35890.6 ms | 1182.5 ms | 18802.0 ms |
| K8s_workqueue | LLGoNoLTO | 36876.2 ms | 35809.4 ms | 1066.8 ms | 18267.2 ms |
| IXGo | Go | 33767.3 ms | 31438.1 ms | 2329.2 ms | 9790.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 32998.9 ms | 32187.6 ms | 811.2 ms | 24714.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 32912.7 ms | 32125.3 ms | 787.3 ms | 24654.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 26683.7 ms | 25709.6 ms | 974.1 ms | 9622.4 ms |
| Gorm_schema | LLGoNoLTO | 26061.4 ms | 25186.5 ms | 874.9 ms | 9246.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 25993.7 ms | 25370.8 ms | 622.9 ms | 20895.6 ms |
| Etcdctl | Go | 25056.0 ms | 23360.9 ms | 1695.1 ms | 7558.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 19560.1 ms | 18991.0 ms | 569.1 ms | 14226.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 18776.2 ms | 18190.2 ms | 586.0 ms | 13619.2 ms |
| Toml | LLGoDeadcodeDrop | 16010.5 ms | 15296.9 ms | 713.6 ms | 6180.1 ms |
| Toml | LLGoNoLTO | 15829.3 ms | 15151.6 ms | 677.7 ms | 5963.7 ms |
| XGo | Go | 14225.8 ms | 13201.7 ms | 1024.1 ms | 4236.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9447.3 ms | 8932.5 ms | 514.8 ms | 4133.1 ms |
| Dustin_humanize | LLGoNoLTO | 9007.4 ms | 8552.5 ms | 454.9 ms | 4023.1 ms |
| Aws_restjson | Go | 5966.0 ms | 5427.9 ms | 538.1 ms | 2469.8 ms |
| Gorm_schema | Go | 4286.9 ms | 3966.4 ms | 320.5 ms | 1639.5 ms |
| Uber_zap | Go | 3956.6 ms | 3610.6 ms | 346.0 ms | 1547.8 ms |
| K8s_workqueue | Go | 3549.6 ms | 3156.9 ms | 392.8 ms | 1275.7 ms |
| Toml | Go | 1541.8 ms | 1340.7 ms | 201.1 ms | 708.9 ms |
| Dustin_humanize | Go | 615.0 ms | 490.6 ms | 124.5 ms | 290.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1254455.8 ms | 887641.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1229403.1 ms | 869481.7 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1223632.7 ms | 872818.9 ms | 9 |
| LLGoDeadcodeDrop | 718096.2 ms | 281212.3 ms | 9 |
| LLGoNoLTO | 713416.2 ms | 280342.5 ms | 9 |
| Go | 92965.1 ms | 29517.1 ms | 9 |

Dependency download details are in `download-timings.log`.
