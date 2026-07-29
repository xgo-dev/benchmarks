## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 398614.8 ms | 410803.7 ms | 10112.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 393888.4 ms | 405837.6 ms | 11639.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 275851.7 ms | 306380.9 ms | 6227.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 258413.5 ms | 232809.9 ms | 10019.4 ms |
| Etcdctl | LLGoNoLTO | 196210.6 ms | 213285.9 ms | 9943.6 ms |
| Aws_restjson | LLGoNoLTO | 189742.9 ms | 193556.3 ms | 13691.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 185337.6 ms | 197641.7 ms | 4228.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 177321.5 ms | 188260.6 ms | 7255.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 174157.1 ms | 187506.0 ms | 4210.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 172480.7 ms | 196476.8 ms | 5492.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 154492.6 ms | 159603.2 ms | 4192.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 152056.8 ms | 161460.3 ms | 3737.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 147581.5 ms | 156812.6 ms | 3559.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 147325.8 ms | 156885.6 ms | 4190.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 132456.9 ms | 145564.8 ms | 3668.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 117495.6 ms | 122086.8 ms | 3317.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 115571.6 ms | 115887.8 ms | 3316.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110363.3 ms | 119814.2 ms | 2964.5 ms |
| IXGo | LLGoNoLTO | 104216.5 ms | 111499.9 ms | 5276.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103563.3 ms | 111165.2 ms | 2706.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 101893.0 ms | 102226.1 ms | 4320.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 100971.5 ms | 96328.3 ms | 4196.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 100082.7 ms | 103879.8 ms | 3152.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 82280.8 ms | 81360.6 ms | 2176.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 75366.3 ms | 77525.9 ms | 2161.6 ms |
| XGo | LLGoNoLTO | 66706.0 ms | 82547.9 ms | 4921.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 63810.8 ms | 67019.6 ms | 3171.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51772.4 ms | 56618.7 ms | 1625.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 50977.9 ms | 45438.2 ms | 1692.8 ms |
| Gorm_schema | LLGoNoLTO | 45397.8 ms | 44133.2 ms | 2826.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 42748.1 ms | 46941.8 ms | 1576.2 ms |
| Etcdctl | Go | 32538.3 ms | 33191.2 ms | 1971.8 ms |
| Uber_zap | LLGoNoLTO | 32116.3 ms | 42525.2 ms | 2824.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30405.1 ms | 33337.8 ms | 1399.1 ms |
| Toml | LLGoNoLTO | 29675.9 ms | 25660.6 ms | 2068.1 ms |
| K8s_workqueue | LLGoNoLTO | 25222.2 ms | 33344.2 ms | 2723.0 ms |
| Dustin_humanize | LLGoNoLTO | 8982.6 ms | 12549.0 ms | 1338.6 ms |
| IXGo | Go | 5823.0 ms | 15854.5 ms | 823.8 ms |
| Uber_zap | Go | 4744.2 ms | 3292.9 ms | 298.3 ms |
| Toml | Go | 4497.5 ms | 2032.2 ms | 281.1 ms |
| XGo | Go | 3712.2 ms | 5908.4 ms | 443.1 ms |
| Gorm_schema | Go | 2497.0 ms | 3513.1 ms | 261.4 ms |
| Aws_restjson | Go | 1963.1 ms | 4481.2 ms | 494.0 ms |
| K8s_workqueue | Go | 1117.9 ms | 1622.3 ms | 349.3 ms |
| Dustin_humanize | Go | 1078.8 ms | 700.8 ms | 114.7 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1310623.6 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1310567.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1296090.7 ms | 9 |
| LLGoNoLTO | 698270.8 ms | 9 |
| Go | 57972.0 ms | 9 |

Dependency download details are in `download-timings.log`.
