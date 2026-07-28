## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 187189.7 ms | 181851.9 ms | 5384.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 186267.0 ms | 183833.0 ms | 5271.1 ms |
| Uber_zap | LLGoNoLTO | 152275.1 ms | 150486.7 ms | 10955.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 146447.9 ms | 154954.7 ms | 3479.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 145520.5 ms | 156368.8 ms | 3074.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124897.9 ms | 135094.6 ms | 3009.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 121351.7 ms | 111020.7 ms | 3719.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 121221.5 ms | 110233.7 ms | 4064.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 116168.7 ms | 129500.6 ms | 2914.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 91802.1 ms | 102560.2 ms | 2423.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90051.2 ms | 100976.9 ms | 2373.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 86543.8 ms | 92032.7 ms | 3482.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 80167.4 ms | 92083.2 ms | 2475.4 ms |
| Aws_restjson | LLGoNoLTO | 62587.5 ms | 75392.1 ms | 3830.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 59602.5 ms | 65962.3 ms | 1814.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58156.3 ms | 61476.4 ms | 1531.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43336.8 ms | 46463.1 ms | 1376.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 39702.3 ms | 45410.4 ms | 1355.0 ms |
| Gorm_schema | LLGoNoLTO | 28823.8 ms | 34885.3 ms | 2226.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 28081.2 ms | 32389.8 ms | 1260.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 27784.4 ms | 32209.3 ms | 1151.3 ms |
| K8s_workqueue | LLGoNoLTO | 20678.0 ms | 31692.2 ms | 2435.6 ms |
| Toml | LLGoNoLTO | 14513.1 ms | 20019.7 ms | 1471.0 ms |
| Dustin_humanize | LLGoNoLTO | 9777.4 ms | 12905.2 ms | 1251.8 ms |
| Aws_restjson | Go | 443.5 ms | 667.8 ms | 136.7 ms |
| K8s_workqueue | Go | 435.7 ms | 722.0 ms | 187.2 ms |
| Uber_zap | Go | 361.7 ms | 537.6 ms | 107.8 ms |
| Gorm_schema | Go | 313.6 ms | 487.3 ms | 84.7 ms |
| Toml | Go | 281.4 ms | 409.8 ms | 97.4 ms |
| Dustin_humanize | Go | 182.4 ms | 276.0 ms | 74.8 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCE | 592561.2 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 589924.2 ms | 6 |
| LLGoFullLTONoGlobalDCE | 571807.5 ms | 6 |
| LLGoNoLTO | 288654.9 ms | 6 |
| Go | 2018.2 ms | 6 |

Dependency download details are in `download-timings.log`.
