## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 371156.9 ms | 366320.4 ms | 4836.6 ms | 222243.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 346413.6 ms | 340451.4 ms | 5962.2 ms | 217488.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 333416.7 ms | 329033.6 ms | 4383.1 ms | 223629.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 268520.0 ms | 263355.9 ms | 5164.1 ms | 162698.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 215766.8 ms | 212165.1 ms | 3601.6 ms | 64165.6 ms |
| Etcdctl | LLGoNoLTO | 206460.7 ms | 203173.4 ms | 3287.3 ms | 60606.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 199836.1 ms | 196466.9 ms | 3369.2 ms | 145173.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 193462.8 ms | 190076.6 ms | 3386.2 ms | 140526.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 177840.8 ms | 174005.8 ms | 3835.0 ms | 105745.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 162904.7 ms | 159261.2 ms | 3643.6 ms | 47672.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 154033.3 ms | 151085.2 ms | 2948.1 ms | 119783.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 151278.3 ms | 148513.5 ms | 2764.8 ms | 119712.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 139812.6 ms | 137058.1 ms | 2754.5 ms | 106596.3 ms |
| Uber_zap | LLGoNoLTO | 129838.8 ms | 126878.2 ms | 2960.5 ms | 38361.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 113059.8 ms | 110630.7 ms | 2429.1 ms | 89929.0 ms |
| XGo | LLGoDeadcodeDrop | 108171.7 ms | 105402.8 ms | 2768.9 ms | 34562.8 ms |
| XGo | LLGoNoLTO | 107124.1 ms | 104332.9 ms | 2791.2 ms | 34116.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 105792.2 ms | 103111.5 ms | 2680.7 ms | 39850.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 105046.2 ms | 102607.8 ms | 2438.4 ms | 86472.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 104463.5 ms | 101926.7 ms | 2536.8 ms | 85432.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99764.6 ms | 97192.4 ms | 2572.2 ms | 75249.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99087.6 ms | 96531.2 ms | 2556.4 ms | 74562.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 72956.6 ms | 71324.7 ms | 1631.9 ms | 57004.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 71973.1 ms | 70266.0 ms | 1707.1 ms | 54113.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 70926.2 ms | 69012.3 ms | 1913.9 ms | 46828.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 61628.4 ms | 59673.9 ms | 1954.5 ms | 37370.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58932.6 ms | 57309.9 ms | 1622.7 ms | 41136.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57348.6 ms | 55816.5 ms | 1532.1 ms | 45535.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 50429.9 ms | 49033.1 ms | 1396.9 ms | 39176.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49528.7 ms | 47989.6 ms | 1539.1 ms | 38261.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 44941.8 ms | 42745.2 ms | 2196.7 ms | 15091.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36055.6 ms | 34653.8 ms | 1401.7 ms | 28487.9 ms |
| Aws_restjson | LLGoNoLTO | 31702.0 ms | 29473.4 ms | 2228.6 ms | 11367.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 31061.4 ms | 28900.0 ms | 2161.3 ms | 10802.5 ms |
| K8s_workqueue | LLGoNoLTO | 25817.7 ms | 23686.1 ms | 2131.6 ms | 9552.4 ms |
| Toml | LLGoNoLTO | 20926.0 ms | 19546.5 ms | 1379.4 ms | 7735.6 ms |
| Toml | LLGoDeadcodeDrop | 20352.6 ms | 19117.0 ms | 1235.6 ms | 7559.1 ms |
| Etcdctl | Go | 17302.9 ms | 16457.2 ms | 845.8 ms | 5935.9 ms |
| Gorm_schema | LLGoNoLTO | 16587.4 ms | 15183.0 ms | 1404.5 ms | 6162.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12753.7 ms | 11568.7 ms | 1185.0 ms | 5220.4 ms |
| Dustin_humanize | LLGoNoLTO | 12265.5 ms | 11146.4 ms | 1119.1 ms | 4900.6 ms |
| XGo | Go | 9160.1 ms | 8650.7 ms | 509.4 ms | 3760.9 ms |
| Aws_restjson | Go | 5202.5 ms | 4803.4 ms | 399.1 ms | 2031.5 ms |
| Gorm_schema | Go | 3723.5 ms | 3528.5 ms | 194.9 ms | 1685.2 ms |
| Uber_zap | Go | 3098.4 ms | 2864.8 ms | 233.6 ms | 1402.8 ms |
| K8s_workqueue | Go | 1991.3 ms | 1753.6 ms | 237.8 ms | 875.6 ms |
| Dustin_humanize | Go | 677.3 ms | 578.6 ms | 98.7 ms | 342.1 ms |
| Toml | Go | 554.5 ms | 461.3 ms | 93.2 ms | 307.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1185549.3 ms | 825668.7 ms | 8 |
| LLGoFullLTOGlobalDCE | 1122673.1 ms | 790671.4 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1078750.1 ms | 746816.4 ms | 8 |
| LLGoDeadcodeDrop | 701744.9 ms | 224925.4 ms | 8 |
| LLGoNoLTO | 550722.1 ms | 172802.7 ms | 8 |
| Go | 41710.5 ms | 16341.2 ms | 8 |

Dependency download details are in `download-timings.log`.
