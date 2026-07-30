## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 573574.0 ms | 609963.5 ms | 17059.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 442984.0 ms | 467618.1 ms | 11773.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 395179.4 ms | 425315.4 ms | 8313.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 371775.8 ms | 405186.7 ms | 7860.6 ms |
| IXGo | LLGoNoLTO | 303664.5 ms | 327684.5 ms | 15954.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 278098.2 ms | 308255.8 ms | 5686.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 275427.0 ms | 306676.8 ms | 5173.0 ms |
| Etcdctl | LLGoNoLTO | 218615.0 ms | 242841.6 ms | 10918.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181890.5 ms | 203582.3 ms | 4268.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 180437.9 ms | 202190.5 ms | 4218.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 174833.7 ms | 146237.3 ms | 4999.0 ms |
| Toml | LLGoNoLTO | 172995.3 ms | 133616.0 ms | 10185.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 156017.0 ms | 185018.3 ms | 4303.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 149089.6 ms | 164445.5 ms | 3578.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 124654.7 ms | 139105.8 ms | 2944.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 118909.4 ms | 129671.7 ms | 3344.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 112118.4 ms | 125154.1 ms | 2785.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105480.7 ms | 120464.8 ms | 2934.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95715.1 ms | 105655.6 ms | 2658.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 92244.1 ms | 89273.9 ms | 1971.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 89650.2 ms | 100529.9 ms | 2350.1 ms |
| Aws_restjson | LLGoNoLTO | 89407.5 ms | 91903.5 ms | 4748.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 88785.0 ms | 99564.3 ms | 2355.4 ms |
| XGo | LLGoNoLTO | 87723.8 ms | 99032.9 ms | 5265.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 79466.3 ms | 91348.1 ms | 2434.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 56006.4 ms | 62499.3 ms | 1727.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 49199.3 ms | 58964.8 ms | 1993.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 47611.8 ms | 49155.3 ms | 1426.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 42960.0 ms | 48100.6 ms | 1437.1 ms |
| Gorm_schema | LLGoNoLTO | 41050.8 ms | 41263.4 ms | 2614.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 39725.7 ms | 45283.0 ms | 1436.9 ms |
| K8s_workqueue | LLGoNoLTO | 36408.8 ms | 41148.7 ms | 2828.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31706.8 ms | 34442.9 ms | 1314.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31618.4 ms | 35858.3 ms | 1461.5 ms |
| Uber_zap | LLGoNoLTO | 31460.6 ms | 43639.2 ms | 2533.8 ms |
| IXGo | Go | 11549.7 ms | 35963.8 ms | 2532.3 ms |
| Dustin_humanize | LLGoNoLTO | 7642.7 ms | 12101.0 ms | 1209.9 ms |
| Etcdctl | Go | 5747.5 ms | 15974.6 ms | 835.1 ms |
| Gorm_schema | Go | 5732.9 ms | 4073.1 ms | 253.4 ms |
| XGo | Go | 4101.2 ms | 6818.4 ms | 403.2 ms |
| Aws_restjson | Go | 1916.9 ms | 4642.9 ms | 417.9 ms |
| K8s_workqueue | Go | 1313.4 ms | 1811.6 ms | 417.0 ms |
| Uber_zap | Go | 1311.2 ms | 2734.9 ms | 243.7 ms |
| Dustin_humanize | Go | 543.4 ms | 644.4 ms | 108.8 ms |
| Toml | Go | 439.8 ms | 490.1 ms | 121.7 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1515810.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1437215.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1432133.5 ms | 9 |
| LLGoNoLTO | 988969.0 ms | 9 |
| Go | 32656.0 ms | 9 |

Dependency download details are in `download-timings.log`.
