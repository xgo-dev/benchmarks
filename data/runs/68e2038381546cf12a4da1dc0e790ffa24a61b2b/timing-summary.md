## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 548659.3 ms | 541767.6 ms | 6891.8 ms | 388197.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 542177.4 ms | 535383.6 ms | 6793.8 ms | 386196.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 534933.8 ms | 528042.6 ms | 6891.1 ms | 376540.2 ms |
| IXGo | LLGoDeadcodeDrop | 321758.3 ms | 315561.7 ms | 6196.6 ms | 128690.6 ms |
| IXGo | LLGoNoLTO | 317220.8 ms | 311085.7 ms | 6135.1 ms | 125757.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 261908.8 ms | 256767.4 ms | 5141.4 ms | 153620.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 261656.0 ms | 256519.4 ms | 5136.6 ms | 153775.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 260356.5 ms | 255334.4 ms | 5022.2 ms | 154892.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 205527.7 ms | 200659.4 ms | 4868.4 ms | 67767.5 ms |
| Etcdctl | LLGoNoLTO | 201523.3 ms | 196825.7 ms | 4697.5 ms | 65924.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 171459.3 ms | 167694.0 ms | 3765.3 ms | 120669.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 168140.8 ms | 164545.7 ms | 3595.1 ms | 119163.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 168044.6 ms | 164456.9 ms | 3587.7 ms | 117896.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 142792.2 ms | 140279.7 ms | 2512.5 ms | 111098.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 135507.6 ms | 132935.5 ms | 2572.1 ms | 102061.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 129771.1 ms | 127232.4 ms | 2538.8 ms | 97666.9 ms |
| XGo | LLGoDeadcodeDrop | 101385.2 ms | 98209.5 ms | 3175.7 ms | 39147.6 ms |
| XGo | LLGoNoLTO | 100319.0 ms | 97131.7 ms | 3187.3 ms | 38804.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99768.6 ms | 97615.3 ms | 2153.3 ms | 77554.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 99670.3 ms | 97539.2 ms | 2131.1 ms | 76422.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 99122.3 ms | 97051.5 ms | 2070.9 ms | 77160.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 95105.4 ms | 92908.6 ms | 2196.8 ms | 70376.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94751.0 ms | 92674.8 ms | 2076.2 ms | 73904.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 92455.7 ms | 90312.4 ms | 2143.4 ms | 68429.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 78870.4 ms | 76486.7 ms | 2383.7 ms | 38633.4 ms |
| Aws_restjson | LLGoNoLTO | 77383.7 ms | 75069.1 ms | 2314.6 ms | 38075.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61669.1 ms | 60008.6 ms | 1660.4 ms | 43858.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 58684.6 ms | 57159.8 ms | 1524.8 ms | 41906.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 53181.9 ms | 51299.4 ms | 1882.5 ms | 23322.1 ms |
| Uber_zap | LLGoNoLTO | 53094.6 ms | 51198.7 ms | 1895.9 ms | 23214.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51811.5 ms | 50238.3 ms | 1573.1 ms | 33860.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 47715.0 ms | 46465.3 ms | 1249.7 ms | 37076.1 ms |
| K8s_workqueue | LLGoNoLTO | 46820.5 ms | 44865.7 ms | 1954.8 ms | 21567.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46803.2 ms | 44936.8 ms | 1866.5 ms | 21694.9 ms |
| IXGo | Go | 41612.2 ms | 38768.2 ms | 2843.9 ms | 11796.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 40199.9 ms | 39000.0 ms | 1199.9 ms | 29393.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 40044.1 ms | 38807.3 ms | 1236.8 ms | 29400.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34162.9 ms | 32761.9 ms | 1401.0 ms | 12135.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33117.5 ms | 32020.7 ms | 1096.9 ms | 26222.1 ms |
| Gorm_schema | LLGoNoLTO | 32718.1 ms | 31296.0 ms | 1422.1 ms | 11700.5 ms |
| Etcdctl | Go | 31600.7 ms | 29578.8 ms | 2021.8 ms | 9415.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24338.7 ms | 23344.2 ms | 994.5 ms | 17324.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 23347.1 ms | 22350.4 ms | 996.7 ms | 16651.3 ms |
| Toml | LLGoNoLTO | 21088.8 ms | 19974.4 ms | 1114.4 ms | 7789.2 ms |
| Toml | LLGoDeadcodeDrop | 20983.3 ms | 19812.7 ms | 1170.6 ms | 8028.8 ms |
| XGo | Go | 17895.2 ms | 16768.0 ms | 1127.2 ms | 5132.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12953.1 ms | 12010.0 ms | 943.1 ms | 5716.2 ms |
| Dustin_humanize | LLGoNoLTO | 12339.9 ms | 11400.0 ms | 939.9 ms | 5470.1 ms |
| Aws_restjson | Go | 7448.1 ms | 6831.9 ms | 616.3 ms | 2905.1 ms |
| Gorm_schema | Go | 5586.0 ms | 5206.7 ms | 379.3 ms | 2069.8 ms |
| Uber_zap | Go | 5012.3 ms | 4676.6 ms | 335.7 ms | 1907.2 ms |
| K8s_workqueue | Go | 4294.2 ms | 3887.5 ms | 406.7 ms | 1481.1 ms |
| Toml | Go | 1822.7 ms | 1675.2 ms | 147.5 ms | 820.9 ms |
| Dustin_humanize | Go | 750.1 ms | 635.7 ms | 114.4 ms | 348.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1447405.3 ms | 1026883.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1421476.5 ms | 988624.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1418326.5 ms | 985811.4 ms | 9 |
| LLGoDeadcodeDrop | 875626.1 ms | 345136.6 ms | 9 |
| LLGoNoLTO | 862508.5 ms | 338303.6 ms | 9 |
| Go | 116021.6 ms | 35877.2 ms | 9 |

Dependency download details are in `download-timings.log`.
