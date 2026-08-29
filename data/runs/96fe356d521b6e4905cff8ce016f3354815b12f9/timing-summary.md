## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 804705.7 ms | 797232.3 ms | 7473.4 ms | 568277.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 794588.3 ms | 787541.4 ms | 7047.0 ms | 583374.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 675379.2 ms | 668165.3 ms | 7213.9 ms | 481524.3 ms |
| IXGo | LLGoDeadcodeDrop | 396060.0 ms | 389632.0 ms | 6427.9 ms | 143708.7 ms |
| IXGo | LLGoNoLTO | 365661.0 ms | 359436.5 ms | 6224.6 ms | 131463.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 283198.5 ms | 277986.2 ms | 5212.2 ms | 169341.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 282786.0 ms | 277615.4 ms | 5170.5 ms | 169345.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 281867.3 ms | 276594.1 ms | 5273.1 ms | 169500.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 209233.0 ms | 204432.7 ms | 4800.3 ms | 68920.7 ms |
| Etcdctl | LLGoNoLTO | 206024.4 ms | 201381.5 ms | 4642.9 ms | 67444.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 178200.3 ms | 174777.7 ms | 3422.6 ms | 127791.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 175045.5 ms | 171704.2 ms | 3341.3 ms | 124101.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 174596.7 ms | 171181.0 ms | 3415.8 ms | 124215.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159900.1 ms | 157514.5 ms | 2385.6 ms | 127188.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 151534.9 ms | 149230.7 ms | 2304.2 ms | 118054.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 144048.5 ms | 141744.3 ms | 2304.2 ms | 110337.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108154.8 ms | 106278.5 ms | 1876.3 ms | 84240.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103260.6 ms | 101497.4 ms | 1763.2 ms | 81884.3 ms |
| XGo | LLGoDeadcodeDrop | 101862.2 ms | 98960.8 ms | 2901.5 ms | 40381.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101229.5 ms | 99489.2 ms | 1740.3 ms | 79851.3 ms |
| XGo | LLGoNoLTO | 99850.7 ms | 97118.8 ms | 2731.8 ms | 39264.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97506.5 ms | 95789.9 ms | 1716.5 ms | 73485.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97492.4 ms | 95700.9 ms | 1791.5 ms | 72999.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89271.6 ms | 87548.3 ms | 1723.3 ms | 67672.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79347.6 ms | 77292.8 ms | 2054.8 ms | 39302.0 ms |
| Aws_restjson | LLGoNoLTO | 78055.3 ms | 76089.0 ms | 1966.3 ms | 38784.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63099.0 ms | 61882.6 ms | 1216.5 ms | 46036.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62141.9 ms | 60823.2 ms | 1318.7 ms | 44678.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 54873.9 ms | 53406.4 ms | 1467.5 ms | 24765.5 ms |
| Uber_zap | LLGoNoLTO | 53478.9 ms | 52090.2 ms | 1388.7 ms | 24176.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52169.0 ms | 50951.8 ms | 1217.2 ms | 34603.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51487.1 ms | 50419.6 ms | 1067.4 ms | 40825.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 47444.2 ms | 46031.6 ms | 1412.6 ms | 22660.4 ms |
| K8s_workqueue | LLGoNoLTO | 46453.5 ms | 45005.8 ms | 1447.7 ms | 22135.9 ms |
| IXGo | Go | 42949.8 ms | 39853.1 ms | 3096.7 ms | 12447.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42874.2 ms | 41835.6 ms | 1038.6 ms | 32036.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 42290.2 ms | 41361.6 ms | 928.5 ms | 31523.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35268.0 ms | 34069.4 ms | 1198.7 ms | 12475.5 ms |
| Gorm_schema | LLGoNoLTO | 34212.8 ms | 33070.8 ms | 1142.0 ms | 12048.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33178.3 ms | 32377.6 ms | 800.7 ms | 26807.4 ms |
| Etcdctl | Go | 32466.9 ms | 30339.3 ms | 2127.6 ms | 9761.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24881.1 ms | 24104.0 ms | 777.1 ms | 18203.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24352.8 ms | 23589.0 ms | 763.8 ms | 17860.2 ms |
| Toml | LLGoDeadcodeDrop | 21211.4 ms | 20328.9 ms | 882.5 ms | 7886.1 ms |
| Toml | LLGoNoLTO | 20893.5 ms | 20007.5 ms | 886.0 ms | 7909.9 ms |
| XGo | Go | 18318.2 ms | 17046.2 ms | 1272.0 ms | 5476.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12012.7 ms | 11383.8 ms | 629.0 ms | 5239.8 ms |
| Dustin_humanize | LLGoNoLTO | 11902.7 ms | 11270.4 ms | 632.4 ms | 5170.0 ms |
| Aws_restjson | Go | 7888.1 ms | 7155.1 ms | 732.9 ms | 3333.8 ms |
| Gorm_schema | Go | 5526.3 ms | 5133.0 ms | 393.3 ms | 2118.9 ms |
| Uber_zap | Go | 5256.7 ms | 4826.5 ms | 430.2 ms | 2068.5 ms |
| K8s_workqueue | Go | 4581.9 ms | 4075.9 ms | 505.9 ms | 1643.7 ms |
| Toml | Go | 2015.0 ms | 1780.4 ms | 234.6 ms | 930.7 ms |
| Dustin_humanize | Go | 790.9 ms | 646.6 ms | 144.3 ms | 368.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1773735.8 ms | 1287648.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1741658.5 ms | 1227149.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1583845.7 ms | 1110962.7 ms | 9 |
| LLGoDeadcodeDrop | 957313.0 ms | 365340.2 ms | 9 |
| LLGoNoLTO | 916532.8 ms | 348397.1 ms | 9 |
| Go | 119793.7 ms | 38148.8 ms | 9 |

Dependency download details are in `download-timings.log`.
