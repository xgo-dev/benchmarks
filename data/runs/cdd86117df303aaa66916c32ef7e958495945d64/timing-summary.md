## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 328583.7 ms | 323007.0 ms | 5576.7 ms | 284499.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 290992.0 ms | 287152.6 ms | 3839.4 ms | 258105.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 287089.4 ms | 282979.2 ms | 4110.2 ms | 254501.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 242869.7 ms | 239058.7 ms | 3811.0 ms | 212147.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 217131.1 ms | 214308.4 ms | 2822.8 ms | 188026.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 215258.0 ms | 212414.1 ms | 2844.0 ms | 186214.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 182872.2 ms | 179826.7 ms | 3045.4 ms | 166207.7 ms |
| IXGo | LLGoNoLTO | 176042.0 ms | 172123.3 ms | 3918.7 ms | 149370.6 ms |
| IXGo | LLGoDeadcodeDrop | 163853.1 ms | 160584.9 ms | 3268.2 ms | 131058.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 162831.2 ms | 159477.0 ms | 3354.2 ms | 142886.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 148531.8 ms | 144760.7 ms | 3771.1 ms | 142271.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 144038.4 ms | 140713.1 ms | 3325.3 ms | 137394.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 142151.2 ms | 139872.8 ms | 2278.3 ms | 121936.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 137237.4 ms | 133533.7 ms | 3703.6 ms | 130507.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 127571.4 ms | 125091.8 ms | 2479.6 ms | 103365.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 117742.4 ms | 114842.1 ms | 2900.4 ms | 116809.5 ms |
| Etcdctl | LLGoNoLTO | 117002.1 ms | 114684.9 ms | 2317.2 ms | 92069.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 116447.7 ms | 114388.2 ms | 2059.4 ms | 102760.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 112881.1 ms | 110760.0 ms | 2121.1 ms | 102444.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 98266.0 ms | 96188.3 ms | 2077.7 ms | 84723.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 88532.0 ms | 86540.7 ms | 1991.2 ms | 77752.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 81069.1 ms | 79070.5 ms | 1998.6 ms | 72783.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 77563.5 ms | 75634.0 ms | 1929.5 ms | 66401.5 ms |
| XGo | LLGoDeadcodeDrop | 74693.1 ms | 72742.3 ms | 1950.8 ms | 57710.0 ms |
| Aws_restjson | LLGoNoLTO | 59641.2 ms | 57478.3 ms | 2162.9 ms | 55222.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 50175.2 ms | 48934.5 ms | 1240.6 ms | 44283.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 48860.3 ms | 47622.3 ms | 1238.1 ms | 42018.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 46296.9 ms | 44554.6 ms | 1742.3 ms | 33283.5 ms |
| XGo | LLGoNoLTO | 45908.3 ms | 44026.3 ms | 1882.0 ms | 31521.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 41843.4 ms | 40699.7 ms | 1143.7 ms | 36249.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 40976.5 ms | 39803.2 ms | 1173.3 ms | 35135.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 39805.0 ms | 38525.7 ms | 1279.3 ms | 36955.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 37560.6 ms | 36379.4 ms | 1181.2 ms | 31682.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 37408.2 ms | 35690.5 ms | 1717.7 ms | 36511.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34619.5 ms | 33125.4 ms | 1494.1 ms | 36392.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34510.3 ms | 33486.7 ms | 1023.6 ms | 29998.9 ms |
| IXGo | Go | 34362.0 ms | 32152.6 ms | 2209.4 ms | 20006.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 29279.4 ms | 28142.3 ms | 1137.1 ms | 30234.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28351.0 ms | 27321.6 ms | 1029.4 ms | 25199.8 ms |
| Etcdctl | Go | 26658.5 ms | 25062.3 ms | 1596.2 ms | 18202.3 ms |
| Uber_zap | LLGoNoLTO | 24223.2 ms | 22679.3 ms | 1543.9 ms | 14216.1 ms |
| K8s_workqueue | LLGoNoLTO | 21374.9 ms | 19939.1 ms | 1435.8 ms | 10477.1 ms |
| Toml | LLGoNoLTO | 17221.6 ms | 16156.1 ms | 1065.5 ms | 15317.7 ms |
| Toml | LLGoDeadcodeDrop | 14535.5 ms | 13569.6 ms | 965.9 ms | 8781.8 ms |
| Gorm_schema | LLGoNoLTO | 13299.6 ms | 12300.9 ms | 998.7 ms | 6478.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11519.7 ms | 10520.0 ms | 999.7 ms | 10621.1 ms |
| Dustin_humanize | LLGoNoLTO | 10900.4 ms | 9851.4 ms | 1049.0 ms | 8125.8 ms |
| Aws_restjson | Go | 7384.2 ms | 6836.3 ms | 547.9 ms | 9960.7 ms |
| XGo | Go | 5384.3 ms | 5025.0 ms | 359.2 ms | 3053.8 ms |
| Gorm_schema | Go | 3169.6 ms | 2984.4 ms | 185.3 ms | 3091.5 ms |
| Uber_zap | Go | 2625.0 ms | 2424.5 ms | 200.5 ms | 1805.3 ms |
| K8s_workqueue | Go | 1808.2 ms | 1606.4 ms | 201.8 ms | 4067.8 ms |
| Dustin_humanize | Go | 638.2 ms | 549.7 ms | 88.5 ms | 769.0 ms |
| Toml | Go | 537.0 ms | 435.4 ms | 101.6 ms | 542.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1209389.0 ms | 1083969.2 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1121903.3 ms | 990302.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1074920.1 ms | 955352.7 ms | 9 |
| LLGoDeadcodeDrop | 647734.8 ms | 548232.2 ms | 9 |
| LLGoNoLTO | 485613.2 ms | 382799.0 ms | 9 |
| Go | 82567.1 ms | 61499.2 ms | 9 |

Dependency download details are in `download-timings.log`.
