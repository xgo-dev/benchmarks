## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 676329.4 ms | 669896.9 ms | 6432.5 ms | 468100.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 581845.1 ms | 575469.6 ms | 6375.5 ms | 389589.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 570990.5 ms | 564707.6 ms | 6282.9 ms | 383257.3 ms |
| IXGo | LLGoDeadcodeDrop | 357427.0 ms | 351811.6 ms | 5615.4 ms | 130749.2 ms |
| IXGo | LLGoNoLTO | 349605.7 ms | 343865.8 ms | 5739.9 ms | 127960.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 284476.1 ms | 279705.5 ms | 4770.7 ms | 166034.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283334.6 ms | 278814.5 ms | 4520.1 ms | 166107.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 281412.1 ms | 276733.6 ms | 4678.4 ms | 163758.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 220720.7 ms | 216324.6 ms | 4396.1 ms | 72814.2 ms |
| Etcdctl | LLGoNoLTO | 213531.2 ms | 209525.3 ms | 4005.8 ms | 70145.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 179922.6 ms | 176861.7 ms | 3060.9 ms | 127193.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 176675.3 ms | 173630.1 ms | 3045.3 ms | 124201.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 175777.2 ms | 172635.9 ms | 3141.3 ms | 124516.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154881.8 ms | 152745.0 ms | 2136.7 ms | 121243.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 138458.2 ms | 136292.7 ms | 2165.4 ms | 103762.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 136494.5 ms | 134451.9 ms | 2042.5 ms | 102466.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108662.2 ms | 106935.5 ms | 1726.7 ms | 83687.9 ms |
| XGo | LLGoDeadcodeDrop | 106997.6 ms | 104283.9 ms | 2713.7 ms | 41467.1 ms |
| XGo | LLGoNoLTO | 104974.1 ms | 102383.2 ms | 2590.9 ms | 41310.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104556.3 ms | 102976.4 ms | 1579.8 ms | 82163.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103457.4 ms | 101831.0 ms | 1626.4 ms | 80703.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99488.3 ms | 97839.1 ms | 1649.3 ms | 74004.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98718.7 ms | 97169.6 ms | 1549.1 ms | 73248.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89178.3 ms | 87631.6 ms | 1546.7 ms | 66838.2 ms |
| Aws_restjson | LLGoNoLTO | 79232.8 ms | 77286.5 ms | 1946.3 ms | 38140.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79130.9 ms | 77215.1 ms | 1915.8 ms | 37662.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63890.0 ms | 62619.4 ms | 1270.6 ms | 45674.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63865.7 ms | 62702.0 ms | 1163.8 ms | 46014.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 56661.5 ms | 55246.4 ms | 1415.2 ms | 25200.3 ms |
| Uber_zap | LLGoNoLTO | 55583.6 ms | 54220.4 ms | 1363.2 ms | 24993.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53542.6 ms | 52386.2 ms | 1156.4 ms | 35312.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51628.7 ms | 50628.1 ms | 1000.7 ms | 40661.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49080.1 ms | 47722.2 ms | 1357.9 ms | 23724.2 ms |
| K8s_workqueue | LLGoNoLTO | 48105.8 ms | 46754.5 ms | 1351.3 ms | 22768.9 ms |
| IXGo | Go | 45006.3 ms | 42186.6 ms | 2819.7 ms | 12905.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44266.5 ms | 43382.4 ms | 884.0 ms | 33001.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 44050.1 ms | 43060.1 ms | 990.0 ms | 32813.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35681.0 ms | 34606.3 ms | 1074.6 ms | 12579.8 ms |
| Gorm_schema | LLGoNoLTO | 35262.2 ms | 34197.9 ms | 1064.2 ms | 12191.7 ms |
| Etcdctl | Go | 33004.7 ms | 31012.0 ms | 1992.7 ms | 9894.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32655.8 ms | 31909.0 ms | 746.8 ms | 26041.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24446.5 ms | 23736.6 ms | 709.9 ms | 17401.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24412.1 ms | 23663.3 ms | 748.7 ms | 17606.8 ms |
| Toml | LLGoDeadcodeDrop | 21556.2 ms | 20695.7 ms | 860.5 ms | 8137.2 ms |
| Toml | LLGoNoLTO | 21275.1 ms | 20463.3 ms | 811.8 ms | 8025.5 ms |
| XGo | Go | 18858.1 ms | 17724.0 ms | 1134.1 ms | 5489.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12367.7 ms | 11745.0 ms | 622.8 ms | 5351.0 ms |
| Dustin_humanize | LLGoNoLTO | 12162.8 ms | 11557.7 ms | 605.1 ms | 5250.2 ms |
| Aws_restjson | Go | 8123.5 ms | 7484.9 ms | 638.6 ms | 3290.5 ms |
| Gorm_schema | Go | 5691.6 ms | 5302.1 ms | 389.5 ms | 2152.1 ms |
| Uber_zap | Go | 5264.6 ms | 4847.6 ms | 416.9 ms | 2048.3 ms |
| K8s_workqueue | Go | 4626.0 ms | 4169.8 ms | 456.2 ms | 1623.3 ms |
| Toml | Go | 2003.1 ms | 1769.4 ms | 233.7 ms | 900.7 ms |
| Dustin_humanize | Go | 798.3 ms | 651.9 ms | 146.4 ms | 367.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1590108.4 ms | 1091648.5 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1546352.7 ms | 1073693.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1510955.3 ms | 1030061.6 ms | 9 |
| LLGoDeadcodeDrop | 939622.8 ms | 357685.8 ms | 9 |
| LLGoNoLTO | 919733.2 ms | 350786.3 ms | 9 |
| Go | 123376.3 ms | 38672.0 ms | 9 |

Dependency download details are in `download-timings.log`.
