## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 636763.9 ms | 630212.3 ms | 6551.6 ms | 430284.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 625059.0 ms | 618736.7 ms | 6322.3 ms | 421241.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 591802.8 ms | 585283.8 ms | 6519.0 ms | 397995.8 ms |
| IXGo | LLGoNoLTO | 356568.5 ms | 350970.2 ms | 5598.4 ms | 130120.1 ms |
| IXGo | LLGoDeadcodeDrop | 355564.8 ms | 349821.1 ms | 5743.7 ms | 125886.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 292087.0 ms | 287227.3 ms | 4859.7 ms | 168451.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 288382.3 ms | 283432.6 ms | 4949.8 ms | 167912.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 286294.1 ms | 281600.2 ms | 4693.9 ms | 166113.4 ms |
| Etcdctl | LLGoNoLTO | 219214.5 ms | 214906.5 ms | 4308.0 ms | 71347.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 219102.0 ms | 215033.6 ms | 4068.4 ms | 71623.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 181909.3 ms | 178684.4 ms | 3224.9 ms | 127496.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 177779.1 ms | 174534.3 ms | 3244.8 ms | 124459.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 175592.4 ms | 172539.2 ms | 3053.1 ms | 123707.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150664.2 ms | 148531.9 ms | 2132.3 ms | 116020.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 142485.6 ms | 140390.5 ms | 2095.2 ms | 106966.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 137833.7 ms | 135564.0 ms | 2269.7 ms | 101885.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109818.1 ms | 108065.8 ms | 1752.3 ms | 84595.0 ms |
| XGo | LLGoDeadcodeDrop | 108452.4 ms | 105658.6 ms | 2793.8 ms | 42267.9 ms |
| XGo | LLGoNoLTO | 106114.6 ms | 103543.3 ms | 2571.3 ms | 41517.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104831.6 ms | 103148.1 ms | 1683.6 ms | 82377.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103849.5 ms | 102100.7 ms | 1748.8 ms | 81095.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 101014.0 ms | 99383.1 ms | 1630.9 ms | 75003.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 100082.0 ms | 98415.6 ms | 1666.4 ms | 74173.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 91274.9 ms | 89662.8 ms | 1612.1 ms | 67972.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82012.9 ms | 80059.5 ms | 1953.5 ms | 39668.5 ms |
| Aws_restjson | LLGoNoLTO | 79443.0 ms | 77445.4 ms | 1997.7 ms | 38401.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66147.3 ms | 64899.9 ms | 1247.4 ms | 47750.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64572.5 ms | 63290.3 ms | 1282.2 ms | 46041.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 57509.8 ms | 55998.3 ms | 1511.4 ms | 25415.9 ms |
| Uber_zap | LLGoNoLTO | 55920.7 ms | 54601.5 ms | 1319.3 ms | 24966.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55125.5 ms | 53887.9 ms | 1237.5 ms | 36343.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54153.0 ms | 53115.5 ms | 1037.5 ms | 42804.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50121.3 ms | 48664.3 ms | 1457.0 ms | 23453.3 ms |
| K8s_workqueue | LLGoNoLTO | 48552.3 ms | 47225.3 ms | 1327.1 ms | 22864.2 ms |
| IXGo | Go | 45856.6 ms | 42829.3 ms | 3027.3 ms | 13130.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44604.9 ms | 43668.3 ms | 936.6 ms | 33214.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 44428.4 ms | 43518.3 ms | 910.1 ms | 32988.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36996.7 ms | 35828.8 ms | 1168.0 ms | 12838.9 ms |
| Gorm_schema | LLGoNoLTO | 35534.7 ms | 34518.1 ms | 1016.6 ms | 12343.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33726.0 ms | 32946.9 ms | 779.1 ms | 26748.2 ms |
| Etcdctl | Go | 33159.3 ms | 31230.5 ms | 1928.8 ms | 10094.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25018.1 ms | 24313.6 ms | 704.5 ms | 17939.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24757.5 ms | 24046.6 ms | 711.0 ms | 17694.1 ms |
| Toml | LLGoNoLTO | 22079.3 ms | 21249.3 ms | 830.0 ms | 8087.7 ms |
| Toml | LLGoDeadcodeDrop | 21807.4 ms | 21025.5 ms | 781.9 ms | 8018.3 ms |
| XGo | Go | 19076.0 ms | 17987.5 ms | 1088.5 ms | 5521.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12425.4 ms | 11811.6 ms | 613.7 ms | 5432.5 ms |
| Dustin_humanize | LLGoNoLTO | 12350.0 ms | 11724.2 ms | 625.8 ms | 5295.4 ms |
| Aws_restjson | Go | 8047.3 ms | 7362.4 ms | 684.9 ms | 3253.0 ms |
| Gorm_schema | Go | 5779.9 ms | 5396.9 ms | 382.9 ms | 2182.9 ms |
| Uber_zap | Go | 5393.6 ms | 4986.5 ms | 407.1 ms | 2102.7 ms |
| K8s_workqueue | Go | 4700.7 ms | 4244.3 ms | 456.5 ms | 1657.1 ms |
| Toml | Go | 2031.9 ms | 1794.4 ms | 237.5 ms | 910.4 ms |
| Dustin_humanize | Go | 806.0 ms | 645.5 ms | 160.5 ms | 380.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1608374.0 ms | 1113157.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1569090.5 ms | 1062596.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1532592.3 ms | 1043522.4 ms | 9 |
| LLGoDeadcodeDrop | 943992.6 ms | 354605.3 ms | 9 |
| LLGoNoLTO | 935777.8 ms | 354944.4 ms | 9 |
| Go | 124851.4 ms | 39234.0 ms | 9 |

Dependency download details are in `download-timings.log`.
