## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 223064.4 ms | 227167.8 ms | 6253.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 211140.9 ms | 221512.2 ms | 5689.0 ms |
| Uber_zap | LLGoNoLTO | 158161.5 ms | 150790.5 ms | 9117.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 117988.3 ms | 131477.9 ms | 2853.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 115268.2 ms | 123917.4 ms | 3149.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115207.8 ms | 123328.4 ms | 2647.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 115171.1 ms | 119636.1 ms | 2864.0 ms |
| Toml | LLGoNoLTO | 114471.0 ms | 101852.3 ms | 6888.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97284.6 ms | 106167.2 ms | 2487.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96022.6 ms | 105215.1 ms | 2619.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 91030.6 ms | 99683.9 ms | 2531.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 83109.5 ms | 88727.0 ms | 3479.5 ms |
| Aws_restjson | LLGoNoLTO | 81023.7 ms | 88131.2 ms | 3979.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64144.2 ms | 70600.6 ms | 1740.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57184.5 ms | 61064.7 ms | 1528.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 55465.2 ms | 59104.7 ms | 1850.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54393.7 ms | 58570.2 ms | 1873.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45406.3 ms | 49395.1 ms | 1559.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41688.2 ms | 46016.5 ms | 1264.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36857.7 ms | 37474.2 ms | 1467.0 ms |
| K8s_workqueue | LLGoNoLTO | 36220.6 ms | 40624.7 ms | 2725.5 ms |
| Gorm_schema | LLGoNoLTO | 32784.7 ms | 37638.3 ms | 2273.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 29392.5 ms | 33636.2 ms | 1195.5 ms |
| Dustin_humanize | LLGoNoLTO | 13608.4 ms | 14693.6 ms | 1297.0 ms |
| Aws_restjson | Go | 832.9 ms | 879.5 ms | 148.4 ms |
| K8s_workqueue | Go | 714.5 ms | 763.3 ms | 110.8 ms |
| Toml | Go | 636.6 ms | 564.1 ms | 114.7 ms |
| Dustin_humanize | Go | 520.5 ms | 397.9 ms | 83.6 ms |
| Uber_zap | Go | 389.0 ms | 568.6 ms | 146.9 ms |
| Gorm_schema | Go | 350.4 ms | 563.8 ms | 136.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 604536.8 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 539310.0 ms | 6 |
| LLGoFullLTOGlobalDCE | 505973.5 ms | 6 |
| LLGoNoLTO | 436269.9 ms | 6 |
| Go | 3443.8 ms | 6 |

Dependency download details are in `download-timings.log`.
