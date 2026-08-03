## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 513398.4 ms | 505606.9 ms | 7791.5 ms | 450387.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 483814.0 ms | 476231.0 ms | 7583.0 ms | 441907.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 473904.4 ms | 468057.2 ms | 5847.2 ms | 441853.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 455008.9 ms | 448548.9 ms | 6460.0 ms | 413145.8 ms |
| IXGo | LLGoDeadcodeDrop | 370121.8 ms | 365204.8 ms | 4917.1 ms | 335744.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 361263.4 ms | 354917.9 ms | 6345.5 ms | 343641.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 323324.3 ms | 319583.1 ms | 3741.2 ms | 283357.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 317709.2 ms | 313970.0 ms | 3739.2 ms | 277091.8 ms |
| IXGo | LLGoNoLTO | 301227.3 ms | 296679.1 ms | 4548.2 ms | 262584.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 217060.2 ms | 214137.6 ms | 2922.6 ms | 176255.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 212561.4 ms | 208456.1 ms | 4105.3 ms | 219949.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 211519.4 ms | 208141.7 ms | 3377.7 ms | 189554.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 210061.7 ms | 206946.8 ms | 3114.9 ms | 185952.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 194026.5 ms | 190320.9 ms | 3705.6 ms | 189456.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 184624.6 ms | 181430.4 ms | 3194.2 ms | 179782.4 ms |
| XGo | LLGoNoLTO | 160875.9 ms | 157989.5 ms | 2886.4 ms | 148808.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 150536.7 ms | 147502.7 ms | 3033.9 ms | 133403.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 134262.7 ms | 131434.6 ms | 2828.1 ms | 133672.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 131502.8 ms | 128634.2 ms | 2868.6 ms | 130328.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130372.0 ms | 127967.7 ms | 2404.2 ms | 111635.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 128780.5 ms | 125867.2 ms | 2913.3 ms | 119881.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 117930.9 ms | 115281.0 ms | 2649.9 ms | 109515.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 103042.5 ms | 100733.1 ms | 2309.4 ms | 86148.7 ms |
| XGo | LLGoDeadcodeDrop | 102478.4 ms | 99551.8 ms | 2926.5 ms | 87865.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 100161.8 ms | 97621.3 ms | 2540.5 ms | 94468.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 93936.9 ms | 91391.3 ms | 2545.6 ms | 117176.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 91733.2 ms | 89756.9 ms | 1976.3 ms | 96747.6 ms |
| Etcdctl | LLGoNoLTO | 86682.9 ms | 83770.8 ms | 2912.1 ms | 53805.5 ms |
| Aws_restjson | LLGoNoLTO | 80630.2 ms | 78273.9 ms | 2356.3 ms | 63885.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 77403.7 ms | 75630.2 ms | 1773.6 ms | 74768.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 73223.6 ms | 71480.3 ms | 1743.3 ms | 78765.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 71530.7 ms | 69879.8 ms | 1650.9 ms | 62047.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 68219.7 ms | 66596.7 ms | 1623.0 ms | 68726.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 59588.0 ms | 57938.7 ms | 1649.4 ms | 52557.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 53899.7 ms | 52375.3 ms | 1524.4 ms | 61088.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51720.3 ms | 50276.9 ms | 1443.4 ms | 42268.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 43025.6 ms | 40767.3 ms | 2258.3 ms | 35078.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 42299.5 ms | 40806.6 ms | 1493.0 ms | 39702.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 40992.1 ms | 39542.0 ms | 1450.2 ms | 29150.7 ms |
| IXGo | Go | 35504.9 ms | 33211.0 ms | 2293.9 ms | 10752.0 ms |
| Uber_zap | LLGoNoLTO | 34774.6 ms | 32760.9 ms | 2013.7 ms | 19100.2 ms |
| K8s_workqueue | LLGoNoLTO | 32468.9 ms | 30472.6 ms | 1996.3 ms | 24025.8 ms |
| Toml | LLGoDeadcodeDrop | 30124.3 ms | 28646.0 ms | 1478.3 ms | 34398.9 ms |
| Toml | LLGoNoLTO | 20431.5 ms | 18939.4 ms | 1492.1 ms | 21684.0 ms |
| Gorm_schema | LLGoNoLTO | 19262.7 ms | 17917.6 ms | 1345.1 ms | 9704.5 ms |
| Etcdctl | Go | 18920.9 ms | 17986.3 ms | 934.7 ms | 13393.4 ms |
| Dustin_humanize | LLGoNoLTO | 15224.3 ms | 13916.2 ms | 1308.2 ms | 15839.5 ms |
| XGo | Go | 10732.2 ms | 10230.8 ms | 501.4 ms | 8804.4 ms |
| Gorm_schema | Go | 6452.2 ms | 6118.6 ms | 333.6 ms | 4537.3 ms |
| Aws_restjson | Go | 6035.4 ms | 5590.0 ms | 445.4 ms | 8129.6 ms |
| Uber_zap | Go | 3900.4 ms | 3658.5 ms | 241.9 ms | 5971.1 ms |
| K8s_workqueue | Go | 2646.5 ms | 2310.5 ms | 336.0 ms | 1186.5 ms |
| Dustin_humanize | Go | 815.2 ms | 717.3 ms | 98.0 ms | 1004.4 ms |
| Toml | Go | 691.4 ms | 575.0 ms | 116.5 ms | 531.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1792639.5 ms | 1653732.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1745774.3 ms | 1629070.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1676287.7 ms | 1514586.3 ms | 9 |
| LLGoDeadcodeDrop | 1210462.4 ms | 1130087.5 ms | 9 |
| LLGoNoLTO | 751578.3 ms | 619437.7 ms | 9 |
| Go | 85699.1 ms | 54310.3 ms | 9 |

Dependency download details are in `download-timings.log`.
