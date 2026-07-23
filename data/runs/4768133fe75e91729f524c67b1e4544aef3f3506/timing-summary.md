## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 201819.5 ms | 214017.5 ms | 5532.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 142672.2 ms | 150905.3 ms | 4310.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 133359.6 ms | 137605.2 ms | 2957.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 133352.2 ms | 130795.6 ms | 2807.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127642.2 ms | 134864.8 ms | 2765.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125373.3 ms | 137180.6 ms | 2963.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 112400.6 ms | 118902.6 ms | 2833.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 102115.8 ms | 101240.7 ms | 2660.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 94092.0 ms | 87281.1 ms | 1951.2 ms |
| Uber_zap | LLGoNoLTO | 83455.9 ms | 92172.8 ms | 4966.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 83200.1 ms | 94868.9 ms | 2475.2 ms |
| Dustin_humanize | LLGoNoLTO | 77122.1 ms | 72041.8 ms | 6984.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 71196.7 ms | 71373.6 ms | 2017.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 69502.6 ms | 74684.9 ms | 1852.1 ms |
| Aws_restjson | LLGoNoLTO | 63763.2 ms | 76531.8 ms | 3784.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57666.7 ms | 61066.5 ms | 1594.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 55114.2 ms | 55076.0 ms | 2847.7 ms |
| K8s_workqueue | LLGoNoLTO | 45876.1 ms | 42973.1 ms | 3239.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 42671.2 ms | 47836.3 ms | 1467.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42171.0 ms | 46593.1 ms | 1302.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 40385.7 ms | 41091.4 ms | 1433.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 38382.9 ms | 43660.0 ms | 1404.5 ms |
| Gorm_schema | LLGoNoLTO | 34672.8 ms | 38917.8 ms | 2587.7 ms |
| Toml | LLGoNoLTO | 33556.5 ms | 37373.7 ms | 2256.4 ms |
| Aws_restjson | Go | 985.0 ms | 1047.1 ms | 183.1 ms |
| Gorm_schema | Go | 665.3 ms | 605.6 ms | 96.8 ms |
| K8s_workqueue | Go | 591.7 ms | 717.1 ms | 125.1 ms |
| Toml | Go | 472.5 ms | 518.1 ms | 97.2 ms |
| Dustin_humanize | Go | 459.5 ms | 459.3 ms | 136.7 ms |
| Uber_zap | Go | 445.7 ms | 544.3 ms | 125.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 616920.0 ms | 6 |
| LLGoFullLTOGlobalDCE | 533803.1 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 522395.4 ms | 6 |
| LLGoNoLTO | 338446.4 ms | 6 |
| Go | 3619.7 ms | 6 |

Dependency download details are in `download-timings.log`.
