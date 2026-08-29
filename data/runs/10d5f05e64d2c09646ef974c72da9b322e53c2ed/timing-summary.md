## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 862880.8 ms | 854914.9 ms | 7965.9 ms | 613576.1 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 745494.3 ms | 738303.5 ms | 7190.9 ms | 534168.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 611214.9 ms | 603975.2 ms | 7239.7 ms | 411512.7 ms |
| IXGo | LLGoDeadcodeDrop | 426106.5 ms | 419491.5 ms | 6615.0 ms | 152373.7 ms |
| IXGo | LLGoNoLTO | 412773.6 ms | 406174.9 ms | 6598.7 ms | 151983.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 284857.1 ms | 279557.3 ms | 5299.9 ms | 169727.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283665.6 ms | 278239.9 ms | 5425.6 ms | 169887.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 277052.0 ms | 271699.4 ms | 5352.6 ms | 164606.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 218853.3 ms | 213771.7 ms | 5081.6 ms | 72116.0 ms |
| Etcdctl | LLGoNoLTO | 209687.8 ms | 205015.7 ms | 4672.1 ms | 68663.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 177514.9 ms | 174105.4 ms | 3409.4 ms | 126470.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 173574.7 ms | 170078.5 ms | 3496.2 ms | 123239.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 172466.1 ms | 169160.3 ms | 3305.9 ms | 123412.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 171528.9 ms | 168912.6 ms | 2616.2 ms | 138480.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 153578.2 ms | 151215.2 ms | 2363.0 ms | 120326.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 152270.7 ms | 149856.2 ms | 2414.5 ms | 118609.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109283.7 ms | 107460.5 ms | 1823.2 ms | 85176.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105837.2 ms | 103991.1 ms | 1846.1 ms | 83809.7 ms |
| XGo | LLGoDeadcodeDrop | 104653.8 ms | 101658.7 ms | 2995.1 ms | 41015.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104522.0 ms | 102710.5 ms | 1811.5 ms | 83028.8 ms |
| XGo | LLGoNoLTO | 101968.3 ms | 99093.0 ms | 2875.3 ms | 39987.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98422.1 ms | 96680.9 ms | 1741.3 ms | 74257.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 95765.7 ms | 93991.6 ms | 1774.1 ms | 71805.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90193.2 ms | 88418.7 ms | 1774.4 ms | 68221.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 84505.0 ms | 82314.0 ms | 2191.0 ms | 43271.8 ms |
| Aws_restjson | LLGoNoLTO | 79212.0 ms | 77134.9 ms | 2077.1 ms | 40017.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64888.8 ms | 63483.4 ms | 1405.4 ms | 46838.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61848.5 ms | 60580.3 ms | 1268.2 ms | 44870.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54764.7 ms | 53453.3 ms | 1311.4 ms | 36602.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 54208.1 ms | 52635.9 ms | 1572.3 ms | 24543.6 ms |
| Uber_zap | LLGoNoLTO | 52762.6 ms | 51341.9 ms | 1420.7 ms | 23932.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 51228.8 ms | 50192.1 ms | 1036.7 ms | 40491.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46412.1 ms | 44941.7 ms | 1470.5 ms | 22322.6 ms |
| K8s_workqueue | LLGoNoLTO | 46071.5 ms | 44625.6 ms | 1445.9 ms | 22054.0 ms |
| IXGo | Go | 44212.4 ms | 40936.5 ms | 3275.9 ms | 12897.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 44088.6 ms | 43065.5 ms | 1023.0 ms | 32807.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44036.5 ms | 43022.6 ms | 1013.9 ms | 32802.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 35272.6 ms | 34448.9 ms | 823.7 ms | 28663.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35233.7 ms | 34085.0 ms | 1148.7 ms | 12522.0 ms |
| Gorm_schema | LLGoNoLTO | 34448.4 ms | 33269.4 ms | 1179.0 ms | 12140.9 ms |
| Etcdctl | Go | 33565.8 ms | 31395.0 ms | 2170.8 ms | 10112.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25095.3 ms | 24380.2 ms | 715.1 ms | 18451.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24633.5 ms | 23884.6 ms | 748.9 ms | 18034.7 ms |
| Toml | LLGoNoLTO | 21362.1 ms | 20455.5 ms | 906.6 ms | 7925.5 ms |
| Toml | LLGoDeadcodeDrop | 21273.1 ms | 20350.9 ms | 922.1 ms | 8035.2 ms |
| XGo | Go | 18247.2 ms | 17003.1 ms | 1244.0 ms | 5376.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12313.0 ms | 11634.9 ms | 678.1 ms | 5483.0 ms |
| Dustin_humanize | LLGoNoLTO | 12026.4 ms | 11414.9 ms | 611.5 ms | 5207.8 ms |
| Aws_restjson | Go | 7590.6 ms | 6886.3 ms | 704.2 ms | 3131.1 ms |
| Gorm_schema | Go | 5561.5 ms | 5157.0 ms | 404.4 ms | 2136.2 ms |
| Uber_zap | Go | 5303.2 ms | 4862.4 ms | 440.8 ms | 2078.9 ms |
| K8s_workqueue | Go | 4704.1 ms | 4170.0 ms | 534.2 ms | 1715.6 ms |
| Toml | Go | 1970.3 ms | 1733.7 ms | 236.6 ms | 905.1 ms |
| Dustin_humanize | Go | 828.5 ms | 667.9 ms | 160.6 ms | 403.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1812737.2 ms | 1281680.1 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1735310.5 ms | 1248180.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1527931.6 ms | 1050020.7 ms | 9 |
| LLGoDeadcodeDrop | 1003558.6 ms | 381683.6 ms | 9 |
| LLGoNoLTO | 970312.8 ms | 371912.5 ms | 9 |
| Go | 121983.5 ms | 38755.9 ms | 9 |

Dependency download details are in `download-timings.log`.
