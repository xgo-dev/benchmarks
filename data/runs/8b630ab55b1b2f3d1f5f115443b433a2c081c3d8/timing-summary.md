## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 619014.4 ms | 613597.3 ms | 5417.1 ms | 421136.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 593704.6 ms | 587993.2 ms | 5711.4 ms | 413753.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 574565.5 ms | 569438.7 ms | 5126.9 ms | 402896.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 375124.8 ms | 369890.9 ms | 5233.9 ms | 216829.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 374091.3 ms | 368968.5 ms | 5122.8 ms | 213293.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 373185.9 ms | 368115.0 ms | 5070.9 ms | 215459.2 ms |
| IXGo | LLGoDeadcodeDrop | 356297.2 ms | 351866.9 ms | 4430.4 ms | 115150.4 ms |
| IXGo | LLGoNoLTO | 342027.0 ms | 337857.0 ms | 4170.0 ms | 112772.2 ms |
| Etcdctl | LLGoNoLTO | 338403.8 ms | 334094.2 ms | 4309.6 ms | 108609.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 203259.0 ms | 199997.0 ms | 3261.9 ms | 150255.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 202153.2 ms | 198739.5 ms | 3413.7 ms | 148287.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 198201.1 ms | 194824.4 ms | 3376.8 ms | 67528.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 188785.5 ms | 185442.7 ms | 3342.8 ms | 145168.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 157511.5 ms | 154688.1 ms | 2823.3 ms | 125313.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 145465.4 ms | 142611.8 ms | 2853.6 ms | 109680.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141735.4 ms | 138905.7 ms | 2829.8 ms | 109225.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 124919.0 ms | 122444.7 ms | 2474.3 ms | 101219.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 118308.5 ms | 115765.2 ms | 2543.3 ms | 97731.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 117304.8 ms | 114882.6 ms | 2422.1 ms | 96558.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 117195.6 ms | 114822.8 ms | 2372.8 ms | 96622.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 112759.6 ms | 110342.5 ms | 2417.1 ms | 87645.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 111903.3 ms | 109424.9 ms | 2478.3 ms | 87574.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 111136.1 ms | 108769.6 ms | 2366.5 ms | 39837.6 ms |
| XGo | LLGoDeadcodeDrop | 95097.1 ms | 92468.1 ms | 2629.0 ms | 38221.4 ms |
| Aws_restjson | LLGoNoLTO | 80497.3 ms | 78198.1 ms | 2299.2 ms | 36673.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 76172.2 ms | 74502.9 ms | 1669.4 ms | 57619.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75696.9 ms | 73258.0 ms | 2438.9 ms | 36560.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 75114.3 ms | 73217.7 ms | 1896.6 ms | 27502.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 70971.7 ms | 69373.2 ms | 1598.5 ms | 55130.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62315.3 ms | 60844.6 ms | 1470.7 ms | 51676.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 59290.1 ms | 57654.5 ms | 1635.7 ms | 43391.3 ms |
| XGo | LLGoNoLTO | 53847.4 ms | 51461.8 ms | 2385.6 ms | 26360.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51619.7 ms | 50221.8 ms | 1397.9 ms | 40873.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 51526.5 ms | 50108.7 ms | 1417.9 ms | 40827.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 45883.2 ms | 43648.5 ms | 2234.7 ms | 21799.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43291.4 ms | 42001.2 ms | 1290.2 ms | 36391.1 ms |
| Toml | LLGoDeadcodeDrop | 42182.8 ms | 40618.5 ms | 1564.4 ms | 14313.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 38549.1 ms | 37122.3 ms | 1426.8 ms | 12881.7 ms |
| Uber_zap | LLGoNoLTO | 36896.7 ms | 34991.5 ms | 1905.1 ms | 19025.1 ms |
| K8s_workqueue | LLGoNoLTO | 35341.8 ms | 33489.4 ms | 1852.4 ms | 18631.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32174.8 ms | 30959.2 ms | 1215.6 ms | 25014.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31982.1 ms | 30708.0 ms | 1274.1 ms | 24912.0 ms |
| Gorm_schema | LLGoNoLTO | 16553.8 ms | 15211.7 ms | 1342.1 ms | 6762.6 ms |
| Toml | LLGoNoLTO | 13471.1 ms | 12246.6 ms | 1224.5 ms | 5479.7 ms |
| Dustin_humanize | LLGoNoLTO | 11233.9 ms | 10099.8 ms | 1134.1 ms | 4613.8 ms |
| IXGo | Go | 2129.4 ms | 1786.2 ms | 343.2 ms | 1502.0 ms |
| Etcdctl | Go | 1380.8 ms | 1161.3 ms | 219.4 ms | 1006.0 ms |
| XGo | Go | 1093.4 ms | 940.1 ms | 153.3 ms | 723.5 ms |
| Aws_restjson | Go | 818.7 ms | 691.4 ms | 127.3 ms | 510.4 ms |
| K8s_workqueue | Go | 779.3 ms | 623.2 ms | 156.1 ms | 451.0 ms |
| Uber_zap | Go | 674.8 ms | 570.5 ms | 104.2 ms | 383.3 ms |
| Gorm_schema | Go | 545.2 ms | 450.7 ms | 94.5 ms | 350.4 ms |
| Toml | Go | 534.0 ms | 435.0 ms | 99.0 ms | 306.5 ms |
| Dustin_humanize | Go | 511.8 ms | 392.6 ms | 119.3 ms | 242.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1733528.4 ms | 1238560.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1712271.1 ms | 1197920.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1684531.7 ms | 1178005.3 ms | 9 |
| LLGoDeadcodeDrop | 1038157.9 ms | 373795.9 ms | 9 |
| LLGoNoLTO | 928272.9 ms | 338928.0 ms | 9 |
| Go | 8467.4 ms | 5475.9 ms | 9 |

Dependency download details are in `download-timings.log`.
