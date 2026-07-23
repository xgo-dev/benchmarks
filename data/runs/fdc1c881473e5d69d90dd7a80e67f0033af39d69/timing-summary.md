## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 216147.3 ms | 221302.6 ms | 5383.9 ms |
| K8s_workqueue | LLGoNoLTO | 170173.7 ms | 165609.1 ms | 11764.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141648.1 ms | 143079.5 ms | 3115.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 135057.4 ms | 133065.2 ms | 2676.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 134625.7 ms | 140440.5 ms | 3145.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 111971.7 ms | 109023.8 ms | 3551.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 111531.1 ms | 121933.5 ms | 3200.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 111309.5 ms | 115966.3 ms | 2771.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 109869.3 ms | 112709.1 ms | 2744.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 104557.6 ms | 116607.7 ms | 2531.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 100717.1 ms | 95209.1 ms | 2530.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93431.6 ms | 99216.6 ms | 2527.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 71757.7 ms | 64969.6 ms | 1666.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61975.5 ms | 67052.3 ms | 1827.1 ms |
| Aws_restjson | LLGoNoLTO | 61152.0 ms | 74191.2 ms | 3661.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 54821.8 ms | 58508.9 ms | 1841.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 50270.1 ms | 53674.3 ms | 2752.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 49442.5 ms | 56127.6 ms | 1373.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 45749.1 ms | 48010.0 ms | 1365.5 ms |
| Gorm_schema | LLGoNoLTO | 43131.9 ms | 42440.5 ms | 2498.1 ms |
| Uber_zap | LLGoNoLTO | 37555.8 ms | 47233.3 ms | 2764.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30969.3 ms | 34396.7 ms | 1355.9 ms |
| Toml | LLGoNoLTO | 27942.3 ms | 26013.0 ms | 1786.7 ms |
| Dustin_humanize | LLGoNoLTO | 17428.1 ms | 15603.5 ms | 1400.0 ms |
| Uber_zap | Go | 819.6 ms | 660.7 ms | 117.2 ms |
| Gorm_schema | Go | 786.5 ms | 607.8 ms | 94.3 ms |
| Aws_restjson | Go | 714.6 ms | 923.4 ms | 206.6 ms |
| K8s_workqueue | Go | 705.7 ms | 692.3 ms | 124.7 ms |
| Toml | Go | 536.5 ms | 511.8 ms | 106.0 ms |
| Dustin_humanize | Go | 320.8 ms | 322.0 ms | 83.7 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 690452.3 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 534518.7 ms | 6 |
| LLGoFullLTOGlobalDCE | 510881.2 ms | 6 |
| LLGoNoLTO | 357383.7 ms | 6 |
| Go | 3883.7 ms | 6 |

Dependency download details are in `download-timings.log`.
