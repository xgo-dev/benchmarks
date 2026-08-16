## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 505251.1 ms | 495987.1 ms | 9264.0 ms | 297856.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 393223.3 ms | 387461.8 ms | 5761.5 ms | 275450.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 376459.6 ms | 370945.2 ms | 5514.3 ms | 265616.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 339378.7 ms | 333603.1 ms | 5775.5 ms | 210651.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 309101.1 ms | 305079.9 ms | 4021.2 ms | 202218.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 307334.4 ms | 303224.4 ms | 4109.9 ms | 200818.1 ms |
| IXGo | LLGoDeadcodeDrop | 297634.2 ms | 292591.4 ms | 5042.8 ms | 92805.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 209818.8 ms | 206303.9 ms | 3514.8 ms | 61465.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 208164.7 ms | 204208.0 ms | 3956.7 ms | 114308.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 205633.9 ms | 200974.5 ms | 4659.4 ms | 118249.1 ms |
| Etcdctl | LLGoNoLTO | 204853.9 ms | 201443.6 ms | 3410.3 ms | 59672.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 196507.4 ms | 192863.6 ms | 3643.8 ms | 138454.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 191070.1 ms | 187896.2 ms | 3173.9 ms | 139902.9 ms |
| Uber_zap | LLGoDeadcodeDrop | 181184.2 ms | 177988.7 ms | 3195.4 ms | 54958.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 161989.5 ms | 158787.4 ms | 3202.0 ms | 126861.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150658.0 ms | 147767.6 ms | 2890.4 ms | 119163.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 122549.3 ms | 119823.9 ms | 2725.4 ms | 91616.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 98296.1 ms | 95894.3 ms | 2401.8 ms | 78725.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96384.8 ms | 93921.7 ms | 2463.1 ms | 78618.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 95243.4 ms | 92839.1 ms | 2404.3 ms | 77604.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94560.9 ms | 92113.0 ms | 2447.9 ms | 70487.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 91514.0 ms | 89141.6 ms | 2372.4 ms | 68037.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 69057.3 ms | 67278.9 ms | 1778.5 ms | 50875.8 ms |
| IXGo | LLGoNoLTO | 68904.0 ms | 65121.0 ms | 3783.0 ms | 23672.5 ms |
| XGo | LLGoDeadcodeDrop | 67854.7 ms | 65080.7 ms | 2774.0 ms | 24448.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 66852.2 ms | 64485.2 ms | 2367.0 ms | 27934.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65716.8 ms | 64156.7 ms | 1560.1 ms | 50437.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55464.5 ms | 54036.1 ms | 1428.3 ms | 44852.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52903.0 ms | 51415.6 ms | 1487.3 ms | 37387.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48366.9 ms | 46895.3 ms | 1471.6 ms | 37551.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 47069.2 ms | 45584.7 ms | 1484.4 ms | 35056.4 ms |
| XGo | LLGoNoLTO | 42849.0 ms | 40416.6 ms | 2432.4 ms | 16387.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42556.1 ms | 41238.7 ms | 1317.4 ms | 35455.9 ms |
| Gorm_schema | LLGoNoLTO | 35942.5 ms | 34360.2 ms | 1582.4 ms | 11832.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 35358.3 ms | 33971.2 ms | 1387.1 ms | 27725.9 ms |
| IXGo | Go | 34675.1 ms | 32483.3 ms | 2191.9 ms | 10665.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33670.2 ms | 32367.7 ms | 1302.5 ms | 26326.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33034.3 ms | 31467.6 ms | 1566.7 ms | 11047.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30432.8 ms | 28447.1 ms | 1985.7 ms | 10493.4 ms |
| Aws_restjson | LLGoNoLTO | 30074.8 ms | 27984.2 ms | 2090.6 ms | 10628.2 ms |
| Uber_zap | LLGoNoLTO | 26921.1 ms | 24881.9 ms | 2039.1 ms | 9697.1 ms |
| K8s_workqueue | LLGoNoLTO | 24434.7 ms | 22538.5 ms | 1896.2 ms | 8847.0 ms |
| Toml | LLGoDeadcodeDrop | 19061.1 ms | 17802.8 ms | 1258.3 ms | 7048.3 ms |
| Etcdctl | Go | 16512.1 ms | 15776.0 ms | 736.1 ms | 5657.6 ms |
| Toml | LLGoNoLTO | 13435.9 ms | 12238.3 ms | 1197.5 ms | 5116.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12277.2 ms | 11141.4 ms | 1135.7 ms | 4932.3 ms |
| Dustin_humanize | LLGoNoLTO | 11544.0 ms | 10351.7 ms | 1192.3 ms | 4464.7 ms |
| XGo | Go | 8940.4 ms | 8493.7 ms | 446.7 ms | 3469.3 ms |
| Aws_restjson | Go | 5087.7 ms | 4645.4 ms | 442.3 ms | 1921.5 ms |
| Gorm_schema | Go | 3415.5 ms | 3241.2 ms | 174.3 ms | 1482.5 ms |
| Uber_zap | Go | 2947.3 ms | 2730.3 ms | 217.0 ms | 1280.3 ms |
| K8s_workqueue | Go | 2508.2 ms | 2209.0 ms | 299.2 ms | 959.6 ms |
| Dustin_humanize | Go | 641.2 ms | 543.8 ms | 97.5 ms | 318.9 ms |
| Toml | Go | 546.2 ms | 440.6 ms | 105.5 ms | 303.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1523322.4 ms | 1062945.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1445238.7 ms | 989732.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1424921.3 ms | 967630.6 ms | 9 |
| LLGoDeadcodeDrop | 918149.4 ms | 295132.6 ms | 9 |
| LLGoNoLTO | 458959.9 ms | 150317.9 ms | 9 |
| Go | 75273.8 ms | 26057.9 ms | 9 |

Dependency download details are in `download-timings.log`.
