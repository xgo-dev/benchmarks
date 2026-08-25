## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 607999.2 ms | 599943.0 ms | 8056.1 ms | 413613.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 601612.9 ms | 593650.4 ms | 7962.5 ms | 412888.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 585012.4 ms | 577254.0 ms | 7758.4 ms | 405524.2 ms |
| IXGo | LLGoNoLTO | 357307.2 ms | 350246.1 ms | 7061.1 ms | 131079.0 ms |
| IXGo | LLGoDeadcodeDrop | 349566.1 ms | 342315.6 ms | 7250.4 ms | 129059.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 275435.4 ms | 269287.1 ms | 6148.3 ms | 162847.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 274865.5 ms | 268627.0 ms | 6238.4 ms | 162484.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 273601.2 ms | 267707.4 ms | 5893.7 ms | 163177.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 206848.8 ms | 201159.0 ms | 5689.8 ms | 68897.7 ms |
| Etcdctl | LLGoNoLTO | 205534.0 ms | 200129.2 ms | 5404.8 ms | 68954.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 173129.3 ms | 168846.5 ms | 4282.9 ms | 122590.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 172589.8 ms | 168430.7 ms | 4159.1 ms | 123074.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 172441.5 ms | 168213.0 ms | 4228.6 ms | 122333.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 148318.2 ms | 145103.3 ms | 3214.9 ms | 115273.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137311.4 ms | 134143.5 ms | 3167.8 ms | 103901.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 136134.4 ms | 132969.1 ms | 3165.3 ms | 103344.3 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 107167.7 ms | 104509.6 ms | 2658.2 ms | 82838.8 ms |
| XGo | LLGoDeadcodeDrop | 103196.5 ms | 99494.5 ms | 3702.0 ms | 40661.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 103104.2 ms | 100370.9 ms | 2733.3 ms | 81042.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 101488.8 ms | 98778.3 ms | 2710.4 ms | 79545.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 101370.3 ms | 98726.7 ms | 2643.6 ms | 79739.5 ms |
| XGo | LLGoNoLTO | 100277.8 ms | 96660.9 ms | 3616.9 ms | 39647.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97192.8 ms | 94428.7 ms | 2764.1 ms | 72828.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97058.7 ms | 94365.9 ms | 2692.7 ms | 72296.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80374.2 ms | 77476.2 ms | 2898.0 ms | 39467.9 ms |
| Aws_restjson | LLGoNoLTO | 78133.9 ms | 75218.5 ms | 2915.5 ms | 38649.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62747.0 ms | 60885.2 ms | 1861.8 ms | 45914.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 62258.5 ms | 60219.7 ms | 2038.8 ms | 44535.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 55074.3 ms | 52685.3 ms | 2389.1 ms | 25158.4 ms |
| Uber_zap | LLGoNoLTO | 54810.7 ms | 52400.8 ms | 2409.9 ms | 25067.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52095.8 ms | 50292.0 ms | 1803.8 ms | 34421.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 50511.7 ms | 48852.9 ms | 1658.8 ms | 39722.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 48924.4 ms | 46620.5 ms | 2303.9 ms | 23461.0 ms |
| K8s_workqueue | LLGoNoLTO | 47820.3 ms | 45593.4 ms | 2226.9 ms | 22928.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42735.6 ms | 41211.9 ms | 1523.7 ms | 31760.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 42697.0 ms | 41213.1 ms | 1483.9 ms | 31694.5 ms |
| IXGo | Go | 42457.2 ms | 39352.5 ms | 3104.7 ms | 12199.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35845.6 ms | 34028.9 ms | 1816.8 ms | 12812.2 ms |
| Gorm_schema | LLGoNoLTO | 34553.6 ms | 32775.2 ms | 1778.4 ms | 12393.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33451.0 ms | 32100.1 ms | 1350.9 ms | 26699.5 ms |
| Etcdctl | Go | 31715.1 ms | 29628.1 ms | 2087.0 ms | 9583.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24744.6 ms | 23407.4 ms | 1337.2 ms | 17798.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24741.4 ms | 23414.4 ms | 1327.0 ms | 17832.6 ms |
| Toml | LLGoDeadcodeDrop | 21719.2 ms | 20262.7 ms | 1456.6 ms | 8474.6 ms |
| Toml | LLGoNoLTO | 21443.7 ms | 19937.9 ms | 1505.8 ms | 8185.7 ms |
| XGo | Go | 18099.7 ms | 16882.3 ms | 1217.3 ms | 5350.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12913.8 ms | 11690.0 ms | 1223.8 ms | 5808.6 ms |
| Dustin_humanize | LLGoNoLTO | 12837.3 ms | 11654.6 ms | 1182.7 ms | 5676.5 ms |
| Aws_restjson | Go | 7551.8 ms | 6864.5 ms | 687.3 ms | 3064.2 ms |
| Gorm_schema | Go | 5468.0 ms | 5075.5 ms | 392.5 ms | 2065.0 ms |
| Uber_zap | Go | 5033.7 ms | 4613.4 ms | 420.2 ms | 1984.5 ms |
| K8s_workqueue | Go | 4471.4 ms | 3996.9 ms | 474.5 ms | 1593.7 ms |
| Toml | Go | 1971.2 ms | 1718.0 ms | 253.2 ms | 899.1 ms |
| Dustin_humanize | Go | 780.2 ms | 635.2 ms | 144.9 ms | 371.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1534769.3 ms | 1081964.4 ms | 9 |
| LLGoFullLTOGlobalDCE | 1514005.9 ms | 1047816.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1513040.9 ms | 1039942.5 ms | 9 |
| LLGoDeadcodeDrop | 914462.9 ms | 353801.4 ms | 9 |
| LLGoNoLTO | 912718.4 ms | 352583.1 ms | 9 |
| Go | 117548.1 ms | 37111.4 ms | 9 |

Dependency download details are in `download-timings.log`.
