## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 400859.9 ms | 395085.0 ms | 5774.9 ms | 274727.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 382988.9 ms | 377324.8 ms | 5664.2 ms | 273008.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 370072.0 ms | 364586.0 ms | 5486.0 ms | 264364.9 ms |
| IXGo | LLGoNoLTO | 336321.0 ms | 328748.9 ms | 7572.1 ms | 103045.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 311143.7 ms | 307171.7 ms | 3971.9 ms | 207540.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 310819.1 ms | 306797.6 ms | 4021.6 ms | 204029.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 307364.3 ms | 303480.2 ms | 3884.1 ms | 202555.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 260321.2 ms | 256102.5 ms | 4218.7 ms | 162690.4 ms |
| IXGo | LLGoDeadcodeDrop | 252729.7 ms | 247977.2 ms | 4752.6 ms | 80829.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 219061.5 ms | 215073.6 ms | 3987.8 ms | 65630.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 212534.5 ms | 208545.1 ms | 3989.4 ms | 118091.4 ms |
| Uber_zap | LLGoNoLTO | 200651.8 ms | 196267.0 ms | 4384.8 ms | 64435.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 200127.3 ms | 196253.8 ms | 3873.5 ms | 139351.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 173660.6 ms | 170035.2 ms | 3625.4 ms | 103312.2 ms |
| XGo | LLGoDeadcodeDrop | 170858.0 ms | 167969.2 ms | 2888.8 ms | 50835.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 165007.3 ms | 161793.7 ms | 3213.6 ms | 130772.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140041.8 ms | 137367.9 ms | 2674.0 ms | 109341.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 126328.3 ms | 123717.0 ms | 2611.4 ms | 93100.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112568.1 ms | 110044.0 ms | 2524.1 ms | 87736.4 ms |
| Toml | LLGoDeadcodeDrop | 98042.8 ms | 95667.7 ms | 2375.1 ms | 33681.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 97450.3 ms | 95108.8 ms | 2341.5 ms | 79803.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96106.5 ms | 93752.4 ms | 2354.1 ms | 78415.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92549.6 ms | 90048.4 ms | 2501.2 ms | 69325.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 91415.3 ms | 88974.0 ms | 2441.3 ms | 68427.3 ms |
| Etcdctl | LLGoNoLTO | 87655.6 ms | 84464.8 ms | 3190.7 ms | 30067.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67372.9 ms | 65733.7 ms | 1639.2 ms | 50868.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 66429.5 ms | 64827.8 ms | 1601.7 ms | 49294.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 64427.7 ms | 61988.9 ms | 2438.8 ms | 26293.7 ms |
| Aws_restjson | LLGoNoLTO | 62453.3 ms | 60206.6 ms | 2246.6 ms | 25773.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54122.0 ms | 52688.6 ms | 1433.4 ms | 43671.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 53234.2 ms | 51645.2 ms | 1589.0 ms | 37530.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 46179.1 ms | 44719.1 ms | 1460.0 ms | 35286.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45622.1 ms | 44229.8 ms | 1392.3 ms | 35093.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43526.6 ms | 42252.1 ms | 1274.5 ms | 36454.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 43208.7 ms | 40943.8 ms | 2264.9 ms | 14310.4 ms |
| XGo | LLGoNoLTO | 42923.4 ms | 40506.3 ms | 2417.1 ms | 16582.7 ms |
| Gorm_schema | LLGoNoLTO | 36394.4 ms | 34726.8 ms | 1667.6 ms | 12380.9 ms |
| IXGo | Go | 35341.0 ms | 33077.4 ms | 2263.6 ms | 10630.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33309.0 ms | 32040.0 ms | 1269.0 ms | 26044.9 ms |
| Etcdctl | Go | 32705.8 ms | 30922.3 ms | 1783.5 ms | 9805.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32617.2 ms | 31364.1 ms | 1253.1 ms | 25431.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30848.2 ms | 29434.4 ms | 1413.8 ms | 10193.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30119.3 ms | 27989.0 ms | 2130.3 ms | 10473.5 ms |
| K8s_workqueue | LLGoNoLTO | 24818.9 ms | 22973.7 ms | 1845.2 ms | 8888.7 ms |
| Toml | LLGoNoLTO | 13198.3 ms | 12002.7 ms | 1195.6 ms | 4985.7 ms |
| Dustin_humanize | LLGoNoLTO | 12262.9 ms | 11090.3 ms | 1172.6 ms | 4960.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12060.6 ms | 10898.9 ms | 1161.7 ms | 4879.1 ms |
| XGo | Go | 9086.4 ms | 8551.6 ms | 534.8 ms | 3520.0 ms |
| Aws_restjson | Go | 7565.2 ms | 7039.7 ms | 525.5 ms | 3004.1 ms |
| Gorm_schema | Go | 3448.4 ms | 3255.1 ms | 193.4 ms | 1496.4 ms |
| Uber_zap | Go | 2938.7 ms | 2721.9 ms | 216.8 ms | 1281.1 ms |
| K8s_workqueue | Go | 1790.9 ms | 1613.6 ms | 177.4 ms | 805.7 ms |
| Dustin_humanize | Go | 644.2 ms | 550.4 ms | 93.8 ms | 324.3 ms |
| Toml | Go | 537.0 ms | 434.4 ms | 102.6 ms | 299.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1456618.7 ms | 1042471.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1431699.6 ms | 992138.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1405453.1 ms | 971657.8 ms | 9 |
| LLGoDeadcodeDrop | 921356.5 ms | 297126.8 ms | 9 |
| LLGoNoLTO | 816679.6 ms | 271120.5 ms | 9 |
| Go | 94057.7 ms | 31166.9 ms | 9 |

Dependency download details are in `download-timings.log`.
