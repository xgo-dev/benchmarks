## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 241223.8 ms | 245489.4 ms | 6236.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 216354.2 ms | 221576.5 ms | 6423.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 166405.4 ms | 175417.9 ms | 3763.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 157674.2 ms | 157745.7 ms | 3244.2 ms |
| K8s_workqueue | LLGoNoLTO | 137834.3 ms | 133941.7 ms | 6918.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 124718.7 ms | 116912.5 ms | 4705.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 107914.5 ms | 103187.7 ms | 2340.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 100903.7 ms | 109177.4 ms | 2735.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100731.0 ms | 108733.5 ms | 2521.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 100704.5 ms | 109077.8 ms | 2449.8 ms |
| Dustin_humanize | LLGoNoLTO | 92833.8 ms | 79938.8 ms | 7159.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 88319.2 ms | 97685.8 ms | 2484.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 83028.8 ms | 95561.4 ms | 2463.0 ms |
| Aws_restjson | LLGoNoLTO | 69078.9 ms | 79435.5 ms | 3838.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65825.7 ms | 72540.3 ms | 1787.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56065.7 ms | 60573.9 ms | 1610.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 48831.9 ms | 55650.8 ms | 1685.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 45771.9 ms | 46040.4 ms | 1426.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 44872.8 ms | 48992.6 ms | 1456.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 41639.7 ms | 42310.0 ms | 1394.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41071.5 ms | 45569.4 ms | 1264.3 ms |
| Uber_zap | LLGoNoLTO | 39192.7 ms | 48617.0 ms | 2755.6 ms |
| Gorm_schema | LLGoNoLTO | 32606.2 ms | 37243.7 ms | 2217.1 ms |
| Toml | LLGoNoLTO | 18031.0 ms | 21931.8 ms | 1614.5 ms |
| Aws_restjson | Go | 1197.5 ms | 964.8 ms | 162.1 ms |
| K8s_workqueue | Go | 857.9 ms | 762.0 ms | 129.1 ms |
| Gorm_schema | Go | 713.5 ms | 609.3 ms | 106.1 ms |
| Toml | Go | 465.5 ms | 530.1 ms | 86.7 ms |
| Uber_zap | Go | 382.0 ms | 558.8 ms | 113.9 ms |
| Dustin_humanize | Go | 268.9 ms | 399.4 ms | 121.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 662565.5 ms | 6 |
| LLGoFullLTOGlobalDCE | 594541.1 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 574950.9 ms | 6 |
| LLGoNoLTO | 389577.0 ms | 6 |
| Go | 3885.4 ms | 6 |

Dependency download details are in `download-timings.log`.
