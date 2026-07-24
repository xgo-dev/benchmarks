## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 189961.1 ms | 199143.3 ms | 4475.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 179680.9 ms | 184014.2 ms | 5573.5 ms |
| Uber_zap | LLGoNoLTO | 175695.1 ms | 166260.0 ms | 11771.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 157290.1 ms | 163900.1 ms | 5113.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 147449.4 ms | 156156.6 ms | 3182.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 129199.6 ms | 134651.2 ms | 3245.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 115626.6 ms | 129241.3 ms | 2853.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110246.3 ms | 120055.4 ms | 2757.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 107112.2 ms | 108081.3 ms | 2928.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98347.2 ms | 104554.3 ms | 2878.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 85348.3 ms | 80713.8 ms | 1790.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 75534.4 ms | 72481.2 ms | 3290.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 74805.1 ms | 69581.9 ms | 1594.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70953.9 ms | 75038.1 ms | 1866.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 65679.3 ms | 67025.4 ms | 1988.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64005.6 ms | 68901.0 ms | 1965.2 ms |
| Aws_restjson | LLGoNoLTO | 61733.6 ms | 74620.8 ms | 3701.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 52943.2 ms | 56700.0 ms | 1829.4 ms |
| Gorm_schema | LLGoNoLTO | 45365.2 ms | 45810.1 ms | 2660.8 ms |
| K8s_workqueue | LLGoNoLTO | 43055.0 ms | 43186.8 ms | 3028.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 40609.5 ms | 45849.6 ms | 1437.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28166.2 ms | 32584.0 ms | 1231.6 ms |
| Toml | LLGoNoLTO | 14499.1 ms | 19699.6 ms | 1482.1 ms |
| Dustin_humanize | LLGoNoLTO | 14110.3 ms | 14821.3 ms | 1358.2 ms |
| Aws_restjson | Go | 1159.9 ms | 902.0 ms | 138.0 ms |
| K8s_workqueue | Go | 917.9 ms | 778.9 ms | 150.1 ms |
| Toml | Go | 842.1 ms | 565.4 ms | 105.7 ms |
| Uber_zap | Go | 821.9 ms | 682.9 ms | 131.7 ms |
| Dustin_humanize | Go | 563.1 ms | 404.7 ms | 77.8 ms |
| Gorm_schema | Go | 358.3 ms | 588.3 ms | 117.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 688604.8 ms | 6 |
| LLGoFullLTOGlobalDCE | 567479.5 ms | 6 |
| LLGoFullLTOGlobalDCEPlugin | 536874.6 ms | 6 |
| LLGoNoLTO | 354458.2 ms | 6 |
| Go | 4663.2 ms | 6 |

Dependency download details are in `download-timings.log`.
