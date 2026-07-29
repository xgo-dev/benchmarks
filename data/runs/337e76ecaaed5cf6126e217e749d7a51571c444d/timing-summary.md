## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 243996.3 ms | 244596.7 ms | 6844.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 210310.4 ms | 213134.6 ms | 7022.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 191262.6 ms | 215733.8 ms | 6653.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 187824.9 ms | 190788.5 ms | 4565.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 171580.0 ms | 188005.3 ms | 4266.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 164015.9 ms | 177854.0 ms | 3581.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 159043.8 ms | 157486.3 ms | 3630.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 155137.0 ms | 161810.2 ms | 3246.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 148664.6 ms | 157075.2 ms | 3180.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 139070.2 ms | 137838.9 ms | 3257.8 ms |
| Gorm_schema | LLGoNoLTO | 130381.7 ms | 115314.0 ms | 8304.2 ms |
| Toml | LLGoNoLTO | 130297.9 ms | 112370.8 ms | 7651.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 127506.3 ms | 132462.5 ms | 3037.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 122894.0 ms | 127388.9 ms | 2833.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 117731.4 ms | 130082.4 ms | 2861.4 ms |
| IXGo | LLGoNoLTO | 100058.9 ms | 108943.9 ms | 4559.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97864.8 ms | 105354.6 ms | 2634.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 94415.8 ms | 103708.5 ms | 2526.2 ms |
| K8s_workqueue | LLGoNoLTO | 87650.3 ms | 89862.0 ms | 4756.8 ms |
| Aws_restjson | LLGoNoLTO | 80982.0 ms | 86820.1 ms | 4378.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 76838.1 ms | 76864.2 ms | 1752.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67361.9 ms | 71440.1 ms | 1816.5 ms |
| XGo | LLGoNoLTO | 65740.3 ms | 81843.5 ms | 4577.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64078.2 ms | 68550.9 ms | 1809.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 56832.8 ms | 56383.3 ms | 1660.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 55807.1 ms | 49608.0 ms | 1555.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52571.4 ms | 57111.9 ms | 1796.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 48473.6 ms | 48772.5 ms | 1398.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 44643.6 ms | 48021.2 ms | 1495.3 ms |
| Uber_zap | LLGoNoLTO | 36275.9 ms | 47032.9 ms | 2688.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32164.7 ms | 35125.5 ms | 1322.0 ms |
| Dustin_humanize | LLGoNoLTO | 7818.6 ms | 12193.7 ms | 1159.3 ms |
| XGo | Go | 7655.6 ms | 7012.3 ms | 403.0 ms |
| IXGo | Go | 7599.5 ms | 14848.4 ms | 635.8 ms |
| Aws_restjson | Go | 5784.7 ms | 5604.4 ms | 475.6 ms |
| Uber_zap | Go | 4458.2 ms | 3425.9 ms | 255.6 ms |
| K8s_workqueue | Go | 2132.3 ms | 1951.1 ms | 190.0 ms |
| Gorm_schema | Go | 1485.2 ms | 3273.1 ms | 162.0 ms |
| Dustin_humanize | Go | 1030.5 ms | 710.3 ms | 102.1 ms |
| Toml | Go | 900.1 ms | 607.8 ms | 103.8 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1022666.0 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 968919.8 ms | 8 |
| LLGoFullLTOGlobalDCE | 838503.6 ms | 8 |
| LLGoNoLTO | 639205.4 ms | 8 |
| Go | 31045.9 ms | 8 |

Dependency download details are in `download-timings.log`.
