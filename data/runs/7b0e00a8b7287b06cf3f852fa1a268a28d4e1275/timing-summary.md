## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 527585.5 ms | 519090.0 ms | 8495.5 ms | 318165.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 442256.2 ms | 435877.4 ms | 6378.9 ms | 258150.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 407972.3 ms | 402863.2 ms | 5109.1 ms | 279220.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 402636.7 ms | 397636.6 ms | 5000.1 ms | 283751.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 350106.9 ms | 346163.9 ms | 3943.1 ms | 239255.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 343283.6 ms | 339491.0 ms | 3792.6 ms | 232479.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 338341.0 ms | 334008.7 ms | 4332.3 ms | 100116.1 ms |
| IXGo | LLGoDeadcodeDrop | 303706.3 ms | 299259.9 ms | 4446.3 ms | 96390.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 228046.0 ms | 224341.8 ms | 3704.3 ms | 134635.1 ms |
| XGo | LLGoNoLTO | 212592.2 ms | 208195.4 ms | 4396.8 ms | 62100.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 185277.5 ms | 182439.1 ms | 2838.4 ms | 132532.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 163647.3 ms | 160957.5 ms | 2689.8 ms | 129792.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 161079.6 ms | 158338.0 ms | 2741.6 ms | 126019.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 131402.5 ms | 129063.5 ms | 2339.0 ms | 99725.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 129724.8 ms | 127364.0 ms | 2360.8 ms | 98664.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108792.7 ms | 106699.1 ms | 2093.6 ms | 86036.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98137.5 ms | 96021.1 ms | 2116.4 ms | 79907.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96750.7 ms | 94664.0 ms | 2086.6 ms | 78375.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 95289.8 ms | 93354.7 ms | 1935.1 ms | 77387.9 ms |
| Etcdctl | LLGoNoLTO | 94571.9 ms | 91800.1 ms | 2771.8 ms | 32038.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94383.4 ms | 92262.4 ms | 2121.0 ms | 69207.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 90654.2 ms | 88694.7 ms | 1959.5 ms | 67431.2 ms |
| Dustin_humanize | LLGoNoLTO | 71216.8 ms | 69259.4 ms | 1957.4 ms | 31704.2 ms |
| IXGo | LLGoNoLTO | 70889.8 ms | 67818.7 ms | 3071.1 ms | 24440.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70421.0 ms | 68689.4 ms | 1731.6 ms | 51389.4 ms |
| Aws_restjson | LLGoNoLTO | 67488.1 ms | 65535.7 ms | 1952.4 ms | 28922.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 66557.7 ms | 64509.0 ms | 2048.7 ms | 29042.3 ms |
| XGo | LLGoDeadcodeDrop | 64833.1 ms | 62476.1 ms | 2357.0 ms | 23357.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63908.9 ms | 62491.9 ms | 1417.0 ms | 48312.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53962.0 ms | 52715.2 ms | 1246.7 ms | 43422.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52818.1 ms | 51458.8 ms | 1359.4 ms | 37128.1 ms |
| Uber_zap | LLGoNoLTO | 46610.0 ms | 44601.3 ms | 2008.8 ms | 15430.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46333.9 ms | 45182.7 ms | 1151.1 ms | 35381.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 45519.5 ms | 44338.5 ms | 1181.1 ms | 34796.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 41961.1 ms | 40136.2 ms | 1824.9 ms | 14113.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41888.5 ms | 40835.1 ms | 1053.4 ms | 34625.9 ms |
| IXGo | Go | 37456.3 ms | 35064.7 ms | 2391.5 ms | 10986.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35554.8 ms | 34325.7 ms | 1229.1 ms | 11292.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33776.9 ms | 32729.4 ms | 1047.4 ms | 25416.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32620.7 ms | 31531.7 ms | 1089.0 ms | 25275.9 ms |
| K8s_workqueue | LLGoNoLTO | 31892.2 ms | 30036.5 ms | 1855.7 ms | 10999.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30841.6 ms | 28969.7 ms | 1871.9 ms | 10716.1 ms |
| Toml | LLGoDeadcodeDrop | 29241.7 ms | 28016.4 ms | 1225.2 ms | 9701.1 ms |
| Etcdctl | Go | 16510.1 ms | 15722.5 ms | 787.5 ms | 5458.2 ms |
| Gorm_schema | LLGoNoLTO | 16340.9 ms | 15182.3 ms | 1158.6 ms | 5927.4 ms |
| Toml | LLGoNoLTO | 13571.9 ms | 12578.0 ms | 993.9 ms | 5041.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12225.9 ms | 11303.0 ms | 922.9 ms | 4829.0 ms |
| XGo | Go | 6306.0 ms | 5923.5 ms | 382.5 ms | 2424.6 ms |
| Aws_restjson | Go | 5001.0 ms | 4641.7 ms | 359.3 ms | 1885.1 ms |
| Gorm_schema | Go | 3413.7 ms | 3214.2 ms | 199.5 ms | 1484.5 ms |
| Uber_zap | Go | 3002.3 ms | 2781.3 ms | 221.0 ms | 1321.0 ms |
| K8s_workqueue | Go | 1776.7 ms | 1607.8 ms | 168.9 ms | 804.0 ms |
| Dustin_humanize | Go | 619.0 ms | 543.6 ms | 75.4 ms | 314.9 ms |
| Toml | Go | 534.6 ms | 452.9 ms | 81.7 ms | 300.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1522974.3 ms | 1078285.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1492500.3 ms | 1029733.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1482802.0 ms | 1018466.0 ms | 9 |
| LLGoDeadcodeDrop | 923263.1 ms | 299558.8 ms | 9 |
| LLGoNoLTO | 625174.0 ms | 216603.7 ms | 9 |
| Go | 74619.7 ms | 24979.3 ms | 9 |

Dependency download details are in `download-timings.log`.
