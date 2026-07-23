## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCE | 208051.9 ms | 208386.7 ms | 5910.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 165533.8 ms | 168120.8 ms | 6315.3 ms |
| K8s_workqueue | LLGoNoLTO | 163274.8 ms | 148691.2 ms | 10001.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 148304.7 ms | 161254.0 ms | 3274.5 ms |
| Gorm_schema | LLGoNoLTO | 119686.5 ms | 99953.0 ms | 9224.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 111208.7 ms | 115319.0 ms | 2863.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 110370.2 ms | 115079.1 ms | 3044.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 109608.0 ms | 102434.3 ms | 4080.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106807.3 ms | 118658.8 ms | 2889.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 99977.7 ms | 112799.9 ms | 2536.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98441.2 ms | 103057.4 ms | 2891.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 90490.6 ms | 101006.7 ms | 2392.8 ms |
| Aws_restjson | LLGoNoLTO | 80463.0 ms | 86904.2 ms | 4615.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 79200.2 ms | 78993.3 ms | 1882.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 76949.5 ms | 76642.9 ms | 2247.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68546.2 ms | 73391.8 ms | 2036.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56521.9 ms | 60075.8 ms | 1746.9 ms |
| Uber_zap | LLGoNoLTO | 47706.9 ms | 52937.1 ms | 3387.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43187.6 ms | 46084.3 ms | 1360.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 43160.4 ms | 42605.0 ms | 1559.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 36814.4 ms | 41798.8 ms | 1445.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30524.4 ms | 33395.7 ms | 1441.8 ms |
| Toml | LLGoNoLTO | 14412.0 ms | 19480.8 ms | 1660.1 ms |
| Dustin_humanize | LLGoNoLTO | 7680.4 ms | 11703.2 ms | 1300.4 ms |
| Uber_zap | Go | 1201.3 ms | 843.3 ms | 216.5 ms |
| Aws_restjson | Go | 789.8 ms | 875.3 ms | 149.4 ms |
| Toml | Go | 614.2 ms | 541.3 ms | 124.8 ms |
| Dustin_humanize | Go | 523.5 ms | 365.1 ms | 79.0 ms |
| Gorm_schema | Go | 473.8 ms | 536.2 ms | 111.7 ms |
| K8s_workqueue | Go | 401.3 ms | 569.6 ms | 131.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCE | 626833.2 ms | 6 |
| LLGoFullLTONoGlobalDCE | 588901.5 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 467964.2 ms | 6 |
| LLGoNoLTO | 433223.6 ms | 6 |
| Go | 4003.8 ms | 6 |

Dependency download details are in `download-timings.log`.
