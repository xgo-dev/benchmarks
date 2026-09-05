## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 609385.6 ms | 602115.5 ms | 7270.0 ms | 391047.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 601805.4 ms | 594556.0 ms | 7249.5 ms | 389000.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 592570.7 ms | 585701.3 ms | 6869.4 ms | 385928.8 ms |
| IXGo | LLGoDeadcodeDrop | 384616.9 ms | 378281.6 ms | 6335.3 ms | 126727.5 ms |
| IXGo | LLGoNoLTO | 376572.9 ms | 370612.6 ms | 5960.3 ms | 125991.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 256226.0 ms | 251188.6 ms | 5037.4 ms | 156563.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 252383.1 ms | 247295.4 ms | 5087.8 ms | 154987.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 251522.8 ms | 246418.3 ms | 5104.5 ms | 155946.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 185263.7 ms | 180863.5 ms | 4400.3 ms | 61995.7 ms |
| Etcdctl | LLGoNoLTO | 184387.9 ms | 180246.2 ms | 4141.7 ms | 61812.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 172577.9 ms | 169211.9 ms | 3365.9 ms | 122595.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 172407.0 ms | 169002.9 ms | 3404.0 ms | 121695.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 171128.5 ms | 167746.5 ms | 3381.9 ms | 120270.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140050.1 ms | 137469.8 ms | 2580.3 ms | 105259.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130076.0 ms | 127718.7 ms | 2357.3 ms | 94811.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127487.0 ms | 125145.4 ms | 2341.5 ms | 91993.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105256.3 ms | 103418.9 ms | 1837.5 ms | 81262.0 ms |
| XGo | LLGoDeadcodeDrop | 102774.6 ms | 99978.7 ms | 2795.9 ms | 39905.5 ms |
| XGo | LLGoNoLTO | 101184.5 ms | 98277.8 ms | 2906.7 ms | 38578.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 100329.9 ms | 98556.9 ms | 1773.0 ms | 79368.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99275.6 ms | 97384.8 ms | 1890.7 ms | 78157.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96579.2 ms | 94737.8 ms | 1841.4 ms | 71296.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 94460.0 ms | 92759.0 ms | 1701.0 ms | 70565.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 87084.8 ms | 85227.6 ms | 1857.2 ms | 65546.1 ms |
| Aws_restjson | LLGoNoLTO | 80250.7 ms | 78137.0 ms | 2113.6 ms | 38661.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80157.7 ms | 77990.3 ms | 2167.4 ms | 38319.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61902.5 ms | 60430.0 ms | 1472.5 ms | 43861.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61809.5 ms | 60445.3 ms | 1364.3 ms | 44473.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 54446.2 ms | 52938.4 ms | 1507.8 ms | 24315.8 ms |
| Uber_zap | LLGoNoLTO | 53491.2 ms | 52033.3 ms | 1457.9 ms | 24399.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52014.1 ms | 50634.7 ms | 1379.4 ms | 33550.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 49756.4 ms | 48586.3 ms | 1170.0 ms | 38979.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46929.6 ms | 45381.1 ms | 1548.4 ms | 22095.7 ms |
| K8s_workqueue | LLGoNoLTO | 46077.0 ms | 44533.0 ms | 1544.1 ms | 21738.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42717.4 ms | 41490.7 ms | 1226.7 ms | 30977.8 ms |
| IXGo | Go | 42136.0 ms | 39123.9 ms | 3012.1 ms | 12160.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 42039.5 ms | 40886.1 ms | 1153.4 ms | 31035.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35499.1 ms | 34253.7 ms | 1245.4 ms | 11761.2 ms |
| Gorm_schema | LLGoNoLTO | 34958.3 ms | 33761.9 ms | 1196.4 ms | 11520.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32894.3 ms | 31959.5 ms | 934.8 ms | 26044.6 ms |
| Etcdctl | Go | 31447.9 ms | 29439.5 ms | 2008.4 ms | 9415.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24473.9 ms | 23584.5 ms | 889.3 ms | 17335.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 23769.9 ms | 22920.8 ms | 849.1 ms | 17182.1 ms |
| Toml | LLGoDeadcodeDrop | 21661.1 ms | 20668.6 ms | 992.5 ms | 7991.8 ms |
| Toml | LLGoNoLTO | 21083.6 ms | 20070.9 ms | 1012.7 ms | 7778.7 ms |
| XGo | Go | 18051.2 ms | 16813.9 ms | 1237.3 ms | 5516.8 ms |
| Dustin_humanize | LLGoNoLTO | 12670.3 ms | 11833.5 ms | 836.8 ms | 5344.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12291.1 ms | 11530.1 ms | 761.0 ms | 5403.6 ms |
| Aws_restjson | Go | 7477.8 ms | 6735.9 ms | 741.9 ms | 3023.1 ms |
| Gorm_schema | Go | 5448.9 ms | 5063.7 ms | 385.2 ms | 2090.5 ms |
| Uber_zap | Go | 5026.6 ms | 4604.7 ms | 421.9 ms | 1959.6 ms |
| K8s_workqueue | Go | 4422.0 ms | 3946.0 ms | 476.0 ms | 1589.1 ms |
| Toml | Go | 1976.2 ms | 1700.8 ms | 275.5 ms | 896.4 ms |
| Dustin_humanize | Go | 784.7 ms | 643.9 ms | 140.8 ms | 367.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1506767.9 ms | 1039857.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1475529.9 ms | 998478.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1469685.4 ms | 981398.5 ms | 9 |
| LLGoDeadcodeDrop | 923640.1 ms | 338516.1 ms | 9 |
| LLGoNoLTO | 910676.4 ms | 335825.4 ms | 9 |
| Go | 116771.4 ms | 37019.9 ms | 9 |

Dependency download details are in `download-timings.log`.
