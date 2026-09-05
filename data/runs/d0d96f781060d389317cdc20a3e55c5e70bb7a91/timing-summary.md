## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 537441.6 ms | 531547.9 ms | 5893.7 ms | 378733.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 521531.6 ms | 515523.3 ms | 6008.4 ms | 362140.2 ms |
| IXGo | LLGoFullLTOGlobalDCE | 516152.3 ms | 510097.7 ms | 6054.6 ms | 356483.8 ms |
| IXGo | LLGoDeadcodeDrop | 320475.5 ms | 315258.3 ms | 5217.2 ms | 122832.0 ms |
| IXGo | LLGoNoLTO | 310387.3 ms | 305112.6 ms | 5274.7 ms | 123614.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 215225.5 ms | 210941.6 ms | 4284.0 ms | 132694.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 214900.2 ms | 210507.7 ms | 4392.6 ms | 131772.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 213214.8 ms | 209087.9 ms | 4126.9 ms | 133405.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 153297.2 ms | 149432.0 ms | 3865.2 ms | 50969.0 ms |
| Etcdctl | LLGoNoLTO | 152755.8 ms | 148915.0 ms | 3840.9 ms | 50485.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 147707.6 ms | 144839.3 ms | 2868.3 ms | 105399.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 145770.0 ms | 142986.1 ms | 2783.9 ms | 103457.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 144903.6 ms | 141980.8 ms | 2922.8 ms | 101303.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 124178.8 ms | 122118.4 ms | 2060.3 ms | 94707.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 114044.8 ms | 112022.6 ms | 2022.2 ms | 83785.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 113978.7 ms | 111891.0 ms | 2087.8 ms | 83309.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 87621.6 ms | 86013.1 ms | 1608.5 ms | 67411.8 ms |
| XGo | LLGoDeadcodeDrop | 83678.0 ms | 81302.9 ms | 2375.2 ms | 30621.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 82752.8 ms | 81244.6 ms | 1508.3 ms | 64504.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 82026.7 ms | 80472.2 ms | 1554.5 ms | 64523.6 ms |
| XGo | LLGoNoLTO | 81907.1 ms | 79388.6 ms | 2518.4 ms | 30633.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 79109.6 ms | 77499.8 ms | 1609.8 ms | 58147.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 78780.5 ms | 77227.2 ms | 1553.3 ms | 58253.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 71566.8 ms | 70035.0 ms | 1531.8 ms | 53448.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 69646.4 ms | 67843.5 ms | 1802.9 ms | 34281.8 ms |
| Aws_restjson | LLGoNoLTO | 68721.4 ms | 66941.9 ms | 1779.4 ms | 34201.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 52214.9 ms | 50971.0 ms | 1243.9 ms | 37344.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 51852.2 ms | 50640.6 ms | 1211.6 ms | 37014.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 44261.1 ms | 43032.8 ms | 1228.3 ms | 28725.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 43287.6 ms | 41950.8 ms | 1336.8 ms | 18241.3 ms |
| Uber_zap | LLGoNoLTO | 42367.6 ms | 41046.3 ms | 1321.4 ms | 17999.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 42189.7 ms | 41223.3 ms | 966.4 ms | 33039.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 37594.8 ms | 36300.4 ms | 1294.3 ms | 16760.7 ms |
| K8s_workqueue | LLGoNoLTO | 37194.2 ms | 35941.7 ms | 1252.5 ms | 16481.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 34532.6 ms | 33657.0 ms | 875.6 ms | 25235.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 34482.9 ms | 33638.9 ms | 844.0 ms | 25709.4 ms |
| IXGo | Go | 34192.6 ms | 31389.7 ms | 2802.9 ms | 9814.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29398.3 ms | 28301.5 ms | 1096.8 ms | 9729.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 28299.4 ms | 27524.6 ms | 774.8 ms | 22575.5 ms |
| Gorm_schema | LLGoNoLTO | 28165.1 ms | 27074.2 ms | 1091.0 ms | 9516.7 ms |
| Etcdctl | Go | 25825.1 ms | 23913.4 ms | 1911.7 ms | 7822.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 20519.1 ms | 19804.0 ms | 715.1 ms | 14862.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 20488.7 ms | 19776.9 ms | 711.8 ms | 14663.9 ms |
| Toml | LLGoDeadcodeDrop | 18201.6 ms | 17438.1 ms | 763.5 ms | 6711.2 ms |
| Toml | LLGoNoLTO | 17293.9 ms | 16498.5 ms | 795.5 ms | 6532.1 ms |
| XGo | Go | 14631.7 ms | 13513.0 ms | 1118.7 ms | 4382.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 10705.2 ms | 10081.2 ms | 624.0 ms | 4663.2 ms |
| Dustin_humanize | LLGoNoLTO | 10655.3 ms | 10018.4 ms | 636.9 ms | 4600.4 ms |
| Aws_restjson | Go | 6221.5 ms | 5645.0 ms | 576.5 ms | 2533.2 ms |
| Gorm_schema | Go | 4422.4 ms | 4043.0 ms | 379.4 ms | 1707.2 ms |
| Uber_zap | Go | 4184.2 ms | 3785.0 ms | 399.2 ms | 1668.0 ms |
| K8s_workqueue | Go | 3655.8 ms | 3307.7 ms | 348.1 ms | 1304.5 ms |
| Toml | Go | 1584.1 ms | 1393.4 ms | 190.7 ms | 728.3 ms |
| Dustin_humanize | Go | 627.7 ms | 522.9 ms | 104.8 ms | 304.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1314895.1 ms | 937140.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1259580.2 ms | 876764.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1245273.0 ms | 858746.3 ms | 9 |
| LLGoDeadcodeDrop | 766284.6 ms | 294809.9 ms | 9 |
| LLGoNoLTO | 749447.7 ms | 294065.2 ms | 9 |
| Go | 95345.1 ms | 30265.5 ms | 9 |

Dependency download details are in `download-timings.log`.
