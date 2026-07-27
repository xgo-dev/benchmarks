## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoNoLTO | 223448.2 ms | 211701.1 ms | 14631.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 203064.8 ms | 205864.5 ms | 7019.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 202628.5 ms | 199954.4 ms | 4206.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 194271.9 ms | 191587.0 ms | 4174.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 188778.2 ms | 190821.7 ms | 6636.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 141408.5 ms | 137764.8 ms | 3450.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 133849.1 ms | 145617.6 ms | 3372.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 128828.9 ms | 136869.3 ms | 3536.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 126930.4 ms | 128795.2 ms | 3287.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 109647.7 ms | 106005.0 ms | 4738.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 85943.5 ms | 82608.4 ms | 2006.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 85058.0 ms | 96537.7 ms | 2701.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 79511.0 ms | 82406.8 ms | 2275.5 ms |
| Uber_zap | LLGoNoLTO | 62387.1 ms | 60156.1 ms | 3782.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62142.4 ms | 68272.8 ms | 1984.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 55825.8 ms | 56552.7 ms | 1602.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55721.1 ms | 60313.9 ms | 2063.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 52226.8 ms | 48275.6 ms | 1675.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43181.1 ms | 48764.4 ms | 1584.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 38808.5 ms | 39527.5 ms | 1583.1 ms |
| Gorm_schema | LLGoNoLTO | 30137.7 ms | 35404.4 ms | 2532.0 ms |
| K8s_workqueue | LLGoNoLTO | 22923.8 ms | 33739.9 ms | 2742.9 ms |
| Toml | LLGoNoLTO | 18450.5 ms | 21745.8 ms | 1725.8 ms |
| Dustin_humanize | LLGoNoLTO | 8371.3 ms | 12683.8 ms | 1324.5 ms |
| Aws_restjson | Go | 1349.0 ms | 991.6 ms | 171.0 ms |
| Toml | Go | 995.0 ms | 614.8 ms | 117.1 ms |
| Gorm_schema | Go | 508.2 ms | 563.8 ms | 106.6 ms |
| Uber_zap | Go | 500.4 ms | 542.3 ms | 170.7 ms |
| K8s_workqueue | Go | 444.3 ms | 615.8 ms | 136.2 ms |
| Dustin_humanize | Go | 400.6 ms | 440.0 ms | 153.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 753904.0 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 675587.4 ms | 6 |
| LLGoFullLTOGlobalDCE | 558334.6 ms | 6 |
| LLGoNoLTO | 365718.6 ms | 6 |
| Go | 4197.5 ms | 6 |

Dependency download details are in `download-timings.log`.
