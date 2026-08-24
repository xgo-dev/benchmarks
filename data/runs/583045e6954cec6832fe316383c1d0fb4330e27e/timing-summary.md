## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 568211.7 ms | 561170.9 ms | 7040.9 ms | 400723.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 567837.7 ms | 560430.3 ms | 7407.4 ms | 397716.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 556677.6 ms | 549415.1 ms | 7262.6 ms | 393923.9 ms |
| IXGo | LLGoNoLTO | 335709.0 ms | 329342.7 ms | 6366.3 ms | 133388.3 ms |
| IXGo | LLGoDeadcodeDrop | 327713.0 ms | 321310.4 ms | 6402.6 ms | 126573.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 274086.5 ms | 268777.5 ms | 5308.9 ms | 160507.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 273774.0 ms | 268425.4 ms | 5348.6 ms | 162123.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 273531.9 ms | 267810.4 ms | 5721.5 ms | 160304.4 ms |
| Etcdctl | LLGoDeadcodeDrop | 206876.9 ms | 201580.9 ms | 5296.0 ms | 67998.0 ms |
| Etcdctl | LLGoNoLTO | 205610.3 ms | 200730.0 ms | 4880.3 ms | 66663.8 ms |
| XGo | LLGoFullLTOGlobalDCE | 174608.0 ms | 170915.3 ms | 3692.7 ms | 122709.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 173730.4 ms | 169732.8 ms | 3997.6 ms | 122220.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 172369.9 ms | 168834.5 ms | 3535.4 ms | 120763.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 149773.1 ms | 146967.4 ms | 2805.7 ms | 116174.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 136637.1 ms | 133959.4 ms | 2677.6 ms | 101095.4 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 135589.6 ms | 132852.7 ms | 2736.8 ms | 101678.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105589.9 ms | 103262.1 ms | 2327.7 ms | 81431.9 ms |
| XGo | LLGoDeadcodeDrop | 101361.4 ms | 98122.0 ms | 3239.4 ms | 38930.3 ms |
| XGo | LLGoNoLTO | 100721.6 ms | 97479.1 ms | 3242.6 ms | 38663.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99644.4 ms | 97462.0 ms | 2182.4 ms | 77388.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 97879.4 ms | 95599.8 ms | 2279.7 ms | 76140.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 97664.2 ms | 95401.9 ms | 2262.2 ms | 75667.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 94102.1 ms | 91923.5 ms | 2178.6 ms | 69158.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 92129.0 ms | 89986.2 ms | 2142.8 ms | 67526.8 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81163.5 ms | 78635.6 ms | 2527.9 ms | 38769.7 ms |
| Aws_restjson | LLGoNoLTO | 80561.5 ms | 77957.1 ms | 2604.4 ms | 39231.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61651.3 ms | 60005.6 ms | 1645.7 ms | 44136.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61034.0 ms | 59382.4 ms | 1651.7 ms | 43206.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 53187.1 ms | 51161.6 ms | 2025.5 ms | 23439.7 ms |
| Uber_zap | LLGoNoLTO | 52906.2 ms | 50964.5 ms | 1941.8 ms | 23075.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51909.6 ms | 50330.3 ms | 1579.3 ms | 33998.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 49787.2 ms | 48500.4 ms | 1286.8 ms | 38641.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46905.2 ms | 44932.7 ms | 1972.5 ms | 21668.6 ms |
| K8s_workqueue | LLGoNoLTO | 45937.1 ms | 43992.3 ms | 1944.8 ms | 21221.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 43173.8 ms | 41868.6 ms | 1305.1 ms | 31755.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 41865.8 ms | 40599.0 ms | 1266.7 ms | 30617.9 ms |
| IXGo | Go | 41272.7 ms | 38238.9 ms | 3033.8 ms | 11965.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 35460.0 ms | 33946.0 ms | 1514.0 ms | 12533.9 ms |
| Gorm_schema | LLGoNoLTO | 34738.2 ms | 33224.6 ms | 1513.6 ms | 12297.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33731.0 ms | 32587.0 ms | 1144.1 ms | 26745.7 ms |
| Etcdctl | Go | 30947.5 ms | 29054.2 ms | 1893.4 ms | 9138.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24683.6 ms | 23594.5 ms | 1089.1 ms | 17672.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24339.5 ms | 23288.6 ms | 1050.8 ms | 17365.3 ms |
| Toml | LLGoDeadcodeDrop | 21539.6 ms | 20378.2 ms | 1161.4 ms | 8233.4 ms |
| Toml | LLGoNoLTO | 21503.6 ms | 20301.7 ms | 1201.8 ms | 8181.7 ms |
| XGo | Go | 17947.6 ms | 16805.1 ms | 1142.5 ms | 5225.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12940.0 ms | 12020.0 ms | 920.0 ms | 5679.2 ms |
| Dustin_humanize | LLGoNoLTO | 12905.0 ms | 11918.8 ms | 986.2 ms | 5712.8 ms |
| Aws_restjson | Go | 7429.2 ms | 6782.0 ms | 647.2 ms | 2984.2 ms |
| Gorm_schema | Go | 5424.1 ms | 5028.5 ms | 395.7 ms | 2053.0 ms |
| Uber_zap | Go | 5024.8 ms | 4642.4 ms | 382.4 ms | 1911.5 ms |
| K8s_workqueue | Go | 4388.1 ms | 3993.8 ms | 394.4 ms | 1522.0 ms |
| Toml | Go | 1874.8 ms | 1691.0 ms | 183.8 ms | 838.8 ms |
| Dustin_humanize | Go | 732.0 ms | 625.6 ms | 106.3 ms | 335.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1502378.7 ms | 1061065.8 ms | 9 |
| LLGoFullLTOGlobalDCE | 1473309.3 ms | 1022075.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1460324.2 ms | 1008253.9 ms | 9 |
| LLGoNoLTO | 890592.6 ms | 348435.7 ms | 9 |
| LLGoDeadcodeDrop | 887146.8 ms | 343825.9 ms | 9 |
| Go | 115040.8 ms | 35974.1 ms | 9 |

Dependency download details are in `download-timings.log`.
