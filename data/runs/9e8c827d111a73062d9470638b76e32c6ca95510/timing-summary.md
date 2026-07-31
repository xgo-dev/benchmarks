## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 590733.6 ms | 607244.8 ms | 15926.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 503294.0 ms | 470894.8 ms | 12644.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 474114.5 ms | 494945.6 ms | 9537.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 414782.3 ms | 453534.8 ms | 7693.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 374441.9 ms | 351768.1 ms | 14542.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 372985.1 ms | 388650.9 ms | 5971.0 ms |
| IXGo | LLGoNoLTO | 371858.3 ms | 384533.2 ms | 16490.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 357465.5 ms | 374234.3 ms | 5938.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 212884.3 ms | 235701.9 ms | 4826.2 ms |
| Etcdctl | LLGoNoLTO | 184683.3 ms | 235575.1 ms | 9705.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 160614.9 ms | 181681.5 ms | 3406.3 ms |
| K8s_workqueue | LLGoNoLTO | 158404.1 ms | 155687.6 ms | 8971.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 148194.8 ms | 161818.2 ms | 2765.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 136954.1 ms | 145122.2 ms | 2937.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 130076.8 ms | 125651.7 ms | 3831.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 126702.8 ms | 130184.3 ms | 3621.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 123581.9 ms | 136551.8 ms | 2654.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 122323.2 ms | 116228.0 ms | 3744.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106286.5 ms | 118453.1 ms | 2484.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 101765.6 ms | 108354.6 ms | 2776.8 ms |
| Dustin_humanize | LLGoNoLTO | 99477.0 ms | 80056.0 ms | 6274.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 95471.7 ms | 105277.5 ms | 2341.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94664.7 ms | 105522.6 ms | 2286.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 93375.5 ms | 105123.7 ms | 2261.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 79575.2 ms | 73460.5 ms | 2297.9 ms |
| Aws_restjson | LLGoNoLTO | 63731.5 ms | 79738.5 ms | 3780.4 ms |
| XGo | LLGoNoLTO | 61411.2 ms | 82469.0 ms | 3956.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 57485.8 ms | 64502.3 ms | 1624.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 53396.8 ms | 46998.8 ms | 1391.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 42661.8 ms | 41915.2 ms | 1300.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 41568.7 ms | 46973.7 ms | 1348.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 40650.0 ms | 46245.3 ms | 1357.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 40011.7 ms | 44734.1 ms | 1216.6 ms |
| Uber_zap | LLGoNoLTO | 32661.3 ms | 45086.1 ms | 2467.9 ms |
| Gorm_schema | LLGoNoLTO | 28669.4 ms | 32856.8 ms | 1990.4 ms |
| Toml | LLGoNoLTO | 17183.8 ms | 21432.3 ms | 1414.1 ms |
| IXGo | Go | 10710.3 ms | 34031.7 ms | 2748.4 ms |
| Gorm_schema | Go | 10036.3 ms | 4165.5 ms | 264.4 ms |
| Etcdctl | Go | 6408.1 ms | 15722.6 ms | 1175.2 ms |
| XGo | Go | 3917.8 ms | 6442.1 ms | 477.0 ms |
| Aws_restjson | Go | 3729.1 ms | 6621.6 ms | 767.7 ms |
| Uber_zap | Go | 2719.6 ms | 3259.4 ms | 279.5 ms |
| Toml | Go | 939.6 ms | 588.3 ms | 100.7 ms |
| K8s_workqueue | Go | 837.3 ms | 1606.9 ms | 176.5 ms |
| Dustin_humanize | Go | 655.7 ms | 634.8 ms | 103.6 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1739188.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1714665.3 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1642209.5 ms | 9 |
| LLGoNoLTO | 1018079.9 ms | 9 |
| Go | 39953.8 ms | 9 |

Dependency download details are in `download-timings.log`.
