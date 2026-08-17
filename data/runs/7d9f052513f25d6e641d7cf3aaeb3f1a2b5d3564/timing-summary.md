## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoDeadcodeDrop | 465826.1 ms | 457213.6 ms | 8612.5 ms | 152677.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 424522.4 ms | 418972.5 ms | 5549.8 ms | 295914.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 418140.5 ms | 411768.9 ms | 6371.6 ms | 261607.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 408635.1 ms | 402966.8 ms | 5668.3 ms | 291035.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 388665.0 ms | 383324.1 ms | 5341.0 ms | 279116.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 344857.1 ms | 340779.7 ms | 4077.4 ms | 244327.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 343891.6 ms | 339757.6 ms | 4134.0 ms | 241764.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 285074.0 ms | 278884.8 ms | 6189.1 ms | 168041.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 194476.0 ms | 191012.4 ms | 3463.6 ms | 58334.4 ms |
| Etcdctl | LLGoNoLTO | 191812.8 ms | 188466.9 ms | 3345.9 ms | 57033.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 189266.8 ms | 186344.9 ms | 2921.9 ms | 140889.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 166695.9 ms | 163758.4 ms | 2937.4 ms | 132616.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154590.5 ms | 151579.9 ms | 3010.6 ms | 119277.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 144366.0 ms | 141350.9 ms | 3015.1 ms | 95968.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 131594.7 ms | 129167.4 ms | 2427.2 ms | 100764.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 128400.5 ms | 126043.6 ms | 2356.9 ms | 98871.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110698.3 ms | 108399.2 ms | 2299.1 ms | 89453.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97548.6 ms | 95437.3 ms | 2111.2 ms | 80609.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 95404.7 ms | 93295.4 ms | 2109.2 ms | 78893.6 ms |
| Toml | LLGoNoLTO | 95138.4 ms | 92552.5 ms | 2585.9 ms | 34230.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92327.1 ms | 90168.3 ms | 2158.7 ms | 70318.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 91807.0 ms | 89763.9 ms | 2043.1 ms | 69957.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 82621.3 ms | 80402.9 ms | 2218.5 ms | 47814.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 69336.8 ms | 67117.7 ms | 2219.1 ms | 29269.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66879.2 ms | 65355.3 ms | 1523.9 ms | 50535.4 ms |
| IXGo | LLGoNoLTO | 66290.0 ms | 63219.7 ms | 3070.3 ms | 23527.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 66217.2 ms | 64483.4 ms | 1733.9 ms | 44461.8 ms |
| XGo | LLGoDeadcodeDrop | 63166.1 ms | 60750.5 ms | 2415.6 ms | 23036.6 ms |
| Aws_restjson | LLGoNoLTO | 62816.0 ms | 60738.4 ms | 2077.6 ms | 28562.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62544.4 ms | 61123.7 ms | 1420.7 ms | 48016.1 ms |
| XGo | LLGoNoLTO | 62269.6 ms | 59993.1 ms | 2276.5 ms | 22339.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53589.4 ms | 52266.8 ms | 1322.6 ms | 43532.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45886.9 ms | 44621.6 ms | 1265.3 ms | 35539.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 45539.3 ms | 44300.5 ms | 1238.7 ms | 35470.0 ms |
| Uber_zap | LLGoNoLTO | 45129.9 ms | 42884.9 ms | 2245.0 ms | 15263.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 40256.7 ms | 38293.2 ms | 1963.5 ms | 13783.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35004.9 ms | 33857.7 ms | 1147.2 ms | 26227.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32832.6 ms | 31668.4 ms | 1164.2 ms | 25815.4 ms |
| IXGo | Go | 32457.5 ms | 30057.6 ms | 2399.9 ms | 9715.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30023.6 ms | 28758.5 ms | 1265.1 ms | 9843.7 ms |
| K8s_workqueue | LLGoNoLTO | 28865.7 ms | 27192.9 ms | 1672.9 ms | 10085.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 28647.0 ms | 26889.7 ms | 1757.4 ms | 10287.7 ms |
| Gorm_schema | LLGoNoLTO | 28525.4 ms | 27264.1 ms | 1261.3 ms | 9532.5 ms |
| Toml | LLGoDeadcodeDrop | 18698.7 ms | 17592.2 ms | 1106.5 ms | 7028.5 ms |
| Etcdctl | Go | 16147.9 ms | 15261.1 ms | 886.8 ms | 5461.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12052.3 ms | 11040.3 ms | 1011.9 ms | 4835.1 ms |
| Dustin_humanize | LLGoNoLTO | 11959.7 ms | 11000.1 ms | 959.6 ms | 4856.6 ms |
| XGo | Go | 8843.5 ms | 8361.5 ms | 482.1 ms | 3570.4 ms |
| Aws_restjson | Go | 4850.9 ms | 4440.6 ms | 410.3 ms | 1804.5 ms |
| Gorm_schema | Go | 3448.4 ms | 3256.7 ms | 191.7 ms | 1485.3 ms |
| Uber_zap | Go | 2976.8 ms | 2755.5 ms | 221.3 ms | 1289.4 ms |
| K8s_workqueue | Go | 1877.9 ms | 1653.4 ms | 224.5 ms | 1841.2 ms |
| Toml | Go | 665.8 ms | 552.9 ms | 112.9 ms | 340.3 ms |
| Dustin_humanize | Go | 640.9 ms | 562.5 ms | 78.3 ms | 324.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1519129.6 ms | 1107562.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1499495.5 ms | 1060170.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1488975.6 ms | 1049106.8 ms | 9 |
| LLGoDeadcodeDrop | 922483.4 ms | 309097.0 ms | 9 |
| LLGoNoLTO | 592807.5 ms | 205430.9 ms | 9 |
| Go | 71909.6 ms | 25832.4 ms | 9 |

Dependency download details are in `download-timings.log`.
