## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCE | 402010.9 ms | 396573.1 ms | 5437.8 ms | 234434.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 395653.3 ms | 390387.8 ms | 5265.6 ms | 232403.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 388380.0 ms | 382671.9 ms | 5708.1 ms | 265177.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 381115.6 ms | 375483.4 ms | 5632.2 ms | 263128.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 378179.4 ms | 372628.4 ms | 5551.1 ms | 258977.2 ms |
| Etcdctl | LLGoNoLTO | 340104.5 ms | 335536.7 ms | 4567.7 ms | 103788.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 312705.7 ms | 308570.8 ms | 4135.0 ms | 209491.0 ms |
| IXGo | LLGoDeadcodeDrop | 277389.2 ms | 272428.7 ms | 4960.4 ms | 88921.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 262711.4 ms | 258459.3 ms | 4252.2 ms | 167204.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 218405.4 ms | 214778.7 ms | 3626.7 ms | 66451.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 207976.0 ms | 204476.6 ms | 3499.4 ms | 64521.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 190060.3 ms | 186786.7 ms | 3273.6 ms | 138448.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 173104.9 ms | 169995.6 ms | 3109.4 ms | 131893.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 142886.4 ms | 140197.5 ms | 2688.8 ms | 111563.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 136700.2 ms | 134020.0 ms | 2680.3 ms | 103606.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 133489.9 ms | 130771.1 ms | 2718.8 ms | 100451.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 110812.2 ms | 108230.1 ms | 2582.1 ms | 91043.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110039.9 ms | 107581.4 ms | 2458.4 ms | 87962.3 ms |
| XGo | LLGoDeadcodeDrop | 107517.1 ms | 104859.5 ms | 2657.6 ms | 35246.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 105148.1 ms | 102521.8 ms | 2626.2 ms | 84662.2 ms |
| XGo | LLGoNoLTO | 104692.7 ms | 102098.0 ms | 2594.7 ms | 34175.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103618.6 ms | 101013.7 ms | 2604.8 ms | 83738.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99797.2 ms | 97318.5 ms | 2478.7 ms | 74815.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96362.4 ms | 93852.7 ms | 2509.6 ms | 73832.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70937.1 ms | 69337.7 ms | 1599.4 ms | 51996.7 ms |
| IXGo | LLGoNoLTO | 67626.3 ms | 63981.8 ms | 3644.5 ms | 24758.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66377.4 ms | 64802.9 ms | 1574.4 ms | 49912.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 60156.2 ms | 58562.0 ms | 1594.2 ms | 42132.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 56441.0 ms | 55018.3 ms | 1422.7 ms | 46206.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 55694.0 ms | 54155.3 ms | 1538.7 ms | 40519.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 47024.6 ms | 45593.1 ms | 1431.5 ms | 36834.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42749.0 ms | 41483.4 ms | 1265.6 ms | 36143.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 42068.3 ms | 39815.9 ms | 2252.4 ms | 14639.7 ms |
| Uber_zap | LLGoNoLTO | 40135.0 ms | 38038.4 ms | 2096.6 ms | 14199.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36952.7 ms | 34795.0 ms | 2157.7 ms | 13086.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34746.6 ms | 33291.6 ms | 1455.0 ms | 11536.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33845.0 ms | 32615.0 ms | 1230.0 ms | 27062.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33814.6 ms | 32534.0 ms | 1280.6 ms | 26869.0 ms |
| Gorm_schema | LLGoNoLTO | 33580.3 ms | 32217.0 ms | 1363.2 ms | 11317.8 ms |
| Aws_restjson | LLGoNoLTO | 30328.3 ms | 28283.3 ms | 2045.0 ms | 11569.7 ms |
| Toml | LLGoNoLTO | 29795.0 ms | 28560.8 ms | 1234.2 ms | 9978.8 ms |
| K8s_workqueue | LLGoNoLTO | 25468.6 ms | 23502.8 ms | 1965.8 ms | 10164.5 ms |
| Toml | LLGoDeadcodeDrop | 20283.4 ms | 18994.2 ms | 1289.1 ms | 8107.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12037.1 ms | 10960.2 ms | 1076.9 ms | 5206.9 ms |
| Dustin_humanize | LLGoNoLTO | 10833.8 ms | 9698.4 ms | 1135.5 ms | 4555.9 ms |
| IXGo | Go | 2010.2 ms | 1777.5 ms | 232.7 ms | 1188.8 ms |
| Etcdctl | Go | 1398.5 ms | 1220.0 ms | 178.5 ms | 793.1 ms |
| XGo | Go | 1085.5 ms | 941.1 ms | 144.3 ms | 611.0 ms |
| Aws_restjson | Go | 827.2 ms | 673.3 ms | 153.9 ms | 504.4 ms |
| K8s_workqueue | Go | 709.6 ms | 587.5 ms | 122.2 ms | 426.6 ms |
| Uber_zap | Go | 694.7 ms | 575.8 ms | 118.9 ms | 396.3 ms |
| Gorm_schema | Go | 690.6 ms | 539.8 ms | 150.9 ms | 336.2 ms |
| Toml | Go | 510.6 ms | 416.1 ms | 94.5 ms | 287.0 ms |
| Dustin_humanize | Go | 375.0 ms | 300.0 ms | 75.0 ms | 203.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1490398.2 ms | 1064738.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1450858.8 ms | 1007475.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1448558.3 ms | 998295.7 ms | 9 |
| LLGoDeadcodeDrop | 957375.7 ms | 307718.2 ms | 9 |
| LLGoNoLTO | 682564.5 ms | 224507.7 ms | 9 |
| Go | 8302.0 ms | 4746.7 ms | 9 |

Dependency download details are in `download-timings.log`.
