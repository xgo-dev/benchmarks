## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 762712.7 ms | 754196.2 ms | 8516.5 ms | 549619.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 642072.0 ms | 634036.5 ms | 8035.6 ms | 454175.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 612091.0 ms | 604240.3 ms | 7850.8 ms | 424031.9 ms |
| IXGo | LLGoNoLTO | 380634.7 ms | 373423.5 ms | 7211.1 ms | 140732.9 ms |
| IXGo | LLGoDeadcodeDrop | 379979.3 ms | 372736.8 ms | 7242.5 ms | 139213.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 278198.5 ms | 272055.1 ms | 6143.4 ms | 165318.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 277774.2 ms | 271572.5 ms | 6201.7 ms | 164563.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 277436.2 ms | 271298.1 ms | 6138.1 ms | 165764.5 ms |
| Etcdctl | LLGoNoLTO | 208678.6 ms | 203120.3 ms | 5558.3 ms | 68844.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 208070.0 ms | 202607.8 ms | 5462.2 ms | 69114.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 175536.9 ms | 171352.3 ms | 4184.6 ms | 124632.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 174004.9 ms | 169657.3 ms | 4347.5 ms | 123177.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173442.3 ms | 169314.6 ms | 4127.7 ms | 124060.0 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 155178.3 ms | 151866.0 ms | 3312.2 ms | 122525.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 148052.6 ms | 144849.2 ms | 3203.5 ms | 114677.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 145310.5 ms | 142083.0 ms | 3227.5 ms | 112133.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 107361.9 ms | 104708.8 ms | 2653.0 ms | 83333.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104180.8 ms | 101475.6 ms | 2705.1 ms | 81570.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 103275.3 ms | 100482.9 ms | 2792.3 ms | 81083.5 ms |
| XGo | LLGoDeadcodeDrop | 103004.6 ms | 99116.1 ms | 3888.6 ms | 40918.9 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101855.5 ms | 99086.7 ms | 2768.8 ms | 80052.0 ms |
| XGo | LLGoNoLTO | 101807.7 ms | 97991.8 ms | 3816.0 ms | 40418.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99093.3 ms | 96387.2 ms | 2706.1 ms | 73909.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97567.9 ms | 94882.6 ms | 2685.4 ms | 72805.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80310.4 ms | 77402.9 ms | 2907.5 ms | 39718.0 ms |
| Aws_restjson | LLGoNoLTO | 79404.3 ms | 76541.7 ms | 2862.6 ms | 39436.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63485.3 ms | 61547.2 ms | 1938.1 ms | 45912.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63222.2 ms | 61333.8 ms | 1888.5 ms | 45221.5 ms |
| Uber_zap | LLGoNoLTO | 55598.9 ms | 53240.9 ms | 2358.0 ms | 25164.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 54959.7 ms | 52591.1 ms | 2368.6 ms | 25178.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52199.6 ms | 50366.5 ms | 1833.1 ms | 34491.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51623.4 ms | 50006.1 ms | 1617.3 ms | 40586.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49489.3 ms | 47063.8 ms | 2425.5 ms | 24178.9 ms |
| K8s_workqueue | LLGoNoLTO | 48957.9 ms | 46547.7 ms | 2410.2 ms | 23672.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 43032.6 ms | 41478.7 ms | 1554.0 ms | 31937.3 ms |
| IXGo | Go | 42989.1 ms | 39883.8 ms | 3105.3 ms | 12342.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42954.2 ms | 41401.7 ms | 1552.4 ms | 31830.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35380.3 ms | 33618.2 ms | 1762.0 ms | 12801.1 ms |
| Gorm_schema | LLGoNoLTO | 34675.8 ms | 32906.1 ms | 1769.7 ms | 12445.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33471.6 ms | 32124.8 ms | 1346.8 ms | 26724.0 ms |
| Etcdctl | Go | 31768.0 ms | 29669.7 ms | 2098.3 ms | 9554.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25005.6 ms | 23678.2 ms | 1327.4 ms | 18130.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24938.8 ms | 23639.6 ms | 1299.2 ms | 17943.2 ms |
| Toml | LLGoDeadcodeDrop | 21854.4 ms | 20458.1 ms | 1396.3 ms | 8521.9 ms |
| Toml | LLGoNoLTO | 21489.5 ms | 20012.1 ms | 1477.4 ms | 8338.7 ms |
| XGo | Go | 18288.7 ms | 17086.0 ms | 1202.7 ms | 5335.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13029.3 ms | 11805.7 ms | 1223.6 ms | 5889.3 ms |
| Dustin_humanize | LLGoNoLTO | 12887.8 ms | 11656.3 ms | 1231.5 ms | 5772.8 ms |
| Aws_restjson | Go | 7611.7 ms | 6918.5 ms | 693.2 ms | 3116.3 ms |
| Gorm_schema | Go | 5486.3 ms | 5116.3 ms | 369.9 ms | 2080.3 ms |
| Uber_zap | Go | 5101.9 ms | 4705.8 ms | 396.1 ms | 1994.5 ms |
| K8s_workqueue | Go | 4489.9 ms | 3981.6 ms | 508.3 ms | 1614.4 ms |
| Toml | Go | 1966.6 ms | 1730.2 ms | 236.4 ms | 904.7 ms |
| Dustin_humanize | Go | 790.7 ms | 639.1 ms | 151.6 ms | 374.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1685012.2 ms | 1191646.9 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1575945.4 ms | 1112990.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1574120.4 ms | 1105573.7 ms | 9 |
| LLGoDeadcodeDrop | 946077.3 ms | 365534.9 ms | 9 |
| LLGoNoLTO | 944135.3 ms | 364826.0 ms | 9 |
| Go | 118492.9 ms | 37318.0 ms | 9 |

Dependency download details are in `download-timings.log`.
