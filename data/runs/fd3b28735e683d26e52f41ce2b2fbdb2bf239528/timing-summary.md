## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 526391.5 ms | 520519.7 ms | 5871.7 ms | 345099.2 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 489649.2 ms | 484822.6 ms | 4826.6 ms | 333555.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 469937.6 ms | 465020.9 ms | 4916.6 ms | 331148.5 ms |
| IXGo | LLGoDeadcodeDrop | 271426.3 ms | 267476.1 ms | 3950.2 ms | 93079.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 223408.7 ms | 219717.5 ms | 3691.2 ms | 148565.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 223059.7 ms | 219438.5 ms | 3621.2 ms | 149488.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 222679.2 ms | 219121.3 ms | 3557.8 ms | 147529.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 210353.4 ms | 206520.8 ms | 3832.6 ms | 134422.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 148789.9 ms | 145738.8 ms | 3051.1 ms | 51506.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 148486.2 ms | 145231.3 ms | 3254.8 ms | 93304.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 146704.8 ms | 143651.9 ms | 3052.9 ms | 53333.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 146497.9 ms | 143813.2 ms | 2684.8 ms | 115172.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 145979.9 ms | 143195.7 ms | 2784.3 ms | 113783.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 121194.4 ms | 118800.2 ms | 2394.3 ms | 98999.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 109363.4 ms | 107002.9 ms | 2360.5 ms | 85294.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 109323.5 ms | 106880.7 ms | 2442.8 ms | 85350.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 95018.4 ms | 92877.7 ms | 2140.7 ms | 78525.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 91780.0 ms | 89653.0 ms | 2127.0 ms | 75858.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 90428.3 ms | 88382.2 ms | 2046.1 ms | 75690.8 ms |
| XGo | LLGoDeadcodeDrop | 89792.2 ms | 87523.8 ms | 2268.4 ms | 34306.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 84667.3 ms | 82616.2 ms | 2051.1 ms | 67593.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 84440.8 ms | 82349.4 ms | 2091.4 ms | 67460.5 ms |
| Etcdctl | LLGoNoLTO | 76282.6 ms | 73676.0 ms | 2606.7 ms | 31168.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 60462.9 ms | 58414.2 ms | 2048.7 ms | 29863.5 ms |
| IXGo | LLGoNoLTO | 59892.0 ms | 57036.9 ms | 2855.1 ms | 26543.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 54282.8 ms | 52868.4 ms | 1414.4 ms | 43156.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 52782.0 ms | 51412.6 ms | 1369.4 ms | 41743.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 47700.7 ms | 46452.3 ms | 1248.4 ms | 38883.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 44763.8 ms | 43431.9 ms | 1331.9 ms | 32610.9 ms |
| XGo | LLGoNoLTO | 41554.7 ms | 39567.7 ms | 1987.0 ms | 21054.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 38217.8 ms | 37028.8 ms | 1189.0 ms | 30583.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 38092.1 ms | 36843.0 ms | 1249.1 ms | 30499.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 34809.4 ms | 32969.8 ms | 1839.6 ms | 17345.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33239.4 ms | 32131.8 ms | 1107.7 ms | 28101.9 ms |
| Aws_restjson | LLGoNoLTO | 31650.4 ms | 29848.8 ms | 1801.6 ms | 16398.5 ms |
| Uber_zap | LLGoNoLTO | 28627.8 ms | 26945.1 ms | 1682.7 ms | 15458.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 27615.7 ms | 26417.8 ms | 1197.9 ms | 9514.6 ms |
| K8s_workqueue | LLGoNoLTO | 27586.6 ms | 26015.9 ms | 1570.8 ms | 15182.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24444.7 ms | 23365.5 ms | 1079.2 ms | 19308.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24385.0 ms | 23360.2 ms | 1024.9 ms | 19332.5 ms |
| Toml | LLGoDeadcodeDrop | 15593.2 ms | 14506.0 ms | 1087.2 ms | 6214.7 ms |
| Gorm_schema | LLGoNoLTO | 12376.4 ms | 11270.0 ms | 1106.4 ms | 5217.2 ms |
| Toml | LLGoNoLTO | 10003.1 ms | 8935.9 ms | 1067.2 ms | 4215.3 ms |
| Dustin_humanize | LLGoNoLTO | 9046.7 ms | 8091.0 ms | 955.6 ms | 4032.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9033.5 ms | 8064.9 ms | 968.6 ms | 4088.0 ms |
| IXGo | Go | 1678.1 ms | 1416.9 ms | 261.3 ms | 1181.1 ms |
| Etcdctl | Go | 1067.8 ms | 920.0 ms | 147.8 ms | 619.9 ms |
| XGo | Go | 872.3 ms | 729.7 ms | 142.5 ms | 547.7 ms |
| K8s_workqueue | Go | 720.7 ms | 547.6 ms | 173.0 ms | 372.6 ms |
| Aws_restjson | Go | 652.5 ms | 532.9 ms | 119.6 ms | 393.1 ms |
| Uber_zap | Go | 540.5 ms | 447.0 ms | 93.5 ms | 313.6 ms |
| Gorm_schema | Go | 428.6 ms | 355.6 ms | 73.0 ms | 232.8 ms |
| Toml | Go | 418.7 ms | 334.5 ms | 84.1 ms | 247.4 ms |
| Dustin_humanize | Go | 280.9 ms | 215.9 ms | 65.0 ms | 164.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1337813.2 ms | 973117.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1308881.4 ms | 924680.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1303873.1 ms | 933265.6 ms | 9 |
| LLGoDeadcodeDrop | 804227.9 ms | 299252.2 ms | 9 |
| LLGoNoLTO | 297020.4 ms | 139269.7 ms | 9 |
| Go | 6660.0 ms | 4072.7 ms | 9 |

Dependency download details are in `download-timings.log`.
