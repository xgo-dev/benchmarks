## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 418731.5 ms | 411795.5 ms | 6936.0 ms | 325704.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 401814.1 ms | 395247.4 ms | 6566.7 ms | 345828.0 ms |
| IXGo | LLGoFullLTOGlobalDCE | 395107.5 ms | 390263.3 ms | 4844.2 ms | 301285.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 389456.0 ms | 384640.8 ms | 4815.2 ms | 292510.0 ms |
| IXGo | LLGoDeadcodeDrop | 356328.5 ms | 351475.9 ms | 4852.6 ms | 122443.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 329750.0 ms | 326106.2 ms | 3643.8 ms | 263285.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 329160.7 ms | 325445.2 ms | 3715.5 ms | 239978.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 270840.6 ms | 266482.1 ms | 4358.5 ms | 264048.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 267809.0 ms | 262485.1 ms | 5323.9 ms | 238353.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 221014.7 ms | 216839.1 ms | 4175.6 ms | 214168.9 ms |
| Etcdctl | LLGoDeadcodeDrop | 205086.8 ms | 201787.1 ms | 3299.7 ms | 100217.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 194856.8 ms | 191898.8 ms | 2958.0 ms | 173111.0 ms |
| Etcdctl | LLGoNoLTO | 189674.6 ms | 186727.4 ms | 2947.1 ms | 77404.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 182252.7 ms | 178222.4 ms | 4030.3 ms | 188288.4 ms |
| Uber_zap | LLGoNoLTO | 170859.5 ms | 167327.9 ms | 3531.6 ms | 135309.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 157436.2 ms | 154872.4 ms | 2563.7 ms | 161665.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 149089.8 ms | 146120.3 ms | 2969.6 ms | 92404.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 129322.4 ms | 126934.1 ms | 2388.3 ms | 108890.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112934.9 ms | 110791.5 ms | 2143.4 ms | 102964.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 94896.6 ms | 92750.1 ms | 2146.4 ms | 86679.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94498.0 ms | 92330.4 ms | 2167.6 ms | 81632.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92459.4 ms | 90370.4 ms | 2089.0 ms | 82329.0 ms |
| IXGo | LLGoNoLTO | 84120.7 ms | 81421.6 ms | 2699.0 ms | 41214.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 74617.1 ms | 73204.5 ms | 1412.6 ms | 65877.0 ms |
| XGo | LLGoNoLTO | 72324.6 ms | 70085.5 ms | 2239.1 ms | 58517.4 ms |
| Dustin_humanize | LLGoNoLTO | 69705.0 ms | 67537.8 ms | 2167.2 ms | 80182.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 66398.1 ms | 65008.2 ms | 1389.9 ms | 82562.7 ms |
| XGo | LLGoDeadcodeDrop | 65996.2 ms | 63916.4 ms | 2079.9 ms | 26536.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 65138.3 ms | 63439.3 ms | 1699.0 ms | 75205.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 61648.7 ms | 59830.0 ms | 1818.7 ms | 28375.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 61442.9 ms | 60133.8 ms | 1309.0 ms | 60037.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 59172.1 ms | 57677.8 ms | 1494.3 ms | 76743.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 58711.7 ms | 57479.5 ms | 1232.3 ms | 45125.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 58620.9 ms | 57142.2 ms | 1478.7 ms | 76409.8 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 52828.5 ms | 51607.1 ms | 1221.4 ms | 60177.1 ms |
| Uber_zap | LLGoDeadcodeDrop | 45605.8 ms | 43723.9 ms | 1881.9 ms | 29686.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 40089.5 ms | 38926.8 ms | 1162.7 ms | 41800.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 38272.7 ms | 37142.2 ms | 1130.5 ms | 41702.4 ms |
| Toml | LLGoDeadcodeDrop | 34483.3 ms | 33266.9 ms | 1216.3 ms | 12981.4 ms |
| IXGo | Go | 34030.4 ms | 31697.1 ms | 2333.3 ms | 23969.7 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 33352.2 ms | 31677.9 ms | 1674.3 ms | 28616.5 ms |
| Aws_restjson | LLGoNoLTO | 32290.1 ms | 30606.8 ms | 1683.3 ms | 13077.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 32008.4 ms | 30637.3 ms | 1371.1 ms | 16431.9 ms |
| K8s_workqueue | LLGoNoLTO | 29875.0 ms | 28300.1 ms | 1574.9 ms | 13383.9 ms |
| Gorm_schema | LLGoNoLTO | 18344.4 ms | 17168.7 ms | 1175.8 ms | 18929.2 ms |
| Etcdctl | Go | 15616.2 ms | 14746.8 ms | 869.4 ms | 11709.3 ms |
| Toml | LLGoNoLTO | 13067.0 ms | 12133.4 ms | 933.6 ms | 5283.4 ms |
| XGo | Go | 6461.7 ms | 6028.2 ms | 433.5 ms | 7366.0 ms |
| Gorm_schema | Go | 5226.0 ms | 4880.6 ms | 345.4 ms | 3906.4 ms |
| Aws_restjson | Go | 4617.9 ms | 4147.0 ms | 470.9 ms | 4012.4 ms |
| Uber_zap | Go | 3131.0 ms | 2914.7 ms | 216.3 ms | 5702.9 ms |
| K8s_workqueue | Go | 1958.2 ms | 1684.8 ms | 273.4 ms | 2073.3 ms |
| Dustin_humanize | Go | 608.3 ms | 543.0 ms | 65.3 ms | 399.1 ms |
| Toml | Go | 469.0 ms | 394.5 ms | 74.5 ms | 260.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1646852.7 ms | 1468126.5 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1630856.3 ms | 1463016.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1463875.5 ms | 1182419.1 ms | 9 |
| LLGoDeadcodeDrop | 899648.2 ms | 440494.2 ms | 9 |
| LLGoNoLTO | 680260.8 ms | 443301.9 ms | 9 |
| Go | 72118.8 ms | 59399.7 ms | 9 |

Dependency download details are in `download-timings.log`.
