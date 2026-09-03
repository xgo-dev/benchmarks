## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 596564.1 ms | 589406.8 ms | 7157.4 ms | 413984.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 593226.2 ms | 586139.7 ms | 7086.4 ms | 404357.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 579997.1 ms | 573124.0 ms | 6873.2 ms | 396786.0 ms |
| IXGo | LLGoNoLTO | 361937.0 ms | 355797.2 ms | 6139.8 ms | 134863.2 ms |
| IXGo | LLGoDeadcodeDrop | 357335.3 ms | 351095.4 ms | 6239.9 ms | 132646.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 262956.9 ms | 257792.2 ms | 5164.7 ms | 161487.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 256085.7 ms | 251029.0 ms | 5056.6 ms | 158826.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 254626.3 ms | 249887.0 ms | 4739.4 ms | 160342.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 186454.2 ms | 181881.6 ms | 4572.6 ms | 63611.3 ms |
| Etcdctl | LLGoNoLTO | 186383.5 ms | 182079.7 ms | 4303.8 ms | 63726.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 175303.3 ms | 171821.2 ms | 3482.1 ms | 124465.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 173844.9 ms | 170522.9 ms | 3322.0 ms | 124294.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173483.2 ms | 170230.2 ms | 3253.0 ms | 124855.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159031.2 ms | 156702.2 ms | 2329.0 ms | 127300.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 136450.9 ms | 134147.4 ms | 2303.6 ms | 103222.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 135803.5 ms | 133540.2 ms | 2263.3 ms | 103295.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106044.0 ms | 104299.7 ms | 1744.4 ms | 82691.7 ms |
| XGo | LLGoDeadcodeDrop | 105631.9 ms | 102691.2 ms | 2940.7 ms | 41306.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101063.9 ms | 99327.1 ms | 1736.8 ms | 80126.4 ms |
| XGo | LLGoNoLTO | 100677.8 ms | 97959.5 ms | 2718.3 ms | 40127.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 99407.8 ms | 97667.4 ms | 1740.4 ms | 78859.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97723.8 ms | 95995.4 ms | 1728.4 ms | 74058.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95521.9 ms | 93744.8 ms | 1777.0 ms | 71471.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 87454.3 ms | 85766.4 ms | 1687.9 ms | 66140.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81195.4 ms | 79181.0 ms | 2014.4 ms | 40366.4 ms |
| Aws_restjson | LLGoNoLTO | 80188.7 ms | 78163.1 ms | 2025.6 ms | 40711.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62316.3 ms | 60997.2 ms | 1319.1 ms | 45366.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62106.6 ms | 60737.5 ms | 1369.0 ms | 44891.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 54528.4 ms | 53053.0 ms | 1475.3 ms | 24533.1 ms |
| Uber_zap | LLGoNoLTO | 53102.6 ms | 51679.5 ms | 1423.0 ms | 24122.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 50815.9 ms | 49572.7 ms | 1243.1 ms | 33657.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 49683.9 ms | 48639.6 ms | 1044.4 ms | 39367.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49121.3 ms | 47688.2 ms | 1433.1 ms | 25040.7 ms |
| K8s_workqueue | LLGoNoLTO | 46832.1 ms | 45387.6 ms | 1444.5 ms | 22460.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 43695.1 ms | 42673.2 ms | 1021.9 ms | 32673.7 ms |
| IXGo | Go | 42643.3 ms | 39539.2 ms | 3104.2 ms | 12223.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 41711.1 ms | 40726.7 ms | 984.4 ms | 31118.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33834.2 ms | 32605.6 ms | 1228.6 ms | 12045.2 ms |
| Gorm_schema | LLGoNoLTO | 33416.8 ms | 32257.3 ms | 1159.4 ms | 11869.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32960.6 ms | 32166.2 ms | 794.4 ms | 26724.0 ms |
| Etcdctl | Go | 31660.4 ms | 29590.2 ms | 2070.2 ms | 9473.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24439.3 ms | 23658.1 ms | 781.2 ms | 17617.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 23452.3 ms | 22684.1 ms | 768.2 ms | 17089.6 ms |
| Toml | LLGoNoLTO | 20573.7 ms | 19696.3 ms | 877.5 ms | 7756.3 ms |
| Toml | LLGoDeadcodeDrop | 20514.0 ms | 19657.3 ms | 856.7 ms | 7643.4 ms |
| XGo | Go | 18543.8 ms | 17261.7 ms | 1282.1 ms | 5688.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11983.3 ms | 11312.0 ms | 671.3 ms | 5312.7 ms |
| Dustin_humanize | LLGoNoLTO | 11974.5 ms | 11331.5 ms | 642.9 ms | 5113.7 ms |
| Aws_restjson | Go | 7622.2 ms | 6918.0 ms | 704.3 ms | 3142.6 ms |
| Gorm_schema | Go | 5491.7 ms | 5103.9 ms | 387.8 ms | 2109.6 ms |
| Uber_zap | Go | 5128.7 ms | 4680.6 ms | 448.2 ms | 2041.5 ms |
| K8s_workqueue | Go | 4473.6 ms | 3992.5 ms | 481.1 ms | 1606.1 ms |
| Toml | Go | 1950.1 ms | 1683.5 ms | 266.5 ms | 892.2 ms |
| Dustin_humanize | Go | 799.0 ms | 647.0 ms | 152.0 ms | 375.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1517550.6 ms | 1082293.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1485018.0 ms | 1038057.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1473201.6 ms | 1024719.2 ms | 9 |
| LLGoDeadcodeDrop | 900598.1 ms | 352506.4 ms | 9 |
| LLGoNoLTO | 895086.6 ms | 350750.7 ms | 9 |
| Go | 118312.7 ms | 37553.5 ms | 9 |

Dependency download details are in `download-timings.log`.
