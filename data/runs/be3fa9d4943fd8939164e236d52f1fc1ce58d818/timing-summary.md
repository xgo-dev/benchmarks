## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 859025.1 ms | 851585.4 ms | 7439.8 ms | 629302.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 791509.8 ms | 784016.8 ms | 7493.0 ms | 574083.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 755369.1 ms | 747801.4 ms | 7567.6 ms | 534784.8 ms |
| IXGo | LLGoDeadcodeDrop | 483716.9 ms | 476982.0 ms | 6734.9 ms | 171746.9 ms |
| IXGo | LLGoNoLTO | 465301.5 ms | 458835.2 ms | 6466.2 ms | 170000.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 283694.8 ms | 277910.6 ms | 5784.1 ms | 177762.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 264555.4 ms | 259471.4 ms | 5084.0 ms | 163557.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 262898.5 ms | 257645.9 ms | 5252.6 ms | 163167.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 190399.9 ms | 185821.5 ms | 4578.4 ms | 64304.1 ms |
| Etcdctl | LLGoNoLTO | 189573.7 ms | 185062.9 ms | 4510.8 ms | 64023.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 184924.9 ms | 181379.7 ms | 3545.2 ms | 132710.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 181095.0 ms | 177651.0 ms | 3444.0 ms | 129870.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 179283.1 ms | 175754.6 ms | 3528.6 ms | 128101.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 166737.2 ms | 164320.3 ms | 2416.9 ms | 133451.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 156439.0 ms | 153876.6 ms | 2562.4 ms | 121941.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 153646.4 ms | 151100.5 ms | 2546.0 ms | 118747.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 107247.3 ms | 105351.2 ms | 1896.1 ms | 85335.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 106482.2 ms | 104694.7 ms | 1787.5 ms | 83190.2 ms |
| XGo | LLGoDeadcodeDrop | 104659.5 ms | 101755.0 ms | 2904.5 ms | 41799.4 ms |
| XGo | LLGoNoLTO | 102005.1 ms | 99238.0 ms | 2767.1 ms | 41880.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 101678.2 ms | 99897.6 ms | 1780.6 ms | 77140.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 100454.4 ms | 98752.3 ms | 1702.1 ms | 79746.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97682.8 ms | 95833.3 ms | 1849.5 ms | 73228.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 95003.4 ms | 92907.6 ms | 2095.7 ms | 53821.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 94725.5 ms | 92855.6 ms | 1869.8 ms | 71909.1 ms |
| Aws_restjson | LLGoNoLTO | 81574.4 ms | 79461.2 ms | 2113.2 ms | 42567.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 68453.2 ms | 66984.8 ms | 1468.4 ms | 50005.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 64867.5 ms | 63574.5 ms | 1293.0 ms | 47517.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55217.6 ms | 53798.6 ms | 1419.0 ms | 37043.0 ms |
| Uber_zap | LLGoDeadcodeDrop | 54731.1 ms | 53234.6 ms | 1496.5 ms | 25447.0 ms |
| Uber_zap | LLGoNoLTO | 53672.8 ms | 52202.0 ms | 1470.8 ms | 24119.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51680.2 ms | 50646.1 ms | 1034.1 ms | 41024.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48906.6 ms | 47452.4 ms | 1454.2 ms | 23992.7 ms |
| K8s_workqueue | LLGoNoLTO | 46156.2 ms | 44704.0 ms | 1452.3 ms | 22244.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44995.8 ms | 43925.3 ms | 1070.5 ms | 33773.7 ms |
| IXGo | Go | 44729.4 ms | 41502.9 ms | 3226.4 ms | 12969.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 42329.9 ms | 41253.9 ms | 1076.0 ms | 31736.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35540.4 ms | 34279.0 ms | 1261.5 ms | 12761.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34810.5 ms | 33924.7 ms | 885.8 ms | 28126.4 ms |
| Gorm_schema | LLGoNoLTO | 33290.8 ms | 32189.2 ms | 1101.6 ms | 11744.2 ms |
| Etcdctl | Go | 31998.7 ms | 29805.6 ms | 2193.1 ms | 9613.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 25242.8 ms | 24490.4 ms | 752.4 ms | 18785.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25003.0 ms | 24192.5 ms | 810.4 ms | 18055.3 ms |
| Toml | LLGoDeadcodeDrop | 21702.5 ms | 20813.4 ms | 889.1 ms | 8265.5 ms |
| Toml | LLGoNoLTO | 20138.7 ms | 19308.5 ms | 830.2 ms | 7682.6 ms |
| XGo | Go | 19386.4 ms | 18073.5 ms | 1312.9 ms | 5825.9 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12510.0 ms | 11821.5 ms | 688.5 ms | 5631.7 ms |
| Dustin_humanize | LLGoNoLTO | 11860.8 ms | 11218.2 ms | 642.6 ms | 5306.3 ms |
| Aws_restjson | Go | 8185.9 ms | 7438.0 ms | 747.9 ms | 3506.4 ms |
| Gorm_schema | Go | 5767.3 ms | 5332.7 ms | 434.7 ms | 2269.8 ms |
| Uber_zap | Go | 5230.8 ms | 4769.9 ms | 461.0 ms | 2062.8 ms |
| K8s_workqueue | Go | 4558.3 ms | 4075.5 ms | 482.8 ms | 1655.8 ms |
| Toml | Go | 2012.6 ms | 1771.6 ms | 241.0 ms | 929.2 ms |
| Dustin_humanize | Go | 781.7 ms | 630.9 ms | 150.9 ms | 378.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1828050.7 ms | 1335397.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1731400.6 ms | 1237312.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1700598.1 ms | 1211387.9 ms | 9 |
| LLGoDeadcodeDrop | 1047170.4 ms | 407770.4 ms | 9 |
| LLGoNoLTO | 1003573.9 ms | 389570.2 ms | 9 |
| Go | 122651.1 ms | 39212.4 ms | 9 |

Dependency download details are in `download-timings.log`.
