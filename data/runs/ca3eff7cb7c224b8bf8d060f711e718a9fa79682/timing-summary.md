## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 709339.6 ms | 701874.4 ms | 7465.2 ms | 498058.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 611206.2 ms | 603867.1 ms | 7339.0 ms | 410351.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 589176.9 ms | 582020.0 ms | 7156.9 ms | 396458.4 ms |
| IXGo | LLGoNoLTO | 379263.8 ms | 372761.1 ms | 6502.7 ms | 139648.7 ms |
| IXGo | LLGoDeadcodeDrop | 364206.0 ms | 357749.0 ms | 6457.0 ms | 134618.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 290419.7 ms | 284723.7 ms | 5696.0 ms | 169761.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 286064.0 ms | 280510.7 ms | 5553.3 ms | 165711.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283322.8 ms | 277939.1 ms | 5383.6 ms | 166048.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 221062.2 ms | 215923.1 ms | 5139.0 ms | 74664.1 ms |
| Etcdctl | LLGoNoLTO | 216692.0 ms | 211761.1 ms | 4930.9 ms | 71250.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 184281.4 ms | 180171.6 ms | 4109.9 ms | 129464.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 178252.4 ms | 174310.3 ms | 3942.1 ms | 124682.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177780.0 ms | 173736.1 ms | 4043.9 ms | 125484.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150915.6 ms | 147887.1 ms | 3028.5 ms | 116542.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 138962.1 ms | 136071.5 ms | 2890.5 ms | 103487.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 138649.5 ms | 135728.5 ms | 2920.9 ms | 103449.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112140.5 ms | 109544.1 ms | 2596.4 ms | 86100.3 ms |
| XGo | LLGoDeadcodeDrop | 110497.5 ms | 107016.4 ms | 3481.1 ms | 43531.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105852.6 ms | 103246.4 ms | 2606.2 ms | 82467.0 ms |
| XGo | LLGoNoLTO | 105346.7 ms | 101906.0 ms | 3440.8 ms | 41359.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 105175.3 ms | 102667.4 ms | 2507.9 ms | 81918.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104962.2 ms | 102538.5 ms | 2423.7 ms | 81903.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 102444.9 ms | 99933.4 ms | 2511.5 ms | 76092.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101923.6 ms | 99392.8 ms | 2530.8 ms | 75319.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82064.6 ms | 79142.0 ms | 2922.6 ms | 39594.9 ms |
| Aws_restjson | LLGoNoLTO | 80492.7 ms | 77800.8 ms | 2691.9 ms | 38667.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68093.6 ms | 66232.3 ms | 1861.3 ms | 49115.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65252.2 ms | 63416.3 ms | 1835.9 ms | 46348.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 57726.7 ms | 55467.6 ms | 2259.1 ms | 26065.8 ms |
| Uber_zap | LLGoNoLTO | 57350.7 ms | 55087.9 ms | 2262.8 ms | 25793.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55784.3 ms | 54005.6 ms | 1778.7 ms | 36604.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53033.7 ms | 51563.7 ms | 1470.0 ms | 41539.1 ms |
| K8s_workqueue | LLGoNoLTO | 52124.1 ms | 49970.3 ms | 2153.9 ms | 26046.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50994.2 ms | 48703.0 ms | 2291.1 ms | 24200.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45356.3 ms | 43881.5 ms | 1474.8 ms | 33461.5 ms |
| IXGo | Go | 45190.3 ms | 42246.1 ms | 2944.2 ms | 12947.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 44967.8 ms | 43513.3 ms | 1454.5 ms | 33245.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37969.2 ms | 36308.7 ms | 1660.5 ms | 13338.0 ms |
| Gorm_schema | LLGoNoLTO | 37558.2 ms | 35893.7 ms | 1664.5 ms | 13518.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34575.0 ms | 33230.7 ms | 1344.3 ms | 27217.4 ms |
| Etcdctl | Go | 32857.5 ms | 30864.4 ms | 1993.1 ms | 10114.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25679.6 ms | 24471.7 ms | 1207.9 ms | 18314.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25283.9 ms | 24102.8 ms | 1181.1 ms | 17892.8 ms |
| Toml | LLGoDeadcodeDrop | 22896.8 ms | 21482.5 ms | 1414.3 ms | 8826.7 ms |
| Toml | LLGoNoLTO | 22246.9 ms | 20896.3 ms | 1350.5 ms | 8649.0 ms |
| XGo | Go | 18905.6 ms | 17739.2 ms | 1166.5 ms | 5571.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13514.3 ms | 12425.5 ms | 1088.8 ms | 6061.5 ms |
| Dustin_humanize | LLGoNoLTO | 13491.7 ms | 12346.1 ms | 1145.6 ms | 5961.5 ms |
| Aws_restjson | Go | 7795.4 ms | 7165.2 ms | 630.1 ms | 3143.7 ms |
| Gorm_schema | Go | 5733.6 ms | 5361.5 ms | 372.1 ms | 2175.5 ms |
| Uber_zap | Go | 5296.4 ms | 4911.3 ms | 385.1 ms | 2115.3 ms |
| K8s_workqueue | Go | 4620.8 ms | 4181.2 ms | 439.7 ms | 1624.2 ms |
| Toml | Go | 2006.6 ms | 1748.2 ms | 258.5 ms | 908.3 ms |
| Dustin_humanize | Go | 786.0 ms | 645.7 ms | 140.4 ms | 370.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1662531.5 ms | 1153151.2 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1574000.4 ms | 1090408.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1552363.7 ms | 1053480.4 ms | 9 |
| LLGoNoLTO | 964566.8 ms | 370894.9 ms | 9 |
| LLGoDeadcodeDrop | 960931.4 ms | 370901.9 ms | 9 |
| Go | 123192.4 ms | 38971.0 ms | 9 |

Dependency download details are in `download-timings.log`.
