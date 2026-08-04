## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 473394.5 ms | 465493.7 ms | 7900.9 ms | 424566.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 375914.3 ms | 371286.5 ms | 4627.8 ms | 334958.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 353331.0 ms | 348862.9 ms | 4468.1 ms | 313788.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 300396.3 ms | 294849.6 ms | 5546.7 ms | 289175.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283410.5 ms | 279331.9 ms | 4078.6 ms | 257895.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 275171.5 ms | 271791.4 ms | 3380.1 ms | 244082.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 266853.5 ms | 263491.6 ms | 3361.8 ms | 228489.1 ms |
| IXGo | LLGoDeadcodeDrop | 243436.2 ms | 239417.1 ms | 4019.0 ms | 205824.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 192751.7 ms | 189484.9 ms | 3266.8 ms | 188492.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 190692.6 ms | 187701.3 ms | 2991.3 ms | 170903.0 ms |
| Uber_zap | LLGoNoLTO | 190673.3 ms | 186345.8 ms | 4327.5 ms | 200132.5 ms |
| Etcdctl | LLGoNoLTO | 168298.6 ms | 164776.0 ms | 3522.5 ms | 126623.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 167577.2 ms | 164624.3 ms | 2952.9 ms | 153101.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 155827.7 ms | 153169.2 ms | 2658.5 ms | 150824.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 150569.1 ms | 147487.5 ms | 3081.6 ms | 137867.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 145921.4 ms | 143331.8 ms | 2589.6 ms | 141673.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 137364.7 ms | 134484.7 ms | 2880.0 ms | 120526.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 136633.1 ms | 134169.9 ms | 2463.2 ms | 118819.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 131438.9 ms | 128530.4 ms | 2908.5 ms | 116061.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 124983.3 ms | 122532.9 ms | 2450.4 ms | 110247.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 124291.2 ms | 121250.5 ms | 3040.7 ms | 110401.6 ms |
| IXGo | LLGoNoLTO | 111864.6 ms | 107810.7 ms | 4054.0 ms | 92028.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101086.7 ms | 98729.7 ms | 2357.0 ms | 90073.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 89799.8 ms | 87709.7 ms | 2090.1 ms | 73625.0 ms |
| XGo | LLGoDeadcodeDrop | 69595.5 ms | 67303.4 ms | 2292.1 ms | 47535.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68097.3 ms | 66609.8 ms | 1487.5 ms | 61258.4 ms |
| XGo | LLGoNoLTO | 67074.5 ms | 64839.0 ms | 2235.5 ms | 44342.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 66407.9 ms | 64499.8 ms | 1908.0 ms | 59565.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 61659.9 ms | 59557.6 ms | 2102.3 ms | 46508.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61106.9 ms | 59652.8 ms | 1454.1 ms | 51904.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 59449.9 ms | 57959.2 ms | 1490.7 ms | 53545.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 52564.7 ms | 50289.1 ms | 2275.6 ms | 42480.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 50034.4 ms | 48653.5 ms | 1380.9 ms | 47147.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49634.8 ms | 48185.7 ms | 1449.1 ms | 45417.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 43383.1 ms | 41930.0 ms | 1453.1 ms | 43024.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42453.9 ms | 41237.5 ms | 1216.4 ms | 36035.6 ms |
| IXGo | Go | 37984.8 ms | 35603.2 ms | 2381.6 ms | 11970.8 ms |
| Aws_restjson | LLGoNoLTO | 37072.4 ms | 34923.0 ms | 2149.4 ms | 22957.3 ms |
| Etcdctl | Go | 35550.2 ms | 33717.5 ms | 1832.7 ms | 35735.0 ms |
| K8s_workqueue | LLGoNoLTO | 34312.8 ms | 32186.8 ms | 2126.0 ms | 35611.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32427.5 ms | 31285.9 ms | 1141.7 ms | 26336.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 26684.8 ms | 25487.2 ms | 1197.7 ms | 17469.0 ms |
| Gorm_schema | LLGoNoLTO | 26381.7 ms | 25207.8 ms | 1173.9 ms | 17065.8 ms |
| Toml | LLGoNoLTO | 23887.5 ms | 22516.5 ms | 1371.0 ms | 23314.4 ms |
| Toml | LLGoDeadcodeDrop | 23461.1 ms | 22144.9 ms | 1316.2 ms | 22540.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12720.4 ms | 11653.7 ms | 1066.7 ms | 6210.2 ms |
| Dustin_humanize | LLGoNoLTO | 11653.3 ms | 10613.8 ms | 1039.5 ms | 5472.8 ms |
| Aws_restjson | Go | 9032.8 ms | 8458.6 ms | 574.2 ms | 9480.3 ms |
| XGo | Go | 7329.6 ms | 6913.3 ms | 416.3 ms | 6307.3 ms |
| Gorm_schema | Go | 4105.9 ms | 3879.6 ms | 226.3 ms | 4184.1 ms |
| Uber_zap | Go | 3589.9 ms | 3341.7 ms | 248.2 ms | 4158.6 ms |
| K8s_workqueue | Go | 1782.7 ms | 1603.3 ms | 179.4 ms | 812.4 ms |
| Dustin_humanize | Go | 781.5 ms | 668.7 ms | 112.8 ms | 725.9 ms |
| Toml | Go | 707.8 ms | 584.7 ms | 123.1 ms | 1011.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1544917.7 ms | 1393164.7 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1440465.1 ms | 1300937.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1373153.6 ms | 1242202.6 ms | 9 |
| LLGoDeadcodeDrop | 781990.9 ms | 652072.5 ms | 9 |
| LLGoNoLTO | 671218.7 ms | 567548.2 ms | 9 |
| Go | 100865.2 ms | 74386.3 ms | 9 |

Dependency download details are in `download-timings.log`.
