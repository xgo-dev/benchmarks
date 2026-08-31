## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 583222.8 ms | 576042.9 ms | 7179.8 ms | 392537.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 570143.0 ms | 563138.0 ms | 7005.0 ms | 388575.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 562749.7 ms | 555941.8 ms | 6808.0 ms | 387948.0 ms |
| IXGo | LLGoDeadcodeDrop | 351286.6 ms | 345128.8 ms | 6157.8 ms | 129333.5 ms |
| IXGo | LLGoNoLTO | 337147.9 ms | 330939.6 ms | 6208.3 ms | 125246.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 254485.1 ms | 249500.9 ms | 4984.2 ms | 158193.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 254236.4 ms | 249362.1 ms | 4874.2 ms | 157103.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 250159.2 ms | 245184.8 ms | 4974.4 ms | 156531.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 185987.8 ms | 181596.5 ms | 4391.3 ms | 65027.2 ms |
| Etcdctl | LLGoNoLTO | 181679.0 ms | 177453.7 ms | 4225.3 ms | 61504.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 172994.3 ms | 169603.1 ms | 3391.2 ms | 124463.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 172860.5 ms | 169448.8 ms | 3411.7 ms | 123456.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 171848.1 ms | 168406.8 ms | 3441.3 ms | 122835.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 145224.7 ms | 142988.4 ms | 2236.3 ms | 113538.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 135544.3 ms | 133117.1 ms | 2427.3 ms | 102373.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 135490.9 ms | 133098.3 ms | 2392.6 ms | 102412.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 104830.1 ms | 103247.3 ms | 1582.9 ms | 82089.8 ms |
| XGo | LLGoDeadcodeDrop | 101193.7 ms | 98198.9 ms | 2994.7 ms | 39688.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 100423.4 ms | 98703.4 ms | 1720.0 ms | 79577.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100409.3 ms | 98630.0 ms | 1779.3 ms | 79657.1 ms |
| XGo | LLGoNoLTO | 99716.5 ms | 96982.0 ms | 2734.5 ms | 40627.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 95658.6 ms | 93933.9 ms | 1724.7 ms | 71904.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 95655.0 ms | 93961.8 ms | 1693.1 ms | 72145.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 88860.2 ms | 87181.8 ms | 1678.4 ms | 66894.1 ms |
| Aws_restjson | LLGoNoLTO | 78685.6 ms | 76683.2 ms | 2002.4 ms | 40157.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 77289.6 ms | 75270.6 ms | 2019.1 ms | 38122.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 60975.6 ms | 59693.4 ms | 1282.2 ms | 44369.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 60859.4 ms | 59577.6 ms | 1281.8 ms | 43917.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 54254.6 ms | 52806.7 ms | 1448.0 ms | 24696.6 ms |
| Uber_zap | LLGoNoLTO | 53364.2 ms | 51931.6 ms | 1432.6 ms | 24243.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51327.0 ms | 50109.8 ms | 1217.2 ms | 33680.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 49148.4 ms | 48136.3 ms | 1012.1 ms | 39038.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46947.1 ms | 45518.2 ms | 1428.9 ms | 22963.1 ms |
| K8s_workqueue | LLGoNoLTO | 46383.2 ms | 45011.7 ms | 1371.5 ms | 22944.7 ms |
| IXGo | Go | 42356.1 ms | 39304.0 ms | 3052.1 ms | 12136.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 41617.6 ms | 40635.5 ms | 982.1 ms | 31101.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 41317.0 ms | 40324.2 ms | 992.7 ms | 30837.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34293.4 ms | 33190.1 ms | 1103.4 ms | 11933.6 ms |
| Gorm_schema | LLGoNoLTO | 32993.3 ms | 31855.7 ms | 1137.6 ms | 11638.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32125.0 ms | 31340.9 ms | 784.2 ms | 25936.9 ms |
| Etcdctl | Go | 31263.5 ms | 29225.6 ms | 2038.0 ms | 9368.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 23493.5 ms | 22723.0 ms | 770.5 ms | 17124.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 23421.6 ms | 22699.6 ms | 722.0 ms | 17116.5 ms |
| Toml | LLGoDeadcodeDrop | 20245.0 ms | 19351.2 ms | 893.9 ms | 7541.0 ms |
| Toml | LLGoNoLTO | 20147.6 ms | 19235.6 ms | 912.0 ms | 7592.2 ms |
| XGo | Go | 18126.5 ms | 16920.8 ms | 1205.7 ms | 5306.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11999.7 ms | 11381.3 ms | 618.4 ms | 5155.3 ms |
| Dustin_humanize | LLGoNoLTO | 11446.8 ms | 10844.6 ms | 602.2 ms | 5005.3 ms |
| Aws_restjson | Go | 7564.9 ms | 6867.7 ms | 697.2 ms | 3055.1 ms |
| Gorm_schema | Go | 5448.8 ms | 5075.4 ms | 373.5 ms | 2074.1 ms |
| Uber_zap | Go | 5041.3 ms | 4615.0 ms | 426.2 ms | 1964.8 ms |
| K8s_workqueue | Go | 4472.4 ms | 4005.6 ms | 466.8 ms | 1586.9 ms |
| Toml | Go | 1951.3 ms | 1703.7 ms | 247.5 ms | 893.1 ms |
| Dustin_humanize | Go | 780.3 ms | 627.9 ms | 152.4 ms | 369.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1478630.4 ms | 1053493.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1453629.3 ms | 1015691.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1446820.8 ms | 996175.8 ms | 9 |
| LLGoDeadcodeDrop | 883497.7 ms | 344461.7 ms | 9 |
| LLGoNoLTO | 861564.1 ms | 338959.2 ms | 9 |
| Go | 117005.0 ms | 36754.3 ms | 9 |

Dependency download details are in `download-timings.log`.
