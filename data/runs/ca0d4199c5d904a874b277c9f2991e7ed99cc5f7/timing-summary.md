## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 361568.5 ms | 355492.2 ms | 6076.3 ms | 313481.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 269892.9 ms | 266382.8 ms | 3510.1 ms | 243927.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 251986.9 ms | 248972.2 ms | 3014.7 ms | 215624.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 190238.4 ms | 187665.0 ms | 2573.3 ms | 164821.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 173615.7 ms | 169740.9 ms | 3874.7 ms | 167912.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 169834.7 ms | 167216.2 ms | 2618.4 ms | 144026.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 167271.6 ms | 164524.2 ms | 2747.5 ms | 141562.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 153509.0 ms | 150603.0 ms | 2906.0 ms | 131032.6 ms |
| XGo | LLGoNoLTO | 152668.4 ms | 149614.7 ms | 3053.6 ms | 129547.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 147664.9 ms | 145159.5 ms | 2505.4 ms | 144410.4 ms |
| Etcdctl | LLGoNoLTO | 133713.4 ms | 131365.2 ms | 2348.2 ms | 97896.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 119652.8 ms | 117203.8 ms | 2449.0 ms | 105068.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 114653.4 ms | 112484.0 ms | 2169.4 ms | 97687.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 107407.5 ms | 104975.1 ms | 2432.4 ms | 104738.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105160.0 ms | 102953.6 ms | 2206.4 ms | 92126.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 98942.4 ms | 96600.6 ms | 2341.8 ms | 86003.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 93599.3 ms | 91381.3 ms | 2218.0 ms | 81641.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 87033.6 ms | 84940.6 ms | 2093.0 ms | 73881.8 ms |
| Dustin_humanize | LLGoNoLTO | 70018.7 ms | 67765.0 ms | 2253.7 ms | 81785.4 ms |
| XGo | LLGoDeadcodeDrop | 67773.1 ms | 65572.8 ms | 2200.3 ms | 48777.2 ms |
| Aws_restjson | LLGoNoLTO | 63655.4 ms | 61333.0 ms | 2322.4 ms | 44211.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 60833.4 ms | 59522.9 ms | 1310.5 ms | 52137.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 60718.5 ms | 59293.2 ms | 1425.3 ms | 53277.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58087.6 ms | 56545.3 ms | 1542.2 ms | 49725.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 57729.9 ms | 55822.4 ms | 1907.5 ms | 40299.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 52038.9 ms | 50325.9 ms | 1712.9 ms | 47663.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51276.7 ms | 49913.3 ms | 1363.3 ms | 44016.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 50962.7 ms | 49461.8 ms | 1500.9 ms | 43024.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 48064.2 ms | 45849.5 ms | 2214.7 ms | 41626.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 47255.0 ms | 45869.8 ms | 1385.3 ms | 41937.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43749.2 ms | 42528.5 ms | 1220.7 ms | 39588.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34385.2 ms | 33173.6 ms | 1211.6 ms | 30336.0 ms |
| Gorm_schema | LLGoNoLTO | 34220.3 ms | 32824.9 ms | 1395.4 ms | 36836.9 ms |
| K8s_workqueue | LLGoNoLTO | 33841.0 ms | 31735.5 ms | 2105.5 ms | 31580.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 32571.1 ms | 30714.4 ms | 1856.7 ms | 25646.9 ms |
| Uber_zap | LLGoNoLTO | 29993.5 ms | 28159.9 ms | 1833.6 ms | 14093.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 25437.8 ms | 24230.7 ms | 1207.1 ms | 16693.0 ms |
| XGo | Go | 19900.2 ms | 18819.3 ms | 1081.0 ms | 18630.6 ms |
| Toml | LLGoDeadcodeDrop | 19532.8 ms | 18387.4 ms | 1145.4 ms | 14371.2 ms |
| Etcdctl | Go | 17734.8 ms | 16997.1 ms | 737.8 ms | 11767.9 ms |
| Toml | LLGoNoLTO | 17592.0 ms | 16542.2 ms | 1049.8 ms | 10218.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12946.0 ms | 11847.9 ms | 1098.0 ms | 8387.6 ms |
| Gorm_schema | Go | 6233.7 ms | 5929.0 ms | 304.7 ms | 7246.5 ms |
| Aws_restjson | Go | 4619.0 ms | 4261.1 ms | 357.9 ms | 1751.3 ms |
| Uber_zap | Go | 2754.4 ms | 2555.5 ms | 198.9 ms | 1196.9 ms |
| Toml | Go | 2030.6 ms | 1870.3 ms | 160.3 ms | 2606.3 ms |
| K8s_workqueue | Go | 1913.1 ms | 1739.5 ms | 173.7 ms | 1326.8 ms |
| Dustin_humanize | Go | 703.2 ms | 597.6 ms | 105.6 ms | 465.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1039029.7 ms | 915791.0 ms | 8 |
| LLGoFullLTOGlobalDCE | 975199.8 ms | 881380.4 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 903600.1 ms | 781449.3 ms | 8 |
| LLGoNoLTO | 535702.5 ms | 446169.8 ms | 8 |
| LLGoDeadcodeDrop | 417563.8 ms | 326834.7 ms | 8 |
| Go | 55889.1 ms | 44992.2 ms | 8 |

Dependency download details are in `download-timings.log`.
