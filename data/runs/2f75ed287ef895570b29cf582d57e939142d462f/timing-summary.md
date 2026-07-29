## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 560429.6 ms | 592202.5 ms | 15329.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 381148.3 ms | 413996.4 ms | 8034.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 378823.0 ms | 408037.0 ms | 7878.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 349563.1 ms | 392042.8 ms | 9062.0 ms |
| IXGo | LLGoNoLTO | 310953.0 ms | 326595.3 ms | 15031.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 287305.8 ms | 318780.1 ms | 5478.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 278824.3 ms | 308162.5 ms | 5507.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 265162.0 ms | 275236.1 ms | 6271.0 ms |
| XGo | LLGoNoLTO | 239147.7 ms | 239330.9 ms | 11507.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 214001.5 ms | 221087.9 ms | 5348.0 ms |
| K8s_workqueue | LLGoNoLTO | 203973.1 ms | 176039.2 ms | 12147.2 ms |
| Etcdctl | LLGoNoLTO | 178992.3 ms | 206118.5 ms | 9197.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 167284.0 ms | 188737.3 ms | 3629.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 164583.3 ms | 153464.0 ms | 3537.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 161709.6 ms | 165604.2 ms | 4164.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 149987.8 ms | 149407.5 ms | 2792.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 149381.5 ms | 149313.9 ms | 3077.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 142753.3 ms | 153205.7 ms | 3051.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 123502.1 ms | 120884.0 ms | 3112.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 122262.3 ms | 133119.8 ms | 3075.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 117516.4 ms | 104704.2 ms | 4366.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112787.0 ms | 123267.3 ms | 2777.9 ms |
| Aws_restjson | LLGoNoLTO | 99504.4 ms | 97592.6 ms | 4565.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 94765.9 ms | 103873.6 ms | 2354.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 86469.2 ms | 79219.6 ms | 3727.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68388.2 ms | 72808.1 ms | 1818.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 56490.9 ms | 49854.0 ms | 1475.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51526.2 ms | 56832.3 ms | 1448.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 48935.6 ms | 50983.3 ms | 1480.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 47137.2 ms | 50925.0 ms | 1563.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 46329.1 ms | 53012.8 ms | 1730.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45151.9 ms | 48747.4 ms | 1443.8 ms |
| Uber_zap | LLGoNoLTO | 37248.3 ms | 46525.3 ms | 2739.4 ms |
| IXGo | Go | 33806.2 ms | 46097.2 ms | 2749.3 ms |
| Toml | LLGoNoLTO | 31980.5 ms | 29828.5 ms | 1968.7 ms |
| Gorm_schema | LLGoNoLTO | 30139.1 ms | 34187.7 ms | 2210.0 ms |
| Dustin_humanize | LLGoNoLTO | 20297.0 ms | 16996.9 ms | 1444.9 ms |
| Aws_restjson | Go | 19516.2 ms | 9232.3 ms | 624.9 ms |
| Etcdctl | Go | 11744.2 ms | 17266.4 ms | 835.8 ms |
| XGo | Go | 8742.1 ms | 7125.2 ms | 454.4 ms |
| Gorm_schema | Go | 7125.2 ms | 4137.6 ms | 246.2 ms |
| K8s_workqueue | Go | 2368.5 ms | 2026.5 ms | 223.5 ms |
| Uber_zap | Go | 1362.6 ms | 2854.4 ms | 192.3 ms |
| Toml | Go | 496.0 ms | 541.9 ms | 116.2 ms |
| Dustin_humanize | Go | 370.8 ms | 555.1 ms | 110.1 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1599759.3 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1589397.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1483062.3 ms | 9 |
| LLGoNoLTO | 1152235.4 ms | 9 |
| Go | 85531.9 ms | 9 |

Dependency download details are in `download-timings.log`.
