## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 407392.8 ms | 399796.7 ms | 7596.1 ms | 236364.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 308346.2 ms | 303781.2 ms | 4564.9 ms | 205866.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 303983.3 ms | 299375.4 ms | 4607.9 ms | 204772.4 ms |
| XGo | LLGoDeadcodeDrop | 240063.5 ms | 235055.8 ms | 5007.7 ms | 74344.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 222423.8 ms | 217048.9 ms | 5374.8 ms | 122633.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 196253.1 ms | 192400.6 ms | 3852.5 ms | 59478.4 ms |
| Etcdctl | LLGoNoLTO | 192587.4 ms | 189053.9 ms | 3533.5 ms | 58206.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 180950.8 ms | 177516.2 ms | 3434.5 ms | 133654.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 179177.3 ms | 175758.6 ms | 3418.7 ms | 131448.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 159646.4 ms | 156430.0 ms | 3216.4 ms | 126602.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 139815.5 ms | 136910.2 ms | 2905.2 ms | 110953.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 122810.5 ms | 119918.3 ms | 2892.2 ms | 93811.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111045.5 ms | 108396.2 ms | 2649.3 ms | 86776.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96902.4 ms | 94071.1 ms | 2831.3 ms | 79345.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 96085.5 ms | 93288.8 ms | 2796.8 ms | 69628.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 94939.9 ms | 92332.7 ms | 2607.2 ms | 77626.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 94499.3 ms | 92060.0 ms | 2439.3 ms | 77853.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 89773.4 ms | 87147.3 ms | 2626.1 ms | 67878.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67894.6 ms | 65922.6 ms | 1972.0 ms | 49808.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66453.5 ms | 64719.3 ms | 1734.2 ms | 50036.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64419.0 ms | 61745.3 ms | 2673.7 ms | 26523.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53181.3 ms | 51467.4 ms | 1714.0 ms | 37029.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52448.1 ms | 50950.5 ms | 1497.6 ms | 42753.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43952.6 ms | 42489.6 ms | 1463.0 ms | 33889.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 43629.1 ms | 42189.4 ms | 1439.6 ms | 33843.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41571.5 ms | 40232.5 ms | 1339.0 ms | 35030.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 40905.3 ms | 38684.3 ms | 2221.0 ms | 13905.6 ms |
| XGo | LLGoNoLTO | 40695.0 ms | 38267.3 ms | 2427.7 ms | 15813.6 ms |
| Uber_zap | LLGoNoLTO | 40530.8 ms | 38306.2 ms | 2224.5 ms | 13531.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33642.1 ms | 32007.0 ms | 1635.0 ms | 10756.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31931.2 ms | 30590.3 ms | 1340.9 ms | 25008.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31578.0 ms | 30271.3 ms | 1306.7 ms | 24842.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 28581.5 ms | 26383.8 ms | 2197.7 ms | 9995.0 ms |
| Aws_restjson | LLGoNoLTO | 28041.2 ms | 25923.8 ms | 2117.3 ms | 10189.6 ms |
| Toml | LLGoDeadcodeDrop | 25816.5 ms | 24388.8 ms | 1427.7 ms | 9021.6 ms |
| K8s_workqueue | LLGoNoLTO | 23584.2 ms | 21496.4 ms | 2087.9 ms | 8671.0 ms |
| Etcdctl | Go | 16199.8 ms | 15386.3 ms | 813.5 ms | 5555.6 ms |
| Gorm_schema | LLGoNoLTO | 14959.0 ms | 13593.9 ms | 1365.1 ms | 5590.3 ms |
| Toml | LLGoNoLTO | 12549.2 ms | 11335.9 ms | 1213.3 ms | 4793.2 ms |
| Dustin_humanize | LLGoNoLTO | 11407.4 ms | 10219.3 ms | 1188.1 ms | 4648.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11328.2 ms | 10188.9 ms | 1139.3 ms | 4691.9 ms |
| XGo | Go | 8571.4 ms | 8074.4 ms | 497.0 ms | 3300.5 ms |
| Aws_restjson | Go | 4867.7 ms | 4459.2 ms | 408.5 ms | 1866.0 ms |
| Gorm_schema | Go | 3341.1 ms | 3137.3 ms | 203.8 ms | 1455.7 ms |
| Uber_zap | Go | 2898.1 ms | 2675.3 ms | 222.8 ms | 1279.4 ms |
| K8s_workqueue | Go | 1967.3 ms | 1696.9 ms | 270.4 ms | 888.1 ms |
| Dustin_humanize | Go | 624.7 ms | 509.7 ms | 115.0 ms | 317.0 ms |
| Toml | Go | 535.6 ms | 431.1 ms | 104.4 ms | 304.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1096580.1 ms | 774913.3 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1023725.6 ms | 701380.9 ms | 8 |
| LLGoFullLTOGlobalDCE | 920126.6 ms | 681162.1 ms | 8 |
| LLGoDeadcodeDrop | 641009.1 ms | 208716.8 ms | 8 |
| LLGoNoLTO | 364354.2 ms | 121443.3 ms | 8 |
| Go | 39005.6 ms | 14966.7 ms | 8 |

Dependency download details are in `download-timings.log`.
