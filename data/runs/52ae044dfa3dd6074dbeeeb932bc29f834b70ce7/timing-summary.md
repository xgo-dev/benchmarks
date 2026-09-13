## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 521753.6 ms | 515810.2 ms | 5943.4 ms | 361302.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 520880.9 ms | 515320.2 ms | 5560.7 ms | 364835.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 517382.9 ms | 511587.6 ms | 5795.3 ms | 359416.2 ms |
| IXGo | LLGoDeadcodeDrop | 308877.8 ms | 303693.3 ms | 5184.5 ms | 114203.9 ms |
| IXGo | LLGoNoLTO | 304280.9 ms | 298866.4 ms | 5414.4 ms | 115142.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 237984.1 ms | 233638.2 ms | 4346.0 ms | 147509.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 231839.3 ms | 227516.5 ms | 4322.8 ms | 143447.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 228935.5 ms | 224715.3 ms | 4220.1 ms | 142872.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 165211.2 ms | 161265.7 ms | 3945.5 ms | 54040.0 ms |
| Etcdctl | LLGoNoLTO | 164572.7 ms | 160707.2 ms | 3865.5 ms | 53934.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 160129.0 ms | 157202.8 ms | 2926.2 ms | 112434.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 157107.2 ms | 154423.8 ms | 2683.5 ms | 112369.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 156601.4 ms | 153773.9 ms | 2827.5 ms | 110530.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 123955.8 ms | 121930.0 ms | 2025.8 ms | 93620.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 112720.2 ms | 110648.9 ms | 2071.3 ms | 80845.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 110602.4 ms | 108650.7 ms | 1951.7 ms | 79662.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 97636.5 ms | 96102.7 ms | 1533.8 ms | 75801.0 ms |
| XGo | LLGoDeadcodeDrop | 92377.8 ms | 89912.2 ms | 2465.7 ms | 34414.8 ms |
| XGo | LLGoNoLTO | 91867.9 ms | 89375.9 ms | 2492.0 ms | 34079.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 89232.3 ms | 87789.4 ms | 1443.0 ms | 70189.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 88943.6 ms | 87460.8 ms | 1482.8 ms | 70050.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 85382.0 ms | 83857.0 ms | 1525.0 ms | 63461.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 85326.2 ms | 83830.5 ms | 1495.6 ms | 63698.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 80892.3 ms | 79323.9 ms | 1568.4 ms | 60993.2 ms |
| Aws_restjson | LLGoNoLTO | 73298.0 ms | 71467.1 ms | 1830.9 ms | 35323.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 71479.0 ms | 69797.0 ms | 1681.9 ms | 33944.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 54957.2 ms | 53843.5 ms | 1113.7 ms | 38883.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 53921.0 ms | 52768.5 ms | 1152.5 ms | 37789.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 46960.7 ms | 45786.7 ms | 1174.0 ms | 30074.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 46846.6 ms | 45610.6 ms | 1236.1 ms | 19684.4 ms |
| Uber_zap | LLGoNoLTO | 45490.2 ms | 44115.7 ms | 1374.5 ms | 19330.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 44273.6 ms | 43364.0 ms | 909.6 ms | 34414.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 40333.3 ms | 39084.5 ms | 1248.7 ms | 17825.9 ms |
| K8s_workqueue | LLGoNoLTO | 39913.2 ms | 38669.5 ms | 1243.6 ms | 17859.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 38910.4 ms | 38037.9 ms | 872.5 ms | 28336.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 38860.4 ms | 37986.2 ms | 874.1 ms | 28048.7 ms |
| IXGo | Go | 37159.7 ms | 34250.3 ms | 2909.4 ms | 10559.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31843.6 ms | 30781.9 ms | 1061.8 ms | 10506.0 ms |
| Gorm_schema | LLGoNoLTO | 31290.0 ms | 30178.8 ms | 1111.3 ms | 10228.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 29836.9 ms | 29097.3 ms | 739.6 ms | 23624.1 ms |
| Etcdctl | Go | 27208.7 ms | 25447.6 ms | 1761.0 ms | 8018.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 21840.5 ms | 21153.1 ms | 687.4 ms | 15470.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 20923.3 ms | 20272.5 ms | 650.8 ms | 15003.1 ms |
| Toml | LLGoDeadcodeDrop | 19789.5 ms | 19013.9 ms | 775.6 ms | 7321.4 ms |
| Toml | LLGoNoLTO | 19582.6 ms | 18805.6 ms | 777.0 ms | 7228.1 ms |
| XGo | Go | 16304.7 ms | 15208.9 ms | 1095.7 ms | 4957.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11271.9 ms | 10691.8 ms | 580.1 ms | 5020.8 ms |
| Dustin_humanize | LLGoNoLTO | 11048.1 ms | 10464.1 ms | 584.0 ms | 5073.4 ms |
| Aws_restjson | Go | 6448.9 ms | 5837.5 ms | 611.4 ms | 2537.1 ms |
| Gorm_schema | Go | 4827.2 ms | 4523.0 ms | 304.1 ms | 1788.5 ms |
| Uber_zap | Go | 4639.7 ms | 4283.8 ms | 355.9 ms | 1828.8 ms |
| K8s_workqueue | Go | 3920.2 ms | 3583.1 ms | 337.1 ms | 1362.3 ms |
| Toml | Go | 1650.0 ms | 1486.0 ms | 164.0 ms | 742.5 ms |
| Dustin_humanize | Go | 693.2 ms | 592.4 ms | 100.8 ms | 330.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1346527.4 ms | 956473.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1308266.7 ms | 909977.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1302995.2 ms | 898237.1 ms | 9 |
| LLGoDeadcodeDrop | 788030.8 ms | 296961.9 ms | 9 |
| LLGoNoLTO | 781343.6 ms | 298200.9 ms | 9 |
| Go | 102852.2 ms | 32124.4 ms | 9 |

Dependency download details are in `download-timings.log`.
