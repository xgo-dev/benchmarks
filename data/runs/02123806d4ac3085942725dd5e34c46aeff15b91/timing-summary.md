## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 469764.1 ms | 463762.5 ms | 6001.6 ms | 307492.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 446249.5 ms | 440261.7 ms | 5987.8 ms | 297814.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 440604.2 ms | 434597.6 ms | 6006.6 ms | 291503.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 334039.7 ms | 329590.0 ms | 4449.7 ms | 222808.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 333591.2 ms | 329188.7 ms | 4402.4 ms | 221973.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 329598.0 ms | 325486.1 ms | 4112.0 ms | 220994.5 ms |
| IXGo | LLGoDeadcodeDrop | 323663.7 ms | 318402.2 ms | 5261.4 ms | 108408.7 ms |
| IXGo | LLGoNoLTO | 301482.4 ms | 296607.8 ms | 4874.6 ms | 102587.8 ms |
| XGo | LLGoDeadcodeDrop | 260123.6 ms | 255930.0 ms | 4193.6 ms | 82007.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 237637.1 ms | 233785.4 ms | 3851.7 ms | 131948.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 223782.5 ms | 220004.4 ms | 3778.2 ms | 69762.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 201703.3 ms | 197827.7 ms | 3875.6 ms | 123068.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 186916.5 ms | 183309.0 ms | 3607.5 ms | 104204.5 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 185182.1 ms | 181748.6 ms | 3433.5 ms | 141423.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 184262.1 ms | 180928.1 ms | 3334.0 ms | 141484.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 183312.4 ms | 179961.8 ms | 3350.6 ms | 141075.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 155981.6 ms | 153210.8 ms | 2770.8 ms | 125020.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137974.7 ms | 135078.6 ms | 2896.1 ms | 105870.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 111576.7 ms | 108962.9 ms | 2613.8 ms | 90638.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 109674.3 ms | 107127.7 ms | 2546.7 ms | 89764.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 109246.3 ms | 106735.5 ms | 2510.8 ms | 89184.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 102429.1 ms | 99831.0 ms | 2598.1 ms | 79144.9 ms |
| Etcdctl | LLGoNoLTO | 88525.6 ms | 85236.7 ms | 3288.9 ms | 31925.0 ms |
| Aws_restjson | LLGoNoLTO | 79194.8 ms | 76695.4 ms | 2499.4 ms | 31017.0 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70403.7 ms | 68727.8 ms | 1675.9 ms | 54805.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 70221.6 ms | 67708.5 ms | 2513.1 ms | 30267.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 68313.7 ms | 66545.7 ms | 1768.1 ms | 52376.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 59797.3 ms | 58180.5 ms | 1616.8 ms | 49230.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 57638.3 ms | 56028.1 ms | 1610.3 ms | 41444.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 50320.1 ms | 48819.1 ms | 1501.0 ms | 39520.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 49542.5 ms | 48061.2 ms | 1481.3 ms | 38864.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46136.6 ms | 44783.1 ms | 1353.5 ms | 39220.4 ms |
| XGo | LLGoNoLTO | 44643.3 ms | 42054.5 ms | 2588.8 ms | 18368.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 43625.2 ms | 41317.7 ms | 2307.5 ms | 15416.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 42790.3 ms | 40424.4 ms | 2365.8 ms | 15175.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36568.0 ms | 35074.0 ms | 1494.0 ms | 12294.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34403.8 ms | 33086.1 ms | 1317.7 ms | 27357.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34245.7 ms | 32945.7 ms | 1299.9 ms | 27342.6 ms |
| Uber_zap | LLGoNoLTO | 27623.9 ms | 25471.0 ms | 2152.9 ms | 10772.0 ms |
| K8s_workqueue | LLGoNoLTO | 26018.4 ms | 23997.3 ms | 2021.1 ms | 10318.8 ms |
| Toml | LLGoDeadcodeDrop | 21571.3 ms | 20275.2 ms | 1296.1 ms | 8508.7 ms |
| Toml | LLGoNoLTO | 21386.9 ms | 19987.8 ms | 1399.1 ms | 8440.2 ms |
| Gorm_schema | LLGoNoLTO | 16502.8 ms | 15090.7 ms | 1412.1 ms | 6565.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12401.2 ms | 11189.4 ms | 1211.9 ms | 5436.6 ms |
| Dustin_humanize | LLGoNoLTO | 11418.2 ms | 10191.7 ms | 1226.5 ms | 4800.7 ms |
| IXGo | Go | 2126.8 ms | 1842.6 ms | 284.2 ms | 1322.4 ms |
| Etcdctl | Go | 1453.6 ms | 1267.6 ms | 186.0 ms | 847.3 ms |
| XGo | Go | 1167.2 ms | 1008.0 ms | 159.1 ms | 660.7 ms |
| Aws_restjson | Go | 890.3 ms | 754.4 ms | 135.8 ms | 551.8 ms |
| Toml | Go | 752.5 ms | 580.2 ms | 172.4 ms | 385.2 ms |
| K8s_workqueue | Go | 701.6 ms | 597.0 ms | 104.6 ms | 394.5 ms |
| Uber_zap | Go | 679.1 ms | 555.4 ms | 123.6 ms | 399.3 ms |
| Gorm_schema | Go | 588.1 ms | 493.4 ms | 94.7 ms | 342.3 ms |
| Dustin_humanize | Go | 392.5 ms | 301.2 ms | 91.3 ms | 209.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1597211.6 ms | 1134682.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1569231.8 ms | 1083093.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1564101.3 ms | 1077801.2 ms | 9 |
| LLGoDeadcodeDrop | 1034747.4 ms | 347278.3 ms | 9 |
| LLGoNoLTO | 616796.3 ms | 224795.5 ms | 9 |
| Go | 8751.6 ms | 5113.3 ms | 9 |

Dependency download details are in `download-timings.log`.
