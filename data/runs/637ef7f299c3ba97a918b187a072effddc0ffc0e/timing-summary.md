## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 145563.9 ms | 142698.2 ms | 3962.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 132736.9 ms | 136881.9 ms | 2905.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 129589.3 ms | 132282.5 ms | 2907.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 128108.8 ms | 131501.5 ms | 2735.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 115118.7 ms | 112997.8 ms | 2558.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 105579.3 ms | 99811.7 ms | 3332.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 102356.5 ms | 110409.4 ms | 2735.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 101125.2 ms | 93976.6 ms | 3347.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98710.5 ms | 101897.5 ms | 2484.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 84987.5 ms | 93152.9 ms | 2763.0 ms |
| Aws_restjson | LLGoNoLTO | 77432.5 ms | 79043.3 ms | 3964.8 ms |
| Uber_zap | LLGoNoLTO | 65918.4 ms | 71585.7 ms | 4542.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 65105.9 ms | 74294.4 ms | 2148.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64123.0 ms | 63501.4 ms | 1774.1 ms |
| Toml | LLGoNoLTO | 60508.1 ms | 59997.4 ms | 4108.9 ms |
| Dustin_humanize | LLGoNoLTO | 58188.7 ms | 54841.8 ms | 5739.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 57067.8 ms | 56359.6 ms | 3004.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 53481.0 ms | 56060.0 ms | 2867.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 42094.1 ms | 45436.1 ms | 1521.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 33571.3 ms | 36698.0 ms | 1253.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 31013.1 ms | 34112.4 ms | 1121.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24189.8 ms | 26340.3 ms | 1132.2 ms |
| Gorm_schema | LLGoNoLTO | 22106.6 ms | 26466.3 ms | 1912.4 ms |
| K8s_workqueue | LLGoNoLTO | 16051.4 ms | 24062.5 ms | 2021.8 ms |
| K8s_workqueue | Go | 1238.1 ms | 629.4 ms | 142.8 ms |
| Aws_restjson | Go | 1203.5 ms | 721.1 ms | 161.3 ms |
| Dustin_humanize | Go | 641.1 ms | 368.4 ms | 134.5 ms |
| Gorm_schema | Go | 531.9 ms | 447.4 ms | 105.4 ms |
| Toml | Go | 506.8 ms | 368.4 ms | 116.7 ms |
| Uber_zap | Go | 431.7 ms | 497.4 ms | 132.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 571521.6 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 471511.8 ms | 6 |
| LLGoFullLTOGlobalDCE | 471489.2 ms | 6 |
| LLGoNoLTO | 300205.7 ms | 6 |
| Go | 4553.1 ms | 6 |

Dependency download details are in `download-timings.log`.
