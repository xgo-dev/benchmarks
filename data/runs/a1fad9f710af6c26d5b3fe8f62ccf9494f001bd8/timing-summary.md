## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 478558.8 ms | 469393.0 ms | 9165.8 ms | 297019.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 384855.0 ms | 378660.9 ms | 6194.1 ms | 274406.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 380919.8 ms | 374465.4 ms | 6454.3 ms | 276001.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 324059.8 ms | 318793.8 ms | 5266.0 ms | 215144.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 309580.8 ms | 305003.4 ms | 4577.3 ms | 208745.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 309129.5 ms | 304371.9 ms | 4757.6 ms | 208023.9 ms |
| IXGo | LLGoDeadcodeDrop | 291577.3 ms | 286153.9 ms | 5423.3 ms | 91433.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 195546.5 ms | 191353.9 ms | 4192.6 ms | 138542.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 192784.6 ms | 188867.5 ms | 3917.1 ms | 57633.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 183863.7 ms | 178745.1 ms | 5118.6 ms | 112430.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 182642.0 ms | 179195.8 ms | 3446.2 ms | 134518.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 162654.9 ms | 159257.0 ms | 3397.9 ms | 131443.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 156586.8 ms | 152643.1 ms | 3943.7 ms | 51219.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140780.7 ms | 137735.7 ms | 3045.0 ms | 112267.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 140048.8 ms | 136698.3 ms | 3350.5 ms | 92650.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 136241.0 ms | 132863.9 ms | 3377.2 ms | 99846.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 125475.6 ms | 122624.8 ms | 2850.8 ms | 96384.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108139.2 ms | 105434.7 ms | 2704.5 ms | 87049.6 ms |
| XGo | LLGoNoLTO | 97400.8 ms | 94705.4 ms | 2695.3 ms | 30935.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96132.0 ms | 93636.0 ms | 2496.1 ms | 79736.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 93533.8 ms | 90901.2 ms | 2632.7 ms | 69352.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 90992.4 ms | 88333.6 ms | 2658.7 ms | 68621.0 ms |
| Etcdctl | LLGoNoLTO | 81063.9 ms | 77724.6 ms | 3339.3 ms | 28366.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 66657.9 ms | 64184.6 ms | 2473.2 ms | 26778.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 66592.0 ms | 64436.8 ms | 2155.3 ms | 45045.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65110.1 ms | 63380.2 ms | 1729.9 ms | 49052.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64704.7 ms | 62946.4 ms | 1758.4 ms | 50466.4 ms |
| IXGo | LLGoNoLTO | 64297.9 ms | 60586.6 ms | 3711.2 ms | 22284.1 ms |
| XGo | LLGoDeadcodeDrop | 61475.2 ms | 58586.5 ms | 2888.7 ms | 22333.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 59160.8 ms | 57184.9 ms | 1975.9 ms | 39697.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 56431.0 ms | 54364.0 ms | 2067.0 ms | 34908.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53336.2 ms | 51758.1 ms | 1578.2 ms | 43704.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47093.9 ms | 45493.5 ms | 1600.4 ms | 35647.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 45243.5 ms | 43752.6 ms | 1490.9 ms | 34993.2 ms |
| IXGo | Go | 42430.3 ms | 39369.0 ms | 3061.3 ms | 12154.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 41450.9 ms | 39226.2 ms | 2224.7 ms | 13779.1 ms |
| Gorm_schema | LLGoNoLTO | 32185.0 ms | 30665.6 ms | 1519.4 ms | 10494.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32101.9 ms | 30795.1 ms | 1306.7 ms | 25375.3 ms |
| Etcdctl | Go | 31509.3 ms | 29484.3 ms | 2025.1 ms | 9420.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29775.4 ms | 28176.9 ms | 1598.5 ms | 9852.1 ms |
| Aws_restjson | LLGoNoLTO | 28361.6 ms | 26138.1 ms | 2223.5 ms | 10293.3 ms |
| Uber_zap | LLGoNoLTO | 25583.9 ms | 23442.7 ms | 2141.2 ms | 9327.0 ms |
| K8s_workqueue | LLGoNoLTO | 23391.4 ms | 21346.5 ms | 2044.9 ms | 8605.2 ms |
| Toml | LLGoNoLTO | 18540.3 ms | 17174.2 ms | 1366.1 ms | 6879.2 ms |
| Toml | LLGoDeadcodeDrop | 18372.9 ms | 17016.8 ms | 1356.1 ms | 6962.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11504.3 ms | 10300.7 ms | 1203.5 ms | 4743.5 ms |
| Dustin_humanize | LLGoNoLTO | 10443.7 ms | 9267.2 ms | 1176.5 ms | 4080.8 ms |
| XGo | Go | 6212.2 ms | 5813.6 ms | 398.5 ms | 2400.2 ms |
| Uber_zap | Go | 5573.7 ms | 5124.7 ms | 449.0 ms | 1921.9 ms |
| Aws_restjson | Go | 4947.8 ms | 4531.1 ms | 416.7 ms | 1923.1 ms |
| Gorm_schema | Go | 3388.5 ms | 3182.0 ms | 206.6 ms | 1486.0 ms |
| K8s_workqueue | Go | 1757.5 ms | 1572.2 ms | 185.3 ms | 805.6 ms |
| Dustin_humanize | Go | 638.6 ms | 543.4 ms | 95.2 ms | 323.4 ms |
| Toml | Go | 544.4 ms | 438.9 ms | 105.5 ms | 309.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1494958.4 ms | 1061878.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1422596.2 ms | 1000884.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1415373.8 ms | 998314.3 ms | 9 |
| LLGoDeadcodeDrop | 870185.2 ms | 284734.5 ms | 9 |
| LLGoNoLTO | 381268.4 ms | 131266.2 ms | 9 |
| Go | 97002.3 ms | 30743.9 ms | 9 |

Dependency download details are in `download-timings.log`.
