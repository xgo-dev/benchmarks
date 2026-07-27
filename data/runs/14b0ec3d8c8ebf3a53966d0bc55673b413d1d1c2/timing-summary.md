## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoNoLTO | 195065.2 ms | 194697.8 ms | 9972.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 181227.7 ms | 193986.2 ms | 4925.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 166776.1 ms | 175245.9 ms | 2895.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 156838.3 ms | 158602.8 ms | 3021.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 133921.1 ms | 146110.8 ms | 4177.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 122577.3 ms | 129538.7 ms | 2382.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 115857.8 ms | 127459.6 ms | 2537.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105253.1 ms | 111739.5 ms | 2265.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98384.7 ms | 106586.9 ms | 2273.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89969.8 ms | 102541.7 ms | 2107.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 88053.3 ms | 83580.8 ms | 1782.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 87276.7 ms | 89805.1 ms | 3049.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 79952.2 ms | 75287.3 ms | 1793.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62719.3 ms | 69480.8 ms | 1604.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 60336.2 ms | 60665.8 ms | 1390.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 57795.5 ms | 58023.4 ms | 1179.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 53300.1 ms | 54703.0 ms | 1321.7 ms |
| K8s_workqueue | LLGoNoLTO | 42917.8 ms | 44208.3 ms | 2398.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 42631.5 ms | 42667.1 ms | 1180.4 ms |
| Uber_zap | LLGoNoLTO | 31665.6 ms | 44876.6 ms | 2126.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 30013.8 ms | 33615.5 ms | 1051.5 ms |
| Gorm_schema | LLGoNoLTO | 27922.4 ms | 35034.4 ms | 1769.8 ms |
| Toml | LLGoNoLTO | 13990.2 ms | 20230.8 ms | 1237.5 ms |
| Dustin_humanize | LLGoNoLTO | 9849.8 ms | 13633.0 ms | 988.1 ms |
| Aws_restjson | Go | 1249.1 ms | 933.7 ms | 109.7 ms |
| Uber_zap | Go | 804.4 ms | 815.3 ms | 125.5 ms |
| Toml | Go | 622.0 ms | 547.9 ms | 77.8 ms |
| K8s_workqueue | Go | 544.7 ms | 692.6 ms | 98.7 ms |
| Gorm_schema | Go | 476.4 ms | 551.2 ms | 82.5 ms |
| Dustin_humanize | Go | 439.3 ms | 443.7 ms | 90.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 613002.6 ms | 6 |
| LLGoFullLTOGlobalDCE | 575886.6 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 543995.3 ms | 6 |
| LLGoNoLTO | 321410.9 ms | 6 |
| Go | 4135.9 ms | 6 |

Dependency download details are in `download-timings.log`.
