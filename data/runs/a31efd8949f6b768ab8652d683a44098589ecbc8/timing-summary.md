## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 409588.4 ms | 404691.5 ms | 4896.9 ms | 382901.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 384850.0 ms | 380222.5 ms | 4627.5 ms | 344853.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 372781.2 ms | 368287.7 ms | 4493.5 ms | 331878.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 343850.1 ms | 339101.8 ms | 4748.2 ms | 293779.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 337712.1 ms | 333479.6 ms | 4232.6 ms | 304137.6 ms |
| IXGo | LLGoDeadcodeDrop | 304563.8 ms | 298456.8 ms | 6107.0 ms | 256789.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 282631.8 ms | 279164.0 ms | 3467.8 ms | 247172.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 211700.7 ms | 207763.6 ms | 3937.1 ms | 175956.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 186484.7 ms | 183186.8 ms | 3297.9 ms | 183429.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 183546.3 ms | 180896.0 ms | 2650.3 ms | 156797.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 177523.2 ms | 174548.4 ms | 2974.8 ms | 154614.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 176770.4 ms | 173809.2 ms | 2961.3 ms | 155200.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 166710.7 ms | 162758.8 ms | 3952.0 ms | 146326.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 155517.4 ms | 152615.9 ms | 2901.5 ms | 154442.0 ms |
| Etcdctl | LLGoNoLTO | 152992.7 ms | 150153.1 ms | 2839.6 ms | 122457.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 152636.1 ms | 149250.7 ms | 3385.3 ms | 155185.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 119634.6 ms | 117175.3 ms | 2459.3 ms | 107614.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 119601.0 ms | 117056.2 ms | 2544.8 ms | 115599.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 116970.3 ms | 114360.0 ms | 2610.3 ms | 120529.3 ms |
| IXGo | LLGoNoLTO | 110274.9 ms | 107003.8 ms | 3271.1 ms | 84072.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 107567.6 ms | 105086.9 ms | 2480.7 ms | 97319.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 99032.7 ms | 96695.5 ms | 2337.3 ms | 88133.1 ms |
| XGo | LLGoDeadcodeDrop | 94066.0 ms | 90601.7 ms | 3464.3 ms | 87268.2 ms |
| XGo | LLGoNoLTO | 91237.1 ms | 87804.9 ms | 3432.2 ms | 86526.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 87578.0 ms | 85178.7 ms | 2399.3 ms | 66190.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 85153.3 ms | 82754.1 ms | 2399.2 ms | 77809.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 83285.5 ms | 81455.0 ms | 1830.5 ms | 84422.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 81257.0 ms | 79639.7 ms | 1617.3 ms | 94297.7 ms |
| Toml | LLGoDeadcodeDrop | 80564.4 ms | 78124.1 ms | 2440.3 ms | 76193.8 ms |
| Aws_restjson | LLGoNoLTO | 80314.4 ms | 77972.6 ms | 2341.8 ms | 78695.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 76364.3 ms | 74544.0 ms | 1820.3 ms | 78451.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 57932.5 ms | 56404.2 ms | 1528.3 ms | 51601.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 52677.8 ms | 51197.5 ms | 1480.3 ms | 49869.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 51031.9 ms | 49518.5 ms | 1513.5 ms | 58952.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 50833.4 ms | 49276.9 ms | 1556.6 ms | 58472.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 49809.2 ms | 48409.4 ms | 1399.9 ms | 43751.4 ms |
| IXGo | Go | 46163.3 ms | 43495.0 ms | 2668.3 ms | 26245.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 40899.6 ms | 38853.9 ms | 2045.7 ms | 40558.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 38159.2 ms | 36699.9 ms | 1459.3 ms | 43337.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 37990.2 ms | 36670.6 ms | 1319.6 ms | 34490.1 ms |
| Etcdctl | Go | 35133.5 ms | 33184.8 ms | 1948.7 ms | 17374.9 ms |
| Uber_zap | LLGoNoLTO | 31781.6 ms | 29885.1 ms | 1896.5 ms | 14932.4 ms |
| K8s_workqueue | LLGoNoLTO | 28198.0 ms | 26313.3 ms | 1884.7 ms | 14155.9 ms |
| Gorm_schema | LLGoNoLTO | 21758.3 ms | 20249.3 ms | 1509.0 ms | 17199.4 ms |
| Toml | LLGoNoLTO | 18051.3 ms | 16727.6 ms | 1323.7 ms | 19386.1 ms |
| Dustin_humanize | LLGoNoLTO | 17261.9 ms | 15958.6 ms | 1303.3 ms | 25991.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 16641.4 ms | 15347.2 ms | 1294.2 ms | 24415.4 ms |
| XGo | Go | 7216.3 ms | 6805.5 ms | 410.8 ms | 4821.3 ms |
| Gorm_schema | Go | 6759.5 ms | 6336.8 ms | 422.7 ms | 6413.8 ms |
| Aws_restjson | Go | 5073.2 ms | 4659.0 ms | 414.2 ms | 1927.2 ms |
| Uber_zap | Go | 3619.1 ms | 3387.3 ms | 231.8 ms | 3230.7 ms |
| K8s_workqueue | Go | 2129.5 ms | 1922.9 ms | 206.7 ms | 1614.3 ms |
| Dustin_humanize | Go | 949.6 ms | 830.6 ms | 119.0 ms | 1166.3 ms |
| Toml | Go | 715.2 ms | 590.2 ms | 125.0 ms | 754.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1548398.4 ms | 1423599.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1463386.5 ms | 1330386.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1457735.8 ms | 1360995.1 ms | 9 |
| LLGoDeadcodeDrop | 924396.1 ms | 827763.4 ms | 9 |
| LLGoNoLTO | 551870.2 ms | 463416.6 ms | 9 |
| Go | 107759.1 ms | 63548.1 ms | 9 |

Dependency download details are in `download-timings.log`.
