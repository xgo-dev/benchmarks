## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCE | 214181.3 ms | 219098.5 ms | 6249.3 ms |
| Aws_restjson | LLGoNoLTO | 185738.3 ms | 180927.1 ms | 10227.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 145217.3 ms | 156286.5 ms | 3107.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 135702.6 ms | 145855.0 ms | 3278.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 111156.4 ms | 116759.5 ms | 2750.1 ms |
| Toml | LLGoNoLTO | 109795.0 ms | 97697.1 ms | 6385.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 106729.8 ms | 105528.2 ms | 4222.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 103148.6 ms | 113022.6 ms | 2521.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101366.9 ms | 109265.4 ms | 2600.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 95264.8 ms | 103840.1 ms | 2384.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 82566.4 ms | 91266.7 ms | 2302.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 81825.5 ms | 93551.4 ms | 2368.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65975.3 ms | 72550.3 ms | 1818.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 61394.9 ms | 62503.3 ms | 1658.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 59759.2 ms | 66434.4 ms | 1695.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 50217.2 ms | 56711.1 ms | 1509.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43158.0 ms | 46294.4 ms | 1348.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 37484.6 ms | 42749.7 ms | 1271.2 ms |
| Uber_zap | LLGoNoLTO | 37457.8 ms | 47085.5 ms | 2689.7 ms |
| Gorm_schema | LLGoNoLTO | 33123.1 ms | 37272.4 ms | 2351.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28596.7 ms | 32907.9 ms | 1277.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 27845.4 ms | 32309.2 ms | 1253.2 ms |
| K8s_workqueue | LLGoNoLTO | 21210.7 ms | 32309.6 ms | 2386.9 ms |
| Dustin_humanize | LLGoNoLTO | 10120.0 ms | 13389.2 ms | 1267.6 ms |
| Uber_zap | Go | 1089.5 ms | 737.4 ms | 149.3 ms |
| Aws_restjson | Go | 1083.8 ms | 912.1 ms | 129.3 ms |
| Gorm_schema | Go | 733.7 ms | 614.0 ms | 106.5 ms |
| Dustin_humanize | Go | 421.7 ms | 363.4 ms | 84.8 ms |
| Toml | Go | 418.9 ms | 583.1 ms | 145.2 ms |
| K8s_workqueue | Go | 392.1 ms | 587.6 ms | 117.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 598149.9 ms | 6 |
| LLGoFullLTOGlobalDCE | 532993.2 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 420447.8 ms | 6 |
| LLGoNoLTO | 397445.0 ms | 6 |
| Go | 4139.7 ms | 6 |

Dependency download details are in `download-timings.log`.
