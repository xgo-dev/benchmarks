## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 509865.7 ms | 503420.2 ms | 6445.5 ms | 327511.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 463116.4 ms | 455375.0 ms | 7741.5 ms | 283525.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 411887.7 ms | 406931.1 ms | 4956.5 ms | 261548.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 401647.3 ms | 396403.0 ms | 5244.3 ms | 291835.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 394818.5 ms | 389607.8 ms | 5210.8 ms | 285897.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 347531.6 ms | 343448.3 ms | 4083.3 ms | 244357.1 ms |
| IXGo | LLGoNoLTO | 333450.0 ms | 326464.9 ms | 6985.1 ms | 105610.8 ms |
| IXGo | LLGoDeadcodeDrop | 251723.9 ms | 247192.1 ms | 4531.8 ms | 82283.2 ms |
| Aws_restjson | LLGoNoLTO | 210629.7 ms | 206834.8 ms | 3794.8 ms | 64251.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 199844.1 ms | 196550.9 ms | 3293.3 ms | 59190.7 ms |
| Etcdctl | LLGoNoLTO | 190092.9 ms | 186841.1 ms | 3251.8 ms | 56136.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 184663.5 ms | 181786.4 ms | 2877.1 ms | 138008.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 182718.0 ms | 179977.3 ms | 2740.7 ms | 134529.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 164844.5 ms | 161955.1 ms | 2889.4 ms | 130866.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 149538.9 ms | 147121.3 ms | 2417.6 ms | 115488.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 129180.2 ms | 126820.6 ms | 2359.7 ms | 99650.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127715.1 ms | 125382.7 ms | 2332.4 ms | 98686.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108786.8 ms | 106621.8 ms | 2165.0 ms | 87283.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101329.0 ms | 98731.6 ms | 2597.4 ms | 72666.2 ms |
| XGo | LLGoDeadcodeDrop | 99668.0 ms | 97307.5 ms | 2360.5 ms | 32214.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 97279.2 ms | 95035.3 ms | 2243.9 ms | 79768.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97131.2 ms | 95057.6 ms | 2073.5 ms | 80113.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96852.6 ms | 94598.5 ms | 2254.0 ms | 79828.7 ms |
| Toml | LLGoDeadcodeDrop | 91028.3 ms | 88892.5 ms | 2135.9 ms | 31507.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 89641.3 ms | 87530.1 ms | 2111.2 ms | 67848.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 83345.0 ms | 81115.9 ms | 2229.2 ms | 27350.9 ms |
| XGo | LLGoNoLTO | 71853.5 ms | 68998.5 ms | 2855.1 ms | 24997.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 69859.3 ms | 67811.5 ms | 2047.8 ms | 28684.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67534.7 ms | 65929.0 ms | 1605.7 ms | 49303.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66990.1 ms | 65580.3 ms | 1409.9 ms | 51213.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53698.8 ms | 52393.5 ms | 1305.3 ms | 43695.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53664.3 ms | 52274.9 ms | 1389.4 ms | 37566.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 45560.7 ms | 44303.4 ms | 1257.3 ms | 35224.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45180.6 ms | 43930.8 ms | 1249.8 ms | 35082.4 ms |
| IXGo | Go | 42690.2 ms | 39345.5 ms | 3344.7 ms | 12171.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42643.4 ms | 41524.6 ms | 1118.8 ms | 35688.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 40541.0 ms | 38657.1 ms | 1883.9 ms | 13681.9 ms |
| Uber_zap | LLGoNoLTO | 39591.9 ms | 37746.3 ms | 1845.6 ms | 13405.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33977.9 ms | 32743.6 ms | 1234.3 ms | 10925.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31962.2 ms | 30871.3 ms | 1090.9 ms | 25001.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31958.0 ms | 30828.8 ms | 1129.1 ms | 25013.5 ms |
| K8s_workqueue | LLGoNoLTO | 24140.9 ms | 22412.3 ms | 1728.6 ms | 8859.0 ms |
| Etcdctl | Go | 16700.5 ms | 15867.7 ms | 832.8 ms | 5649.1 ms |
| Gorm_schema | LLGoNoLTO | 15465.4 ms | 14266.4 ms | 1199.0 ms | 5687.7 ms |
| Toml | LLGoNoLTO | 13094.9 ms | 12083.4 ms | 1011.5 ms | 4931.6 ms |
| Dustin_humanize | LLGoNoLTO | 11925.5 ms | 10950.4 ms | 975.1 ms | 4730.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11750.3 ms | 10770.5 ms | 979.8 ms | 4667.8 ms |
| XGo | Go | 6439.0 ms | 5952.7 ms | 486.3 ms | 2756.6 ms |
| Gorm_schema | Go | 5397.1 ms | 5074.0 ms | 323.0 ms | 2034.9 ms |
| Aws_restjson | Go | 4920.2 ms | 4518.3 ms | 401.9 ms | 1844.5 ms |
| Uber_zap | Go | 2952.0 ms | 2731.3 ms | 220.7 ms | 1269.9 ms |
| K8s_workqueue | Go | 2201.9 ms | 1984.2 ms | 217.7 ms | 866.0 ms |
| Dustin_humanize | Go | 629.5 ms | 555.7 ms | 73.8 ms | 313.0 ms |
| Toml | Go | 533.5 ms | 450.3 ms | 83.2 ms | 333.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1561535.7 ms | 1120567.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1483252.0 ms | 1059875.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1452952.4 ms | 1036756.8 ms | 9 |
| LLGoNoLTO | 910244.7 ms | 288610.7 ms | 9 |
| LLGoDeadcodeDrop | 881737.8 ms | 290506.3 ms | 9 |
| Go | 82463.7 ms | 27238.5 ms | 9 |

Dependency download details are in `download-timings.log`.
