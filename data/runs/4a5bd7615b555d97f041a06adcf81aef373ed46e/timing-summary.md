## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCE | 341417.7 ms | 335303.1 ms | 6114.6 ms | 202986.9 ms |
| IXGo | LLGoFullLTOGlobalDCE | 338331.9 ms | 333295.0 ms | 5036.8 ms | 235486.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 323727.6 ms | 318601.1 ms | 5126.4 ms | 232981.1 ms |
| IXGo | LLGoNoLTO | 315221.0 ms | 309062.5 ms | 6158.5 ms | 108040.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 312618.4 ms | 307789.7 ms | 4828.8 ms | 223080.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 255614.1 ms | 251850.0 ms | 3764.1 ms | 174278.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 251843.8 ms | 248034.9 ms | 3808.8 ms | 170507.4 ms |
| IXGo | LLGoDeadcodeDrop | 217180.0 ms | 212709.1 ms | 4470.9 ms | 72571.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 208739.7 ms | 204996.9 ms | 3742.8 ms | 134386.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 194190.5 ms | 190354.0 ms | 3836.5 ms | 126395.3 ms |
| Etcdctl | LLGoNoLTO | 155743.6 ms | 152634.6 ms | 3109.0 ms | 46056.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 155411.7 ms | 152355.7 ms | 3056.1 ms | 47577.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 139960.8 ms | 136051.7 ms | 3909.1 ms | 46216.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 136127.4 ms | 133386.2 ms | 2741.2 ms | 109339.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130923.3 ms | 128538.2 ms | 2385.1 ms | 107008.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 118786.8 ms | 116520.5 ms | 2266.3 ms | 95007.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 107304.7 ms | 105025.9 ms | 2278.8 ms | 81814.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 94207.1 ms | 91986.7 ms | 2220.4 ms | 76244.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 83739.1 ms | 81504.4 ms | 2234.7 ms | 69929.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 81558.1 ms | 79448.9 ms | 2109.3 ms | 66027.0 ms |
| XGo | LLGoDeadcodeDrop | 81511.4 ms | 79192.4 ms | 2319.1 ms | 26225.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 79093.2 ms | 77116.9 ms | 1976.3 ms | 65991.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 75595.5 ms | 73453.7 ms | 2141.8 ms | 47570.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 73019.1 ms | 70929.7 ms | 2089.4 ms | 55737.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 72178.1 ms | 70046.0 ms | 2132.0 ms | 55024.5 ms |
| Aws_restjson | LLGoNoLTO | 54103.2 ms | 51776.8 ms | 2326.4 ms | 24141.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 54102.1 ms | 52746.1 ms | 1356.0 ms | 41248.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 53178.9 ms | 51171.9 ms | 2007.0 ms | 23002.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 51039.6 ms | 49610.9 ms | 1428.8 ms | 39435.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 48305.3 ms | 46853.2 ms | 1452.1 ms | 32063.6 ms |
| Toml | LLGoFullLTOGlobalDCE | 36515.7 ms | 35287.0 ms | 1228.7 ms | 28650.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 36467.6 ms | 35286.9 ms | 1180.7 ms | 28313.2 ms |
| Uber_zap | LLGoNoLTO | 36238.8 ms | 34247.7 ms | 1991.1 ms | 12289.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34637.2 ms | 33551.3 ms | 1085.9 ms | 29218.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 32968.0 ms | 31194.3 ms | 1773.8 ms | 11263.0 ms |
| XGo | LLGoNoLTO | 32398.9 ms | 30438.6 ms | 1960.3 ms | 12893.8 ms |
| IXGo | Go | 27003.0 ms | 25065.3 ms | 1937.7 ms | 8869.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 26268.1 ms | 25159.0 ms | 1109.2 ms | 20880.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25685.5 ms | 24608.2 ms | 1077.4 ms | 20354.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 23807.0 ms | 22547.1 ms | 1259.9 ms | 8033.3 ms |
| Gorm_schema | LLGoNoLTO | 22726.6 ms | 21510.9 ms | 1215.6 ms | 7630.9 ms |
| K8s_workqueue | LLGoNoLTO | 19093.1 ms | 17522.7 ms | 1570.4 ms | 7017.4 ms |
| Toml | LLGoDeadcodeDrop | 15637.5 ms | 14523.7 ms | 1113.9 ms | 5983.3 ms |
| Etcdctl | Go | 12740.9 ms | 12026.4 ms | 714.4 ms | 4891.6 ms |
| Toml | LLGoNoLTO | 10160.9 ms | 9123.0 ms | 1037.8 ms | 3972.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9241.0 ms | 8316.5 ms | 924.5 ms | 3865.0 ms |
| Dustin_humanize | LLGoNoLTO | 9006.0 ms | 8039.1 ms | 967.0 ms | 3753.9 ms |
| XGo | Go | 6969.8 ms | 6531.1 ms | 438.7 ms | 2834.7 ms |
| Gorm_schema | Go | 4339.7 ms | 4006.6 ms | 333.1 ms | 1684.6 ms |
| Aws_restjson | Go | 3848.7 ms | 3515.5 ms | 333.2 ms | 1485.7 ms |
| Uber_zap | Go | 2443.0 ms | 2222.6 ms | 220.4 ms | 1113.1 ms |
| K8s_workqueue | Go | 1442.9 ms | 1279.6 ms | 163.3 ms | 674.6 ms |
| Dustin_humanize | Go | 498.6 ms | 413.7 ms | 84.8 ms | 251.1 ms |
| Toml | Go | 448.8 ms | 346.6 ms | 102.2 ms | 262.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1218845.0 ms | 879035.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1190741.4 ms | 839645.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1182450.9 ms | 851280.2 ms | 9 |
| LLGoDeadcodeDrop | 728896.4 ms | 244738.0 ms | 9 |
| LLGoNoLTO | 654692.1 ms | 225795.2 ms | 9 |
| Go | 59735.2 ms | 22068.0 ms | 9 |

Dependency download details are in `download-timings.log`.
