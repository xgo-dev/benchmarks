## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 536798.2 ms | 527527.1 ms | 9271.1 ms | 318377.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 437906.0 ms | 432078.5 ms | 5827.5 ms | 300461.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 429722.0 ms | 423703.7 ms | 6018.2 ms | 292258.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 357468.7 ms | 351603.2 ms | 5865.5 ms | 223636.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 330628.7 ms | 326203.6 ms | 4425.1 ms | 221383.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 330167.7 ms | 325955.0 ms | 4212.7 ms | 220884.2 ms |
| IXGo | LLGoDeadcodeDrop | 285044.9 ms | 280089.8 ms | 4955.1 ms | 90227.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 211631.5 ms | 208193.8 ms | 3437.7 ms | 62189.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 196799.7 ms | 192147.6 ms | 4652.1 ms | 105867.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 177832.5 ms | 174592.8 ms | 3239.6 ms | 140407.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 175015.7 ms | 171657.0 ms | 3358.8 ms | 139331.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 168475.5 ms | 165288.4 ms | 3187.1 ms | 132707.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 149494.2 ms | 146674.8 ms | 2819.4 ms | 117841.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 148042.0 ms | 144987.6 ms | 3054.4 ms | 86792.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 138173.4 ms | 135310.3 ms | 2863.1 ms | 105505.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 134933.8 ms | 132192.1 ms | 2741.6 ms | 101966.6 ms |
| XGo | LLGoDeadcodeDrop | 124530.0 ms | 121243.0 ms | 3287.0 ms | 38934.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 114771.0 ms | 112106.8 ms | 2664.2 ms | 91505.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104328.6 ms | 101956.4 ms | 2372.1 ms | 86438.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103849.1 ms | 101316.5 ms | 2532.6 ms | 84653.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 103036.3 ms | 100584.4 ms | 2452.0 ms | 84464.5 ms |
| Toml | LLGoDeadcodeDrop | 100578.5 ms | 98101.1 ms | 2477.4 ms | 34676.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 92535.4 ms | 89787.1 ms | 2748.2 ms | 29850.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 91924.4 ms | 89406.4 ms | 2517.9 ms | 52429.6 ms |
| Etcdctl | LLGoNoLTO | 90561.1 ms | 87141.6 ms | 3419.6 ms | 30872.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 76734.8 ms | 73911.6 ms | 2823.2 ms | 31749.9 ms |
| IXGo | LLGoNoLTO | 71874.9 ms | 68035.7 ms | 3839.1 ms | 24749.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 70869.1 ms | 69043.1 ms | 1826.0 ms | 53921.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 69906.8 ms | 68231.2 ms | 1675.6 ms | 53929.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 60255.9 ms | 58689.1 ms | 1566.8 ms | 47580.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49362.1 ms | 47803.7 ms | 1558.4 ms | 38155.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 49357.5 ms | 47905.2 ms | 1452.3 ms | 37993.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46390.3 ms | 45046.6 ms | 1343.7 ms | 38609.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 44854.0 ms | 42621.6 ms | 2232.4 ms | 15041.3 ms |
| XGo | LLGoNoLTO | 43719.4 ms | 41265.7 ms | 2453.7 ms | 16747.6 ms |
| Uber_zap | LLGoNoLTO | 43420.8 ms | 41321.7 ms | 2099.1 ms | 14235.4 ms |
| IXGo | Go | 39902.3 ms | 37437.9 ms | 2464.4 ms | 11681.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37725.5 ms | 36235.1 ms | 1490.4 ms | 12081.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 35133.6 ms | 33844.8 ms | 1288.7 ms | 27621.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33985.7 ms | 32730.3 ms | 1255.4 ms | 26722.3 ms |
| Aws_restjson | LLGoNoLTO | 31209.5 ms | 28979.9 ms | 2229.6 ms | 11225.5 ms |
| K8s_workqueue | LLGoNoLTO | 25931.1 ms | 23925.7 ms | 2005.4 ms | 9352.2 ms |
| Etcdctl | Go | 17220.6 ms | 16384.4 ms | 836.2 ms | 5899.6 ms |
| Gorm_schema | LLGoNoLTO | 16113.9 ms | 14755.1 ms | 1358.8 ms | 5974.3 ms |
| Toml | LLGoNoLTO | 13823.0 ms | 12542.1 ms | 1280.9 ms | 5249.1 ms |
| Dustin_humanize | LLGoNoLTO | 12481.2 ms | 11273.4 ms | 1207.8 ms | 5031.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12407.4 ms | 11255.4 ms | 1152.0 ms | 5055.4 ms |
| XGo | Go | 6618.0 ms | 6240.7 ms | 377.4 ms | 2539.7 ms |
| Aws_restjson | Go | 5181.0 ms | 4782.8 ms | 398.1 ms | 1992.0 ms |
| Gorm_schema | Go | 3562.0 ms | 3374.7 ms | 187.3 ms | 1560.1 ms |
| Uber_zap | Go | 3107.5 ms | 2858.0 ms | 249.5 ms | 1390.5 ms |
| K8s_workqueue | Go | 1956.9 ms | 1751.8 ms | 205.1 ms | 895.2 ms |
| Toml | Go | 763.4 ms | 599.2 ms | 164.2 ms | 377.9 ms |
| Dustin_humanize | Go | 673.9 ms | 575.6 ms | 98.3 ms | 339.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1587589.4 ms | 1114998.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1566241.7 ms | 1079167.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1490797.3 ms | 1037281.4 ms | 9 |
| LLGoDeadcodeDrop | 986041.9 ms | 319807.1 ms | 9 |
| LLGoNoLTO | 349135.0 ms | 123438.6 ms | 9 |
| Go | 78985.5 ms | 26676.5 ms | 9 |

Dependency download details are in `download-timings.log`.
