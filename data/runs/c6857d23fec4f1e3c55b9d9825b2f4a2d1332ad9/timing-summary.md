## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 625030.6 ms | 618553.6 ms | 6477.0 ms | 424954.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 620748.3 ms | 614132.6 ms | 6615.7 ms | 412488.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 616425.6 ms | 609782.0 ms | 6643.6 ms | 410631.7 ms |
| IXGo | LLGoDeadcodeDrop | 371220.9 ms | 365523.4 ms | 5697.5 ms | 134576.2 ms |
| IXGo | LLGoNoLTO | 365497.9 ms | 359816.8 ms | 5681.1 ms | 134724.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 285993.0 ms | 281205.9 ms | 4787.1 ms | 165973.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 285121.7 ms | 280389.0 ms | 4732.7 ms | 165546.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 281970.2 ms | 277432.9 ms | 4537.3 ms | 165049.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 217666.1 ms | 213414.2 ms | 4251.9 ms | 71232.9 ms |
| Etcdctl | LLGoNoLTO | 213333.0 ms | 209234.9 ms | 4098.1 ms | 69148.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177484.1 ms | 174282.8 ms | 3201.3 ms | 124932.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 177390.5 ms | 174352.9 ms | 3037.5 ms | 123953.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 176893.1 ms | 173789.0 ms | 3104.1 ms | 124208.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 150638.9 ms | 148421.1 ms | 2217.8 ms | 116417.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 140239.6 ms | 137919.7 ms | 2319.9 ms | 104176.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 139159.9 ms | 137136.4 ms | 2023.5 ms | 103602.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 108136.3 ms | 106526.8 ms | 1609.5 ms | 83086.8 ms |
| XGo | LLGoDeadcodeDrop | 106515.7 ms | 103749.0 ms | 2766.7 ms | 40771.2 ms |
| XGo | LLGoNoLTO | 104620.4 ms | 101874.9 ms | 2745.5 ms | 39932.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 103103.7 ms | 101471.8 ms | 1631.9 ms | 80384.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102374.5 ms | 100740.9 ms | 1633.6 ms | 80169.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98911.9 ms | 97215.5 ms | 1696.5 ms | 73126.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 98712.1 ms | 97137.7 ms | 1574.4 ms | 72989.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89818.1 ms | 88204.3 ms | 1613.8 ms | 66779.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79406.1 ms | 77477.0 ms | 1929.1 ms | 37143.5 ms |
| Aws_restjson | LLGoNoLTO | 77277.4 ms | 75377.4 ms | 1900.0 ms | 36647.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65347.3 ms | 64096.1 ms | 1251.2 ms | 46990.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64939.5 ms | 63590.1 ms | 1349.5 ms | 46280.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 56127.8 ms | 54699.3 ms | 1428.5 ms | 24191.7 ms |
| Uber_zap | LLGoNoLTO | 54696.4 ms | 53290.8 ms | 1405.6 ms | 23900.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54439.5 ms | 53251.1 ms | 1188.4 ms | 35809.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52677.7 ms | 51701.3 ms | 976.5 ms | 41394.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48082.2 ms | 46624.3 ms | 1457.8 ms | 22156.7 ms |
| K8s_workqueue | LLGoNoLTO | 47424.7 ms | 46094.3 ms | 1330.4 ms | 21709.4 ms |
| IXGo | Go | 45816.7 ms | 42856.8 ms | 2959.9 ms | 13082.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45038.9 ms | 44101.0 ms | 937.8 ms | 33537.1 ms |
| Toml | LLGoFullLTOGlobalDCE | 44677.2 ms | 43803.3 ms | 873.9 ms | 33190.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37269.4 ms | 36115.4 ms | 1154.0 ms | 12750.1 ms |
| Gorm_schema | LLGoNoLTO | 35768.2 ms | 34732.2 ms | 1036.0 ms | 12441.5 ms |
| Etcdctl | Go | 33471.6 ms | 31481.9 ms | 1989.7 ms | 9965.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33354.3 ms | 32635.1 ms | 719.2 ms | 26528.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25002.4 ms | 24206.8 ms | 795.6 ms | 17958.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24609.3 ms | 23946.3 ms | 663.0 ms | 17630.1 ms |
| Toml | LLGoDeadcodeDrop | 22266.9 ms | 21447.7 ms | 819.2 ms | 8393.9 ms |
| Toml | LLGoNoLTO | 21663.4 ms | 20895.6 ms | 767.9 ms | 7911.1 ms |
| XGo | Go | 18998.7 ms | 17848.8 ms | 1150.0 ms | 5560.6 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12727.9 ms | 12076.5 ms | 651.4 ms | 5485.2 ms |
| Dustin_humanize | LLGoNoLTO | 12579.5 ms | 11908.6 ms | 670.8 ms | 5359.9 ms |
| Aws_restjson | Go | 7912.9 ms | 7229.1 ms | 683.8 ms | 3182.4 ms |
| Gorm_schema | Go | 5761.4 ms | 5387.0 ms | 374.3 ms | 2179.6 ms |
| Uber_zap | Go | 5331.2 ms | 4887.8 ms | 443.5 ms | 2051.5 ms |
| K8s_workqueue | Go | 4663.9 ms | 4200.7 ms | 463.1 ms | 1657.9 ms |
| Toml | Go | 2009.7 ms | 1783.5 ms | 226.2 ms | 907.9 ms |
| Dustin_humanize | Go | 816.8 ms | 665.2 ms | 151.6 ms | 376.5 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1592731.6 ms | 1097055.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1554035.2 ms | 1054792.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1541471.4 ms | 1045941.0 ms | 9 |
| LLGoDeadcodeDrop | 951282.9 ms | 356701.5 ms | 9 |
| LLGoNoLTO | 932861.0 ms | 351774.8 ms | 9 |
| Go | 124782.9 ms | 38965.0 ms | 9 |

Dependency download details are in `download-timings.log`.
