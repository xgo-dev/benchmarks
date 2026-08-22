## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 861205.3 ms | 854348.2 ms | 6857.1 ms | 593545.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 753658.8 ms | 748347.1 ms | 5311.8 ms | 532742.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 615566.1 ms | 610086.1 ms | 5480.0 ms | 425197.5 ms |
| IXGo | LLGoNoLTO | 375887.1 ms | 371351.6 ms | 4535.5 ms | 125844.0 ms |
| IXGo | LLGoDeadcodeDrop | 369181.0 ms | 364511.8 ms | 4669.2 ms | 120346.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 360893.1 ms | 356500.4 ms | 4392.7 ms | 215207.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 358505.1 ms | 353631.3 ms | 4873.8 ms | 114877.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 300073.2 ms | 295791.0 ms | 4282.3 ms | 192547.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 296467.5 ms | 292413.5 ms | 4053.9 ms | 191528.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 243014.6 ms | 239470.9 ms | 3543.7 ms | 162947.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 191159.1 ms | 187854.5 ms | 3304.6 ms | 148264.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 186316.2 ms | 183054.8 ms | 3261.4 ms | 143147.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 176216.1 ms | 173224.2 ms | 2991.9 ms | 140237.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 145132.2 ms | 142284.4 ms | 2847.8 ms | 111635.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 142892.2 ms | 140038.6 ms | 2853.6 ms | 109599.9 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 131145.9 ms | 128502.9 ms | 2643.0 ms | 107456.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 123805.3 ms | 121141.9 ms | 2663.5 ms | 101998.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 121309.2 ms | 118888.1 ms | 2421.1 ms | 99786.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 119112.6 ms | 116639.4 ms | 2473.1 ms | 98576.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 113319.1 ms | 110746.8 ms | 2572.3 ms | 89530.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 109547.5 ms | 107158.4 ms | 2389.0 ms | 86413.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 107922.1 ms | 105612.5 ms | 2309.6 ms | 72815.0 ms |
| Etcdctl | LLGoNoLTO | 102777.0 ms | 99563.6 ms | 3213.4 ms | 40750.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 96571.6 ms | 94140.3 ms | 2431.3 ms | 56604.1 ms |
| XGo | LLGoDeadcodeDrop | 96472.9 ms | 93875.1 ms | 2597.8 ms | 38755.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82935.6 ms | 80501.7 ms | 2433.9 ms | 39340.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 70957.4 ms | 69262.9 ms | 1694.5 ms | 55438.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 64711.9 ms | 63159.4 ms | 1552.4 ms | 53750.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61894.7 ms | 60310.4 ms | 1584.3 ms | 44791.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 56424.9 ms | 54873.2 ms | 1551.7 ms | 43444.8 ms |
| Uber_zap | LLGoDeadcodeDrop | 53069.2 ms | 50958.9 ms | 2110.3 ms | 23727.7 ms |
| Uber_zap | LLGoNoLTO | 52678.1 ms | 50485.4 ms | 2192.8 ms | 23531.2 ms |
| XGo | LLGoNoLTO | 52364.9 ms | 49991.3 ms | 2373.6 ms | 26334.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 48608.7 ms | 47013.7 ms | 1595.1 ms | 15329.3 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 45951.4 ms | 43887.1 ms | 2064.3 ms | 21883.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44769.6 ms | 43387.8 ms | 1381.8 ms | 37740.0 ms |
| Aws_restjson | LLGoNoLTO | 39930.6 ms | 37895.8 ms | 2034.8 ms | 20131.5 ms |
| K8s_workqueue | LLGoNoLTO | 35580.4 ms | 33654.4 ms | 1926.0 ms | 18713.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32702.9 ms | 31394.2 ms | 1308.7 ms | 25614.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32660.4 ms | 31362.4 ms | 1298.0 ms | 25520.1 ms |
| Toml | LLGoNoLTO | 21246.4 ms | 19845.2 ms | 1401.2 ms | 8305.8 ms |
| Toml | LLGoDeadcodeDrop | 20749.5 ms | 19469.9 ms | 1279.7 ms | 8238.9 ms |
| Gorm_schema | LLGoNoLTO | 16671.9 ms | 15318.3 ms | 1353.6 ms | 6777.7 ms |
| Dustin_humanize | LLGoNoLTO | 12647.6 ms | 11444.9 ms | 1202.6 ms | 5454.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12159.6 ms | 11004.4 ms | 1155.3 ms | 5319.4 ms |
| IXGo | Go | 2077.3 ms | 1833.9 ms | 243.4 ms | 1235.3 ms |
| Etcdctl | Go | 1413.3 ms | 1208.0 ms | 205.3 ms | 908.3 ms |
| XGo | Go | 1344.0 ms | 1128.1 ms | 215.9 ms | 699.6 ms |
| Aws_restjson | Go | 813.3 ms | 684.2 ms | 129.2 ms | 447.5 ms |
| K8s_workqueue | Go | 718.1 ms | 592.7 ms | 125.4 ms | 413.3 ms |
| Uber_zap | Go | 709.7 ms | 585.4 ms | 124.3 ms | 413.9 ms |
| Gorm_schema | Go | 542.3 ms | 458.2 ms | 84.2 ms | 319.8 ms |
| Toml | Go | 525.6 ms | 428.6 ms | 97.0 ms | 304.5 ms |
| Dustin_humanize | Go | 357.1 ms | 276.1 ms | 81.1 ms | 196.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1949589.1 ms | 1406789.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1881594.6 ms | 1351636.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1728265.6 ms | 1207656.4 ms | 9 |
| LLGoDeadcodeDrop | 1087633.1 ms | 387819.0 ms | 9 |
| LLGoNoLTO | 709784.1 ms | 275842.2 ms | 9 |
| Go | 8500.9 ms | 4938.1 ms | 9 |

Dependency download details are in `download-timings.log`.
