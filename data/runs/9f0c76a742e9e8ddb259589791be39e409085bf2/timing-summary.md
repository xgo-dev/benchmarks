## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 453941.1 ms | 448614.9 ms | 5326.2 ms | 429028.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 433577.0 ms | 428257.6 ms | 5319.4 ms | 400802.9 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 422703.0 ms | 416917.9 ms | 5785.2 ms | 382613.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 335230.5 ms | 331254.0 ms | 3976.5 ms | 302513.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 329078.7 ms | 324871.8 ms | 4206.9 ms | 289253.1 ms |
| IXGo | LLGoDeadcodeDrop | 299620.6 ms | 293166.7 ms | 6453.9 ms | 233726.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 289653.3 ms | 286133.5 ms | 3519.8 ms | 257271.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 214022.2 ms | 209987.9 ms | 4034.3 ms | 186387.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 202321.4 ms | 198858.8 ms | 3462.6 ms | 189801.2 ms |
| XGo | LLGoNoLTO | 180483.7 ms | 176095.6 ms | 4388.0 ms | 141207.2 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177289.7 ms | 174317.5 ms | 2972.2 ms | 151250.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 176596.9 ms | 173624.6 ms | 2972.3 ms | 156544.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 168495.1 ms | 164957.3 ms | 3537.8 ms | 158380.6 ms |
| Uber_zap | LLGoDeadcodeDrop | 160933.2 ms | 156817.7 ms | 4115.5 ms | 143476.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 158147.3 ms | 155330.3 ms | 2816.9 ms | 155484.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 147256.1 ms | 144652.4 ms | 2603.7 ms | 129536.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 140346.5 ms | 137643.5 ms | 2703.0 ms | 140240.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 139987.0 ms | 137385.6 ms | 2601.4 ms | 127577.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 119387.1 ms | 116409.8 ms | 2977.3 ms | 127630.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 112898.7 ms | 110741.2 ms | 2157.5 ms | 119368.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 105003.1 ms | 102558.1 ms | 2445.0 ms | 91941.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 102911.5 ms | 100714.0 ms | 2197.5 ms | 87970.5 ms |
| IXGo | LLGoNoLTO | 99720.8 ms | 96576.1 ms | 3144.7 ms | 56590.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 99217.2 ms | 96906.4 ms | 2310.8 ms | 84741.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98900.9 ms | 96554.5 ms | 2346.4 ms | 88043.9 ms |
| Etcdctl | LLGoNoLTO | 92702.8 ms | 89679.3 ms | 3023.5 ms | 70440.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 88891.8 ms | 86194.1 ms | 2697.7 ms | 84794.0 ms |
| XGo | LLGoDeadcodeDrop | 85425.2 ms | 82646.3 ms | 2778.9 ms | 72748.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 84438.7 ms | 82624.7 ms | 1814.0 ms | 90429.1 ms |
| Aws_restjson | LLGoNoLTO | 69847.6 ms | 67207.2 ms | 2640.3 ms | 46648.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 64555.9 ms | 62897.3 ms | 1658.6 ms | 70337.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55814.6 ms | 54466.1 ms | 1348.5 ms | 48284.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51061.3 ms | 49613.8 ms | 1447.4 ms | 44976.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 44721.8 ms | 43481.2 ms | 1240.6 ms | 37993.1 ms |
| IXGo | Go | 42444.9 ms | 39885.5 ms | 2559.4 ms | 17396.2 ms |
| Uber_zap | LLGoNoLTO | 40705.5 ms | 38442.0 ms | 2263.5 ms | 37990.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 39008.4 ms | 37438.2 ms | 1570.2 ms | 40860.7 ms |
| K8s_workqueue | LLGoNoLTO | 38126.1 ms | 36046.9 ms | 2079.2 ms | 36467.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36364.9 ms | 34236.7 ms | 2128.2 ms | 27170.8 ms |
| Etcdctl | Go | 36301.1 ms | 34429.5 ms | 1871.6 ms | 21579.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34484.8 ms | 33156.8 ms | 1328.0 ms | 28207.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33853.4 ms | 32634.7 ms | 1218.7 ms | 27609.4 ms |
| Gorm_schema | LLGoNoLTO | 29349.3 ms | 28041.8 ms | 1307.5 ms | 22387.3 ms |
| Toml | LLGoNoLTO | 26501.8 ms | 25048.6 ms | 1453.1 ms | 30649.7 ms |
| Toml | LLGoDeadcodeDrop | 26392.2 ms | 24973.5 ms | 1418.6 ms | 31417.2 ms |
| Dustin_humanize | LLGoNoLTO | 14444.8 ms | 13211.4 ms | 1233.4 ms | 13296.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13572.3 ms | 12387.9 ms | 1184.4 ms | 6987.2 ms |
| XGo | Go | 7693.6 ms | 7233.7 ms | 459.9 ms | 8637.0 ms |
| Uber_zap | Go | 6709.2 ms | 6274.6 ms | 434.6 ms | 9271.0 ms |
| Aws_restjson | Go | 6084.3 ms | 5593.8 ms | 490.5 ms | 5330.0 ms |
| Gorm_schema | Go | 4107.1 ms | 3886.8 ms | 220.3 ms | 2919.1 ms |
| Toml | Go | 2416.6 ms | 2190.6 ms | 226.0 ms | 4674.4 ms |
| K8s_workqueue | Go | 2254.3 ms | 2036.1 ms | 218.2 ms | 3148.6 ms |
| Dustin_humanize | Go | 738.5 ms | 630.8 ms | 107.7 ms | 508.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1590416.8 ms | 1471353.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1510824.1 ms | 1400998.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1480631.7 ms | 1345477.6 ms | 9 |
| LLGoDeadcodeDrop | 964230.7 ms | 827570.0 ms | 9 |
| LLGoNoLTO | 591882.2 ms | 455677.9 ms | 9 |
| Go | 108749.6 ms | 73463.9 ms | 9 |

Dependency download details are in `download-timings.log`.
