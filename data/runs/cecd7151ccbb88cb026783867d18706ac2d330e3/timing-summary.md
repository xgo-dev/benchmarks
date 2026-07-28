## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 234868.9 ms | 240871.4 ms | 6646.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 213049.3 ms | 216592.0 ms | 6401.4 ms |
| Aws_restjson | LLGoNoLTO | 173864.5 ms | 178450.5 ms | 11722.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 140208.1 ms | 145636.0 ms | 3675.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 125968.1 ms | 125297.7 ms | 3104.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 125689.7 ms | 125703.2 ms | 3036.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 122782.0 ms | 126977.8 ms | 2811.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 115579.0 ms | 129051.4 ms | 2870.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108896.8 ms | 119086.8 ms | 2635.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 106177.0 ms | 103903.1 ms | 4194.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 85074.7 ms | 84804.8 ms | 2110.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 80435.6 ms | 91876.5 ms | 2414.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 70917.1 ms | 65746.7 ms | 1755.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68642.2 ms | 73323.6 ms | 1876.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 56152.5 ms | 50140.0 ms | 1530.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55943.9 ms | 59545.0 ms | 1622.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 48165.6 ms | 54535.6 ms | 1667.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 39930.7 ms | 44295.4 ms | 1343.7 ms |
| Uber_zap | LLGoNoLTO | 31901.7 ms | 43501.9 ms | 2665.3 ms |
| Gorm_schema | LLGoNoLTO | 29155.4 ms | 35606.0 ms | 2213.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 27495.9 ms | 31968.6 ms | 1266.9 ms |
| K8s_workqueue | LLGoNoLTO | 21174.3 ms | 32192.7 ms | 2457.6 ms |
| Toml | LLGoNoLTO | 18206.1 ms | 22178.0 ms | 1622.4 ms |
| Dustin_humanize | LLGoNoLTO | 7825.4 ms | 12361.4 ms | 1185.6 ms |
| Uber_zap | Go | 1059.3 ms | 714.6 ms | 138.7 ms |
| Aws_restjson | Go | 1038.5 ms | 1005.2 ms | 180.2 ms |
| K8s_workqueue | Go | 548.8 ms | 625.1 ms | 135.6 ms |
| Gorm_schema | Go | 439.2 ms | 528.1 ms | 105.2 ms |
| Dustin_humanize | Go | 319.6 ms | 340.5 ms | 74.6 ms |
| Toml | Go | 279.1 ms | 393.1 ms | 109.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 633972.2 ms | 6 |
| LLGoFullLTOGlobalDCE | 599754.7 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 592250.4 ms | 6 |
| LLGoNoLTO | 282127.5 ms | 6 |
| Go | 3684.4 ms | 6 |

Dependency download details are in `download-timings.log`.
