## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 211052.1 ms | 205720.3 ms | 4285.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 206249.9 ms | 213275.4 ms | 4957.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 189542.2 ms | 204721.8 ms | 4957.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 181158.8 ms | 193151.0 ms | 5744.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 173742.0 ms | 178450.3 ms | 4639.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 169443.8 ms | 165915.6 ms | 3193.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 168492.6 ms | 195210.2 ms | 4462.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 165669.9 ms | 171750.8 ms | 3558.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 158760.8 ms | 159406.3 ms | 3516.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 157984.4 ms | 172401.6 ms | 6131.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 140089.3 ms | 136620.3 ms | 3114.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 131641.6 ms | 146508.0 ms | 3569.0 ms |
| K8s_workqueue | LLGoNoLTO | 123762.0 ms | 116136.9 ms | 6547.3 ms |
| IXGo | LLGoNoLTO | 122709.6 ms | 126025.8 ms | 5688.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 114509.0 ms | 119243.9 ms | 2992.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 113916.2 ms | 117484.1 ms | 2756.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 109775.2 ms | 113512.5 ms | 2714.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 106308.9 ms | 104570.9 ms | 3666.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 95196.0 ms | 89063.0 ms | 2273.7 ms |
| Dustin_humanize | LLGoNoLTO | 81011.9 ms | 68752.9 ms | 6723.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 74991.7 ms | 80177.9 ms | 2355.2 ms |
| XGo | LLGoNoLTO | 70392.0 ms | 84909.8 ms | 4754.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63912.4 ms | 70196.6 ms | 1750.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 63380.1 ms | 62449.0 ms | 1624.2 ms |
| Aws_restjson | LLGoNoLTO | 60852.2 ms | 73668.5 ms | 3803.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 54623.0 ms | 52678.0 ms | 1516.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 53887.4 ms | 50123.4 ms | 1551.6 ms |
| Gorm_schema | LLGoNoLTO | 48254.3 ms | 47103.5 ms | 2626.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46509.0 ms | 49486.3 ms | 1500.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 42386.7 ms | 42992.2 ms | 1520.1 ms |
| Uber_zap | LLGoNoLTO | 32198.4 ms | 43740.5 ms | 2665.9 ms |
| Toml | LLGoNoLTO | 30028.2 ms | 35399.0 ms | 2266.7 ms |
| IXGo | Go | 14242.1 ms | 18248.7 ms | 868.1 ms |
| XGo | Go | 7098.9 ms | 7048.8 ms | 409.7 ms |
| Toml | Go | 4731.8 ms | 2156.4 ms | 233.5 ms |
| Uber_zap | Go | 4604.0 ms | 3460.7 ms | 259.8 ms |
| Aws_restjson | Go | 4302.5 ms | 5305.0 ms | 400.0 ms |
| Gorm_schema | Go | 4151.9 ms | 3985.3 ms | 208.6 ms |
| K8s_workqueue | Go | 2155.1 ms | 2439.0 ms | 252.7 ms |
| Dustin_humanize | Go | 930.1 ms | 711.6 ms | 105.6 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1048616.6 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 991436.4 ms | 8 |
| LLGoFullLTOGlobalDCE | 953169.9 ms | 8 |
| LLGoNoLTO | 569208.5 ms | 8 |
| Go | 42216.4 ms | 8 |

Dependency download details are in `download-timings.log`.
