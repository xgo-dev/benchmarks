## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 253349.5 ms | 251278.6 ms | 5603.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 239924.5 ms | 233937.8 ms | 6400.1 ms |
| Uber_zap | LLGoNoLTO | 231211.8 ms | 218593.0 ms | 14101.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 184137.0 ms | 183979.7 ms | 4887.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 180731.5 ms | 192106.8 ms | 3838.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 166680.3 ms | 172368.2 ms | 3492.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 129997.7 ms | 135098.9 ms | 3037.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 125220.7 ms | 129096.7 ms | 3071.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 117816.4 ms | 108076.9 ms | 4018.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 116822.2 ms | 112469.1 ms | 4236.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 113934.1 ms | 118842.4 ms | 2924.1 ms |
| Aws_restjson | LLGoNoLTO | 109632.0 ms | 112982.4 ms | 4999.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 106190.2 ms | 101913.0 ms | 2371.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102943.0 ms | 112601.7 ms | 2639.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 69243.7 ms | 75700.3 ms | 1951.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 68401.7 ms | 66969.9 ms | 1746.3 ms |
| Gorm_schema | LLGoNoLTO | 55662.8 ms | 52997.8 ms | 2843.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51495.3 ms | 58133.6 ms | 1714.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47686.3 ms | 51325.5 ms | 1559.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35461.6 ms | 37988.2 ms | 1368.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 35040.2 ms | 37653.6 ms | 1344.8 ms |
| K8s_workqueue | LLGoNoLTO | 26368.8 ms | 35926.3 ms | 2573.2 ms |
| Toml | LLGoNoLTO | 15584.2 ms | 21039.8 ms | 1519.3 ms |
| Dustin_humanize | LLGoNoLTO | 7726.7 ms | 12325.8 ms | 1216.5 ms |
| Aws_restjson | Go | 1360.7 ms | 958.4 ms | 153.5 ms |
| Toml | Go | 1062.3 ms | 718.1 ms | 212.7 ms |
| K8s_workqueue | Go | 567.6 ms | 653.1 ms | 146.5 ms |
| Uber_zap | Go | 548.9 ms | 622.4 ms | 137.4 ms |
| Dustin_humanize | Go | 510.2 ms | 423.7 ms | 98.0 ms |
| Gorm_schema | Go | 352.2 ms | 496.4 ms | 88.8 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 741429.9 ms | 6 |
| LLGoFullLTONoGlobalDCE | 706922.6 ms | 6 |
| LLGoFullLTOGlobalDCE | 696723.5 ms | 6 |
| LLGoNoLTO | 446186.4 ms | 6 |
| Go | 4401.9 ms | 6 |

Dependency download details are in `download-timings.log`.
