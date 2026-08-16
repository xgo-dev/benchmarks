## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 521259.2 ms | 512886.4 ms | 8372.9 ms | 322334.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 462456.6 ms | 456627.9 ms | 5828.7 ms | 310396.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 441238.1 ms | 435593.9 ms | 5644.2 ms | 297246.1 ms |
| Etcdctl | LLGoNoLTO | 395645.8 ms | 388291.2 ms | 7354.6 ms | 118235.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 327346.0 ms | 323114.2 ms | 4231.8 ms | 214981.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 320336.6 ms | 316168.3 ms | 4168.3 ms | 210899.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 316479.9 ms | 312376.5 ms | 4103.4 ms | 208791.9 ms |
| IXGo | LLGoDeadcodeDrop | 277663.8 ms | 272780.1 ms | 4883.7 ms | 83801.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 211479.1 ms | 207774.2 ms | 3704.9 ms | 62154.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 205493.8 ms | 201882.9 ms | 3610.9 ms | 144558.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 200608.3 ms | 196493.3 ms | 4115.1 ms | 118537.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 176305.4 ms | 172473.5 ms | 3831.9 ms | 96293.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 174023.9 ms | 170577.0 ms | 3446.9 ms | 137294.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 167580.1 ms | 164351.9 ms | 3228.2 ms | 133830.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 153777.9 ms | 150583.8 ms | 3194.1 ms | 45385.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 152527.8 ms | 149673.8 ms | 2854.0 ms | 122126.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 133261.6 ms | 130431.2 ms | 2830.4 ms | 99491.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 126651.5 ms | 123865.6 ms | 2785.9 ms | 95150.3 ms |
| XGo | LLGoDeadcodeDrop | 109469.4 ms | 106807.8 ms | 2661.5 ms | 34728.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104886.4 ms | 102124.2 ms | 2762.2 ms | 85154.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103851.1 ms | 101255.4 ms | 2595.7 ms | 84682.4 ms |
| Toml | LLGoDeadcodeDrop | 101405.3 ms | 98985.8 ms | 2419.5 ms | 34293.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 98953.6 ms | 96565.7 ms | 2387.9 ms | 80948.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96274.4 ms | 93762.0 ms | 2512.5 ms | 71561.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 71682.9 ms | 70009.5 ms | 1673.4 ms | 54262.4 ms |
| IXGo | LLGoNoLTO | 69519.8 ms | 65890.0 ms | 3629.8 ms | 23899.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67376.0 ms | 65673.8 ms | 1702.2 ms | 51060.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 62090.0 ms | 60121.3 ms | 1968.7 ms | 37268.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 57648.4 ms | 56120.2 ms | 1528.2 ms | 46568.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55628.0 ms | 53953.5 ms | 1674.6 ms | 39413.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48772.8 ms | 47268.6 ms | 1504.2 ms | 37728.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 48065.1 ms | 46587.3 ms | 1477.8 ms | 37058.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 45560.4 ms | 44198.3 ms | 1362.2 ms | 37989.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 45470.0 ms | 43248.1 ms | 2221.9 ms | 14927.7 ms |
| XGo | LLGoNoLTO | 43952.1 ms | 41422.5 ms | 2529.5 ms | 16906.7 ms |
| Uber_zap | LLGoNoLTO | 43534.4 ms | 41397.3 ms | 2137.1 ms | 14348.8 ms |
| Gorm_schema | LLGoNoLTO | 41317.9 ms | 39603.8 ms | 1714.1 ms | 13615.0 ms |
| IXGo | Go | 40225.9 ms | 37566.7 ms | 2659.3 ms | 12027.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35289.3 ms | 34028.2 ms | 1261.1 ms | 27811.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 31608.2 ms | 29437.2 ms | 2171.0 ms | 10889.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31297.4 ms | 29859.3 ms | 1438.1 ms | 10324.2 ms |
| Aws_restjson | LLGoNoLTO | 31050.0 ms | 28856.5 ms | 2193.5 ms | 11216.5 ms |
| K8s_workqueue | LLGoNoLTO | 25200.3 ms | 23136.7 ms | 2063.6 ms | 9201.8 ms |
| XGo | Go | 19853.6 ms | 18701.3 ms | 1152.4 ms | 5813.4 ms |
| Etcdctl | Go | 16961.7 ms | 16115.3 ms | 846.4 ms | 5728.5 ms |
| Toml | LLGoNoLTO | 13581.7 ms | 12328.3 ms | 1253.4 ms | 5155.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12491.3 ms | 11232.9 ms | 1258.4 ms | 5091.3 ms |
| Dustin_humanize | LLGoNoLTO | 11351.0 ms | 10193.6 ms | 1157.4 ms | 4362.7 ms |
| Aws_restjson | Go | 5239.5 ms | 4840.5 ms | 399.0 ms | 2030.4 ms |
| Gorm_schema | Go | 3611.2 ms | 3418.4 ms | 192.8 ms | 1598.4 ms |
| Uber_zap | Go | 3011.1 ms | 2802.9 ms | 208.1 ms | 1325.0 ms |
| K8s_workqueue | Go | 1857.0 ms | 1671.2 ms | 185.8 ms | 855.4 ms |
| Dustin_humanize | Go | 673.2 ms | 582.4 ms | 90.8 ms | 337.1 ms |
| Toml | Go | 563.6 ms | 458.2 ms | 105.3 ms | 316.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1558212.5 ms | 1104507.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1552435.5 ms | 1062252.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1510999.5 ms | 1036680.6 ms | 9 |
| LLGoDeadcodeDrop | 974662.2 ms | 301596.6 ms | 9 |
| LLGoNoLTO | 675152.9 ms | 216940.6 ms | 9 |
| Go | 91996.9 ms | 30032.2 ms | 9 |

Dependency download details are in `download-timings.log`.
