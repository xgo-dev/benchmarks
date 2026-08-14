## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 357309.2 ms | 349536.1 ms | 7773.1 ms | 110835.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 324533.5 ms | 319406.5 ms | 5127.0 ms | 226266.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 315458.9 ms | 310483.1 ms | 4975.8 ms | 220109.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 306633.3 ms | 301599.7 ms | 5033.6 ms | 215332.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 266564.9 ms | 261745.7 ms | 4819.2 ms | 170766.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 241684.5 ms | 237931.5 ms | 3753.1 ms | 163128.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 241070.7 ms | 237422.5 ms | 3648.1 ms | 164325.0 ms |
| IXGo | LLGoDeadcodeDrop | 229630.4 ms | 225347.7 ms | 4282.7 ms | 72748.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154159.1 ms | 151252.7 ms | 2906.3 ms | 97707.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 149766.5 ms | 146937.8 ms | 2828.7 ms | 45045.4 ms |
| Etcdctl | LLGoNoLTO | 148023.2 ms | 145146.4 ms | 2876.8 ms | 44112.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 130610.0 ms | 127484.2 ms | 3125.8 ms | 80227.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 128095.3 ms | 125480.2 ms | 2615.1 ms | 103762.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 126862.0 ms | 124238.6 ms | 2623.3 ms | 101939.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 126598.0 ms | 123925.8 ms | 2672.2 ms | 101622.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 109997.7 ms | 107291.3 ms | 2706.4 ms | 65066.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 98879.8 ms | 96618.3 ms | 2261.5 ms | 75651.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 98741.6 ms | 96500.2 ms | 2241.4 ms | 76130.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 84906.7 ms | 82824.9 ms | 2081.7 ms | 68629.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 75271.6 ms | 73181.1 ms | 2090.5 ms | 62630.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 75171.7 ms | 73046.6 ms | 2125.0 ms | 61985.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70853.7 ms | 68966.5 ms | 1887.2 ms | 46957.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 70810.0 ms | 68788.4 ms | 2021.6 ms | 53553.8 ms |
| Toml | LLGoDeadcodeDrop | 70577.4 ms | 68609.5 ms | 1967.9 ms | 24654.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 65751.7 ms | 63714.8 ms | 2036.9 ms | 38670.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 63918.1 ms | 61839.2 ms | 2078.9 ms | 21050.1 ms |
| XGo | LLGoNoLTO | 56479.9 ms | 53882.0 ms | 2597.9 ms | 19793.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 52137.4 ms | 50142.0 ms | 1995.3 ms | 21471.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 49425.1 ms | 48066.6 ms | 1358.4 ms | 38123.1 ms |
| XGo | LLGoDeadcodeDrop | 47741.4 ms | 45581.7 ms | 2159.7 ms | 17466.5 ms |
| Aws_restjson | LLGoNoLTO | 46999.5 ms | 45076.0 ms | 1923.5 ms | 20404.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 41910.3 ms | 40708.9 ms | 1201.4 ms | 34300.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 35301.6 ms | 34074.3 ms | 1227.3 ms | 27335.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 34923.7 ms | 33724.9 ms | 1198.8 ms | 27232.9 ms |
| IXGo | Go | 33334.1 ms | 30967.5 ms | 2366.7 ms | 9696.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32890.2 ms | 31820.1 ms | 1070.0 ms | 27738.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 31991.9 ms | 30262.9 ms | 1729.0 ms | 10714.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24922.7 ms | 23902.3 ms | 1020.3 ms | 19788.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24847.5 ms | 23807.0 ms | 1040.5 ms | 19822.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 22993.1 ms | 21800.2 ms | 1192.8 ms | 7646.8 ms |
| Gorm_schema | LLGoNoLTO | 22180.7 ms | 20970.6 ms | 1210.1 ms | 7425.7 ms |
| K8s_workqueue | LLGoNoLTO | 21649.0 ms | 20051.0 ms | 1598.1 ms | 7719.3 ms |
| Uber_zap | LLGoNoLTO | 19953.2 ms | 18274.9 ms | 1678.3 ms | 7581.3 ms |
| Etcdctl | Go | 12671.9 ms | 12004.0 ms | 667.9 ms | 4347.5 ms |
| Toml | LLGoNoLTO | 9974.3 ms | 8962.5 ms | 1011.8 ms | 3926.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9139.9 ms | 8182.3 ms | 957.6 ms | 3839.9 ms |
| Dustin_humanize | LLGoNoLTO | 8160.4 ms | 7238.3 ms | 922.1 ms | 3256.5 ms |
| XGo | Go | 4824.8 ms | 4443.7 ms | 381.1 ms | 1899.3 ms |
| Aws_restjson | Go | 3797.1 ms | 3459.9 ms | 337.2 ms | 1552.3 ms |
| Gorm_schema | Go | 2629.5 ms | 2459.5 ms | 170.1 ms | 1144.3 ms |
| Uber_zap | Go | 2278.2 ms | 2092.6 ms | 185.5 ms | 1092.7 ms |
| K8s_workqueue | Go | 1350.6 ms | 1187.4 ms | 163.2 ms | 628.4 ms |
| Dustin_humanize | Go | 498.3 ms | 402.1 ms | 96.2 ms | 259.6 ms |
| Toml | Go | 434.6 ms | 353.8 ms | 80.8 ms | 243.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1135790.7 ms | 821384.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1127847.3 ms | 787949.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1093237.5 ms | 779471.9 ms | 9 |
| LLGoNoLTO | 690729.6 ms | 225055.6 ms | 9 |
| LLGoDeadcodeDrop | 677896.0 ms | 224638.3 ms | 9 |
| Go | 61819.2 ms | 20864.7 ms | 9 |

Dependency download details are in `download-timings.log`.
