## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCE | 179946.4 ms | 185269.4 ms | 4878.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 155839.0 ms | 157426.0 ms | 4523.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 137780.0 ms | 138890.2 ms | 3449.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 130353.0 ms | 142754.5 ms | 2596.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109888.5 ms | 114745.8 ms | 2333.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 103313.2 ms | 116100.7 ms | 2324.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 100122.0 ms | 100945.8 ms | 2446.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 91681.7 ms | 95956.8 ms | 2267.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 89909.3 ms | 94222.8 ms | 2125.5 ms |
| Toml | LLGoNoLTO | 87872.3 ms | 84910.8 ms | 5735.2 ms |
| Uber_zap | LLGoNoLTO | 81718.4 ms | 86029.9 ms | 4007.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 76516.2 ms | 72300.2 ms | 2399.8 ms |
| Aws_restjson | LLGoNoLTO | 72696.2 ms | 81122.2 ms | 3305.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65340.9 ms | 67123.5 ms | 1541.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 63418.1 ms | 57676.8 ms | 2221.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57707.2 ms | 58825.9 ms | 1390.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 57139.2 ms | 58963.6 ms | 1548.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 54236.2 ms | 53859.6 ms | 1330.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 49234.2 ms | 49684.1 ms | 1215.5 ms |
| Gorm_schema | LLGoNoLTO | 37415.3 ms | 38587.3 ms | 2016.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35841.1 ms | 36302.9 ms | 1119.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 33576.2 ms | 38504.6 ms | 1158.4 ms |
| K8s_workqueue | LLGoNoLTO | 17142.2 ms | 26893.5 ms | 1882.3 ms |
| Dustin_humanize | LLGoNoLTO | 6491.9 ms | 10671.2 ms | 899.6 ms |
| Uber_zap | Go | 1575.8 ms | 477.1 ms | 99.0 ms |
| K8s_workqueue | Go | 950.8 ms | 741.9 ms | 121.9 ms |
| Gorm_schema | Go | 770.8 ms | 503.7 ms | 90.1 ms |
| Toml | Go | 685.6 ms | 460.7 ms | 77.0 ms |
| Aws_restjson | Go | 545.0 ms | 679.2 ms | 88.5 ms |
| Dustin_humanize | Go | 488.8 ms | 312.0 ms | 48.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 568362.7 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 526945.4 ms | 6 |
| LLGoFullLTOGlobalDCE | 496534.2 ms | 6 |
| LLGoNoLTO | 303336.3 ms | 6 |
| Go | 5016.8 ms | 6 |

Dependency download details are in `download-timings.log`.
