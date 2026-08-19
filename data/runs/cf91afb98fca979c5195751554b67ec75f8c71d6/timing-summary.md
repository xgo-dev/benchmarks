## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 480760.0 ms | 472889.8 ms | 7870.2 ms | 300942.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 470285.8 ms | 462510.7 ms | 7775.1 ms | 290918.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 377987.7 ms | 371480.9 ms | 6506.7 ms | 263886.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 314654.7 ms | 309904.1 ms | 4750.6 ms | 211607.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 310732.5 ms | 306229.9 ms | 4502.6 ms | 207173.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 307942.7 ms | 303315.3 ms | 4627.4 ms | 206399.6 ms |
| IXGo | LLGoDeadcodeDrop | 266192.6 ms | 260698.6 ms | 5494.0 ms | 82186.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 205298.0 ms | 201261.3 ms | 4036.6 ms | 62210.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 204136.7 ms | 199883.5 ms | 4253.1 ms | 115569.9 ms |
| Aws_restjson | LLGoNoLTO | 202195.3 ms | 198279.0 ms | 3916.2 ms | 61217.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 200110.4 ms | 196354.7 ms | 3755.7 ms | 60666.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 180939.7 ms | 177454.9 ms | 3484.7 ms | 132642.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 171217.2 ms | 167656.4 ms | 3560.7 ms | 130562.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 171005.9 ms | 167685.0 ms | 3320.9 ms | 131903.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 139339.5 ms | 136304.7 ms | 3034.8 ms | 110916.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127543.6 ms | 124606.8 ms | 2936.8 ms | 95656.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109132.3 ms | 106326.3 ms | 2806.0 ms | 86559.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102219.6 ms | 99640.8 ms | 2578.8 ms | 83170.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101973.2 ms | 99188.2 ms | 2785.0 ms | 82596.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101478.3 ms | 98807.6 ms | 2670.7 ms | 82301.6 ms |
| XGo | LLGoNoLTO | 100020.5 ms | 97203.7 ms | 2816.8 ms | 31859.6 ms |
| XGo | LLGoDeadcodeDrop | 99652.4 ms | 96873.0 ms | 2779.4 ms | 31973.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 94116.3 ms | 91554.5 ms | 2561.8 ms | 72036.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93756.5 ms | 91038.2 ms | 2718.3 ms | 72145.6 ms |
| Etcdctl | LLGoNoLTO | 82883.2 ms | 79615.5 ms | 3267.6 ms | 28539.9 ms |
| IXGo | LLGoNoLTO | 64328.5 ms | 60609.6 ms | 3718.9 ms | 22384.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64051.2 ms | 62292.1 ms | 1759.1 ms | 49597.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62539.0 ms | 60749.9 ms | 1789.1 ms | 48071.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54821.0 ms | 53299.1 ms | 1521.9 ms | 44994.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53095.9 ms | 51405.9 ms | 1690.0 ms | 37282.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46032.5 ms | 44507.7 ms | 1524.9 ms | 35655.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 45793.9 ms | 44249.0 ms | 1544.9 ms | 35674.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41897.1 ms | 40541.5 ms | 1355.6 ms | 35294.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 39198.2 ms | 36974.1 ms | 2224.0 ms | 13206.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 33904.4 ms | 31630.3 ms | 2274.2 ms | 11766.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33821.8 ms | 32231.5 ms | 1590.3 ms | 10939.6 ms |
| Gorm_schema | LLGoNoLTO | 32669.0 ms | 31097.4 ms | 1571.6 ms | 10544.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31893.2 ms | 30578.1 ms | 1315.1 ms | 25180.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31779.4 ms | 30428.9 ms | 1350.5 ms | 25058.9 ms |
| Uber_zap | LLGoNoLTO | 25668.6 ms | 23531.5 ms | 2137.1 ms | 9311.9 ms |
| K8s_workqueue | LLGoNoLTO | 24364.2 ms | 22281.7 ms | 2082.5 ms | 9087.8 ms |
| Toml | LLGoNoLTO | 19804.2 ms | 18448.3 ms | 1355.8 ms | 7343.0 ms |
| Toml | LLGoDeadcodeDrop | 19793.8 ms | 18344.6 ms | 1449.2 ms | 7511.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11604.9 ms | 10404.8 ms | 1200.2 ms | 4816.0 ms |
| Dustin_humanize | LLGoNoLTO | 10502.8 ms | 9401.4 ms | 1101.4 ms | 4145.2 ms |
| IXGo | Go | 2020.1 ms | 1753.4 ms | 266.6 ms | 1163.9 ms |
| Etcdctl | Go | 1374.4 ms | 1186.4 ms | 187.9 ms | 853.8 ms |
| XGo | Go | 1345.2 ms | 1099.3 ms | 245.9 ms | 750.7 ms |
| Aws_restjson | Go | 816.8 ms | 670.2 ms | 146.6 ms | 457.1 ms |
| K8s_workqueue | Go | 696.4 ms | 575.0 ms | 121.4 ms | 391.9 ms |
| Uber_zap | Go | 688.8 ms | 566.1 ms | 122.7 ms | 399.9 ms |
| Gorm_schema | Go | 544.1 ms | 450.1 ms | 94.0 ms | 317.9 ms |
| Toml | Go | 524.1 ms | 415.1 ms | 108.9 ms | 295.3 ms |
| Dustin_humanize | Go | 377.8 ms | 282.6 ms | 95.2 ms | 201.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1477881.4 ms | 1054984.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1412696.1 ms | 986679.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1400547.8 ms | 972132.5 ms | 9 |
| LLGoDeadcodeDrop | 909576.5 ms | 285276.6 ms | 9 |
| LLGoNoLTO | 562436.2 ms | 184433.7 ms | 9 |
| Go | 8387.5 ms | 4832.0 ms | 9 |

Dependency download details are in `download-timings.log`.
