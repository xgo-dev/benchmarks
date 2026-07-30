## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 578281.6 ms | 579752.8 ms | 30229.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 447909.4 ms | 463669.6 ms | 13945.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 445941.2 ms | 449283.6 ms | 10864.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 397501.5 ms | 431653.9 ms | 8527.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 344117.6 ms | 344024.2 ms | 8297.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 331405.4 ms | 307528.1 ms | 9649.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 289069.6 ms | 318652.9 ms | 5806.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 277642.5 ms | 307064.7 ms | 5659.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 274215.7 ms | 303633.2 ms | 5661.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 272588.2 ms | 245043.3 ms | 7808.8 ms |
| Etcdctl | LLGoNoLTO | 221394.7 ms | 242710.2 ms | 9939.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 166670.0 ms | 187643.6 ms | 3716.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 165742.8 ms | 178262.2 ms | 5639.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 164094.0 ms | 163961.5 ms | 3425.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 153262.1 ms | 174278.5 ms | 3632.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 136852.6 ms | 139511.8 ms | 3234.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 134594.4 ms | 128476.0 ms | 3067.0 ms |
| Aws_restjson | LLGoNoLTO | 104314.1 ms | 99659.7 ms | 4617.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99408.9 ms | 106928.0 ms | 2519.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99213.4 ms | 106442.8 ms | 2919.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 81719.9 ms | 94229.9 ms | 2520.7 ms |
| XGo | LLGoNoLTO | 76503.5 ms | 86424.9 ms | 4598.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 66389.9 ms | 66872.4 ms | 1695.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66173.5 ms | 69981.9 ms | 1935.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62625.1 ms | 69030.2 ms | 1849.4 ms |
| Uber_zap | LLGoNoLTO | 58204.3 ms | 56063.3 ms | 3182.6 ms |
| Gorm_schema | LLGoNoLTO | 55776.6 ms | 48495.3 ms | 2701.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 53530.3 ms | 44791.0 ms | 1610.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46302.1 ms | 49214.6 ms | 1472.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 45512.9 ms | 51841.6 ms | 1676.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 43903.4 ms | 43633.1 ms | 1475.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41064.4 ms | 44813.7 ms | 1461.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 40538.1 ms | 46082.0 ms | 1426.9 ms |
| IXGo | Go | 22975.2 ms | 36136.9 ms | 2550.1 ms |
| K8s_workqueue | LLGoNoLTO | 20137.2 ms | 30967.3 ms | 2210.3 ms |
| Toml | LLGoNoLTO | 18573.7 ms | 24756.4 ms | 1740.3 ms |
| Etcdctl | Go | 17623.6 ms | 32906.5 ms | 2203.1 ms |
| Dustin_humanize | LLGoNoLTO | 8029.8 ms | 11779.2 ms | 1190.8 ms |
| Gorm_schema | Go | 4473.8 ms | 5991.6 ms | 602.5 ms |
| XGo | Go | 3578.8 ms | 8445.2 ms | 551.8 ms |
| Uber_zap | Go | 3167.0 ms | 3280.1 ms | 424.3 ms |
| K8s_workqueue | Go | 2100.8 ms | 2017.8 ms | 225.9 ms |
| Aws_restjson | Go | 2027.6 ms | 4649.8 ms | 458.1 ms |
| Dustin_humanize | Go | 1196.1 ms | 748.5 ms | 138.1 ms |
| Toml | Go | 317.7 ms | 443.6 ms | 106.5 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1721700.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1538536.4 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1487751.7 ms | 9 |
| LLGoNoLTO | 1141215.6 ms | 9 |
| Go | 57460.7 ms | 9 |

Dependency download details are in `download-timings.log`.
