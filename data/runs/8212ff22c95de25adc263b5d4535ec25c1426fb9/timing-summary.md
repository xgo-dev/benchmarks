## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 425762.7 ms | 417817.6 ms | 7945.1 ms | 286064.1 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 389456.5 ms | 383829.0 ms | 5627.4 ms | 275257.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 380506.9 ms | 375026.4 ms | 5480.5 ms | 271295.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 316374.6 ms | 312273.1 ms | 4101.5 ms | 209517.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 315498.4 ms | 311393.4 ms | 4105.0 ms | 208190.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 314486.6 ms | 310339.5 ms | 4147.1 ms | 206985.8 ms |
| IXGo | LLGoDeadcodeDrop | 299202.5 ms | 294149.6 ms | 5052.9 ms | 92775.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 293961.2 ms | 288121.0 ms | 5840.2 ms | 170035.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 289089.7 ms | 284834.5 ms | 4255.2 ms | 83699.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 259865.6 ms | 255593.3 ms | 4272.3 ms | 162792.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 188061.0 ms | 184392.1 ms | 3668.9 ms | 109682.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 186621.7 ms | 183554.9 ms | 3066.8 ms | 135268.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 143216.5 ms | 140433.9 ms | 2782.6 ms | 113256.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 128792.5 ms | 126038.0 ms | 2754.5 ms | 96753.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111581.3 ms | 109120.5 ms | 2460.8 ms | 88878.7 ms |
| Toml | LLGoDeadcodeDrop | 102638.8 ms | 99857.9 ms | 2780.9 ms | 39505.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102493.1 ms | 99936.7 ms | 2556.4 ms | 82246.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97978.0 ms | 95597.1 ms | 2380.9 ms | 79855.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97864.4 ms | 95564.4 ms | 2300.0 ms | 79799.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 94101.9 ms | 91593.1 ms | 2508.8 ms | 70138.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93068.1 ms | 90622.9 ms | 2445.2 ms | 69926.7 ms |
| Etcdctl | LLGoNoLTO | 88058.0 ms | 84843.1 ms | 3214.9 ms | 30168.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 70830.1 ms | 69112.5 ms | 1717.5 ms | 51679.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68692.5 ms | 67058.5 ms | 1634.1 ms | 51875.7 ms |
| IXGo | LLGoNoLTO | 68462.7 ms | 64797.8 ms | 3664.8 ms | 23469.2 ms |
| XGo | LLGoDeadcodeDrop | 64797.5 ms | 62262.2 ms | 2535.3 ms | 23290.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64498.4 ms | 62208.1 ms | 2290.3 ms | 26350.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 60415.7 ms | 58492.0 ms | 1923.8 ms | 36558.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 56353.3 ms | 54781.2 ms | 1572.0 ms | 38846.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55962.2 ms | 54531.1 ms | 1431.1 ms | 45140.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46784.6 ms | 45327.5 ms | 1457.1 ms | 35869.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 46782.9 ms | 45301.8 ms | 1481.1 ms | 35873.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 46334.3 ms | 44169.5 ms | 2164.8 ms | 15800.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43568.5 ms | 42325.8 ms | 1242.7 ms | 36522.3 ms |
| XGo | LLGoNoLTO | 43100.9 ms | 40662.3 ms | 2438.6 ms | 16609.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35791.6 ms | 34371.4 ms | 1420.2 ms | 11378.8 ms |
| IXGo | Go | 35684.4 ms | 33387.9 ms | 2296.5 ms | 10728.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33398.9 ms | 32126.2 ms | 1272.7 ms | 26007.0 ms |
| Etcdctl | Go | 32887.6 ms | 31039.2 ms | 1848.3 ms | 9830.9 ms |
| K8s_workqueue | LLGoNoLTO | 29966.0 ms | 27851.9 ms | 2114.1 ms | 10328.0 ms |
| Aws_restjson | LLGoNoLTO | 29880.5 ms | 27827.9 ms | 2052.6 ms | 10734.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 29553.6 ms | 27636.0 ms | 1917.7 ms | 10406.4 ms |
| Uber_zap | LLGoNoLTO | 27158.3 ms | 25194.6 ms | 1963.7 ms | 9727.6 ms |
| Gorm_schema | LLGoNoLTO | 16044.3 ms | 14625.0 ms | 1419.3 ms | 5915.6 ms |
| Toml | LLGoNoLTO | 13472.7 ms | 12179.3 ms | 1293.3 ms | 5075.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12089.3 ms | 10880.4 ms | 1208.9 ms | 4903.8 ms |
| Dustin_humanize | LLGoNoLTO | 11883.5 ms | 10727.0 ms | 1156.4 ms | 4804.1 ms |
| XGo | Go | 9012.4 ms | 8543.8 ms | 468.6 ms | 3458.4 ms |
| Gorm_schema | Go | 5738.2 ms | 5380.3 ms | 357.9 ms | 2251.7 ms |
| Uber_zap | Go | 5646.2 ms | 5290.7 ms | 355.5 ms | 1963.2 ms |
| Aws_restjson | Go | 5021.5 ms | 4635.2 ms | 386.2 ms | 1940.2 ms |
| K8s_workqueue | Go | 1790.2 ms | 1601.5 ms | 188.6 ms | 827.2 ms |
| Dustin_humanize | Go | 641.4 ms | 543.8 ms | 97.6 ms | 317.3 ms |
| Toml | Go | 539.8 ms | 423.9 ms | 115.9 ms | 310.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1506992.9 ms | 1024541.4 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1482261.3 ms | 1061525.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1433225.5 ms | 988250.8 ms | 9 |
| LLGoDeadcodeDrop | 943995.8 ms | 308110.9 ms | 9 |
| LLGoNoLTO | 328026.9 ms | 116833.2 ms | 9 |
| Go | 96961.7 ms | 31627.7 ms | 9 |

Dependency download details are in `download-timings.log`.
