## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 834003.3 ms | 828330.0 ms | 5673.3 ms | 606623.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 770189.2 ms | 764526.2 ms | 5662.9 ms | 561448.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 689109.6 ms | 682699.4 ms | 6410.2 ms | 444180.7 ms |
| IXGo | LLGoDeadcodeDrop | 437383.5 ms | 432291.0 ms | 5092.5 ms | 134663.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 320071.9 ms | 315707.7 ms | 4364.2 ms | 213884.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 302511.4 ms | 298140.2 ms | 4371.1 ms | 196415.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 292952.3 ms | 288860.0 ms | 4092.3 ms | 187774.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 216921.3 ms | 213647.4 ms | 3273.8 ms | 162736.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 197645.5 ms | 194255.4 ms | 3390.0 ms | 146434.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 197349.9 ms | 194089.7 ms | 3260.2 ms | 67376.7 ms |
| Uber_zap | LLGoNoLTO | 197019.8 ms | 193618.6 ms | 3401.2 ms | 66329.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 190516.9 ms | 186950.9 ms | 3565.9 ms | 110184.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 185533.3 ms | 182415.7 ms | 3117.6 ms | 143896.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 165402.6 ms | 162330.5 ms | 3072.1 ms | 109980.7 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 156456.5 ms | 153763.2 ms | 2693.3 ms | 124658.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 152635.6 ms | 149745.0 ms | 2890.6 ms | 117656.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 142757.9 ms | 139964.6 ms | 2793.2 ms | 107256.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 135454.1 ms | 132764.0 ms | 2690.1 ms | 110316.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 122331.0 ms | 119712.1 ms | 2618.9 ms | 101286.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 118712.2 ms | 116290.0 ms | 2422.2 ms | 97239.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 113872.2 ms | 111267.2 ms | 2605.0 ms | 90111.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 102500.7 ms | 100328.3 ms | 2172.4 ms | 35497.3 ms |
| Etcdctl | LLGoNoLTO | 99959.5 ms | 96996.1 ms | 2963.3 ms | 39758.5 ms |
| XGo | LLGoDeadcodeDrop | 94564.9 ms | 91947.1 ms | 2617.8 ms | 38061.8 ms |
| XGo | LLGoNoLTO | 92820.2 ms | 90326.2 ms | 2494.0 ms | 37274.8 ms |
| IXGo | LLGoNoLTO | 83027.7 ms | 78973.1 ms | 4054.6 ms | 34995.9 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80282.7 ms | 77711.0 ms | 2571.7 ms | 39737.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 73881.0 ms | 72222.0 ms | 1659.0 ms | 58396.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 72733.8 ms | 71124.6 ms | 1609.1 ms | 55438.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 69462.7 ms | 67822.1 ms | 1640.6 ms | 58265.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 65162.3 ms | 63470.1 ms | 1692.2 ms | 48616.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 62887.9 ms | 61060.5 ms | 1827.4 ms | 36962.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 53028.7 ms | 51579.0 ms | 1449.7 ms | 42338.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 52101.3 ms | 50015.0 ms | 2086.3 ms | 23296.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 51025.6 ms | 49591.7 ms | 1433.9 ms | 40220.2 ms |
| K8s_workqueue | LLGoNoLTO | 46917.7 ms | 44658.2 ms | 2259.5 ms | 22184.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 45371.5 ms | 43274.3 ms | 2097.2 ms | 21718.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42769.2 ms | 41516.8 ms | 1252.4 ms | 35880.9 ms |
| Aws_restjson | LLGoNoLTO | 39678.5 ms | 37665.0 ms | 2013.5 ms | 19995.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 31561.2 ms | 30314.8 ms | 1246.5 ms | 24636.7 ms |
| Toml | LLGoDeadcodeDrop | 21222.1 ms | 19854.7 ms | 1367.5 ms | 8506.7 ms |
| Toml | LLGoNoLTO | 20928.8 ms | 19606.4 ms | 1322.4 ms | 8240.8 ms |
| Gorm_schema | LLGoNoLTO | 16214.0 ms | 14810.2 ms | 1403.7 ms | 6743.6 ms |
| Dustin_humanize | LLGoNoLTO | 12954.0 ms | 11737.7 ms | 1216.3 ms | 5665.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12491.6 ms | 11355.3 ms | 1136.3 ms | 5422.2 ms |
| IXGo | Go | 2200.5 ms | 1885.0 ms | 315.5 ms | 1152.5 ms |
| Etcdctl | Go | 1505.5 ms | 1281.6 ms | 224.0 ms | 1058.8 ms |
| XGo | Go | 1177.1 ms | 967.9 ms | 209.2 ms | 785.4 ms |
| Aws_restjson | Go | 803.6 ms | 674.9 ms | 128.7 ms | 439.5 ms |
| Uber_zap | Go | 778.8 ms | 639.3 ms | 139.6 ms | 457.1 ms |
| K8s_workqueue | Go | 688.3 ms | 577.1 ms | 111.2 ms | 373.7 ms |
| Toml | Go | 603.5 ms | 497.2 ms | 106.3 ms | 348.6 ms |
| Gorm_schema | Go | 506.0 ms | 421.1 ms | 85.0 ms | 277.0 ms |
| Dustin_humanize | Go | 374.2 ms | 295.1 ms | 79.1 ms | 207.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1966425.3 ms | 1411441.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1871713.3 ms | 1334680.4 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1791450.4 ms | 1286718.2 ms | 9 |
| LLGoDeadcodeDrop | 1043268.2 ms | 374279.9 ms | 9 |
| LLGoNoLTO | 609520.0 ms | 241189.3 ms | 9 |
| Go | 8637.6 ms | 5100.5 ms | 9 |

Dependency download details are in `download-timings.log`.
