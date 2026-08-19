## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 495532.4 ms | 484710.2 ms | 10822.3 ms | 155766.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 419649.5 ms | 413341.5 ms | 6308.0 ms | 290853.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 413271.5 ms | 406704.9 ms | 6566.6 ms | 283848.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 392633.5 ms | 386259.5 ms | 6374.0 ms | 272274.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 326925.8 ms | 322138.2 ms | 4787.6 ms | 219072.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 314571.8 ms | 309876.1 ms | 4695.7 ms | 209838.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 314514.2 ms | 310008.2 ms | 4506.0 ms | 213491.1 ms |
| IXGo | LLGoDeadcodeDrop | 304382.0 ms | 298537.6 ms | 5844.4 ms | 102539.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 256268.2 ms | 251108.2 ms | 5160.1 ms | 162254.0 ms |
| Etcdctl | LLGoNoLTO | 230640.3 ms | 224983.3 ms | 5657.0 ms | 70266.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 216738.2 ms | 212186.2 ms | 4552.0 ms | 121996.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 201570.2 ms | 197693.9 ms | 3876.3 ms | 61368.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 190631.4 ms | 186282.1 ms | 4349.3 ms | 58852.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 188275.9 ms | 184694.0 ms | 3581.9 ms | 138829.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 185458.7 ms | 181956.8 ms | 3501.9 ms | 135073.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150358.9 ms | 147367.2 ms | 2991.7 ms | 120234.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 130814.3 ms | 127880.6 ms | 2933.6 ms | 83927.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 128833.4 ms | 125822.4 ms | 3011.0 ms | 97595.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 116073.2 ms | 113391.9 ms | 2681.3 ms | 92921.5 ms |
| XGo | LLGoDeadcodeDrop | 108138.3 ms | 105148.2 ms | 2990.2 ms | 34493.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102490.3 ms | 99681.6 ms | 2808.7 ms | 83631.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 99320.0 ms | 96746.5 ms | 2573.6 ms | 82461.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97252.0 ms | 94613.6 ms | 2638.4 ms | 80089.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93787.6 ms | 91105.4 ms | 2682.2 ms | 71299.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 85073.8 ms | 82397.9 ms | 2675.9 ms | 49171.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 69587.7 ms | 67498.7 ms | 2088.9 ms | 46539.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68453.4 ms | 65798.0 ms | 2655.4 ms | 29004.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68422.8 ms | 66614.2 ms | 1808.7 ms | 52227.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65899.3 ms | 64175.5 ms | 1723.8 ms | 49094.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54869.2 ms | 53285.7 ms | 1583.5 ms | 44857.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53753.5 ms | 52000.4 ms | 1753.2 ms | 38451.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 46268.7 ms | 44746.2 ms | 1522.5 ms | 35987.6 ms |
| XGo | LLGoNoLTO | 40645.9 ms | 38173.3 ms | 2472.7 ms | 15839.6 ms |
| IXGo | Go | 38093.8 ms | 35527.6 ms | 2566.3 ms | 11305.4 ms |
| Gorm_schema | LLGoNoLTO | 36266.8 ms | 34453.2 ms | 1813.5 ms | 12267.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32719.6 ms | 31314.3 ms | 1405.3 ms | 25990.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32045.7 ms | 30639.9 ms | 1405.8 ms | 25131.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30397.7 ms | 28843.6 ms | 1554.1 ms | 10233.7 ms |
| Aws_restjson | LLGoNoLTO | 29046.6 ms | 26747.6 ms | 2299.0 ms | 10604.9 ms |
| K8s_workqueue | LLGoNoLTO | 29041.0 ms | 26941.1 ms | 2099.9 ms | 10050.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 28449.2 ms | 26384.2 ms | 2064.9 ms | 10103.5 ms |
| Uber_zap | LLGoNoLTO | 26114.1 ms | 24046.8 ms | 2067.3 ms | 9437.2 ms |
| Toml | LLGoNoLTO | 24040.2 ms | 22590.9 ms | 1449.3 ms | 8515.2 ms |
| Toml | LLGoDeadcodeDrop | 18335.3 ms | 16959.5 ms | 1375.7 ms | 7086.3 ms |
| Etcdctl | Go | 16535.2 ms | 15687.5 ms | 847.7 ms | 5619.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11784.6 ms | 10491.8 ms | 1292.8 ms | 4983.4 ms |
| Dustin_humanize | LLGoNoLTO | 11673.0 ms | 10463.6 ms | 1209.4 ms | 4842.7 ms |
| XGo | Go | 8623.3 ms | 8099.8 ms | 523.5 ms | 3342.6 ms |
| Aws_restjson | Go | 5176.0 ms | 4693.9 ms | 482.1 ms | 1996.6 ms |
| Gorm_schema | Go | 3374.4 ms | 3185.6 ms | 188.8 ms | 1484.4 ms |
| Uber_zap | Go | 2993.9 ms | 2773.8 ms | 220.1 ms | 1346.1 ms |
| K8s_workqueue | Go | 1817.7 ms | 1631.9 ms | 185.8 ms | 855.1 ms |
| Dustin_humanize | Go | 827.1 ms | 667.5 ms | 159.6 ms | 396.4 ms |
| Toml | Go | 574.8 ms | 462.6 ms | 112.2 ms | 330.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1549063.8 ms | 1105839.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1454102.7 ms | 1013219.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1452710.9 ms | 1008081.1 ms | 9 |
| LLGoDeadcodeDrop | 962142.0 ms | 318664.8 ms | 9 |
| LLGoNoLTO | 923000.3 ms | 297590.2 ms | 9 |
| Go | 78016.3 ms | 26675.9 ms | 9 |

Dependency download details are in `download-timings.log`.
