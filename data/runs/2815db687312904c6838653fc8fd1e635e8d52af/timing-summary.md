## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 362571.1 ms | 356984.3 ms | 5586.8 ms | 251288.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 358237.0 ms | 352647.6 ms | 5589.4 ms | 249127.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 350505.5 ms | 345143.9 ms | 5361.6 ms | 245071.8 ms |
| IXGo | LLGoNoLTO | 279174.0 ms | 274416.1 ms | 4757.9 ms | 88649.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 265607.3 ms | 261660.6 ms | 3946.7 ms | 169280.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 265583.4 ms | 261554.6 ms | 4028.8 ms | 169113.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 264903.9 ms | 261076.7 ms | 3827.1 ms | 171727.0 ms |
| IXGo | LLGoDeadcodeDrop | 254959.2 ms | 250083.8 ms | 4875.4 ms | 82726.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 251529.4 ms | 247290.9 ms | 4238.5 ms | 153524.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 251376.4 ms | 247203.9 ms | 4172.4 ms | 155282.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 184271.5 ms | 180820.3 ms | 3451.2 ms | 58196.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 178808.8 ms | 175748.4 ms | 3060.4 ms | 128743.0 ms |
| Etcdctl | LLGoNoLTO | 177840.5 ms | 174637.9 ms | 3202.6 ms | 56781.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 145649.5 ms | 142684.8 ms | 2964.6 ms | 93477.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140420.5 ms | 137698.3 ms | 2722.1 ms | 105878.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 120656.6 ms | 118005.4 ms | 2651.2 ms | 90070.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 119585.5 ms | 116945.5 ms | 2640.0 ms | 89671.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 114693.9 ms | 111715.3 ms | 2978.6 ms | 36139.9 ms |
| XGo | LLGoDeadcodeDrop | 108357.6 ms | 105753.0 ms | 2604.5 ms | 35195.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105046.5 ms | 102522.4 ms | 2524.1 ms | 83487.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 99041.1 ms | 96708.8 ms | 2332.3 ms | 80523.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 98533.4 ms | 96203.8 ms | 2329.6 ms | 79760.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92745.6 ms | 90333.3 ms | 2412.4 ms | 70369.7 ms |
| Gorm_schema | LLGoNoLTO | 92557.9 ms | 90472.6 ms | 2085.2 ms | 37048.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92532.7 ms | 90095.0 ms | 2437.6 ms | 70493.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 81314.0 ms | 79236.0 ms | 2078.0 ms | 46758.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 69501.6 ms | 67795.4 ms | 1706.2 ms | 26134.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66788.3 ms | 65239.5 ms | 1548.8 ms | 47664.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64548.9 ms | 63024.5 ms | 1524.4 ms | 48351.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 62876.8 ms | 60483.0 ms | 2393.8 ms | 25961.3 ms |
| Aws_restjson | LLGoNoLTO | 61252.3 ms | 58921.7 ms | 2330.6 ms | 25551.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53703.6 ms | 52302.9 ms | 1400.7 ms | 43675.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44934.6 ms | 43552.9 ms | 1381.8 ms | 34538.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 44668.8 ms | 43274.7 ms | 1394.0 ms | 34549.8 ms |
| XGo | LLGoNoLTO | 42109.8 ms | 39772.6 ms | 2337.2 ms | 17093.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 40989.5 ms | 38914.0 ms | 2075.5 ms | 14330.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 40664.5 ms | 39426.1 ms | 1238.4 ms | 34031.3 ms |
| Uber_zap | LLGoNoLTO | 40438.6 ms | 38431.6 ms | 2007.0 ms | 13976.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34044.2 ms | 32664.2 ms | 1380.0 ms | 11299.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 30772.5 ms | 29541.1 ms | 1231.4 ms | 24015.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30705.2 ms | 29470.9 ms | 1234.3 ms | 24053.2 ms |
| K8s_workqueue | LLGoNoLTO | 25146.0 ms | 23294.3 ms | 1851.7 ms | 9764.7 ms |
| Toml | LLGoDeadcodeDrop | 19883.9 ms | 18676.4 ms | 1207.5 ms | 7875.5 ms |
| Toml | LLGoNoLTO | 19653.5 ms | 18447.7 ms | 1205.8 ms | 7694.1 ms |
| Dustin_humanize | LLGoNoLTO | 10722.8 ms | 9634.9 ms | 1087.9 ms | 4453.7 ms |
| IXGo | Go | 2085.0 ms | 1782.9 ms | 302.0 ms | 1380.5 ms |
| Etcdctl | Go | 1282.2 ms | 1100.3 ms | 181.9 ms | 740.8 ms |
| XGo | Go | 1051.9 ms | 891.2 ms | 160.7 ms | 654.9 ms |
| Aws_restjson | Go | 825.6 ms | 669.0 ms | 156.7 ms | 535.6 ms |
| K8s_workqueue | Go | 730.5 ms | 586.0 ms | 144.5 ms | 389.6 ms |
| Toml | Go | 676.0 ms | 545.9 ms | 130.1 ms | 341.2 ms |
| Uber_zap | Go | 667.7 ms | 541.0 ms | 126.7 ms | 401.9 ms |
| Gorm_schema | Go | 542.2 ms | 433.5 ms | 108.7 ms | 350.2 ms |
| Dustin_humanize | Go | 360.8 ms | 294.9 ms | 66.0 ms | 191.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1370210.7 ms | 968029.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1332734.5 ms | 920163.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1318489.1 ms | 906337.3 ms | 9 |
| LLGoDeadcodeDrop | 889578.2 ms | 297859.5 ms | 9 |
| LLGoNoLTO | 748895.3 ms | 261013.1 ms | 9 |
| Go | 8222.0 ms | 4986.0 ms | 9 |

Dependency download details are in `download-timings.log`.
