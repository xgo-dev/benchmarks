## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 555290.8 ms | 548170.4 ms | 7120.4 ms | 392583.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 552841.1 ms | 545810.1 ms | 7031.1 ms | 393634.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 539565.8 ms | 532702.0 ms | 6863.8 ms | 384981.8 ms |
| IXGo | LLGoDeadcodeDrop | 315781.0 ms | 309540.2 ms | 6240.7 ms | 126045.7 ms |
| IXGo | LLGoNoLTO | 315059.6 ms | 308888.8 ms | 6170.8 ms | 121101.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 274457.6 ms | 268943.9 ms | 5513.7 ms | 162668.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 270371.9 ms | 264857.2 ms | 5514.7 ms | 159934.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 265064.7 ms | 259911.4 ms | 5153.3 ms | 157248.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 204097.2 ms | 198893.9 ms | 5203.3 ms | 66042.2 ms |
| Etcdctl | LLGoNoLTO | 199011.6 ms | 193987.2 ms | 5024.4 ms | 64213.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 168882.9 ms | 165299.1 ms | 3583.9 ms | 120299.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 168853.1 ms | 165224.8 ms | 3628.3 ms | 118170.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 168112.8 ms | 164518.9 ms | 3593.8 ms | 117591.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 144155.7 ms | 141577.6 ms | 2578.2 ms | 111962.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 134796.1 ms | 132163.3 ms | 2632.8 ms | 101704.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 131823.3 ms | 129121.3 ms | 2701.9 ms | 98851.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 101103.5 ms | 98948.2 ms | 2155.3 ms | 77337.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96950.8 ms | 94726.1 ms | 2224.7 ms | 75355.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96663.2 ms | 94508.5 ms | 2154.7 ms | 75316.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 96011.6 ms | 93887.1 ms | 2124.5 ms | 74585.6 ms |
| XGo | LLGoDeadcodeDrop | 95748.3 ms | 92551.5 ms | 3196.8 ms | 36873.2 ms |
| XGo | LLGoNoLTO | 94850.4 ms | 91628.5 ms | 3221.9 ms | 36005.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92222.6 ms | 90017.9 ms | 2204.7 ms | 67668.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 91923.1 ms | 89698.7 ms | 2224.4 ms | 67764.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 77738.3 ms | 75258.4 ms | 2479.9 ms | 37732.1 ms |
| Aws_restjson | LLGoNoLTO | 73810.2 ms | 71354.7 ms | 2455.5 ms | 36334.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 60529.4 ms | 58882.9 ms | 1646.6 ms | 43643.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 60510.9 ms | 58844.9 ms | 1666.0 ms | 43673.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 50161.1 ms | 48236.8 ms | 1924.3 ms | 21505.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 50137.8 ms | 48511.2 ms | 1626.6 ms | 32967.1 ms |
| Uber_zap | LLGoNoLTO | 49740.4 ms | 47830.3 ms | 1910.1 ms | 21173.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 48824.1 ms | 47498.7 ms | 1325.4 ms | 38182.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 44335.0 ms | 42447.0 ms | 1888.0 ms | 20032.0 ms |
| K8s_workqueue | LLGoNoLTO | 43489.5 ms | 41558.9 ms | 1930.6 ms | 19501.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 42021.6 ms | 40765.4 ms | 1256.3 ms | 30978.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 41062.1 ms | 39797.2 ms | 1264.9 ms | 30155.6 ms |
| IXGo | Go | 39988.8 ms | 36960.2 ms | 3028.7 ms | 11296.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33927.7 ms | 32422.7 ms | 1505.0 ms | 11995.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32697.2 ms | 31591.7 ms | 1105.5 ms | 25883.8 ms |
| Gorm_schema | LLGoNoLTO | 32649.4 ms | 31186.0 ms | 1463.4 ms | 11593.6 ms |
| Etcdctl | Go | 30460.1 ms | 28386.7 ms | 2073.4 ms | 9028.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24831.5 ms | 23761.8 ms | 1069.7 ms | 17711.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24637.6 ms | 23550.0 ms | 1087.6 ms | 17578.4 ms |
| Toml | LLGoNoLTO | 20851.7 ms | 19647.3 ms | 1204.5 ms | 8237.0 ms |
| Toml | LLGoDeadcodeDrop | 20725.7 ms | 19629.0 ms | 1096.7 ms | 7846.5 ms |
| XGo | Go | 17157.0 ms | 15980.0 ms | 1177.0 ms | 4960.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12632.5 ms | 11659.6 ms | 972.9 ms | 5577.6 ms |
| Dustin_humanize | LLGoNoLTO | 12433.4 ms | 11464.4 ms | 968.9 ms | 5503.1 ms |
| Aws_restjson | Go | 7116.6 ms | 6530.8 ms | 585.7 ms | 2826.0 ms |
| Gorm_schema | Go | 5154.2 ms | 4787.8 ms | 366.4 ms | 1938.2 ms |
| Uber_zap | Go | 4809.9 ms | 4420.3 ms | 389.6 ms | 1823.1 ms |
| K8s_workqueue | Go | 4285.7 ms | 3917.3 ms | 368.4 ms | 1509.7 ms |
| Toml | Go | 1808.2 ms | 1604.3 ms | 203.9 ms | 810.9 ms |
| Dustin_humanize | Go | 683.5 ms | 589.2 ms | 94.3 ms | 321.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1457468.1 ms | 1034885.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1447974.6 ms | 1009230.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1428900.4 ms | 994315.8 ms | 9 |
| LLGoDeadcodeDrop | 855146.7 ms | 333650.2 ms | 9 |
| LLGoNoLTO | 841896.2 ms | 323664.3 ms | 9 |
| Go | 111464.1 ms | 34515.2 ms | 9 |

Dependency download details are in `download-timings.log`.
