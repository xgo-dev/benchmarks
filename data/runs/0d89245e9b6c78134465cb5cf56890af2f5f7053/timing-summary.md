## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 392099.3 ms | 387056.5 ms | 5042.8 ms | 271867.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 354617.4 ms | 350213.0 ms | 4404.5 ms | 229295.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 354431.4 ms | 349711.0 ms | 4720.5 ms | 249782.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 336706.5 ms | 332156.4 ms | 4550.1 ms | 234688.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 295791.7 ms | 292255.1 ms | 3536.6 ms | 206228.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 295006.1 ms | 291404.5 ms | 3601.6 ms | 206376.7 ms |
| IXGo | LLGoDeadcodeDrop | 246682.9 ms | 242630.1 ms | 4052.8 ms | 81828.3 ms |
| IXGo | LLGoNoLTO | 235063.1 ms | 230967.6 ms | 4095.5 ms | 79127.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 178409.4 ms | 175181.4 ms | 3227.9 ms | 54449.4 ms |
| Etcdctl | LLGoNoLTO | 176826.2 ms | 173722.8 ms | 3103.3 ms | 54507.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 173976.0 ms | 170956.2 ms | 3019.8 ms | 97573.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 161811.9 ms | 158982.0 ms | 2829.9 ms | 123662.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 156530.9 ms | 154028.0 ms | 2502.9 ms | 116159.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 155136.8 ms | 152502.7 ms | 2634.0 ms | 113642.7 ms |
| XGo | LLGoNoLTO | 149598.9 ms | 146963.4 ms | 2635.5 ms | 44372.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 123978.9 ms | 121890.3 ms | 2088.5 ms | 97591.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 117543.9 ms | 115291.2 ms | 2252.7 ms | 90173.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 113493.6 ms | 111253.5 ms | 2240.1 ms | 79852.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 93512.6 ms | 91505.8 ms | 2006.9 ms | 75803.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 93088.2 ms | 90995.5 ms | 2092.7 ms | 76453.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 92585.5 ms | 90295.8 ms | 2289.8 ms | 29098.7 ms |
| XGo | LLGoDeadcodeDrop | 88466.0 ms | 86332.7 ms | 2133.3 ms | 28326.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 87154.5 ms | 85030.5 ms | 2124.0 ms | 67210.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 87131.4 ms | 85007.7 ms | 2123.7 ms | 67155.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 84471.8 ms | 82544.9 ms | 1926.9 ms | 68338.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 69611.9 ms | 67833.2 ms | 1778.8 ms | 39770.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 58122.0 ms | 56046.0 ms | 2075.9 ms | 26221.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 57141.8 ms | 55734.9 ms | 1406.9 ms | 23478.4 ms |
| Aws_restjson | LLGoNoLTO | 54684.9 ms | 52874.8 ms | 1810.1 ms | 24252.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 53045.4 ms | 51811.6 ms | 1233.8 ms | 39687.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 52986.9 ms | 51723.9 ms | 1263.0 ms | 40908.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 50554.4 ms | 49418.4 ms | 1136.0 ms | 39105.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 47393.4 ms | 46187.3 ms | 1206.1 ms | 33064.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 38028.6 ms | 36960.4 ms | 1068.1 ms | 29401.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 36354.8 ms | 34471.8 ms | 1883.0 ms | 12389.7 ms |
| Uber_zap | LLGoNoLTO | 35798.3 ms | 34065.7 ms | 1732.6 ms | 12129.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 35679.4 ms | 34645.9 ms | 1033.5 ms | 29833.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29673.4 ms | 28590.9 ms | 1082.5 ms | 9631.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 29157.3 ms | 28074.0 ms | 1083.3 ms | 22705.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28478.1 ms | 27494.6 ms | 983.5 ms | 22229.3 ms |
| K8s_workqueue | LLGoNoLTO | 23267.9 ms | 21632.6 ms | 1635.3 ms | 8473.6 ms |
| Toml | LLGoDeadcodeDrop | 16700.6 ms | 15707.5 ms | 993.1 ms | 6126.3 ms |
| Gorm_schema | LLGoNoLTO | 14219.5 ms | 13118.8 ms | 1100.7 ms | 5279.4 ms |
| Toml | LLGoNoLTO | 10848.3 ms | 9999.5 ms | 848.8 ms | 4137.3 ms |
| Dustin_humanize | LLGoNoLTO | 9015.8 ms | 8145.6 ms | 870.1 ms | 3504.3 ms |
| IXGo | Go | 1587.3 ms | 1420.4 ms | 166.9 ms | 905.0 ms |
| Etcdctl | Go | 1282.4 ms | 1108.5 ms | 173.9 ms | 1092.6 ms |
| XGo | Go | 1005.4 ms | 879.1 ms | 126.3 ms | 691.0 ms |
| Aws_restjson | Go | 734.8 ms | 646.5 ms | 88.3 ms | 484.4 ms |
| Uber_zap | Go | 710.4 ms | 591.7 ms | 118.7 ms | 356.7 ms |
| K8s_workqueue | Go | 610.7 ms | 526.9 ms | 83.8 ms | 646.3 ms |
| Gorm_schema | Go | 487.4 ms | 401.8 ms | 85.5 ms | 398.6 ms |
| Toml | Go | 439.0 ms | 365.8 ms | 73.2 ms | 244.8 ms |
| Dustin_humanize | Go | 292.5 ms | 239.5 ms | 53.0 ms | 156.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1312569.5 ms | 934152.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1297655.2 ms | 939838.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1271193.3 ms | 894570.5 ms | 9 |
| LLGoDeadcodeDrop | 804136.3 ms | 271549.9 ms | 9 |
| LLGoNoLTO | 709322.9 ms | 235783.5 ms | 9 |
| Go | 7149.8 ms | 4975.5 ms | 9 |

Dependency download details are in `download-timings.log`.
