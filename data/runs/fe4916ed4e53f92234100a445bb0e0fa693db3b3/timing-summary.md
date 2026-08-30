## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 649348.7 ms | 642644.7 ms | 6704.0 ms | 445063.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 647556.7 ms | 641090.9 ms | 6465.8 ms | 435720.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 646871.4 ms | 640109.0 ms | 6762.4 ms | 436761.7 ms |
| IXGo | LLGoDeadcodeDrop | 392281.0 ms | 386506.0 ms | 5775.0 ms | 144158.9 ms |
| IXGo | LLGoNoLTO | 363177.6 ms | 357402.1 ms | 5775.5 ms | 129747.9 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 292311.4 ms | 287517.4 ms | 4794.1 ms | 172068.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 290890.0 ms | 286069.9 ms | 4820.1 ms | 169908.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 288375.9 ms | 283605.4 ms | 4770.5 ms | 168342.2 ms |
| Etcdctl | LLGoDeadcodeDrop | 219895.7 ms | 215673.6 ms | 4222.1 ms | 73162.4 ms |
| Etcdctl | LLGoNoLTO | 218618.0 ms | 214486.2 ms | 4131.8 ms | 72878.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 180968.9 ms | 177753.4 ms | 3215.5 ms | 128468.0 ms |
| XGo | LLGoFullLTOGlobalDCE | 180307.7 ms | 177079.4 ms | 3228.3 ms | 126935.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 180286.6 ms | 177116.7 ms | 3169.9 ms | 126796.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 155260.5 ms | 153090.9 ms | 2169.5 ms | 120473.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 146394.3 ms | 144040.3 ms | 2354.0 ms | 109152.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 144533.6 ms | 142338.1 ms | 2195.5 ms | 108488.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 111405.3 ms | 109684.3 ms | 1721.0 ms | 86175.0 ms |
| XGo | LLGoDeadcodeDrop | 109494.2 ms | 106918.2 ms | 2576.0 ms | 43173.8 ms |
| XGo | LLGoNoLTO | 106602.3 ms | 103996.8 ms | 2605.4 ms | 41882.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 105077.7 ms | 103248.3 ms | 1829.4 ms | 82109.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104830.7 ms | 103026.6 ms | 1804.1 ms | 81891.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101474.8 ms | 99851.2 ms | 1623.7 ms | 75258.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 100805.3 ms | 99177.2 ms | 1628.1 ms | 75367.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 91620.3 ms | 90015.1 ms | 1605.2 ms | 68202.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 83060.7 ms | 81134.7 ms | 1926.0 ms | 39817.0 ms |
| Aws_restjson | LLGoNoLTO | 82526.1 ms | 80627.4 ms | 1898.8 ms | 39081.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65723.1 ms | 64409.9 ms | 1313.2 ms | 47062.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65531.6 ms | 64337.9 ms | 1193.7 ms | 47281.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 58796.9 ms | 57376.0 ms | 1421.0 ms | 26646.0 ms |
| Uber_zap | LLGoNoLTO | 56238.1 ms | 54820.4 ms | 1417.7 ms | 25073.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 55168.5 ms | 53898.6 ms | 1269.9 ms | 36358.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53126.6 ms | 52078.4 ms | 1048.2 ms | 41847.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 49528.1 ms | 48148.8 ms | 1379.3 ms | 23603.5 ms |
| K8s_workqueue | LLGoNoLTO | 48810.3 ms | 47420.0 ms | 1390.3 ms | 23113.1 ms |
| IXGo | Go | 45919.7 ms | 42956.1 ms | 2963.6 ms | 13375.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 45295.9 ms | 44324.4 ms | 971.6 ms | 33611.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 44978.8 ms | 44068.4 ms | 910.3 ms | 33504.2 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36701.3 ms | 35560.1 ms | 1141.1 ms | 12840.8 ms |
| Gorm_schema | LLGoNoLTO | 35615.9 ms | 34528.3 ms | 1087.6 ms | 12476.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33639.7 ms | 32869.4 ms | 770.3 ms | 26989.6 ms |
| Etcdctl | Go | 33536.4 ms | 31498.8 ms | 2037.6 ms | 10071.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 25459.9 ms | 24747.6 ms | 712.3 ms | 18093.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24797.3 ms | 24043.2 ms | 754.1 ms | 17847.2 ms |
| Toml | LLGoDeadcodeDrop | 22252.0 ms | 21363.8 ms | 888.2 ms | 8416.5 ms |
| Toml | LLGoNoLTO | 21797.2 ms | 20954.6 ms | 842.6 ms | 8203.3 ms |
| XGo | Go | 19200.3 ms | 18080.9 ms | 1119.4 ms | 5632.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12458.7 ms | 11824.8 ms | 633.9 ms | 5450.9 ms |
| Dustin_humanize | LLGoNoLTO | 12307.1 ms | 11711.7 ms | 595.4 ms | 5326.4 ms |
| Aws_restjson | Go | 7978.3 ms | 7326.0 ms | 652.3 ms | 3210.4 ms |
| Gorm_schema | Go | 5756.5 ms | 5400.8 ms | 355.7 ms | 2173.5 ms |
| Uber_zap | Go | 5410.6 ms | 5004.4 ms | 406.2 ms | 2125.5 ms |
| K8s_workqueue | Go | 4736.8 ms | 4323.2 ms | 413.6 ms | 1672.1 ms |
| Toml | Go | 2026.7 ms | 1802.9 ms | 223.8 ms | 918.7 ms |
| Dustin_humanize | Go | 819.9 ms | 664.6 ms | 155.3 ms | 383.9 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1644878.4 ms | 1141134.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1601223.8 ms | 1096200.6 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1585939.1 ms | 1082444.5 ms | 9 |
| LLGoDeadcodeDrop | 984468.6 ms | 377269.9 ms | 9 |
| LLGoNoLTO | 945692.7 ms | 357783.0 ms | 9 |
| Go | 125385.3 ms | 39563.7 ms | 9 |

Dependency download details are in `download-timings.log`.
