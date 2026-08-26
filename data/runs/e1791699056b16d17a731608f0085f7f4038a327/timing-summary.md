## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 690729.5 ms | 683237.2 ms | 7492.3 ms | 476257.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 685896.3 ms | 678271.2 ms | 7625.1 ms | 461649.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 630331.1 ms | 623077.3 ms | 7253.8 ms | 432421.4 ms |
| IXGo | LLGoDeadcodeDrop | 376648.4 ms | 370011.7 ms | 6636.7 ms | 138906.4 ms |
| IXGo | LLGoNoLTO | 362599.7 ms | 356114.6 ms | 6485.1 ms | 133657.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 294656.5 ms | 288990.4 ms | 5666.2 ms | 171628.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 288873.9 ms | 283177.9 ms | 5695.9 ms | 167865.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283684.6 ms | 278215.2 ms | 5469.4 ms | 165875.3 ms |
| Etcdctl | LLGoDeadcodeDrop | 220873.8 ms | 215796.7 ms | 5077.1 ms | 73536.5 ms |
| Etcdctl | LLGoNoLTO | 215685.4 ms | 210810.0 ms | 4875.4 ms | 71458.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 187708.4 ms | 183544.7 ms | 4163.7 ms | 131215.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 183712.7 ms | 179686.1 ms | 4026.6 ms | 130160.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 180249.5 ms | 176301.0 ms | 3948.5 ms | 126847.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159909.2 ms | 156820.1 ms | 3089.0 ms | 123868.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 151313.1 ms | 148363.1 ms | 2950.0 ms | 115442.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 143570.7 ms | 140557.9 ms | 3012.8 ms | 107489.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112068.1 ms | 109508.4 ms | 2559.7 ms | 85999.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 108701.7 ms | 106090.4 ms | 2611.3 ms | 84656.0 ms |
| XGo | LLGoDeadcodeDrop | 108443.9 ms | 104929.9 ms | 3514.1 ms | 42775.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 107005.0 ms | 104367.2 ms | 2637.8 ms | 83009.6 ms |
| XGo | LLGoNoLTO | 106544.3 ms | 103172.2 ms | 3372.1 ms | 42042.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 106110.0 ms | 103556.6 ms | 2553.3 ms | 83136.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 101825.4 ms | 99215.9 ms | 2609.5 ms | 75219.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101714.3 ms | 99167.9 ms | 2546.4 ms | 75138.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 85624.3 ms | 82772.0 ms | 2852.2 ms | 41321.1 ms |
| Aws_restjson | LLGoNoLTO | 84233.4 ms | 81396.0 ms | 2837.4 ms | 41338.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66034.2 ms | 64247.6 ms | 1786.6 ms | 47328.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65712.7 ms | 63837.4 ms | 1875.3 ms | 46730.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 58754.9 ms | 56424.2 ms | 2330.7 ms | 26300.2 ms |
| Uber_zap | LLGoNoLTO | 58186.3 ms | 55909.7 ms | 2276.7 ms | 26115.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55615.3 ms | 53862.2 ms | 1753.1 ms | 36525.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55553.5 ms | 53959.9 ms | 1593.5 ms | 43285.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 51175.3 ms | 48863.3 ms | 2312.0 ms | 24318.8 ms |
| K8s_workqueue | LLGoNoLTO | 51036.9 ms | 48724.7 ms | 2312.2 ms | 24052.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 46286.9 ms | 44790.4 ms | 1496.4 ms | 34027.9 ms |
| IXGo | Go | 45456.7 ms | 42436.1 ms | 3020.6 ms | 13008.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45448.9 ms | 43967.8 ms | 1481.0 ms | 33676.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 38496.9 ms | 36692.6 ms | 1804.3 ms | 13722.2 ms |
| Gorm_schema | LLGoNoLTO | 37448.2 ms | 35769.4 ms | 1678.8 ms | 13242.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34838.5 ms | 33553.6 ms | 1284.9 ms | 27584.5 ms |
| Etcdctl | Go | 33315.3 ms | 31322.9 ms | 1992.3 ms | 10187.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25990.1 ms | 24727.2 ms | 1263.0 ms | 18587.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25433.1 ms | 24180.7 ms | 1252.4 ms | 18084.7 ms |
| Toml | LLGoDeadcodeDrop | 23493.1 ms | 22117.3 ms | 1375.8 ms | 9105.1 ms |
| Toml | LLGoNoLTO | 22848.2 ms | 21443.4 ms | 1404.8 ms | 8773.2 ms |
| XGo | Go | 19163.1 ms | 18046.3 ms | 1116.8 ms | 5639.0 ms |
| Dustin_humanize | LLGoNoLTO | 13545.6 ms | 12466.7 ms | 1078.9 ms | 5930.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13511.8 ms | 12388.6 ms | 1123.2 ms | 6028.3 ms |
| Aws_restjson | Go | 7972.8 ms | 7294.3 ms | 678.5 ms | 3273.1 ms |
| Gorm_schema | Go | 5721.3 ms | 5366.7 ms | 354.6 ms | 2156.4 ms |
| Uber_zap | Go | 5265.4 ms | 4873.5 ms | 392.0 ms | 2042.6 ms |
| K8s_workqueue | Go | 4781.2 ms | 4320.2 ms | 461.1 ms | 1686.6 ms |
| Toml | Go | 2018.2 ms | 1784.1 ms | 234.1 ms | 912.9 ms |
| Dustin_humanize | Go | 792.7 ms | 663.6 ms | 129.1 ms | 375.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1667534.0 ms | 1138655.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1639197.3 ms | 1125397.8 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1632241.8 ms | 1139659.7 ms | 9 |
| LLGoDeadcodeDrop | 977022.5 ms | 376013.5 ms | 9 |
| LLGoNoLTO | 952128.1 ms | 366610.4 ms | 9 |
| Go | 124486.7 ms | 39280.8 ms | 9 |

Dependency download details are in `download-timings.log`.
