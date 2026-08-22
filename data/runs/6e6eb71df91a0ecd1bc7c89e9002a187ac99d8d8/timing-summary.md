## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 577654.0 ms | 572057.5 ms | 5596.5 ms | 396537.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 576983.2 ms | 572044.5 ms | 4938.7 ms | 396125.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 569835.7 ms | 564787.9 ms | 5047.9 ms | 387267.9 ms |
| IXGo | LLGoDeadcodeDrop | 328605.0 ms | 324265.8 ms | 4339.2 ms | 110601.5 ms |
| IXGo | LLGoNoLTO | 320126.7 ms | 316096.2 ms | 4030.5 ms | 108705.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 290416.9 ms | 286400.8 ms | 4016.1 ms | 186713.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 289565.6 ms | 285364.3 ms | 4201.3 ms | 186619.4 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 287354.0 ms | 283560.8 ms | 3793.2 ms | 187920.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 221973.5 ms | 218301.5 ms | 3672.0 ms | 128201.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 200290.1 ms | 196857.5 ms | 3432.6 ms | 122889.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 198530.6 ms | 195323.4 ms | 3207.1 ms | 67503.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 195145.4 ms | 191920.6 ms | 3224.8 ms | 144687.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 194272.7 ms | 191184.7 ms | 3088.0 ms | 118557.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 190886.2 ms | 187397.5 ms | 3488.8 ms | 68397.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 185803.2 ms | 182650.9 ms | 3152.2 ms | 144426.8 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 184360.0 ms | 181184.0 ms | 3176.0 ms | 141852.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 153636.8 ms | 151004.7 ms | 2632.1 ms | 123318.0 ms |
| XGo | LLGoDeadcodeDrop | 118831.4 ms | 116235.1 ms | 2596.3 ms | 44039.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 116803.8 ms | 114323.6 ms | 2480.2 ms | 96125.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 116708.7 ms | 114192.2 ms | 2516.4 ms | 95554.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 115478.5 ms | 113155.4 ms | 2323.1 ms | 95168.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 109085.6 ms | 106604.6 ms | 2481.0 ms | 85896.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 108747.1 ms | 106395.6 ms | 2351.5 ms | 85809.5 ms |
| Etcdctl | LLGoNoLTO | 98016.2 ms | 95188.0 ms | 2828.2 ms | 39492.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 76340.7 ms | 74047.3 ms | 2293.5 ms | 36340.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 72865.9 ms | 71366.0 ms | 1499.9 ms | 56593.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 69234.7 ms | 67621.2 ms | 1613.5 ms | 54038.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 60635.3 ms | 59165.1 ms | 1470.2 ms | 50334.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 60399.7 ms | 58583.3 ms | 1816.4 ms | 35361.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58053.8 ms | 56548.7 ms | 1505.1 ms | 42575.5 ms |
| XGo | LLGoNoLTO | 51789.1 ms | 49525.4 ms | 2263.7 ms | 25836.5 ms |
| Uber_zap | LLGoNoLTO | 51485.0 ms | 49522.9 ms | 1962.2 ms | 22949.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 50837.7 ms | 49489.9 ms | 1347.8 ms | 40327.8 ms |
| Toml | LLGoFullLTOGlobalDCE | 50708.4 ms | 49390.4 ms | 1318.0 ms | 40141.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 50550.1 ms | 48478.2 ms | 2071.9 ms | 23060.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42407.1 ms | 41196.5 ms | 1210.5 ms | 35664.1 ms |
| Aws_restjson | LLGoNoLTO | 39581.6 ms | 37573.6 ms | 2008.0 ms | 19879.6 ms |
| K8s_workqueue | LLGoNoLTO | 35122.3 ms | 33184.3 ms | 1938.0 ms | 18492.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34561.9 ms | 33238.0 ms | 1323.9 ms | 11710.7 ms |
| Gorm_schema | LLGoNoLTO | 34369.0 ms | 33061.7 ms | 1307.3 ms | 11523.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31474.3 ms | 30273.8 ms | 1200.5 ms | 24558.9 ms |
| Toml | LLGoDeadcodeDrop | 20740.8 ms | 19517.0 ms | 1223.8 ms | 8126.1 ms |
| Toml | LLGoNoLTO | 13263.8 ms | 12078.3 ms | 1185.5 ms | 5383.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12287.5 ms | 11200.6 ms | 1086.8 ms | 5251.5 ms |
| Dustin_humanize | LLGoNoLTO | 11965.3 ms | 10903.4 ms | 1061.9 ms | 5116.4 ms |
| IXGo | Go | 1919.5 ms | 1703.9 ms | 215.6 ms | 1096.7 ms |
| Etcdctl | Go | 1284.3 ms | 1119.0 ms | 165.3 ms | 739.0 ms |
| XGo | Go | 1036.5 ms | 875.5 ms | 160.9 ms | 576.7 ms |
| Aws_restjson | Go | 1004.5 ms | 816.8 ms | 187.7 ms | 494.8 ms |
| K8s_workqueue | Go | 680.4 ms | 562.9 ms | 117.4 ms | 384.1 ms |
| Uber_zap | Go | 659.6 ms | 557.6 ms | 102.0 ms | 375.0 ms |
| Gorm_schema | Go | 517.9 ms | 420.2 ms | 97.7 ms | 279.6 ms |
| Toml | Go | 497.9 ms | 394.7 ms | 103.2 ms | 275.8 ms |
| Dustin_humanize | Go | 342.6 ms | 264.0 ms | 78.5 ms | 182.8 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1689631.8 ms | 1204540.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1661730.8 ms | 1155917.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1639369.1 ms | 1142809.7 ms | 9 |
| LLGoDeadcodeDrop | 1031334.1 ms | 375030.1 ms | 9 |
| LLGoNoLTO | 655719.0 ms | 257377.4 ms | 9 |
| Go | 7943.1 ms | 4404.6 ms | 9 |

Dependency download details are in `download-timings.log`.
