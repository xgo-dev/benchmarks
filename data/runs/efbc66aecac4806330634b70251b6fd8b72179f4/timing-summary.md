## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 419137.0 ms | 412413.8 ms | 6723.2 ms | 234379.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 385356.6 ms | 380289.5 ms | 5067.2 ms | 226474.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 318261.7 ms | 313974.3 ms | 4287.4 ms | 209618.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 218440.9 ms | 214350.2 ms | 4090.6 ms | 66407.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 207152.0 ms | 203656.5 ms | 3495.5 ms | 60559.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 189723.3 ms | 186584.7 ms | 3138.6 ms | 136955.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 183885.6 ms | 180753.7 ms | 3131.9 ms | 134797.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 166459.7 ms | 163300.9 ms | 3158.8 ms | 130495.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 143057.3 ms | 140277.7 ms | 2779.6 ms | 109483.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 132021.9 ms | 129338.2 ms | 2683.7 ms | 100334.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 129805.4 ms | 127077.5 ms | 2727.9 ms | 97277.2 ms |
| XGo | LLGoDeadcodeDrop | 117420.1 ms | 114316.1 ms | 3104.0 ms | 37054.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111905.3 ms | 109418.9 ms | 2486.3 ms | 88075.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101557.7 ms | 98948.2 ms | 2609.6 ms | 83204.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101182.6 ms | 98566.9 ms | 2615.7 ms | 82405.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100880.3 ms | 98277.1 ms | 2603.2 ms | 81455.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97097.7 ms | 94343.7 ms | 2754.0 ms | 70012.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95214.3 ms | 92589.7 ms | 2624.6 ms | 70544.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 92706.1 ms | 89757.0 ms | 2949.1 ms | 54240.8 ms |
| Etcdctl | LLGoNoLTO | 89362.8 ms | 86279.5 ms | 3083.3 ms | 30797.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 71649.7 ms | 69945.4 ms | 1704.3 ms | 53784.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 65608.7 ms | 63748.8 ms | 1859.9 ms | 40931.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65313.7 ms | 63679.8 ms | 1634.0 ms | 49383.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 59144.0 ms | 57679.5 ms | 1464.6 ms | 45271.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 48245.5 ms | 46822.4 ms | 1423.1 ms | 36950.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 45406.4 ms | 44128.9 ms | 1277.5 ms | 38061.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 44920.4 ms | 42543.7 ms | 2376.7 ms | 15017.7 ms |
| XGo | LLGoNoLTO | 44074.1 ms | 41564.9 ms | 2509.2 ms | 16973.1 ms |
| Uber_zap | LLGoNoLTO | 42655.4 ms | 40386.4 ms | 2269.0 ms | 14114.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36616.7 ms | 35179.0 ms | 1437.8 ms | 11657.2 ms |
| Gorm_schema | LLGoNoLTO | 36073.2 ms | 34529.8 ms | 1543.4 ms | 11445.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34369.5 ms | 33081.7 ms | 1287.7 ms | 26981.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34304.2 ms | 33004.5 ms | 1299.7 ms | 26964.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 31321.1 ms | 29134.7 ms | 2186.4 ms | 10957.7 ms |
| Aws_restjson | LLGoNoLTO | 30637.1 ms | 28507.4 ms | 2129.7 ms | 11033.3 ms |
| K8s_workqueue | LLGoNoLTO | 25737.8 ms | 23731.9 ms | 2005.9 ms | 9285.7 ms |
| Toml | LLGoDeadcodeDrop | 20111.2 ms | 18840.7 ms | 1270.5 ms | 7344.1 ms |
| Etcdctl | Go | 17025.3 ms | 16179.5 ms | 845.8 ms | 5869.6 ms |
| Toml | LLGoNoLTO | 13676.7 ms | 12388.8 ms | 1288.0 ms | 5214.2 ms |
| Dustin_humanize | LLGoNoLTO | 12337.5 ms | 11214.3 ms | 1123.2 ms | 4964.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12320.6 ms | 11194.6 ms | 1126.0 ms | 5036.8 ms |
| XGo | Go | 9000.6 ms | 8511.2 ms | 489.4 ms | 3454.1 ms |
| Aws_restjson | Go | 5163.9 ms | 4769.3 ms | 394.6 ms | 2004.9 ms |
| Gorm_schema | Go | 3645.0 ms | 3413.8 ms | 231.2 ms | 1547.8 ms |
| Uber_zap | Go | 3064.3 ms | 2857.4 ms | 206.9 ms | 1359.1 ms |
| K8s_workqueue | Go | 1845.4 ms | 1665.6 ms | 179.9 ms | 843.1 ms |
| Dustin_humanize | Go | 652.5 ms | 556.9 ms | 95.5 ms | 330.4 ms |
| Toml | Go | 538.1 ms | 421.7 ms | 116.4 ms | 298.2 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1101962.6 ms | 779153.1 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 1083286.2 ms | 726424.8 ms | 8 |
| LLGoFullLTOGlobalDCE | 1007045.3 ms | 722505.8 ms | 8 |
| LLGoDeadcodeDrop | 688303.0 ms | 214033.9 ms | 8 |
| LLGoNoLTO | 294554.6 ms | 103827.0 ms | 8 |
| Go | 40935.1 ms | 15707.1 ms | 8 |

Dependency download details are in `download-timings.log`.
