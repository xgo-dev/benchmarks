## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 422581.9 ms | 420797.5 ms | 20813.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 419953.5 ms | 426515.5 ms | 8716.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 418120.4 ms | 446976.8 ms | 8617.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 414470.3 ms | 415950.0 ms | 9108.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 403594.1 ms | 458870.7 ms | 10070.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 396069.7 ms | 430696.4 ms | 8354.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 362510.1 ms | 391878.7 ms | 7757.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 287251.8 ms | 318934.5 ms | 9343.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 250172.5 ms | 256891.9 ms | 5674.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 242200.0 ms | 253942.4 ms | 5755.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 203934.3 ms | 207792.1 ms | 3673.7 ms |
| Aws_restjson | LLGoNoLTO | 187529.7 ms | 185109.9 ms | 8319.7 ms |
| Etcdctl | LLGoNoLTO | 186741.0 ms | 212016.0 ms | 9124.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 185171.7 ms | 187367.9 ms | 4252.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 164139.6 ms | 167735.8 ms | 3863.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 141340.0 ms | 138054.5 ms | 3240.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 132626.4 ms | 126953.9 ms | 4224.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 129621.9 ms | 121518.1 ms | 4140.2 ms |
| Gorm_schema | LLGoNoLTO | 125668.5 ms | 113595.0 ms | 9435.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 124716.3 ms | 137480.1 ms | 2953.1 ms |
| XGo | LLGoNoLTO | 114829.2 ms | 129064.9 ms | 6682.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 107117.9 ms | 96311.8 ms | 4433.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102989.7 ms | 111118.8 ms | 2523.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101271.7 ms | 109214.6 ms | 2535.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 100026.4 ms | 109053.7 ms | 2655.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 94585.2 ms | 88206.4 ms | 2183.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 91734.6 ms | 101047.0 ms | 2710.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 78190.9 ms | 71212.9 ms | 1739.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 76116.2 ms | 67527.9 ms | 1888.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 70138.5 ms | 70439.3 ms | 2045.7 ms |
| Uber_zap | LLGoNoLTO | 54613.0 ms | 59247.1 ms | 3127.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 43398.7 ms | 42600.8 ms | 1359.0 ms |
| K8s_workqueue | LLGoNoLTO | 34652.6 ms | 40775.6 ms | 2877.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 29329.6 ms | 33734.7 ms | 1277.4 ms |
| IXGo | Go | 24896.8 ms | 44295.3 ms | 2734.0 ms |
| Toml | LLGoNoLTO | 20941.7 ms | 23078.4 ms | 1654.4 ms |
| Gorm_schema | Go | 11099.6 ms | 6631.4 ms | 416.5 ms |
| Aws_restjson | Go | 11017.9 ms | 8986.3 ms | 595.1 ms |
| Etcdctl | Go | 9952.1 ms | 31490.1 ms | 1841.8 ms |
| Dustin_humanize | LLGoNoLTO | 8094.2 ms | 12595.9 ms | 1173.5 ms |
| XGo | Go | 5849.1 ms | 7178.0 ms | 420.2 ms |
| Uber_zap | Go | 2329.9 ms | 3158.8 ms | 240.0 ms |
| K8s_workqueue | Go | 1012.3 ms | 1660.5 ms | 183.9 ms |
| Toml | Go | 852.2 ms | 607.2 ms | 125.5 ms |
| Dustin_humanize | Go | 552.9 ms | 662.7 ms | 99.1 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1906255.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1669037.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1595499.2 ms | 9 |
| LLGoNoLTO | 1155651.8 ms | 9 |
| Go | 67562.9 ms | 9 |

Dependency download details are in `download-timings.log`.
