## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 526608.1 ms | 517958.7 ms | 8649.4 ms | 316319.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 399725.7 ms | 394769.1 ms | 4956.6 ms | 273743.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 392235.5 ms | 387297.0 ms | 4938.5 ms | 277238.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 351003.3 ms | 346352.9 ms | 4650.4 ms | 240025.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 334673.7 ms | 330781.2 ms | 3892.5 ms | 234300.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 330980.0 ms | 327148.3 ms | 3831.6 ms | 234306.6 ms |
| IXGo | LLGoDeadcodeDrop | 276671.5 ms | 272324.3 ms | 4347.1 ms | 92085.1 ms |
| XGo | LLGoDeadcodeDrop | 241793.7 ms | 237496.9 ms | 4296.8 ms | 75174.5 ms |
| Etcdctl | LLGoNoLTO | 190291.8 ms | 187080.6 ms | 3211.2 ms | 57309.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 189776.7 ms | 186586.5 ms | 3190.2 ms | 57828.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 189194.9 ms | 184790.4 ms | 4404.6 ms | 117188.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 179642.0 ms | 176807.3 ms | 2834.8 ms | 129862.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 169901.1 ms | 166829.2 ms | 3071.9 ms | 103559.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 167539.5 ms | 164809.0 ms | 2730.5 ms | 127361.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 167245.6 ms | 164530.8 ms | 2714.8 ms | 128999.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 137261.9 ms | 135014.5 ms | 2247.4 ms | 108935.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 127644.7 ms | 125036.2 ms | 2608.6 ms | 95878.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 123165.6 ms | 120997.9 ms | 2167.7 ms | 93361.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111249.6 ms | 108803.8 ms | 2445.7 ms | 86943.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 99522.7 ms | 97419.2 ms | 2103.5 ms | 80413.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 90277.0 ms | 88143.7 ms | 2133.4 ms | 69345.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 89055.8 ms | 87124.6 ms | 1931.2 ms | 68638.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66924.6 ms | 65346.5 ms | 1578.0 ms | 48016.9 ms |
| IXGo | LLGoNoLTO | 64262.4 ms | 61221.2 ms | 3041.2 ms | 22833.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63584.3 ms | 62213.4 ms | 1370.8 ms | 48569.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 61521.5 ms | 59535.7 ms | 1985.8 ms | 27347.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51527.2 ms | 50349.4 ms | 1177.8 ms | 42088.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 48997.3 ms | 47668.5 ms | 1328.8 ms | 34969.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46055.3 ms | 44875.0 ms | 1180.3 ms | 33960.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 44060.7 ms | 42863.3 ms | 1197.5 ms | 33915.9 ms |
| XGo | LLGoNoLTO | 40837.1 ms | 38796.1 ms | 2041.0 ms | 15963.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 40160.7 ms | 39149.2 ms | 1011.5 ms | 33598.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 38848.2 ms | 37062.1 ms | 1786.1 ms | 13040.1 ms |
| IXGo | Go | 34717.4 ms | 32428.7 ms | 2288.7 ms | 9988.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 33128.9 ms | 31377.8 ms | 1751.1 ms | 11603.0 ms |
| Etcdctl | Go | 30537.2 ms | 28647.1 ms | 1890.1 ms | 9228.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 30307.6 ms | 29269.8 ms | 1037.8 ms | 23556.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 30042.9 ms | 29036.0 ms | 1007.0 ms | 23487.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 28307.8 ms | 27141.6 ms | 1166.2 ms | 9644.6 ms |
| Aws_restjson | LLGoNoLTO | 27910.8 ms | 26165.7 ms | 1745.1 ms | 10170.3 ms |
| Uber_zap | LLGoNoLTO | 25215.4 ms | 23616.6 ms | 1598.8 ms | 9164.1 ms |
| K8s_workqueue | LLGoNoLTO | 23772.9 ms | 22142.6 ms | 1630.3 ms | 8774.9 ms |
| Toml | LLGoDeadcodeDrop | 23069.2 ms | 22037.3 ms | 1031.9 ms | 7778.9 ms |
| Toml | LLGoNoLTO | 22398.8 ms | 21372.6 ms | 1026.1 ms | 7549.8 ms |
| Gorm_schema | LLGoNoLTO | 14811.9 ms | 13662.1 ms | 1149.8 ms | 5468.3 ms |
| Dustin_humanize | LLGoNoLTO | 11309.7 ms | 10449.6 ms | 860.2 ms | 4615.3 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11190.4 ms | 10275.1 ms | 915.3 ms | 4559.1 ms |
| XGo | Go | 8512.7 ms | 8032.9 ms | 479.8 ms | 3170.1 ms |
| Aws_restjson | Go | 6984.2 ms | 6470.6 ms | 513.6 ms | 2696.2 ms |
| Uber_zap | Go | 3407.0 ms | 3188.1 ms | 218.9 ms | 1439.3 ms |
| Gorm_schema | Go | 3318.0 ms | 3133.8 ms | 184.2 ms | 1409.5 ms |
| Toml | Go | 1910.6 ms | 1712.7 ms | 197.9 ms | 870.6 ms |
| K8s_workqueue | Go | 1684.7 ms | 1537.9 ms | 146.9 ms | 779.9 ms |
| Dustin_humanize | Go | 602.9 ms | 512.5 ms | 90.3 ms | 299.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1487690.9 ms | 1021760.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1471636.0 ms | 1060745.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1449260.4 ms | 1026079.0 ms | 9 |
| LLGoDeadcodeDrop | 904307.9 ms | 299061.2 ms | 9 |
| LLGoNoLTO | 420810.7 ms | 141849.9 ms | 9 |
| Go | 91674.7 ms | 29883.1 ms | 9 |

Dependency download details are in `download-timings.log`.
