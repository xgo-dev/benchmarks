## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 420318.1 ms | 413619.3 ms | 6698.8 ms | 235678.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 314918.9 ms | 310664.1 ms | 4254.8 ms | 208068.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 313586.1 ms | 309480.2 ms | 4105.9 ms | 205737.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 237717.4 ms | 233029.3 ms | 4688.1 ms | 73818.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 206630.6 ms | 203080.5 ms | 3550.1 ms | 61063.3 ms |
| Etcdctl | LLGoNoLTO | 204779.9 ms | 201177.9 ms | 3602.1 ms | 59690.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 187403.3 ms | 184270.7 ms | 3132.6 ms | 137730.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 186298.1 ms | 182978.5 ms | 3319.6 ms | 134837.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 170756.0 ms | 167263.9 ms | 3492.2 ms | 92800.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 166152.8 ms | 162895.9 ms | 3257.0 ms | 130005.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154881.2 ms | 151906.0 ms | 2975.2 ms | 120578.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 145519.0 ms | 142372.1 ms | 3146.9 ms | 94938.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 134856.7 ms | 132104.8 ms | 2751.9 ms | 101619.5 ms |
| XGo | LLGoNoLTO | 125645.2 ms | 121963.0 ms | 3682.2 ms | 39394.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125249.0 ms | 122543.8 ms | 2705.2 ms | 94070.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115367.4 ms | 112681.3 ms | 2686.1 ms | 91523.6 ms |
| XGo | LLGoDeadcodeDrop | 106664.5 ms | 103959.7 ms | 2704.8 ms | 33832.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 102389.8 ms | 99880.9 ms | 2508.9 ms | 81004.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99981.4 ms | 97484.5 ms | 2496.8 ms | 81459.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93389.2 ms | 90929.6 ms | 2459.7 ms | 69592.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 70213.9 ms | 68316.2 ms | 1897.7 ms | 46307.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 69755.5 ms | 68139.7 ms | 1615.9 ms | 52108.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64668.0 ms | 63051.5 ms | 1616.5 ms | 48922.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 59520.9 ms | 57840.4 ms | 1680.6 ms | 40016.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57405.1 ms | 55856.8 ms | 1548.4 ms | 45255.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 49725.7 ms | 47347.3 ms | 2378.4 ms | 16292.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46432.9 ms | 44983.2 ms | 1449.8 ms | 35339.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 46362.5 ms | 44930.9 ms | 1431.6 ms | 35459.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35807.3 ms | 34405.7 ms | 1401.6 ms | 11337.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33219.8 ms | 31985.9 ms | 1234.0 ms | 25852.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32990.5 ms | 31716.4 ms | 1274.1 ms | 25866.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30850.6 ms | 28759.3 ms | 2091.3 ms | 10709.8 ms |
| Aws_restjson | LLGoNoLTO | 30450.4 ms | 28319.6 ms | 2130.8 ms | 10860.0 ms |
| Uber_zap | LLGoNoLTO | 27393.3 ms | 25355.9 ms | 2037.4 ms | 9924.6 ms |
| K8s_workqueue | LLGoNoLTO | 24941.9 ms | 22931.8 ms | 2010.1 ms | 9133.3 ms |
| Toml | LLGoDeadcodeDrop | 19975.5 ms | 18666.0 ms | 1309.4 ms | 7403.5 ms |
| Toml | LLGoNoLTO | 19882.7 ms | 18623.1 ms | 1259.6 ms | 7181.5 ms |
| Etcdctl | Go | 16760.5 ms | 15950.8 ms | 809.7 ms | 5676.3 ms |
| Gorm_schema | LLGoNoLTO | 16271.2 ms | 14841.3 ms | 1429.8 ms | 6022.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12131.3 ms | 10930.1 ms | 1201.3 ms | 4963.7 ms |
| Dustin_humanize | LLGoNoLTO | 11833.9 ms | 10721.6 ms | 1112.3 ms | 4813.2 ms |
| XGo | Go | 8923.2 ms | 8448.4 ms | 474.8 ms | 3405.5 ms |
| Gorm_schema | Go | 5560.3 ms | 5232.8 ms | 327.5 ms | 2098.2 ms |
| Aws_restjson | Go | 5090.0 ms | 4674.6 ms | 415.4 ms | 1913.7 ms |
| Uber_zap | Go | 3053.4 ms | 2816.6 ms | 236.8 ms | 1328.6 ms |
| K8s_workqueue | Go | 1890.7 ms | 1718.3 ms | 172.4 ms | 871.2 ms |
| Dustin_humanize | Go | 803.1 ms | 657.9 ms | 145.2 ms | 373.8 ms |
| Toml | Go | 542.0 ms | 445.0 ms | 97.0 ms | 302.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1114131.5 ms | 794179.9 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1076425.7 ms | 723941.0 ms | 8 |
| LLGoFullLTOGlobalDCE | 1021079.1 ms | 716651.4 ms | 8 |
| LLGoDeadcodeDrop | 699502.9 ms | 219421.1 ms | 8 |
| LLGoNoLTO | 461198.6 ms | 147020.7 ms | 8 |
| Go | 42623.2 ms | 15969.5 ms | 8 |

Dependency download details are in `download-timings.log`.
