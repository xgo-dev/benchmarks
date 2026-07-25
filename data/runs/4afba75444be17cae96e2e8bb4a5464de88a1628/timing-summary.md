## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTOGlobalDCE | 215894.2 ms | 222384.1 ms | 7485.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 196997.1 ms | 202476.2 ms | 4802.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 166487.4 ms | 176226.9 ms | 6084.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 159453.4 ms | 163305.0 ms | 3616.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 140000.6 ms | 149935.7 ms | 4887.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 122464.2 ms | 122537.2 ms | 3226.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 117428.2 ms | 122455.6 ms | 3387.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 116843.8 ms | 120474.2 ms | 3469.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 116020.2 ms | 128859.0 ms | 3105.9 ms |
| Uber_zap | LLGoNoLTO | 103031.5 ms | 109124.4 ms | 6402.9 ms |
| Aws_restjson | LLGoNoLTO | 91932.3 ms | 93960.8 ms | 4694.9 ms |
| Gorm_schema | LLGoNoLTO | 90051.0 ms | 85878.3 ms | 7706.5 ms |
| Dustin_humanize | LLGoNoLTO | 80365.9 ms | 73867.3 ms | 7078.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 80196.1 ms | 82909.7 ms | 3920.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 73398.7 ms | 74557.0 ms | 2084.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 72623.9 ms | 79363.9 ms | 2137.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 70344.7 ms | 65689.3 ms | 1991.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 69183.8 ms | 64338.6 ms | 1718.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 68723.6 ms | 68115.1 ms | 2511.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64959.7 ms | 71644.6 ms | 2165.9 ms |
| Toml | LLGoNoLTO | 43926.9 ms | 44057.0 ms | 2906.4 ms |
| K8s_workqueue | LLGoNoLTO | 37776.7 ms | 42755.3 ms | 3354.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31786.4 ms | 36097.0 ms | 1494.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 27236.2 ms | 31384.9 ms | 1322.5 ms |
| Uber_zap | Go | 811.3 ms | 828.4 ms | 251.8 ms |
| K8s_workqueue | Go | 766.4 ms | 774.6 ms | 163.5 ms |
| Toml | Go | 646.4 ms | 582.9 ms | 124.9 ms |
| Gorm_schema | Go | 608.6 ms | 600.2 ms | 146.5 ms |
| Aws_restjson | Go | 521.7 ms | 761.6 ms | 167.1 ms |
| Dustin_humanize | Go | 195.7 ms | 265.7 ms | 87.3 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 738144.3 ms | 6 |
| LLGoFullLTOGlobalDCE | 617257.0 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 554641.0 ms | 6 |
| LLGoNoLTO | 447084.3 ms | 6 |
| Go | 3550.1 ms | 6 |

Dependency download details are in `download-timings.log`.
