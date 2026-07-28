## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| Uber_zap | LLGoFullLTONoGlobalDCE | 212237.2 ms | 223492.6 ms | 7308.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 199121.2 ms | 221610.9 ms | 5390.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 185325.8 ms | 194846.6 ms | 4455.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 179898.5 ms | 183484.8 ms | 3225.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 177186.1 ms | 179893.3 ms | 3988.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 171461.4 ms | 180771.5 ms | 3093.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 170594.3 ms | 177289.0 ms | 3609.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 164412.8 ms | 183227.0 ms | 3504.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 160397.7 ms | 166707.6 ms | 2854.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 159424.2 ms | 160141.3 ms | 4935.2 ms |
| K8s_workqueue | LLGoNoLTO | 153729.3 ms | 159011.5 ms | 8690.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 140186.7 ms | 168780.4 ms | 4152.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 139704.2 ms | 135607.3 ms | 2545.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 117662.5 ms | 115353.1 ms | 2715.3 ms |
| Gorm_schema | LLGoNoLTO | 113884.8 ms | 107929.1 ms | 7941.7 ms |
| IXGo | LLGoNoLTO | 107568.1 ms | 116576.1 ms | 3882.8 ms |
| XGo | LLGoNoLTO | 101277.4 ms | 113077.9 ms | 5175.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 98953.0 ms | 108038.9 ms | 2310.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94971.4 ms | 106374.3 ms | 2234.1 ms |
| Aws_restjson | LLGoNoLTO | 85106.4 ms | 91877.7 ms | 3744.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 79764.9 ms | 78948.9 ms | 1727.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 73237.3 ms | 65493.1 ms | 1481.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 71242.7 ms | 71599.7 ms | 1560.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 58634.4 ms | 65696.9 ms | 1665.1 ms |
| Uber_zap | LLGoNoLTO | 50342.8 ms | 55255.3 ms | 2628.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 47196.5 ms | 53956.0 ms | 1552.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 46341.5 ms | 44388.0 ms | 1210.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42827.9 ms | 46325.3 ms | 1148.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 39265.7 ms | 44807.1 ms | 1266.6 ms |
| Toml | LLGoNoLTO | 28098.8 ms | 29111.8 ms | 1673.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 27814.3 ms | 32648.5 ms | 1085.1 ms |
| Gorm_schema | Go | 12547.4 ms | 6155.8 ms | 436.7 ms |
| Dustin_humanize | LLGoNoLTO | 10811.9 ms | 13593.2 ms | 1116.7 ms |
| XGo | Go | 9502.3 ms | 12693.5 ms | 850.2 ms |
| Aws_restjson | Go | 8320.6 ms | 7987.2 ms | 610.2 ms |
| IXGo | Go | 7459.3 ms | 16379.7 ms | 897.8 ms |
| Uber_zap | Go | 6417.1 ms | 5795.4 ms | 399.5 ms |
| Toml | Go | 1424.0 ms | 1825.7 ms | 146.6 ms |
| K8s_workqueue | Go | 889.1 ms | 2016.0 ms | 225.0 ms |
| Dustin_humanize | Go | 315.5 ms | 557.4 ms | 75.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 997315.9 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 952787.5 ms | 8 |
| LLGoFullLTOGlobalDCE | 907758.7 ms | 8 |
| LLGoNoLTO | 650819.4 ms | 8 |
| Go | 46875.3 ms | 8 |

Dependency download details are in `download-timings.log`.
