## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 689030.6 ms | 682452.8 ms | 6577.8 ms | 491694.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 630623.6 ms | 623764.3 ms | 6859.3 ms | 434290.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 595360.4 ms | 589113.2 ms | 6247.3 ms | 403082.9 ms |
| IXGo | LLGoDeadcodeDrop | 355267.6 ms | 349609.3 ms | 5658.3 ms | 125667.7 ms |
| IXGo | LLGoNoLTO | 346100.4 ms | 340541.1 ms | 5559.3 ms | 123468.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 287785.2 ms | 282930.6 ms | 4854.6 ms | 166975.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 280779.7 ms | 276188.1 ms | 4591.6 ms | 162600.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 280041.7 ms | 275445.2 ms | 4596.5 ms | 164209.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 217125.6 ms | 213002.4 ms | 4123.3 ms | 71403.2 ms |
| Etcdctl | LLGoNoLTO | 214666.1 ms | 210698.1 ms | 3967.9 ms | 71331.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 178139.7 ms | 175077.9 ms | 3061.7 ms | 126430.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 175117.7 ms | 172023.6 ms | 3094.1 ms | 122784.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 174572.3 ms | 171451.7 ms | 3120.6 ms | 122129.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 146320.1 ms | 144274.3 ms | 2045.7 ms | 112917.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 142622.9 ms | 140503.3 ms | 2119.6 ms | 106975.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 138114.4 ms | 135928.4 ms | 2186.0 ms | 102781.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109992.6 ms | 108314.6 ms | 1678.0 ms | 84668.2 ms |
| XGo | LLGoDeadcodeDrop | 106586.3 ms | 103903.6 ms | 2682.7 ms | 41605.4 ms |
| XGo | LLGoNoLTO | 104416.8 ms | 101846.2 ms | 2570.5 ms | 40586.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 102211.2 ms | 100594.9 ms | 1616.3 ms | 79782.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101794.4 ms | 100107.4 ms | 1686.9 ms | 79803.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98377.8 ms | 96717.0 ms | 1660.8 ms | 72946.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98011.2 ms | 96415.1 ms | 1596.1 ms | 72458.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89050.6 ms | 87451.8 ms | 1598.7 ms | 66343.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79799.2 ms | 77831.3 ms | 1967.9 ms | 38100.7 ms |
| Aws_restjson | LLGoNoLTO | 78398.2 ms | 76584.9 ms | 1813.2 ms | 38174.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65245.2 ms | 64033.8 ms | 1211.4 ms | 46733.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64007.8 ms | 62748.2 ms | 1259.6 ms | 45931.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 57028.7 ms | 55594.0 ms | 1434.7 ms | 25815.5 ms |
| Uber_zap | LLGoNoLTO | 55305.5 ms | 54055.2 ms | 1250.3 ms | 24724.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53625.0 ms | 52416.1 ms | 1208.9 ms | 35330.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52128.4 ms | 51095.1 ms | 1033.2 ms | 40990.2 ms |
| K8s_workqueue | LLGoNoLTO | 49591.9 ms | 48186.5 ms | 1405.4 ms | 23498.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48646.4 ms | 47314.3 ms | 1332.1 ms | 22972.4 ms |
| IXGo | Go | 44984.4 ms | 42176.3 ms | 2808.1 ms | 12775.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43974.0 ms | 43060.9 ms | 913.2 ms | 32694.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 43955.9 ms | 42994.4 ms | 961.5 ms | 32680.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36115.3 ms | 35068.6 ms | 1046.7 ms | 12677.4 ms |
| Gorm_schema | LLGoNoLTO | 35623.1 ms | 34547.2 ms | 1075.8 ms | 12388.3 ms |
| Etcdctl | Go | 33192.7 ms | 31222.6 ms | 1970.1 ms | 9970.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32553.2 ms | 31803.3 ms | 749.9 ms | 25765.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25339.1 ms | 24638.1 ms | 701.0 ms | 18371.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 23980.6 ms | 23302.9 ms | 677.7 ms | 17218.0 ms |
| Toml | LLGoDeadcodeDrop | 21650.6 ms | 20824.7 ms | 825.9 ms | 8129.1 ms |
| Toml | LLGoNoLTO | 21480.3 ms | 20592.6 ms | 887.8 ms | 8093.5 ms |
| XGo | Go | 18977.4 ms | 17859.1 ms | 1118.3 ms | 5557.8 ms |
| Dustin_humanize | LLGoNoLTO | 12387.1 ms | 11734.0 ms | 653.1 ms | 5286.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12252.6 ms | 11653.7 ms | 598.9 ms | 5358.4 ms |
| Aws_restjson | Go | 7847.6 ms | 7156.4 ms | 691.2 ms | 3204.6 ms |
| Gorm_schema | Go | 5702.4 ms | 5326.0 ms | 376.4 ms | 2137.8 ms |
| Uber_zap | Go | 5364.4 ms | 4946.8 ms | 417.6 ms | 2072.0 ms |
| K8s_workqueue | Go | 4769.0 ms | 4317.0 ms | 452.0 ms | 1676.1 ms |
| Toml | Go | 2098.7 ms | 1864.3 ms | 234.4 ms | 962.0 ms |
| Dustin_humanize | Go | 787.2 ms | 655.8 ms | 131.4 ms | 368.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1603197.7 ms | 1112475.2 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1560338.3 ms | 1083798.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1559219.2 ms | 1072315.9 ms | 9 |
| LLGoDeadcodeDrop | 934472.2 ms | 351729.9 ms | 9 |
| LLGoNoLTO | 917969.3 ms | 347552.0 ms | 9 |
| Go | 123723.8 ms | 38724.0 ms | 9 |

Dependency download details are in `download-timings.log`.
