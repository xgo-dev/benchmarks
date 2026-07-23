## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 194869.3 ms | 204166.7 ms | 3520.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 191301.2 ms | 190379.2 ms | 3451.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 189437.0 ms | 188369.9 ms | 3263.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 179395.2 ms | 184631.2 ms | 5009.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 163249.0 ms | 171231.5 ms | 3376.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 138235.6 ms | 134554.0 ms | 2738.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 119480.9 ms | 110111.2 ms | 1941.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 109142.9 ms | 116537.6 ms | 2306.4 ms |
| Toml | LLGoNoLTO | 107828.3 ms | 96522.7 ms | 6774.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 95982.9 ms | 108542.9 ms | 2197.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 92904.6 ms | 90947.1 ms | 2943.8 ms |
| Aws_restjson | LLGoNoLTO | 83439.0 ms | 92726.9 ms | 3427.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 75944.8 ms | 89727.1 ms | 1964.1 ms |
| K8s_workqueue | LLGoNoLTO | 69320.4 ms | 80305.1 ms | 4111.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 65933.5 ms | 67435.4 ms | 1727.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 58826.1 ms | 59901.7 ms | 1407.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52908.8 ms | 58921.8 ms | 1314.4 ms |
| Uber_zap | LLGoNoLTO | 52584.0 ms | 59652.7 ms | 2689.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 50260.7 ms | 57681.8 ms | 1259.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 46390.9 ms | 47182.0 ms | 1311.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 39415.6 ms | 39746.3 ms | 1197.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 37392.0 ms | 43448.2 ms | 1132.2 ms |
| Gorm_schema | LLGoNoLTO | 31223.0 ms | 37252.4 ms | 1965.6 ms |
| Dustin_humanize | LLGoNoLTO | 10029.7 ms | 13902.6 ms | 1072.5 ms |
| Aws_restjson | Go | 1425.6 ms | 952.4 ms | 132.1 ms |
| Gorm_schema | Go | 879.4 ms | 580.8 ms | 130.2 ms |
| K8s_workqueue | Go | 702.7 ms | 885.0 ms | 155.2 ms |
| Uber_zap | Go | 504.4 ms | 559.8 ms | 131.6 ms |
| Dustin_humanize | Go | 348.7 ms | 372.5 ms | 59.2 ms |
| Toml | Go | 304.8 ms | 447.3 ms | 77.8 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 719395.5 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 673107.3 ms | 6 |
| LLGoFullLTOGlobalDCE | 508568.3 ms | 6 |
| LLGoNoLTO | 354424.4 ms | 6 |
| Go | 4165.5 ms | 6 |

Dependency download details are in `download-timings.log`.
