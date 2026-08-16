## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 410839.5 ms | 404347.2 ms | 6492.3 ms | 298216.6 ms |
| IXGo | LLGoDeadcodeDrop | 408631.7 ms | 399107.6 ms | 9524.2 ms | 122035.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 392284.1 ms | 386115.1 ms | 6169.0 ms | 273753.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 367136.0 ms | 360789.3 ms | 6346.6 ms | 267467.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 344747.8 ms | 339693.6 ms | 5054.2 ms | 238517.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 303030.7 ms | 298480.1 ms | 4550.6 ms | 204539.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 302292.3 ms | 297809.0 ms | 4483.3 ms | 202555.3 ms |
| Etcdctl | LLGoNoLTO | 214594.2 ms | 209242.5 ms | 5351.7 ms | 63554.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 204172.4 ms | 200022.1 ms | 4150.3 ms | 60171.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 189016.0 ms | 184952.9 ms | 4063.1 ms | 133872.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 185740.3 ms | 182377.1 ms | 3363.1 ms | 118173.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177698.1 ms | 174206.6 ms | 3491.5 ms | 132565.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 170685.5 ms | 167263.8 ms | 3421.7 ms | 101970.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 159002.8 ms | 155618.7 ms | 3384.1 ms | 126208.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 123094.4 ms | 120022.4 ms | 3072.0 ms | 79989.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 120795.8 ms | 117964.0 ms | 2831.7 ms | 92723.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105341.3 ms | 102714.7 ms | 2626.6 ms | 84823.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 93969.5 ms | 91299.1 ms | 2670.4 ms | 77094.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 93795.4 ms | 91339.2 ms | 2456.2 ms | 77746.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 93528.7 ms | 90940.3 ms | 2588.5 ms | 76974.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 91014.1 ms | 88482.2 ms | 2531.9 ms | 32130.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 88110.1 ms | 85535.7 ms | 2574.4 ms | 66886.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 78985.3 ms | 76374.7 ms | 2610.6 ms | 45810.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 77257.8 ms | 74944.9 ms | 2312.9 ms | 46261.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 70104.6 ms | 67691.0 ms | 2413.6 ms | 48657.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65312.5 ms | 63588.4 ms | 1724.1 ms | 49635.6 ms |
| Aws_restjson | LLGoNoLTO | 64782.4 ms | 62067.5 ms | 2714.9 ms | 27238.6 ms |
| IXGo | LLGoNoLTO | 62978.4 ms | 59366.5 ms | 3612.0 ms | 21625.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61730.2 ms | 60053.7 ms | 1676.5 ms | 47378.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 60755.9 ms | 58225.4 ms | 2530.5 ms | 25451.4 ms |
| XGo | LLGoDeadcodeDrop | 60479.3 ms | 57692.9 ms | 2786.3 ms | 21956.5 ms |
| XGo | LLGoNoLTO | 59408.8 ms | 56704.7 ms | 2704.1 ms | 21190.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54260.8 ms | 52597.9 ms | 1662.9 ms | 43617.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49727.1 ms | 48088.3 ms | 1638.8 ms | 38835.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 40012.8 ms | 37843.9 ms | 2168.9 ms | 13457.8 ms |
| IXGo | Go | 32904.9 ms | 30574.8 ms | 2330.1 ms | 9965.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31380.4 ms | 30132.0 ms | 1248.5 ms | 24661.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31157.5 ms | 29904.1 ms | 1253.4 ms | 24675.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29485.2 ms | 27348.8 ms | 2136.5 ms | 10280.3 ms |
| Uber_zap | LLGoNoLTO | 24936.3 ms | 22911.3 ms | 2025.0 ms | 9175.9 ms |
| K8s_workqueue | LLGoNoLTO | 22788.7 ms | 20847.1 ms | 1941.6 ms | 8378.8 ms |
| Toml | LLGoNoLTO | 19354.4 ms | 17967.6 ms | 1386.8 ms | 7253.1 ms |
| Toml | LLGoDeadcodeDrop | 18038.9 ms | 16770.3 ms | 1268.6 ms | 6839.0 ms |
| Etcdctl | Go | 15915.7 ms | 15034.6 ms | 881.0 ms | 5340.9 ms |
| Gorm_schema | LLGoNoLTO | 14782.8 ms | 13418.7 ms | 1364.1 ms | 5594.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11367.7 ms | 10201.9 ms | 1165.8 ms | 4716.9 ms |
| Dustin_humanize | LLGoNoLTO | 10203.9 ms | 9049.0 ms | 1154.8 ms | 4031.6 ms |
| XGo | Go | 8474.4 ms | 7955.5 ms | 519.0 ms | 3402.1 ms |
| Uber_zap | Go | 5515.6 ms | 5078.3 ms | 437.4 ms | 1890.0 ms |
| Aws_restjson | Go | 4762.4 ms | 4342.7 ms | 419.7 ms | 1832.8 ms |
| Gorm_schema | Go | 3636.8 ms | 3395.8 ms | 241.0 ms | 1639.8 ms |
| K8s_workqueue | Go | 1943.4 ms | 1736.7 ms | 206.6 ms | 926.8 ms |
| Dustin_humanize | Go | 624.4 ms | 534.2 ms | 90.2 ms | 316.1 ms |
| Toml | Go | 557.6 ms | 442.6 ms | 115.0 ms | 315.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1422419.6 ms | 1027226.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1412837.5 ms | 990233.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1405767.4 ms | 1006152.2 ms | 9 |
| LLGoDeadcodeDrop | 923958.0 ms | 297039.3 ms | 9 |
| LLGoNoLTO | 493829.9 ms | 168043.3 ms | 9 |
| Go | 74335.1 ms | 25629.4 ms | 9 |

Dependency download details are in `download-timings.log`.
