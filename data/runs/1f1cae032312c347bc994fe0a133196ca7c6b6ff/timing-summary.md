## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoNoLTO | 216057.2 ms | 214147.3 ms | 12885.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 188318.3 ms | 190584.7 ms | 5972.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 163210.6 ms | 171001.0 ms | 3718.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 150327.0 ms | 161209.8 ms | 3694.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 146233.8 ms | 158340.4 ms | 3017.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 135125.5 ms | 141558.9 ms | 3713.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 119703.7 ms | 117288.2 ms | 4263.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115647.2 ms | 123527.1 ms | 2710.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 110695.0 ms | 116804.3 ms | 2812.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 92336.6 ms | 103070.6 ms | 2465.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 90053.8 ms | 89370.6 ms | 3831.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 81394.7 ms | 94033.7 ms | 2402.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 71340.5 ms | 75793.7 ms | 1896.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 67982.0 ms | 69397.9 ms | 1977.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 56540.4 ms | 56997.2 ms | 1662.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 53213.3 ms | 52297.3 ms | 1502.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52265.7 ms | 57474.6 ms | 1532.6 ms |
| Uber_zap | LLGoNoLTO | 49577.2 ms | 56609.7 ms | 3100.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 43234.4 ms | 43011.2 ms | 1499.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33598.4 ms | 36593.3 ms | 1370.5 ms |
| Gorm_schema | LLGoNoLTO | 31395.8 ms | 36155.8 ms | 2207.7 ms |
| K8s_workqueue | LLGoNoLTO | 29989.7 ms | 36238.0 ms | 2585.6 ms |
| Toml | LLGoNoLTO | 16996.5 ms | 20800.2 ms | 1529.0 ms |
| Dustin_humanize | LLGoNoLTO | 14613.6 ms | 15536.5 ms | 1357.9 ms |
| Aws_restjson | Go | 1130.0 ms | 1014.4 ms | 204.9 ms |
| K8s_workqueue | Go | 837.2 ms | 720.5 ms | 142.8 ms |
| Toml | Go | 807.4 ms | 582.4 ms | 102.0 ms |
| Uber_zap | Go | 706.8 ms | 673.9 ms | 132.3 ms |
| Dustin_humanize | Go | 623.8 ms | 404.2 ms | 80.2 ms |
| Gorm_schema | Go | 319.3 ms | 465.9 ms | 100.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 627018.8 ms | 6 |
| LLGoFullLTOGlobalDCE | 610151.2 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 534050.9 ms | 6 |
| LLGoNoLTO | 358630.0 ms | 6 |
| Go | 4424.6 ms | 6 |

Dependency download details are in `download-timings.log`.
