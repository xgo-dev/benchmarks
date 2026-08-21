## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 407813.6 ms | 402805.4 ms | 5008.2 ms | 282443.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 407684.6 ms | 402529.6 ms | 5155.0 ms | 283488.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 399255.2 ms | 394100.0 ms | 5155.2 ms | 281216.4 ms |
| IXGo | LLGoDeadcodeDrop | 270050.0 ms | 265344.1 ms | 4705.8 ms | 90109.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 267603.2 ms | 263804.6 ms | 3798.7 ms | 174840.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 266376.5 ms | 262686.5 ms | 3690.0 ms | 176602.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 264108.7 ms | 260393.0 ms | 3715.6 ms | 172049.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 246562.6 ms | 242642.7 ms | 3920.0 ms | 154709.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 203904.6 ms | 200654.5 ms | 3250.1 ms | 62517.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 203222.5 ms | 199918.5 ms | 3304.0 ms | 114681.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 174478.0 ms | 171373.7 ms | 3104.4 ms | 56132.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 170139.4 ms | 166983.8 ms | 3155.6 ms | 106078.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 169003.5 ms | 166209.0 ms | 2794.4 ms | 131540.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 168813.8 ms | 166106.5 ms | 2707.3 ms | 129692.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 143822.9 ms | 141374.7 ms | 2448.1 ms | 113027.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 123152.4 ms | 120960.0 ms | 2192.4 ms | 95478.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106883.3 ms | 104776.9 ms | 2106.5 ms | 86166.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 100543.5 ms | 98359.9 ms | 2183.6 ms | 82196.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99756.3 ms | 97641.4 ms | 2114.8 ms | 81028.5 ms |
| XGo | LLGoDeadcodeDrop | 98624.2 ms | 96145.4 ms | 2478.7 ms | 32942.9 ms |
| XGo | LLGoNoLTO | 95564.6 ms | 93350.3 ms | 2214.3 ms | 31644.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92578.8 ms | 90495.5 ms | 2083.3 ms | 71735.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92018.9 ms | 89918.2 ms | 2100.7 ms | 72083.5 ms |
| Etcdctl | LLGoNoLTO | 84170.4 ms | 81491.4 ms | 2679.0 ms | 30097.5 ms |
| IXGo | LLGoNoLTO | 65679.0 ms | 62616.8 ms | 3062.2 ms | 24407.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63608.6 ms | 62284.8 ms | 1323.7 ms | 48757.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61354.1 ms | 59979.7 ms | 1374.4 ms | 46258.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53253.3 ms | 52056.6 ms | 1196.7 ms | 43721.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51997.2 ms | 50689.7 ms | 1307.5 ms | 35907.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 46758.4 ms | 45593.1 ms | 1165.3 ms | 34301.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43397.7 ms | 42220.5 ms | 1177.1 ms | 33697.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 40480.4 ms | 39408.0 ms | 1072.4 ms | 34243.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 39184.7 ms | 37463.4 ms | 1721.3 ms | 13829.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 35061.5 ms | 33227.4 ms | 1834.1 ms | 12640.5 ms |
| K8s_workqueue | LLGoNoLTO | 33000.7 ms | 31263.1 ms | 1737.5 ms | 12106.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 32069.9 ms | 30848.9 ms | 1221.0 ms | 10921.7 ms |
| Gorm_schema | LLGoNoLTO | 31703.8 ms | 30465.8 ms | 1238.0 ms | 10826.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30254.6 ms | 29176.1 ms | 1078.5 ms | 23644.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 29840.1 ms | 28850.0 ms | 990.1 ms | 23274.6 ms |
| Aws_restjson | LLGoNoLTO | 28334.9 ms | 26623.9 ms | 1711.0 ms | 10983.4 ms |
| Uber_zap | LLGoNoLTO | 25449.6 ms | 23776.6 ms | 1673.0 ms | 10100.2 ms |
| Toml | LLGoDeadcodeDrop | 19544.8 ms | 18504.1 ms | 1040.7 ms | 7680.3 ms |
| Toml | LLGoNoLTO | 12528.2 ms | 11467.3 ms | 1060.9 ms | 5172.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11332.9 ms | 10393.3 ms | 939.6 ms | 4960.3 ms |
| Dustin_humanize | LLGoNoLTO | 10445.4 ms | 9444.6 ms | 1000.8 ms | 4386.6 ms |
| IXGo | Go | 1994.5 ms | 1730.3 ms | 264.2 ms | 2338.8 ms |
| Etcdctl | Go | 1314.4 ms | 1156.0 ms | 158.4 ms | 1111.4 ms |
| XGo | Go | 1097.3 ms | 930.5 ms | 166.9 ms | 1422.4 ms |
| Aws_restjson | Go | 827.6 ms | 717.4 ms | 110.3 ms | 450.0 ms |
| K8s_workqueue | Go | 665.8 ms | 570.0 ms | 95.8 ms | 453.4 ms |
| Uber_zap | Go | 658.5 ms | 559.3 ms | 99.2 ms | 376.8 ms |
| Toml | Go | 516.8 ms | 447.0 ms | 69.9 ms | 295.7 ms |
| Gorm_schema | Go | 516.3 ms | 448.0 ms | 68.3 ms | 283.7 ms |
| Dustin_humanize | Go | 493.3 ms | 402.8 ms | 90.4 ms | 244.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1421381.3 ms | 1022580.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1366715.8 ms | 963562.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1362186.9 ms | 946724.4 ms | 9 |
| LLGoDeadcodeDrop | 884250.5 ms | 291733.7 ms | 9 |
| LLGoNoLTO | 386876.6 ms | 139725.0 ms | 9 |
| Go | 8084.5 ms | 6976.3 ms | 9 |

Dependency download details are in `download-timings.log`.
