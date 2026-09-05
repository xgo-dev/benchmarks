## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 727808.0 ms | 721072.8 ms | 6735.3 ms | 482577.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 724175.4 ms | 717448.5 ms | 6726.9 ms | 480096.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 721658.1 ms | 715140.8 ms | 6517.3 ms | 490664.0 ms |
| IXGo | LLGoDeadcodeDrop | 428920.9 ms | 423052.2 ms | 5868.7 ms | 144531.9 ms |
| IXGo | LLGoNoLTO | 416602.2 ms | 410574.7 ms | 6027.5 ms | 141825.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 278535.7 ms | 273704.0 ms | 4831.7 ms | 168890.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 275078.4 ms | 270144.8 ms | 4933.6 ms | 165896.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 274488.1 ms | 269625.6 ms | 4862.4 ms | 167715.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 206080.7 ms | 201888.4 ms | 4192.3 ms | 68176.4 ms |
| Etcdctl | LLGoNoLTO | 201970.3 ms | 197892.4 ms | 4077.8 ms | 66825.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 186743.4 ms | 183396.5 ms | 3347.0 ms | 130871.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 184224.6 ms | 180970.7 ms | 3253.9 ms | 128050.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 183278.4 ms | 179980.7 ms | 3297.8 ms | 127119.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 152910.5 ms | 150535.3 ms | 2375.2 ms | 114572.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 141958.3 ms | 139621.7 ms | 2336.6 ms | 102216.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 140809.7 ms | 138473.5 ms | 2336.2 ms | 101973.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112698.0 ms | 110992.2 ms | 1705.8 ms | 86421.5 ms |
| XGo | LLGoDeadcodeDrop | 111786.4 ms | 108984.8 ms | 2801.6 ms | 42259.5 ms |
| XGo | LLGoNoLTO | 111055.6 ms | 108255.8 ms | 2799.8 ms | 41764.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 108453.0 ms | 106655.8 ms | 1797.3 ms | 84404.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 108385.0 ms | 106545.2 ms | 1839.8 ms | 85266.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 103783.8 ms | 102065.0 ms | 1718.9 ms | 76052.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103002.1 ms | 101270.5 ms | 1731.6 ms | 76101.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 96479.6 ms | 94711.7 ms | 1767.8 ms | 72195.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 87241.9 ms | 85134.6 ms | 2107.3 ms | 41186.4 ms |
| Aws_restjson | LLGoNoLTO | 86642.3 ms | 84604.6 ms | 2037.7 ms | 40552.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 67893.9 ms | 66510.3 ms | 1383.6 ms | 47861.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67861.8 ms | 66448.1 ms | 1413.7 ms | 47484.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 59362.1 ms | 57753.4 ms | 1608.7 ms | 26604.2 ms |
| Uber_zap | LLGoNoLTO | 58520.3 ms | 56989.0 ms | 1531.4 ms | 25453.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 57911.1 ms | 56527.7 ms | 1383.4 ms | 37304.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55185.5 ms | 53998.7 ms | 1186.8 ms | 42915.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 50995.7 ms | 49544.5 ms | 1451.2 ms | 23384.4 ms |
| K8s_workqueue | LLGoNoLTO | 50478.2 ms | 48950.3 ms | 1527.9 ms | 23192.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47847.0 ms | 46740.0 ms | 1107.0 ms | 34794.1 ms |
| IXGo | Go | 46611.0 ms | 43615.8 ms | 2995.1 ms | 13282.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 46372.6 ms | 45313.0 ms | 1059.6 ms | 34296.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 39442.8 ms | 38224.1 ms | 1218.7 ms | 12971.8 ms |
| Gorm_schema | LLGoNoLTO | 39091.8 ms | 37816.2 ms | 1275.7 ms | 12627.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 35415.4 ms | 34509.5 ms | 905.9 ms | 27612.5 ms |
| Etcdctl | Go | 34118.6 ms | 32115.6 ms | 2003.0 ms | 10295.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 26724.9 ms | 25882.7 ms | 842.2 ms | 18677.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25813.3 ms | 24964.2 ms | 849.1 ms | 18378.2 ms |
| Toml | LLGoNoLTO | 23466.1 ms | 22472.1 ms | 994.0 ms | 8600.1 ms |
| Toml | LLGoDeadcodeDrop | 23364.9 ms | 22322.4 ms | 1042.5 ms | 8680.2 ms |
| XGo | Go | 19439.6 ms | 18203.4 ms | 1236.2 ms | 5660.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13595.8 ms | 12834.7 ms | 761.1 ms | 5831.2 ms |
| Dustin_humanize | LLGoNoLTO | 13553.5 ms | 12737.4 ms | 816.1 ms | 5816.3 ms |
| Aws_restjson | Go | 7993.7 ms | 7343.6 ms | 650.1 ms | 3229.2 ms |
| Gorm_schema | Go | 5863.4 ms | 5478.9 ms | 384.5 ms | 2250.4 ms |
| Uber_zap | Go | 5445.2 ms | 5005.7 ms | 439.6 ms | 2136.4 ms |
| K8s_workqueue | Go | 4750.9 ms | 4275.4 ms | 475.5 ms | 1668.3 ms |
| Toml | Go | 2051.6 ms | 1814.9 ms | 236.7 ms | 921.9 ms |
| Dustin_humanize | Go | 828.3 ms | 683.2 ms | 145.1 ms | 394.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1715378.0 ms | 1193901.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1678477.4 ms | 1138231.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1661640.5 ms | 1118277.6 ms | 9 |
| LLGoDeadcodeDrop | 1020791.2 ms | 373625.9 ms | 9 |
| LLGoNoLTO | 1001380.4 ms | 366656.9 ms | 9 |
| Go | 127102.3 ms | 39838.2 ms | 9 |

Dependency download details are in `download-timings.log`.
