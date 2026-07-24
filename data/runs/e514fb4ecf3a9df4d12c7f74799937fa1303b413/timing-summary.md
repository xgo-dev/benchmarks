## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 179721.9 ms | 190668.8 ms | 4378.4 ms |
| Uber_zap | LLGoNoLTO | 171352.7 ms | 168844.8 ms | 12902.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 126356.9 ms | 136327.3 ms | 3364.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124514.4 ms | 134314.7 ms | 3237.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109539.9 ms | 118850.3 ms | 2924.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 108382.8 ms | 112871.0 ms | 3097.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 107883.0 ms | 119049.9 ms | 3384.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 106979.2 ms | 118661.3 ms | 3324.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 104527.3 ms | 104380.6 ms | 4484.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 98496.7 ms | 106201.7 ms | 2786.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 90737.8 ms | 101159.8 ms | 2629.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 89269.1 ms | 87061.4 ms | 3814.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 68947.7 ms | 72782.5 ms | 3678.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67937.3 ms | 72130.5 ms | 2024.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 62301.9 ms | 60842.7 ms | 2279.2 ms |
| Aws_restjson | LLGoNoLTO | 62104.2 ms | 74338.5 ms | 3964.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51924.0 ms | 57095.2 ms | 1645.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 48270.5 ms | 54488.9 ms | 1915.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35819.2 ms | 36254.2 ms | 1601.7 ms |
| K8s_workqueue | LLGoNoLTO | 33415.0 ms | 36945.2 ms | 2950.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32152.0 ms | 34387.0 ms | 1418.7 ms |
| Gorm_schema | LLGoNoLTO | 32041.7 ms | 35970.7 ms | 2528.4 ms |
| Toml | LLGoNoLTO | 17493.3 ms | 21519.9 ms | 1760.5 ms |
| Dustin_humanize | LLGoNoLTO | 13027.9 ms | 13977.4 ms | 1386.4 ms |
| Uber_zap | Go | 774.1 ms | 775.4 ms | 221.6 ms |
| Toml | Go | 695.8 ms | 524.6 ms | 119.6 ms |
| Gorm_schema | Go | 650.6 ms | 582.0 ms | 105.2 ms |
| K8s_workqueue | Go | 531.3 ms | 646.3 ms | 151.7 ms |
| Aws_restjson | Go | 463.1 ms | 683.8 ms | 144.4 ms |
| Dustin_humanize | Go | 441.9 ms | 362.4 ms | 81.3 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 606775.0 ms | 6 |
| LLGoFullLTOGlobalDCE | 526722.3 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 480264.4 ms | 6 |
| LLGoNoLTO | 329434.8 ms | 6 |
| Go | 3556.8 ms | 6 |

Dependency download details are in `download-timings.log`.
