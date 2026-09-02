## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 480217.8 ms | 474632.0 ms | 5585.8 ms | 346834.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 479249.1 ms | 473594.4 ms | 5654.7 ms | 343223.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 474311.6 ms | 468930.2 ms | 5381.5 ms | 345388.6 ms |
| IXGo | LLGoDeadcodeDrop | 268810.5 ms | 264037.9 ms | 4772.6 ms | 106985.4 ms |
| IXGo | LLGoNoLTO | 265647.1 ms | 260973.0 ms | 4674.1 ms | 105462.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 200894.8 ms | 196889.2 ms | 4005.6 ms | 125638.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 196503.5 ms | 192411.8 ms | 4091.7 ms | 122170.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 189610.3 ms | 185791.8 ms | 3818.5 ms | 118927.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 140823.7 ms | 137171.5 ms | 3652.2 ms | 47319.7 ms |
| Etcdctl | LLGoNoLTO | 136815.4 ms | 133292.9 ms | 3522.5 ms | 45813.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 134116.1 ms | 131377.0 ms | 2739.1 ms | 95293.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 130462.0 ms | 127960.4 ms | 2501.5 ms | 93610.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 129989.3 ms | 127355.4 ms | 2633.9 ms | 91780.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 117043.1 ms | 115163.4 ms | 1879.7 ms | 92359.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 112239.3 ms | 110397.1 ms | 1842.2 ms | 85943.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 108407.9 ms | 106639.8 ms | 1768.1 ms | 83006.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 77345.2 ms | 75968.4 ms | 1376.8 ms | 59225.1 ms |
| XGo | LLGoDeadcodeDrop | 75396.8 ms | 73135.0 ms | 2261.8 ms | 29022.4 ms |
| XGo | LLGoNoLTO | 75123.1 ms | 72902.6 ms | 2220.6 ms | 28983.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 75068.8 ms | 73800.3 ms | 1268.5 ms | 58616.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 74474.5 ms | 73122.4 ms | 1352.1 ms | 58653.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 72222.0 ms | 70812.6 ms | 1409.4 ms | 53359.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 69573.7 ms | 68148.1 ms | 1425.7 ms | 51639.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 64390.1 ms | 63173.5 ms | 1216.6 ms | 48644.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 63389.7 ms | 61742.8 ms | 1646.9 ms | 32088.2 ms |
| Aws_restjson | LLGoNoLTO | 59923.5 ms | 58388.0 ms | 1535.5 ms | 30940.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 46381.3 ms | 45321.6 ms | 1059.7 ms | 32953.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 45852.8 ms | 44793.0 ms | 1059.8 ms | 33503.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 39033.9 ms | 37857.9 ms | 1176.0 ms | 17177.6 ms |
| Uber_zap | LLGoNoLTO | 38401.8 ms | 37167.9 ms | 1233.8 ms | 16682.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 36905.1 ms | 35870.9 ms | 1034.2 ms | 24215.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 36893.8 ms | 36042.1 ms | 851.6 ms | 29040.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 33759.6 ms | 32668.5 ms | 1091.0 ms | 15597.8 ms |
| K8s_workqueue | LLGoNoLTO | 33731.8 ms | 32638.9 ms | 1093.0 ms | 15402.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 30915.7 ms | 30152.1 ms | 763.6 ms | 23056.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 30832.8 ms | 30084.7 ms | 748.1 ms | 22701.1 ms |
| IXGo | Go | 30149.0 ms | 27714.9 ms | 2434.1 ms | 8876.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 25258.7 ms | 24328.2 ms | 930.5 ms | 9168.7 ms |
| Gorm_schema | LLGoNoLTO | 25000.7 ms | 24102.7 ms | 898.0 ms | 8950.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 24019.5 ms | 23422.8 ms | 596.7 ms | 19428.4 ms |
| Etcdctl | Go | 23639.6 ms | 21813.5 ms | 1826.1 ms | 7078.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 18472.8 ms | 17891.2 ms | 581.6 ms | 13433.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 17701.9 ms | 17089.9 ms | 612.0 ms | 12750.2 ms |
| Toml | LLGoDeadcodeDrop | 15704.4 ms | 15015.5 ms | 688.9 ms | 5951.9 ms |
| Toml | LLGoNoLTO | 15528.6 ms | 14833.1 ms | 695.5 ms | 5899.7 ms |
| XGo | Go | 14246.3 ms | 13180.4 ms | 1065.9 ms | 4303.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 10194.9 ms | 9690.7 ms | 504.2 ms | 4646.4 ms |
| Dustin_humanize | LLGoNoLTO | 9185.5 ms | 8686.4 ms | 499.1 ms | 4078.9 ms |
| Aws_restjson | Go | 5709.5 ms | 5147.2 ms | 562.3 ms | 2357.4 ms |
| Gorm_schema | Go | 4335.7 ms | 4022.0 ms | 313.6 ms | 1677.5 ms |
| Uber_zap | Go | 3856.5 ms | 3506.6 ms | 349.8 ms | 1488.9 ms |
| K8s_workqueue | Go | 3133.2 ms | 2790.5 ms | 342.8 ms | 1104.2 ms |
| Toml | Go | 1378.1 ms | 1238.2 ms | 139.9 ms | 626.0 ms |
| Dustin_humanize | Go | 565.6 ms | 459.7 ms | 105.9 ms | 274.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1170012.8 ms | 850138.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1154760.0 ms | 822808.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1149322.1 ms | 812453.0 ms | 9 |
| LLGoDeadcodeDrop | 672372.1 ms | 267957.9 ms | 9 |
| LLGoNoLTO | 659357.5 ms | 262212.8 ms | 9 |
| Go | 87013.5 ms | 27788.2 ms | 9 |

Dependency download details are in `download-timings.log`.
