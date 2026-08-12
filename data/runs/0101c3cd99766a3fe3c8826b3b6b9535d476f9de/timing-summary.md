## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 490737.2 ms | 483326.1 ms | 7411.1 ms | 302476.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 392096.4 ms | 387177.0 ms | 4919.4 ms | 276208.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 379869.9 ms | 374971.8 ms | 4898.0 ms | 267982.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 338492.7 ms | 334866.2 ms | 3626.5 ms | 227440.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 333387.9 ms | 329795.2 ms | 3592.7 ms | 224474.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 333353.3 ms | 329758.3 ms | 3595.0 ms | 226166.6 ms |
| IXGo | LLGoDeadcodeDrop | 304654.9 ms | 300312.8 ms | 4342.1 ms | 96932.5 ms |
| Etcdctl | LLGoNoLTO | 232456.6 ms | 227650.3 ms | 4806.3 ms | 68432.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 204011.7 ms | 200268.4 ms | 3743.3 ms | 139091.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 203579.9 ms | 200513.1 ms | 3066.8 ms | 60487.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 198970.8 ms | 194925.4 ms | 4045.4 ms | 115481.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181218.2 ms | 178530.5 ms | 2687.6 ms | 130109.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 177083.3 ms | 174246.9 ms | 2836.4 ms | 53869.8 ms |
| K8s_workqueue | LLGoNoLTO | 162474.5 ms | 159439.7 ms | 3034.8 ms | 51698.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 158345.8 ms | 155626.2 ms | 2719.7 ms | 124078.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150070.4 ms | 147409.5 ms | 2660.9 ms | 114670.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 139617.1 ms | 137111.9 ms | 2505.2 ms | 90414.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127718.7 ms | 125485.3 ms | 2233.3 ms | 95352.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 126516.7 ms | 124263.8 ms | 2252.9 ms | 96052.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94430.7 ms | 92516.4 ms | 1914.3 ms | 76537.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 94219.6 ms | 92193.6 ms | 2025.9 ms | 76052.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 89846.3 ms | 87789.5 ms | 2056.8 ms | 66917.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 89636.5 ms | 87545.5 ms | 2091.1 ms | 66672.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 82225.8 ms | 80227.9 ms | 1997.9 ms | 46390.2 ms |
| IXGo | LLGoNoLTO | 70182.8 ms | 67207.5 ms | 2975.4 ms | 24102.7 ms |
| XGo | LLGoDeadcodeDrop | 64225.2 ms | 62027.5 ms | 2197.8 ms | 23076.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64174.5 ms | 62252.7 ms | 1921.8 ms | 27281.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63644.1 ms | 62368.5 ms | 1275.6 ms | 48542.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62096.0 ms | 60818.3 ms | 1277.8 ms | 46785.4 ms |
| XGo | LLGoNoLTO | 61994.9 ms | 59939.4 ms | 2055.5 ms | 21999.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 56256.2 ms | 54786.2 ms | 1470.0 ms | 33885.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52468.5 ms | 51271.9 ms | 1196.7 ms | 42006.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51815.9 ms | 50502.8 ms | 1313.2 ms | 36403.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44826.3 ms | 43585.1 ms | 1241.2 ms | 33950.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41090.2 ms | 40106.8 ms | 983.4 ms | 34019.9 ms |
| IXGo | Go | 34055.7 ms | 31828.1 ms | 2227.6 ms | 10148.2 ms |
| Gorm_schema | LLGoNoLTO | 33009.3 ms | 31682.0 ms | 1327.3 ms | 11041.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31854.4 ms | 30835.2 ms | 1019.2 ms | 24582.4 ms |
| Aws_restjson | LLGoNoLTO | 30796.6 ms | 29065.0 ms | 1731.6 ms | 10875.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30077.9 ms | 28931.0 ms | 1146.9 ms | 9895.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29862.5 ms | 28232.7 ms | 1629.8 ms | 10194.0 ms |
| Uber_zap | LLGoNoLTO | 27914.1 ms | 26260.1 ms | 1653.9 ms | 9883.1 ms |
| Toml | LLGoDeadcodeDrop | 19086.9 ms | 18089.7 ms | 997.2 ms | 6970.1 ms |
| Toml | LLGoNoLTO | 18904.9 ms | 17914.8 ms | 990.0 ms | 6832.3 ms |
| Etcdctl | Go | 16308.9 ms | 15549.5 ms | 759.4 ms | 5478.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12078.2 ms | 11139.9 ms | 938.3 ms | 4778.5 ms |
| Dustin_humanize | LLGoNoLTO | 10959.9 ms | 10077.1 ms | 882.8 ms | 4156.2 ms |
| XGo | Go | 8684.5 ms | 8257.6 ms | 426.8 ms | 3249.6 ms |
| Gorm_schema | Go | 5505.4 ms | 5160.7 ms | 344.7 ms | 2095.9 ms |
| Aws_restjson | Go | 4936.0 ms | 4560.9 ms | 375.1 ms | 1874.8 ms |
| Uber_zap | Go | 2898.3 ms | 2724.2 ms | 174.1 ms | 1258.4 ms |
| K8s_workqueue | Go | 1789.2 ms | 1618.3 ms | 170.9 ms | 802.3 ms |
| Dustin_humanize | Go | 616.8 ms | 539.7 ms | 77.1 ms | 306.6 ms |
| Toml | Go | 523.5 ms | 445.0 ms | 78.5 ms | 289.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1517909.6 ms | 1064498.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1474334.6 ms | 1010775.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1416573.1 ms | 987470.8 ms | 9 |
| LLGoDeadcodeDrop | 904823.4 ms | 293485.1 ms | 9 |
| LLGoNoLTO | 648693.6 ms | 209021.6 ms | 9 |
| Go | 75318.3 ms | 25504.3 ms | 9 |

Dependency download details are in `download-timings.log`.
