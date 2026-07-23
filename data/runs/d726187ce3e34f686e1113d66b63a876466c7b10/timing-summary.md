## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoNoLTO | 202376.2 ms | 193420.8 ms | 13425.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 193565.8 ms | 219354.8 ms | 7089.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 141523.1 ms | 153473.1 ms | 3100.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 141434.7 ms | 155510.3 ms | 4103.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 123901.6 ms | 125804.3 ms | 3211.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 111552.6 ms | 115545.3 ms | 2670.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98704.5 ms | 103653.0 ms | 3031.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94552.2 ms | 104727.4 ms | 2705.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 91881.9 ms | 103238.9 ms | 2889.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 90128.4 ms | 99596.5 ms | 5097.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 86713.6 ms | 91291.8 ms | 3714.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 78869.2 ms | 90352.6 ms | 2529.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 76204.9 ms | 75913.5 ms | 1811.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 64950.1 ms | 58162.1 ms | 1777.2 ms |
| Gorm_schema | LLGoNoLTO | 55236.6 ms | 49134.3 ms | 3215.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 53496.0 ms | 52561.0 ms | 1584.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52585.5 ms | 57295.5 ms | 1612.2 ms |
| Uber_zap | LLGoNoLTO | 45676.0 ms | 50015.0 ms | 3161.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 42894.7 ms | 41448.9 ms | 1641.5 ms |
| K8s_workqueue | LLGoNoLTO | 42816.0 ms | 41666.8 ms | 3392.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 40767.1 ms | 38784.5 ms | 1558.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 40495.7 ms | 46759.8 ms | 1647.0 ms |
| Toml | LLGoNoLTO | 26187.2 ms | 24817.1 ms | 1951.3 ms |
| Dustin_humanize | LLGoNoLTO | 17739.5 ms | 15792.8 ms | 1590.8 ms |
| Aws_restjson | Go | 8362.4 ms | 8071.9 ms | 575.6 ms |
| Gorm_schema | Go | 5872.8 ms | 5874.4 ms | 383.7 ms |
| K8s_workqueue | Go | 4942.4 ms | 2604.9 ms | 338.5 ms |
| Toml | Go | 4342.1 ms | 2123.5 ms | 257.6 ms |
| Uber_zap | Go | 2943.4 ms | 5385.3 ms | 385.4 ms |
| Dustin_humanize | Go | 479.4 ms | 617.0 ms | 110.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 581759.1 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 557506.4 ms | 6 |
| LLGoFullLTOGlobalDCE | 484956.0 ms | 6 |
| LLGoNoLTO | 390031.4 ms | 6 |
| Go | 26942.5 ms | 6 |

Dependency download details are in `download-timings.log`.
