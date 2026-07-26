## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159757.1 ms | 165855.5 ms | 5035.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 152402.1 ms | 148304.0 ms | 3649.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 147812.4 ms | 143547.3 ms | 3555.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 126565.4 ms | 121455.6 ms | 2705.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 113661.6 ms | 108261.6 ms | 2912.0 ms |
| Uber_zap | LLGoNoLTO | 112464.0 ms | 114938.4 ms | 9089.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 107892.5 ms | 115114.8 ms | 4346.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 102726.1 ms | 107920.0 ms | 2914.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 83309.2 ms | 91561.7 ms | 2202.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 76816.0 ms | 82863.3 ms | 2241.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61616.0 ms | 63561.3 ms | 3085.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 60587.8 ms | 58736.5 ms | 1817.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 54784.1 ms | 56973.1 ms | 1669.6 ms |
| Aws_restjson | LLGoNoLTO | 51952.5 ms | 60108.1 ms | 3352.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 41274.7 ms | 45378.2 ms | 1274.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 36434.0 ms | 36752.2 ms | 1258.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36331.0 ms | 33569.0 ms | 1248.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 35151.8 ms | 37671.6 ms | 1271.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 32114.7 ms | 35777.6 ms | 1252.4 ms |
| K8s_workqueue | LLGoNoLTO | 31218.8 ms | 32831.4 ms | 2478.2 ms |
| Toml | LLGoNoLTO | 22347.7 ms | 20739.0 ms | 1558.4 ms |
| Gorm_schema | LLGoNoLTO | 22203.4 ms | 26705.4 ms | 1921.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 22020.6 ms | 25244.6 ms | 1094.6 ms |
| Dustin_humanize | LLGoNoLTO | 5768.1 ms | 8920.7 ms | 982.4 ms |
| Uber_zap | Go | 3526.8 ms | 595.7 ms | 248.7 ms |
| K8s_workqueue | Go | 1247.2 ms | 685.8 ms | 158.1 ms |
| Aws_restjson | Go | 1160.7 ms | 547.8 ms | 137.4 ms |
| Dustin_humanize | Go | 571.2 ms | 379.7 ms | 101.2 ms |
| Toml | Go | 338.1 ms | 392.0 ms | 92.3 ms |
| Gorm_schema | Go | 247.1 ms | 368.0 ms | 84.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 502124.6 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 484541.2 ms | 6 |
| LLGoFullLTOGlobalDCE | 464591.5 ms | 6 |
| LLGoNoLTO | 245954.5 ms | 6 |
| Go | 7091.1 ms | 6 |

Dependency download details are in `download-timings.log`.
