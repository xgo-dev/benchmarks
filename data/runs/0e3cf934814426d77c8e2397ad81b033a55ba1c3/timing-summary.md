## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 605808.9 ms | 600214.7 ms | 5594.2 ms | 420032.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 600417.9 ms | 595140.5 ms | 5277.4 ms | 417383.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 576027.0 ms | 570849.7 ms | 5177.3 ms | 406644.5 ms |
| IXGo | LLGoDeadcodeDrop | 333951.0 ms | 329545.1 ms | 4405.8 ms | 110761.7 ms |
| IXGo | LLGoNoLTO | 324758.6 ms | 320529.7 ms | 4228.9 ms | 106001.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 300902.6 ms | 296602.0 ms | 4300.6 ms | 193533.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 298158.5 ms | 293884.3 ms | 4274.2 ms | 191839.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 292808.6 ms | 288731.2 ms | 4077.4 ms | 191281.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 281437.7 ms | 276907.7 ms | 4530.0 ms | 175752.5 ms |
| Aws_restjson | LLGoNoLTO | 234618.4 ms | 231190.8 ms | 3427.5 ms | 76485.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 208174.9 ms | 204875.4 ms | 3299.5 ms | 154588.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 205380.7 ms | 201903.7 ms | 3477.0 ms | 69747.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 202046.0 ms | 198527.7 ms | 3518.3 ms | 67670.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 188557.4 ms | 185188.8 ms | 3368.6 ms | 145041.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 161761.7 ms | 158803.9 ms | 2957.8 ms | 102292.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 156931.9 ms | 154158.8 ms | 2773.0 ms | 126200.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 151984.6 ms | 149214.5 ms | 2770.1 ms | 110695.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 145562.1 ms | 142792.0 ms | 2770.1 ms | 110652.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141808.0 ms | 139100.3 ms | 2707.7 ms | 110261.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 124315.0 ms | 121846.2 ms | 2468.8 ms | 101255.5 ms |
| XGo | LLGoDeadcodeDrop | 120165.9 ms | 117414.3 ms | 2751.5 ms | 44651.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 119653.8 ms | 117077.1 ms | 2576.7 ms | 98591.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 118119.0 ms | 115619.1 ms | 2499.8 ms | 97458.9 ms |
| XGo | LLGoNoLTO | 116697.8 ms | 114093.1 ms | 2604.7 ms | 43510.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 111497.0 ms | 109059.6 ms | 2437.4 ms | 87485.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 105318.5 ms | 102978.4 ms | 2340.1 ms | 69421.0 ms |
| Etcdctl | LLGoNoLTO | 99021.7 ms | 96162.8 ms | 2858.9 ms | 39950.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 92184.4 ms | 89997.2 ms | 2187.2 ms | 55472.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 77879.8 ms | 76188.8 ms | 1691.0 ms | 58881.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 74693.6 ms | 72274.0 ms | 2419.7 ms | 36116.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 74287.8 ms | 72679.8 ms | 1608.1 ms | 56704.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 51783.4 ms | 50410.3 ms | 1373.0 ms | 40939.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51685.1 ms | 50221.2 ms | 1463.9 ms | 41024.9 ms |
| K8s_workqueue | LLGoNoLTO | 46713.7 ms | 44440.2 ms | 2273.5 ms | 21874.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 45623.7 ms | 43421.7 ms | 2202.0 ms | 21658.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43587.4 ms | 42297.3 ms | 1290.1 ms | 36656.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37764.5 ms | 36395.2 ms | 1369.3 ms | 12517.5 ms |
| Uber_zap | LLGoNoLTO | 36670.8 ms | 34649.7 ms | 2021.0 ms | 19119.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 36233.7 ms | 34963.6 ms | 1270.1 ms | 26777.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32187.2 ms | 30973.0 ms | 1214.2 ms | 25145.2 ms |
| Toml | LLGoDeadcodeDrop | 21299.7 ms | 19987.8 ms | 1311.9 ms | 8298.1 ms |
| Toml | LLGoNoLTO | 21027.1 ms | 19814.9 ms | 1212.2 ms | 8185.5 ms |
| Gorm_schema | LLGoNoLTO | 16624.9 ms | 15355.6 ms | 1269.3 ms | 6748.8 ms |
| Dustin_humanize | LLGoNoLTO | 12485.5 ms | 11300.2 ms | 1185.3 ms | 5380.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12215.7 ms | 11046.5 ms | 1169.2 ms | 5288.1 ms |
| IXGo | Go | 2013.1 ms | 1766.5 ms | 246.6 ms | 1140.5 ms |
| Etcdctl | Go | 1300.7 ms | 1131.4 ms | 169.3 ms | 761.1 ms |
| XGo | Go | 1079.9 ms | 942.0 ms | 137.8 ms | 641.5 ms |
| K8s_workqueue | Go | 942.4 ms | 777.6 ms | 164.8 ms | 461.6 ms |
| Aws_restjson | Go | 813.5 ms | 675.7 ms | 137.7 ms | 481.2 ms |
| Uber_zap | Go | 668.6 ms | 553.3 ms | 115.3 ms | 384.6 ms |
| Toml | Go | 529.6 ms | 417.3 ms | 112.3 ms | 311.0 ms |
| Gorm_schema | Go | 517.6 ms | 425.0 ms | 92.6 ms | 282.9 ms |
| Dustin_humanize | Go | 354.5 ms | 284.6 ms | 69.9 ms | 195.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1737027.6 ms | 1255623.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1719032.0 ms | 1206125.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1693014.3 ms | 1190262.9 ms | 9 |
| LLGoDeadcodeDrop | 1053140.8 ms | 376709.7 ms | 9 |
| LLGoNoLTO | 908618.4 ms | 327256.8 ms | 9 |
| Go | 8219.9 ms | 4660.2 ms | 9 |

Dependency download details are in `download-timings.log`.
