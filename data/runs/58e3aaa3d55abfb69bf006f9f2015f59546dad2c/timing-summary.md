## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 674893.8 ms | 668459.2 ms | 6434.6 ms | 461840.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 666468.8 ms | 659671.1 ms | 6797.7 ms | 456128.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 655736.9 ms | 649061.8 ms | 6675.0 ms | 450896.6 ms |
| IXGo | LLGoDeadcodeDrop | 388276.7 ms | 382605.0 ms | 5671.6 ms | 143058.0 ms |
| IXGo | LLGoNoLTO | 387547.3 ms | 381740.8 ms | 5806.5 ms | 142106.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 290417.4 ms | 285544.7 ms | 4872.7 ms | 168898.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 289029.0 ms | 284107.9 ms | 4921.1 ms | 168043.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 286884.6 ms | 282284.0 ms | 4600.5 ms | 168334.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 218800.3 ms | 214349.8 ms | 4450.5 ms | 71108.1 ms |
| Etcdctl | LLGoNoLTO | 216366.5 ms | 212304.5 ms | 4062.0 ms | 70331.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 180480.0 ms | 177325.2 ms | 3154.7 ms | 126291.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 180463.9 ms | 177284.9 ms | 3179.0 ms | 126371.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 178804.9 ms | 175760.6 ms | 3044.4 ms | 126364.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 153517.0 ms | 151330.4 ms | 2186.6 ms | 119446.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 143001.6 ms | 140755.1 ms | 2246.5 ms | 107417.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 140434.2 ms | 138187.9 ms | 2246.3 ms | 104740.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110365.4 ms | 108707.3 ms | 1658.0 ms | 84804.2 ms |
| XGo | LLGoDeadcodeDrop | 106970.6 ms | 104243.9 ms | 2726.7 ms | 40901.7 ms |
| XGo | LLGoNoLTO | 105104.7 ms | 102440.5 ms | 2664.2 ms | 40108.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104186.7 ms | 102516.0 ms | 1670.8 ms | 81345.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 103255.6 ms | 101505.6 ms | 1749.9 ms | 81161.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 100510.0 ms | 98873.6 ms | 1636.4 ms | 74421.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99871.9 ms | 98287.5 ms | 1584.4 ms | 74340.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 91497.7 ms | 89790.0 ms | 1707.7 ms | 68367.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80525.5 ms | 78534.6 ms | 1990.9 ms | 38027.1 ms |
| Aws_restjson | LLGoNoLTO | 78811.9 ms | 76836.3 ms | 1975.6 ms | 38306.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66004.1 ms | 64698.4 ms | 1305.7 ms | 47140.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65753.7 ms | 64523.2 ms | 1230.6 ms | 47319.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 55829.0 ms | 54354.2 ms | 1474.8 ms | 24178.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55332.6 ms | 54131.0 ms | 1201.6 ms | 36500.9 ms |
| Uber_zap | LLGoNoLTO | 54813.5 ms | 53334.5 ms | 1479.0 ms | 23921.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53417.3 ms | 52421.3 ms | 996.0 ms | 42088.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48207.0 ms | 46807.2 ms | 1399.8 ms | 22063.1 ms |
| K8s_workqueue | LLGoNoLTO | 47585.9 ms | 46236.2 ms | 1349.7 ms | 21870.4 ms |
| IXGo | Go | 45768.8 ms | 42748.6 ms | 3020.2 ms | 13130.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45472.7 ms | 44558.3 ms | 914.4 ms | 33798.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 45311.9 ms | 44374.4 ms | 937.5 ms | 33651.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36649.3 ms | 35485.8 ms | 1163.5 ms | 12841.7 ms |
| Gorm_schema | LLGoNoLTO | 36077.8 ms | 34996.4 ms | 1081.4 ms | 12532.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34115.6 ms | 33317.2 ms | 798.4 ms | 27128.0 ms |
| Etcdctl | Go | 33747.8 ms | 31742.7 ms | 2005.1 ms | 10424.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25106.9 ms | 24392.5 ms | 714.4 ms | 18159.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24931.3 ms | 24197.6 ms | 733.8 ms | 17942.7 ms |
| Toml | LLGoDeadcodeDrop | 22547.7 ms | 21668.4 ms | 879.4 ms | 8544.5 ms |
| Toml | LLGoNoLTO | 22089.7 ms | 21189.2 ms | 900.5 ms | 8302.5 ms |
| XGo | Go | 19189.8 ms | 18004.2 ms | 1185.7 ms | 5680.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12642.6 ms | 11988.1 ms | 654.5 ms | 5479.2 ms |
| Dustin_humanize | LLGoNoLTO | 12534.8 ms | 11931.2 ms | 603.5 ms | 5421.9 ms |
| Aws_restjson | Go | 7901.8 ms | 7180.3 ms | 721.5 ms | 3206.6 ms |
| Gorm_schema | Go | 5804.5 ms | 5426.8 ms | 377.7 ms | 2207.0 ms |
| Uber_zap | Go | 5322.8 ms | 4905.4 ms | 417.4 ms | 2086.1 ms |
| K8s_workqueue | Go | 4733.7 ms | 4270.7 ms | 463.0 ms | 1670.8 ms |
| Toml | Go | 2054.9 ms | 1813.8 ms | 241.1 ms | 930.7 ms |
| Dustin_humanize | Go | 817.4 ms | 662.9 ms | 154.5 ms | 379.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1661007.9 ms | 1158487.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1616717.8 ms | 1109625.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1587539.6 ms | 1084830.9 ms | 9 |
| LLGoDeadcodeDrop | 970448.8 ms | 366202.1 ms | 9 |
| LLGoNoLTO | 960932.1 ms | 362901.5 ms | 9 |
| Go | 125341.6 ms | 39717.1 ms | 9 |

Dependency download details are in `download-timings.log`.
