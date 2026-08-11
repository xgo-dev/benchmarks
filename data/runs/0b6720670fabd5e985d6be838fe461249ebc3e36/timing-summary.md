## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 581870.0 ms | 571095.8 ms | 10774.1 ms | 354244.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 450412.4 ms | 442796.4 ms | 7615.9 ms | 269661.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 448960.0 ms | 442448.4 ms | 6511.7 ms | 310023.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 430541.0 ms | 424125.0 ms | 6416.1 ms | 305745.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 344789.5 ms | 340250.5 ms | 4539.0 ms | 233424.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 342968.9 ms | 338278.5 ms | 4690.4 ms | 231474.7 ms |
| IXGo | LLGoDeadcodeDrop | 309599.6 ms | 304148.7 ms | 5450.9 ms | 117386.6 ms |
| Etcdctl | LLGoNoLTO | 218752.6 ms | 214790.9 ms | 3961.8 ms | 74001.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 216751.6 ms | 212816.3 ms | 3935.4 ms | 71516.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 205809.9 ms | 202133.6 ms | 3676.3 ms | 151682.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 189667.0 ms | 185859.5 ms | 3807.5 ms | 146724.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 183901.8 ms | 178792.6 ms | 5109.3 ms | 67415.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 183626.8 ms | 180169.5 ms | 3457.3 ms | 146145.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 176790.7 ms | 172434.7 ms | 4356.1 ms | 96909.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 155517.3 ms | 152489.6 ms | 3027.7 ms | 123795.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 146145.0 ms | 143030.8 ms | 3114.1 ms | 110128.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 140994.3 ms | 138048.7 ms | 2945.6 ms | 108580.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 119912.6 ms | 117068.6 ms | 2844.0 ms | 95093.9 ms |
| XGo | LLGoDeadcodeDrop | 116444.1 ms | 113505.8 ms | 2938.3 ms | 41827.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 110868.4 ms | 108076.3 ms | 2792.1 ms | 88658.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 104623.8 ms | 101887.5 ms | 2736.3 ms | 84848.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104025.6 ms | 101436.2 ms | 2589.4 ms | 84211.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98437.5 ms | 95722.1 ms | 2715.5 ms | 73681.1 ms |
| IXGo | LLGoNoLTO | 96589.1 ms | 92956.0 ms | 3633.1 ms | 44209.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 85403.6 ms | 82355.6 ms | 3048.1 ms | 37400.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68790.1 ms | 67062.6 ms | 1727.5 ms | 53119.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67277.4 ms | 65422.6 ms | 1854.7 ms | 51454.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58261.3 ms | 56591.4 ms | 1670.0 ms | 42233.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57465.6 ms | 55905.9 ms | 1559.7 ms | 46734.9 ms |
| XGo | LLGoNoLTO | 56536.4 ms | 54010.7 ms | 2525.8 ms | 25224.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 49347.2 ms | 47769.4 ms | 1577.8 ms | 38240.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47882.4 ms | 46310.1 ms | 1572.3 ms | 36735.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 46978.2 ms | 44651.6 ms | 2326.7 ms | 17350.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44724.5 ms | 43295.4 ms | 1429.1 ms | 37144.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 41250.5 ms | 39454.3 ms | 1796.1 ms | 14377.3 ms |
| Aws_restjson | LLGoNoLTO | 36956.0 ms | 34731.0 ms | 2225.1 ms | 15073.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35842.1 ms | 34430.5 ms | 1411.6 ms | 27890.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34119.1 ms | 32812.2 ms | 1306.8 ms | 26581.9 ms |
| IXGo | Go | 33502.3 ms | 31058.3 ms | 2444.0 ms | 10220.3 ms |
| Uber_zap | LLGoNoLTO | 31345.9 ms | 29199.6 ms | 2146.3 ms | 12753.5 ms |
| K8s_workqueue | LLGoNoLTO | 28833.8 ms | 26815.3 ms | 2018.5 ms | 11826.3 ms |
| Toml | LLGoDeadcodeDrop | 23853.8 ms | 22385.8 ms | 1468.0 ms | 9243.0 ms |
| XGo | Go | 18708.9 ms | 17449.5 ms | 1259.4 ms | 5506.2 ms |
| Gorm_schema | LLGoNoLTO | 18474.3 ms | 16965.9 ms | 1508.4 ms | 7684.1 ms |
| Etcdctl | Go | 16562.4 ms | 15637.3 ms | 925.1 ms | 5710.2 ms |
| Toml | LLGoNoLTO | 15307.6 ms | 13968.7 ms | 1338.9 ms | 6280.4 ms |
| Dustin_humanize | LLGoNoLTO | 13705.0 ms | 12411.7 ms | 1293.3 ms | 5831.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13331.4 ms | 12152.1 ms | 1179.3 ms | 5773.4 ms |
| Gorm_schema | Go | 5394.8 ms | 5035.5 ms | 359.3 ms | 2104.9 ms |
| Aws_restjson | Go | 4940.4 ms | 4510.9 ms | 429.5 ms | 1905.0 ms |
| Uber_zap | Go | 2928.7 ms | 2700.8 ms | 227.9 ms | 1297.2 ms |
| K8s_workqueue | Go | 1786.7 ms | 1572.8 ms | 213.9 ms | 823.6 ms |
| Dustin_humanize | Go | 650.1 ms | 538.6 ms | 111.5 ms | 331.8 ms |
| Toml | Go | 558.7 ms | 451.7 ms | 107.0 ms | 325.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1640277.7 ms | 1170376.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1610429.8 ms | 1116502.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1548962.7 ms | 1088289.2 ms | 9 |
| LLGoDeadcodeDrop | 1037514.7 ms | 382289.8 ms | 9 |
| LLGoNoLTO | 516500.9 ms | 202885.3 ms | 9 |
| Go | 85033.1 ms | 28224.3 ms | 9 |

Dependency download details are in `download-timings.log`.
