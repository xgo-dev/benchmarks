## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 437219.5 ms | 429561.0 ms | 7658.5 ms | 286327.2 ms |
| IXGo | LLGoFullLTOGlobalDCE | 383003.5 ms | 377289.5 ms | 5714.0 ms | 271993.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 375994.2 ms | 370426.0 ms | 5568.2 ms | 269652.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 314291.5 ms | 310321.2 ms | 3970.2 ms | 209306.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 313977.3 ms | 309879.2 ms | 4098.1 ms | 206167.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 313299.7 ms | 308930.6 ms | 4369.1 ms | 205201.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 262508.9 ms | 258155.0 ms | 4353.8 ms | 161378.9 ms |
| IXGo | LLGoDeadcodeDrop | 252815.3 ms | 248030.8 ms | 4784.5 ms | 80111.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 241506.3 ms | 236280.2 ms | 5226.1 ms | 70460.6 ms |
| XGo | LLGoDeadcodeDrop | 196834.5 ms | 192777.8 ms | 4056.7 ms | 58408.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 194499.1 ms | 189914.6 ms | 4584.4 ms | 116338.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 187664.7 ms | 184398.1 ms | 3266.6 ms | 135229.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 170573.3 ms | 167122.8 ms | 3450.6 ms | 93363.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 165803.4 ms | 162617.6 ms | 3185.8 ms | 132024.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 142990.6 ms | 140252.7 ms | 2737.9 ms | 112740.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 128875.3 ms | 126243.2 ms | 2632.1 ms | 96337.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 127097.0 ms | 124441.3 ms | 2655.7 ms | 95389.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111259.9 ms | 108743.9 ms | 2516.0 ms | 88605.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101099.2 ms | 98700.3 ms | 2398.9 ms | 81263.5 ms |
| Toml | LLGoDeadcodeDrop | 100246.8 ms | 97895.7 ms | 2351.0 ms | 34447.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 97521.3 ms | 95103.3 ms | 2417.9 ms | 79543.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 93543.4 ms | 91138.7 ms | 2404.8 ms | 69993.8 ms |
| Etcdctl | LLGoNoLTO | 87775.8 ms | 84720.7 ms | 3055.1 ms | 30219.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 77913.5 ms | 75054.8 ms | 2858.7 ms | 32225.8 ms |
| IXGo | LLGoNoLTO | 68473.9 ms | 64837.9 ms | 3636.0 ms | 23543.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67359.8 ms | 65766.5 ms | 1593.4 ms | 50099.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66550.8 ms | 64948.8 ms | 1602.0 ms | 51241.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58342.6 ms | 56901.2 ms | 1441.4 ms | 46960.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 56073.2 ms | 54497.2 ms | 1576.1 ms | 38786.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 51249.1 ms | 48868.2 ms | 2380.9 ms | 16706.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46150.0 ms | 44753.9 ms | 1396.1 ms | 35382.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 45884.1 ms | 44453.9 ms | 1430.2 ms | 35262.5 ms |
| XGo | LLGoNoLTO | 43002.6 ms | 40593.2 ms | 2409.4 ms | 16466.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42896.2 ms | 41653.3 ms | 1242.9 ms | 36028.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 39504.0 ms | 38021.9 ms | 1482.1 ms | 12656.0 ms |
| IXGo | Go | 38934.6 ms | 36513.5 ms | 2421.1 ms | 11783.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33840.8 ms | 32516.8 ms | 1324.0 ms | 26175.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33289.5 ms | 32040.4 ms | 1249.0 ms | 26116.7 ms |
| K8s_workqueue | LLGoNoLTO | 30405.8 ms | 28190.6 ms | 2215.2 ms | 10454.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 30213.8 ms | 28068.6 ms | 2145.3 ms | 10546.1 ms |
| Aws_restjson | LLGoNoLTO | 29714.9 ms | 27630.2 ms | 2084.6 ms | 10716.1 ms |
| Uber_zap | LLGoNoLTO | 27339.9 ms | 25320.3 ms | 2019.6 ms | 9733.5 ms |
| Etcdctl | Go | 16552.4 ms | 15753.9 ms | 798.5 ms | 5648.7 ms |
| Gorm_schema | LLGoNoLTO | 15982.0 ms | 14683.7 ms | 1298.3 ms | 5872.9 ms |
| Toml | LLGoNoLTO | 13433.0 ms | 12217.4 ms | 1215.7 ms | 5063.1 ms |
| Dustin_humanize | LLGoNoLTO | 12015.8 ms | 10920.5 ms | 1095.3 ms | 4812.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11888.5 ms | 10791.6 ms | 1096.9 ms | 4886.6 ms |
| XGo | Go | 6394.9 ms | 6022.2 ms | 372.6 ms | 2539.9 ms |
| Gorm_schema | Go | 5736.9 ms | 5379.0 ms | 357.9 ms | 2195.5 ms |
| Aws_restjson | Go | 5094.2 ms | 4687.2 ms | 407.0 ms | 1921.8 ms |
| Uber_zap | Go | 2977.6 ms | 2758.4 ms | 219.3 ms | 1307.2 ms |
| K8s_workqueue | Go | 1788.9 ms | 1603.7 ms | 185.3 ms | 815.7 ms |
| Dustin_humanize | Go | 638.0 ms | 527.0 ms | 111.1 ms | 318.3 ms |
| Toml | Go | 555.0 ms | 449.6 ms | 105.5 ms | 305.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1533853.5 ms | 1079573.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1425692.8 ms | 992201.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1412062.3 ms | 985136.7 ms | 9 |
| LLGoDeadcodeDrop | 1002171.7 ms | 320447.7 ms | 9 |
| LLGoNoLTO | 328143.8 ms | 116882.3 ms | 9 |
| Go | 78672.6 ms | 26835.5 ms | 9 |

Dependency download details are in `download-timings.log`.
