## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 589697.5 ms | 582972.8 ms | 6724.6 ms | 393065.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 580689.7 ms | 574292.1 ms | 6397.5 ms | 393659.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 571043.7 ms | 564829.0 ms | 6214.7 ms | 386408.5 ms |
| IXGo | LLGoDeadcodeDrop | 353771.5 ms | 348078.0 ms | 5693.6 ms | 129258.1 ms |
| IXGo | LLGoNoLTO | 336693.1 ms | 331174.4 ms | 5518.6 ms | 119678.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 287481.0 ms | 282913.4 ms | 4567.6 ms | 168189.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 283747.3 ms | 279153.3 ms | 4594.0 ms | 164720.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 282120.3 ms | 277618.4 ms | 4501.9 ms | 165591.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 217958.6 ms | 213683.1 ms | 4275.5 ms | 71755.0 ms |
| Etcdctl | LLGoNoLTO | 214961.3 ms | 210885.6 ms | 4075.7 ms | 71242.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 177341.4 ms | 174218.3 ms | 3123.1 ms | 123727.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 177332.6 ms | 174258.4 ms | 3074.1 ms | 124608.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177284.2 ms | 174270.6 ms | 3013.6 ms | 124908.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 148724.2 ms | 146561.5 ms | 2162.7 ms | 114031.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141139.0 ms | 138965.7 ms | 2173.4 ms | 104574.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 137573.0 ms | 135395.5 ms | 2177.4 ms | 102245.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109587.0 ms | 107931.7 ms | 1655.3 ms | 84542.3 ms |
| XGo | LLGoDeadcodeDrop | 108312.6 ms | 105764.2 ms | 2548.4 ms | 42548.6 ms |
| XGo | LLGoNoLTO | 105849.2 ms | 103298.1 ms | 2551.1 ms | 41470.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 103794.5 ms | 102054.2 ms | 1740.3 ms | 81490.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103638.1 ms | 102007.3 ms | 1630.8 ms | 80814.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102907.5 ms | 101292.3 ms | 1615.2 ms | 80509.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 100165.0 ms | 98614.1 ms | 1550.9 ms | 74450.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98596.1 ms | 96882.4 ms | 1713.8 ms | 73238.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81093.5 ms | 79098.0 ms | 1995.5 ms | 38557.4 ms |
| Aws_restjson | LLGoNoLTO | 78687.9 ms | 76834.7 ms | 1853.2 ms | 37467.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64432.0 ms | 63124.4 ms | 1307.6 ms | 45803.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64394.2 ms | 63188.2 ms | 1206.0 ms | 46347.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 56362.2 ms | 55001.5 ms | 1360.7 ms | 25140.5 ms |
| Uber_zap | LLGoNoLTO | 56222.6 ms | 54850.2 ms | 1372.4 ms | 25509.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53974.4 ms | 52805.7 ms | 1168.7 ms | 35467.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51875.5 ms | 50867.6 ms | 1007.9 ms | 41073.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49096.0 ms | 47658.9 ms | 1437.1 ms | 23159.0 ms |
| K8s_workqueue | LLGoNoLTO | 48379.0 ms | 47003.2 ms | 1375.8 ms | 22819.5 ms |
| IXGo | Go | 45204.0 ms | 42295.1 ms | 2908.9 ms | 12983.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 44452.0 ms | 43500.7 ms | 951.3 ms | 33032.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44211.0 ms | 43278.5 ms | 932.5 ms | 32800.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36218.1 ms | 35102.9 ms | 1115.2 ms | 12747.6 ms |
| Gorm_schema | LLGoNoLTO | 35717.3 ms | 34680.1 ms | 1037.3 ms | 12405.4 ms |
| Etcdctl | Go | 33216.6 ms | 31236.7 ms | 1979.9 ms | 9950.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32922.1 ms | 32171.0 ms | 751.1 ms | 26187.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24277.9 ms | 23576.1 ms | 701.8 ms | 17377.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24243.2 ms | 23536.9 ms | 706.3 ms | 17341.2 ms |
| Toml | LLGoDeadcodeDrop | 21912.4 ms | 21027.1 ms | 885.3 ms | 8272.4 ms |
| Toml | LLGoNoLTO | 21563.4 ms | 20748.8 ms | 814.6 ms | 8018.4 ms |
| XGo | Go | 19054.0 ms | 17884.6 ms | 1169.4 ms | 5569.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12324.4 ms | 11711.6 ms | 612.8 ms | 5358.1 ms |
| Dustin_humanize | LLGoNoLTO | 12248.3 ms | 11624.5 ms | 623.8 ms | 5260.0 ms |
| Aws_restjson | Go | 7917.4 ms | 7272.5 ms | 644.9 ms | 3223.1 ms |
| Gorm_schema | Go | 5747.7 ms | 5373.8 ms | 373.9 ms | 2172.5 ms |
| Uber_zap | Go | 5278.5 ms | 4922.7 ms | 355.8 ms | 2031.8 ms |
| K8s_workqueue | Go | 4766.5 ms | 4307.5 ms | 459.0 ms | 1675.9 ms |
| Toml | Go | 2006.5 ms | 1790.5 ms | 216.0 ms | 907.2 ms |
| Dustin_humanize | Go | 807.8 ms | 648.3 ms | 159.5 ms | 376.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1540858.7 ms | 1069601.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1520015.2 ms | 1039262.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1516770.2 ms | 1027343.7 ms | 9 |
| LLGoDeadcodeDrop | 937049.3 ms | 356796.6 ms | 9 |
| LLGoNoLTO | 910322.0 ms | 343872.0 ms | 9 |
| Go | 123999.1 ms | 38890.1 ms | 9 |

Dependency download details are in `download-timings.log`.
