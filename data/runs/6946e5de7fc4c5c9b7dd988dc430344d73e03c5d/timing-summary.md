## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 486031.2 ms | 476444.7 ms | 9586.6 ms | 468855.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 474449.4 ms | 468476.8 ms | 5972.6 ms | 427585.0 ms |
| IXGo | LLGoDeadcodeDrop | 469691.3 ms | 461244.3 ms | 8447.0 ms | 402018.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 449318.2 ms | 440340.9 ms | 8977.2 ms | 414231.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 396634.3 ms | 389557.9 ms | 7076.4 ms | 350146.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 374921.0 ms | 367430.7 ms | 7490.3 ms | 365794.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 312638.6 ms | 308720.1 ms | 3918.5 ms | 274087.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 296692.7 ms | 290876.9 ms | 5815.8 ms | 275706.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 251266.0 ms | 243872.9 ms | 7393.1 ms | 260687.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 218307.5 ms | 213679.9 ms | 4627.6 ms | 193115.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 196107.5 ms | 192849.1 ms | 3258.4 ms | 169465.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150506.3 ms | 147768.8 ms | 2737.5 ms | 132880.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 133682.8 ms | 131017.4 ms | 2665.4 ms | 115793.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 129687.9 ms | 127074.3 ms | 2613.6 ms | 111916.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 129017.2 ms | 125839.7 ms | 3177.5 ms | 137106.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 124122.9 ms | 121426.7 ms | 2696.2 ms | 112301.3 ms |
| IXGo | LLGoNoLTO | 123342.0 ms | 118076.1 ms | 5266.0 ms | 100549.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 120214.0 ms | 116904.2 ms | 3309.8 ms | 130723.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 107406.2 ms | 104726.0 ms | 2680.2 ms | 91524.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 106051.3 ms | 103847.3 ms | 2204.0 ms | 116648.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102491.9 ms | 100000.1 ms | 2491.9 ms | 87661.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101233.1 ms | 98619.3 ms | 2613.9 ms | 85727.7 ms |
| XGo | LLGoNoLTO | 100631.0 ms | 97110.4 ms | 3520.6 ms | 96764.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 100234.7 ms | 97625.7 ms | 2608.9 ms | 87794.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 93004.8 ms | 90312.6 ms | 2692.3 ms | 99931.2 ms |
| Toml | LLGoDeadcodeDrop | 87161.7 ms | 84433.4 ms | 2728.3 ms | 101956.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 84990.0 ms | 82109.5 ms | 2880.5 ms | 81250.2 ms |
| XGo | LLGoDeadcodeDrop | 82001.6 ms | 79300.3 ms | 2701.2 ms | 59615.8 ms |
| Aws_restjson | LLGoNoLTO | 80419.6 ms | 77572.1 ms | 2847.5 ms | 63629.5 ms |
| Etcdctl | LLGoNoLTO | 78152.3 ms | 74950.1 ms | 3202.1 ms | 41114.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 77289.6 ms | 74718.5 ms | 2571.1 ms | 92917.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 66264.2 ms | 64047.2 ms | 2217.0 ms | 72337.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62200.5 ms | 60556.4 ms | 1644.1 ms | 55879.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 58719.3 ms | 57126.1 ms | 1593.2 ms | 62354.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 56662.5 ms | 53820.7 ms | 2841.8 ms | 55295.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 53603.4 ms | 51902.7 ms | 1700.7 ms | 46053.2 ms |
| Uber_zap | LLGoNoLTO | 45845.8 ms | 43762.3 ms | 2083.5 ms | 29880.7 ms |
| K8s_workqueue | LLGoNoLTO | 43272.2 ms | 40837.4 ms | 2434.7 ms | 44727.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 37627.4 ms | 36047.5 ms | 1579.8 ms | 36683.6 ms |
| IXGo | Go | 37329.3 ms | 34148.2 ms | 3181.1 ms | 23346.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 37060.3 ms | 35631.8 ms | 1428.6 ms | 32968.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 35352.8 ms | 33300.3 ms | 2052.5 ms | 25248.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31350.9 ms | 29955.9 ms | 1395.0 ms | 22423.0 ms |
| Gorm_schema | LLGoNoLTO | 20631.7 ms | 19066.9 ms | 1564.8 ms | 17517.8 ms |
| Etcdctl | Go | 17081.3 ms | 16120.2 ms | 961.1 ms | 7886.6 ms |
| Toml | LLGoNoLTO | 16063.4 ms | 14677.5 ms | 1385.9 ms | 9976.8 ms |
| Dustin_humanize | LLGoNoLTO | 13422.2 ms | 12134.7 ms | 1287.4 ms | 9656.5 ms |
| XGo | Go | 10210.6 ms | 9638.5 ms | 572.1 ms | 11738.6 ms |
| Uber_zap | Go | 5562.9 ms | 5123.8 ms | 439.1 ms | 1938.5 ms |
| Aws_restjson | Go | 5525.6 ms | 5033.6 ms | 491.9 ms | 4645.8 ms |
| Gorm_schema | Go | 4301.4 ms | 4029.7 ms | 271.7 ms | 8763.0 ms |
| K8s_workqueue | Go | 1788.4 ms | 1574.1 ms | 214.3 ms | 874.1 ms |
| Dustin_humanize | Go | 712.5 ms | 615.4 ms | 97.1 ms | 496.4 ms |
| Toml | Go | 561.2 ms | 451.4 ms | 109.9 ms | 335.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1725980.0 ms | 1635819.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1644495.7 ms | 1554900.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1580711.5 ms | 1432125.9 ms | 9 |
| LLGoDeadcodeDrop | 1142807.9 ms | 1033840.5 ms | 9 |
| LLGoNoLTO | 521780.1 ms | 413816.9 ms | 9 |
| Go | 83073.1 ms | 60024.5 ms | 9 |

Dependency download details are in `download-timings.log`.
