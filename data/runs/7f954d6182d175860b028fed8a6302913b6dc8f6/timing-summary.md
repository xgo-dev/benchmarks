## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCE | 440923.7 ms | 433515.4 ms | 7408.3 ms | 246267.4 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 424842.1 ms | 417022.3 ms | 7819.8 ms | 284870.3 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 404341.6 ms | 398453.0 ms | 5888.6 ms | 275329.1 ms |
| IXGo | LLGoFullLTOGlobalDCE | 382148.9 ms | 376593.8 ms | 5555.1 ms | 269728.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 324469.0 ms | 320245.7 ms | 4223.3 ms | 213039.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 321292.2 ms | 317059.0 ms | 4233.2 ms | 214397.3 ms |
| XGo | LLGoFullLTONoGlobalDCE | 261171.7 ms | 256781.6 ms | 4390.1 ms | 163167.1 ms |
| IXGo | LLGoDeadcodeDrop | 261135.7 ms | 256268.9 ms | 4866.9 ms | 84682.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 211689.8 ms | 208342.5 ms | 3347.4 ms | 62216.2 ms |
| XGo | LLGoNoLTO | 207352.6 ms | 203097.7 ms | 4254.9 ms | 60622.5 ms |
| XGo | LLGoFullLTOGlobalDCE | 187521.7 ms | 184401.6 ms | 3120.2 ms | 135877.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 166017.4 ms | 162606.2 ms | 3411.2 ms | 131003.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 154160.3 ms | 150914.3 ms | 3246.1 ms | 117329.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 153148.7 ms | 149894.8 ms | 3253.9 ms | 88008.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 133109.0 ms | 130265.2 ms | 2843.8 ms | 99542.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 130736.1 ms | 128010.9 ms | 2725.1 ms | 96453.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 114106.8 ms | 111566.2 ms | 2540.7 ms | 90204.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 111749.8 ms | 108817.0 ms | 2932.8 ms | 35853.7 ms |
| XGo | LLGoDeadcodeDrop | 108957.5 ms | 106184.3 ms | 2773.2 ms | 34758.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 100322.2 ms | 97831.2 ms | 2491.1 ms | 81731.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 99940.7 ms | 97450.8 ms | 2490.0 ms | 81850.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 99565.4 ms | 97272.8 ms | 2292.6 ms | 81470.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 96016.5 ms | 93436.3 ms | 2580.2 ms | 71477.5 ms |
| Etcdctl | LLGoNoLTO | 89074.2 ms | 85969.5 ms | 3104.7 ms | 30582.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 82419.8 ms | 80499.9 ms | 1919.8 ms | 56248.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 72291.0 ms | 70400.9 ms | 1890.0 ms | 26633.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 70245.7 ms | 67787.6 ms | 2458.1 ms | 29253.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70169.8 ms | 68510.1 ms | 1659.6 ms | 52428.7 ms |
| IXGo | LLGoNoLTO | 68825.5 ms | 65116.9 ms | 3708.6 ms | 23641.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 67053.6 ms | 64797.1 ms | 2256.5 ms | 40922.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 58214.2 ms | 56675.4 ms | 1538.7 ms | 40396.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 55519.4 ms | 54010.2 ms | 1509.2 ms | 44952.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 47627.6 ms | 46164.6 ms | 1463.0 ms | 36634.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46995.7 ms | 45556.4 ms | 1439.3 ms | 36066.1 ms |
| IXGo | Go | 46653.5 ms | 43728.7 ms | 2924.8 ms | 13598.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46507.6 ms | 45183.9 ms | 1323.6 ms | 37346.8 ms |
| Uber_zap | LLGoNoLTO | 43693.9 ms | 41533.4 ms | 2160.5 ms | 14377.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 42995.3 ms | 40851.7 ms | 2143.6 ms | 14421.5 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36497.0 ms | 35047.2 ms | 1449.9 ms | 11657.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33793.3 ms | 32543.5 ms | 1249.9 ms | 26425.5 ms |
| Aws_restjson | LLGoNoLTO | 30566.8 ms | 28430.4 ms | 2136.4 ms | 10960.5 ms |
| K8s_workqueue | LLGoNoLTO | 25230.8 ms | 23330.3 ms | 1900.5 ms | 9009.8 ms |
| Toml | LLGoNoLTO | 21789.2 ms | 20368.3 ms | 1420.9 ms | 7910.3 ms |
| Toml | LLGoDeadcodeDrop | 20593.1 ms | 19291.2 ms | 1301.9 ms | 7634.1 ms |
| Etcdctl | Go | 16885.9 ms | 16102.9 ms | 783.0 ms | 5762.4 ms |
| Gorm_schema | LLGoNoLTO | 16706.4 ms | 15260.5 ms | 1445.9 ms | 6149.5 ms |
| Dustin_humanize | LLGoNoLTO | 11100.4 ms | 9998.0 ms | 1102.4 ms | 4273.5 ms |
| XGo | Go | 6404.1 ms | 6020.6 ms | 383.5 ms | 2470.8 ms |
| Aws_restjson | Go | 5127.4 ms | 4727.8 ms | 399.6 ms | 1962.4 ms |
| Gorm_schema | Go | 3507.9 ms | 3325.7 ms | 182.2 ms | 1533.9 ms |
| Uber_zap | Go | 3031.8 ms | 2819.3 ms | 212.5 ms | 1348.5 ms |
| K8s_workqueue | Go | 2543.3 ms | 2234.4 ms | 308.9 ms | 973.6 ms |
| Dustin_humanize | Go | 647.7 ms | 543.9 ms | 103.8 ms | 323.9 ms |
| Toml | Go | 540.8 ms | 438.6 ms | 102.2 ms | 298.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1547335.2 ms | 1086166.0 ms | 9 |
| LLGoFullLTOGlobalDCE | 1503882.8 ms | 1023933.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1450917.0 ms | 1003070.5 ms | 9 |
| LLGoDeadcodeDrop | 936154.9 ms | 307112.1 ms | 9 |
| LLGoNoLTO | 514339.7 ms | 167528.1 ms | 9 |
| Go | 85342.4 ms | 28273.1 ms | 9 |

Dependency download details are in `download-timings.log`.
