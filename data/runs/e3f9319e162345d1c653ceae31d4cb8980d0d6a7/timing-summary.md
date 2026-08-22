## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 798880.5 ms | 790745.2 ms | 8135.4 ms | 555724.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 761454.1 ms | 753680.0 ms | 7774.1 ms | 535824.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 611827.8 ms | 604034.2 ms | 7793.7 ms | 409876.3 ms |
| IXGo | LLGoDeadcodeDrop | 404125.2 ms | 397132.4 ms | 6992.8 ms | 139576.6 ms |
| IXGo | LLGoNoLTO | 394090.6 ms | 387212.5 ms | 6878.1 ms | 131894.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 336917.3 ms | 330722.5 ms | 6194.8 ms | 206210.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 336509.1 ms | 330499.7 ms | 6009.4 ms | 208590.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 328474.5 ms | 322444.2 ms | 6030.3 ms | 200218.7 ms |
| Etcdctl | LLGoNoLTO | 234811.5 ms | 229429.0 ms | 5382.5 ms | 78023.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 233078.0 ms | 227586.8 ms | 5491.2 ms | 77943.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 216316.4 ms | 211906.2 ms | 4410.2 ms | 157930.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 214181.9 ms | 209700.4 ms | 4481.5 ms | 156287.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 213409.1 ms | 208968.0 ms | 4441.0 ms | 155399.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 173343.3 ms | 169950.8 ms | 3392.5 ms | 136243.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 158430.6 ms | 155064.5 ms | 3366.1 ms | 119753.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 151575.9 ms | 148306.2 ms | 3269.7 ms | 113115.0 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 134380.0 ms | 131532.6 ms | 2847.4 ms | 106406.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 127404.5 ms | 124616.1 ms | 2788.4 ms | 103259.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 126449.8 ms | 123531.6 ms | 2918.2 ms | 101728.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 124649.8 ms | 121786.6 ms | 2863.2 ms | 99989.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 121260.7 ms | 118435.7 ms | 2825.0 ms | 92746.1 ms |
| XGo | LLGoDeadcodeDrop | 117150.8 ms | 113201.8 ms | 3949.0 ms | 44436.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 117147.0 ms | 114365.8 ms | 2781.2 ms | 89295.0 ms |
| XGo | LLGoNoLTO | 111493.3 ms | 107865.8 ms | 3627.5 ms | 42499.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 89866.3 ms | 86788.3 ms | 3078.0 ms | 42738.7 ms |
| Aws_restjson | LLGoNoLTO | 83150.0 ms | 80368.9 ms | 2781.1 ms | 38712.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 81614.9 ms | 79637.4 ms | 1977.4 ms | 61407.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 76824.1 ms | 74866.1 ms | 1958.0 ms | 56870.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 67582.7 ms | 65936.1 ms | 1646.6 ms | 55111.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 67445.8 ms | 65563.6 ms | 1882.2 ms | 47256.2 ms |
| Uber_zap | LLGoNoLTO | 59863.0 ms | 57362.9 ms | 2500.2 ms | 25769.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 59815.9 ms | 57444.7 ms | 2371.2 ms | 25770.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 56204.2 ms | 54590.8 ms | 1613.5 ms | 43474.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 53998.4 ms | 52505.3 ms | 1493.1 ms | 41642.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 51217.5 ms | 48785.4 ms | 2432.1 ms | 23568.0 ms |
| K8s_workqueue | LLGoNoLTO | 50984.4 ms | 48606.6 ms | 2377.8 ms | 23289.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46475.0 ms | 45040.4 ms | 1434.6 ms | 38588.2 ms |
| IXGo | Go | 46426.2 ms | 43428.2 ms | 2998.0 ms | 13312.4 ms |
| Gorm_schema | LLGoDeadcodeDrop | 40195.4 ms | 38495.6 ms | 1699.8 ms | 14131.6 ms |
| Gorm_schema | LLGoNoLTO | 38721.0 ms | 36918.0 ms | 1802.9 ms | 13506.5 ms |
| Etcdctl | Go | 34264.7 ms | 32223.0 ms | 2041.7 ms | 10248.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33815.4 ms | 32485.5 ms | 1329.9 ms | 26029.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33588.6 ms | 32254.2 ms | 1334.4 ms | 25818.2 ms |
| Toml | LLGoDeadcodeDrop | 24906.4 ms | 23356.5 ms | 1549.9 ms | 9460.4 ms |
| Toml | LLGoNoLTO | 24299.9 ms | 22827.2 ms | 1472.8 ms | 9166.4 ms |
| XGo | Go | 19344.6 ms | 18088.2 ms | 1256.4 ms | 5638.4 ms |
| Dustin_humanize | LLGoNoLTO | 14411.8 ms | 13189.1 ms | 1222.7 ms | 6186.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 14280.2 ms | 13097.0 ms | 1183.2 ms | 6185.3 ms |
| Aws_restjson | Go | 8231.1 ms | 7552.7 ms | 678.5 ms | 3344.1 ms |
| Gorm_schema | Go | 5885.1 ms | 5458.9 ms | 426.3 ms | 2249.8 ms |
| Uber_zap | Go | 5408.5 ms | 4974.6 ms | 433.9 ms | 2137.8 ms |
| K8s_workqueue | Go | 4798.5 ms | 4352.0 ms | 446.4 ms | 1711.6 ms |
| Toml | Go | 2080.2 ms | 1826.0 ms | 254.2 ms | 971.0 ms |
| Dustin_humanize | Go | 824.3 ms | 669.4 ms | 154.9 ms | 382.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1945079.9 ms | 1403362.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1910289.2 ms | 1349051.0 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1714792.3 ms | 1192384.2 ms | 9 |
| LLGoDeadcodeDrop | 1034635.8 ms | 383810.7 ms | 9 |
| LLGoNoLTO | 1011825.6 ms | 369047.6 ms | 9 |
| Go | 127263.3 ms | 39996.1 ms | 9 |

Dependency download details are in `download-timings.log`.
