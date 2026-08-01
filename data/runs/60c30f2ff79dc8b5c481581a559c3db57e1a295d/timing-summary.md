## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 450965.2 ms | 473873.5 ms | 10202.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 392774.9 ms | 425959.9 ms | 8199.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 392256.1 ms | 424077.2 ms | 8343.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 334199.0 ms | 362936.0 ms | 7133.2 ms |
| IXGo | LLGoNoLTO | 293019.7 ms | 338062.6 ms | 17228.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 279855.0 ms | 312231.4 ms | 5598.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 279557.0 ms | 300855.0 ms | 8450.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 279183.6 ms | 311429.2 ms | 5551.8 ms |
| XGo | LLGoNoLTO | 263739.6 ms | 271476.4 ms | 16897.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 236601.7 ms | 253724.4 ms | 5428.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 233342.0 ms | 246331.4 ms | 5446.0 ms |
| Etcdctl | LLGoNoLTO | 175403.3 ms | 202773.1 ms | 9008.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 152911.7 ms | 163585.7 ms | 3141.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 120746.2 ms | 134512.1 ms | 2960.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 120211.8 ms | 121415.0 ms | 2844.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 119893.0 ms | 132634.9 ms | 2886.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 118707.9 ms | 127073.5 ms | 2735.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 111467.0 ms | 115514.7 ms | 2989.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 110685.8 ms | 113375.0 ms | 4432.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104489.9 ms | 113241.7 ms | 2435.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103498.5 ms | 110215.3 ms | 3099.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 93880.2 ms | 104424.1 ms | 2560.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 82922.3 ms | 83850.5 ms | 3759.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 77252.8 ms | 78176.2 ms | 2071.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 71885.2 ms | 66113.9 ms | 1850.5 ms |
| Aws_restjson | LLGoNoLTO | 71295.0 ms | 88485.4 ms | 4572.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 61038.4 ms | 63188.4 ms | 1835.1 ms |
| Uber_zap | LLGoNoLTO | 57752.1 ms | 61580.0 ms | 3618.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 48458.5 ms | 49101.3 ms | 1675.3 ms |
| Gorm_schema | LLGoNoLTO | 41982.8 ms | 42479.1 ms | 2587.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 41432.1 ms | 46641.8 ms | 1479.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41165.1 ms | 45393.4 ms | 1375.8 ms |
| K8s_workqueue | LLGoNoLTO | 39544.5 ms | 40562.5 ms | 2729.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 35271.7 ms | 37866.4 ms | 1371.4 ms |
| Etcdctl | Go | 32050.1 ms | 34880.6 ms | 1978.7 ms |
| Toml | LLGoNoLTO | 28227.5 ms | 26069.6 ms | 1765.4 ms |
| IXGo | Go | 21665.8 ms | 40474.0 ms | 2655.8 ms |
| Gorm_schema | Go | 17866.6 ms | 6705.9 ms | 407.2 ms |
| Dustin_humanize | LLGoNoLTO | 14539.3 ms | 15396.9 ms | 1390.0 ms |
| Uber_zap | Go | 9400.7 ms | 6352.7 ms | 425.6 ms |
| Aws_restjson | Go | 5790.3 ms | 5669.8 ms | 476.0 ms |
| XGo | Go | 4140.5 ms | 6844.4 ms | 420.2 ms |
| Toml | Go | 1097.0 ms | 607.1 ms | 146.7 ms |
| K8s_workqueue | Go | 931.4 ms | 1670.0 ms | 203.4 ms |
| Dustin_humanize | Go | 621.9 ms | 709.6 ms | 119.9 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1562902.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1540730.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1391020.1 ms | 9 |
| LLGoNoLTO | 985503.8 ms | 9 |
| Go | 93564.3 ms | 9 |

Dependency download details are in `download-timings.log`.
