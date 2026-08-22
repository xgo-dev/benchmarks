## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 617572.1 ms | 612073.4 ms | 5498.7 ms | 423342.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 616935.4 ms | 611520.1 ms | 5415.2 ms | 428211.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 613487.6 ms | 607772.9 ms | 5714.6 ms | 404713.6 ms |
| IXGo | LLGoDeadcodeDrop | 498509.7 ms | 492619.1 ms | 5890.6 ms | 155975.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 293177.1 ms | 289140.2 ms | 4036.9 ms | 190660.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 290995.7 ms | 287001.5 ms | 3994.2 ms | 189287.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 288976.2 ms | 284940.3 ms | 4035.9 ms | 189078.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 197172.3 ms | 193793.9 ms | 3378.3 ms | 67233.7 ms |
| Etcdctl | LLGoNoLTO | 195654.2 ms | 192377.5 ms | 3276.7 ms | 66097.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 194679.9 ms | 191869.6 ms | 2810.3 ms | 124186.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 191415.0 ms | 188093.6 ms | 3321.4 ms | 149027.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 191112.5 ms | 187668.8 ms | 3443.7 ms | 111714.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 190578.9 ms | 187254.2 ms | 3324.7 ms | 146809.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 186812.9 ms | 183500.6 ms | 3312.3 ms | 144027.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 163619.1 ms | 160824.5 ms | 2794.6 ms | 133194.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 142295.8 ms | 139576.0 ms | 2719.9 ms | 109295.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 126112.2 ms | 123676.9 ms | 2435.3 ms | 102468.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 119935.2 ms | 117525.1 ms | 2410.0 ms | 99387.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 116514.9 ms | 114141.4 ms | 2373.5 ms | 96061.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 115808.0 ms | 113451.1 ms | 2356.9 ms | 95348.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 112677.3 ms | 110214.6 ms | 2462.6 ms | 88480.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 104049.1 ms | 101813.7 ms | 2235.5 ms | 71029.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 96686.1 ms | 94292.7 ms | 2393.3 ms | 56876.2 ms |
| XGo | LLGoDeadcodeDrop | 93854.2 ms | 91212.1 ms | 2642.1 ms | 37727.3 ms |
| IXGo | LLGoNoLTO | 78718.4 ms | 75196.7 ms | 3521.7 ms | 33403.5 ms |
| Aws_restjson | LLGoNoLTO | 75966.7 ms | 73611.9 ms | 2354.8 ms | 37581.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75014.0 ms | 72710.4 ms | 2303.6 ms | 35759.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 71266.9 ms | 69653.9 ms | 1613.0 ms | 55484.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 62635.2 ms | 61218.7 ms | 1416.6 ms | 52283.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61327.1 ms | 59769.9 ms | 1557.2 ms | 44116.7 ms |
| XGo | LLGoNoLTO | 53082.7 ms | 50810.8 ms | 2271.9 ms | 26119.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 51623.9 ms | 49598.4 ms | 2025.5 ms | 23250.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 50799.1 ms | 49413.4 ms | 1385.7 ms | 40352.4 ms |
| Uber_zap | LLGoNoLTO | 50476.1 ms | 48417.4 ms | 2058.7 ms | 22759.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46032.4 ms | 43901.4 ms | 2131.0 ms | 21711.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42454.9 ms | 41177.3 ms | 1277.6 ms | 35721.4 ms |
| Gorm_schema | LLGoNoLTO | 35440.3 ms | 34049.0 ms | 1391.3 ms | 11868.5 ms |
| K8s_workqueue | LLGoNoLTO | 35042.4 ms | 33171.8 ms | 1870.6 ms | 18562.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33403.7 ms | 32168.0 ms | 1235.8 ms | 26416.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32499.5 ms | 31256.8 ms | 1242.7 ms | 25493.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31032.3 ms | 29668.6 ms | 1363.7 ms | 10939.1 ms |
| Toml | LLGoDeadcodeDrop | 20652.8 ms | 19350.7 ms | 1302.1 ms | 8190.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 15640.2 ms | 14455.8 ms | 1184.5 ms | 6155.1 ms |
| Toml | LLGoNoLTO | 13190.8 ms | 11975.5 ms | 1215.3 ms | 5368.2 ms |
| Dustin_humanize | LLGoNoLTO | 11133.7 ms | 10071.2 ms | 1062.5 ms | 4582.4 ms |
| IXGo | Go | 1955.8 ms | 1722.7 ms | 233.2 ms | 1118.5 ms |
| Etcdctl | Go | 1284.0 ms | 1108.6 ms | 175.4 ms | 737.9 ms |
| XGo | Go | 1058.9 ms | 879.5 ms | 179.4 ms | 704.8 ms |
| Aws_restjson | Go | 1048.2 ms | 840.1 ms | 208.1 ms | 537.1 ms |
| K8s_workqueue | Go | 680.8 ms | 580.4 ms | 100.5 ms | 400.8 ms |
| Uber_zap | Go | 663.0 ms | 557.3 ms | 105.6 ms | 365.8 ms |
| Toml | Go | 531.0 ms | 446.4 ms | 84.6 ms | 294.6 ms |
| Gorm_schema | Go | 520.1 ms | 433.9 ms | 86.2 ms | 329.6 ms |
| Dustin_humanize | Go | 356.8 ms | 282.0 ms | 74.8 ms | 193.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1712684.5 ms | 1236903.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1710603.2 ms | 1197400.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1704539.8 ms | 1198764.3 ms | 9 |
| LLGoDeadcodeDrop | 1029531.9 ms | 366943.3 ms | 9 |
| LLGoNoLTO | 548705.3 ms | 226342.0 ms | 9 |
| Go | 8098.6 ms | 4683.1 ms | 9 |

Dependency download details are in `download-timings.log`.
