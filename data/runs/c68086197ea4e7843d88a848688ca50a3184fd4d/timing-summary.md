## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 618443.9 ms | 611900.9 ms | 6543.0 ms | 409738.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 603807.3 ms | 597150.4 ms | 6656.9 ms | 405533.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 559989.1 ms | 553652.4 ms | 6336.7 ms | 385520.8 ms |
| IXGo | LLGoDeadcodeDrop | 363651.4 ms | 358027.8 ms | 5623.6 ms | 132388.7 ms |
| IXGo | LLGoNoLTO | 356511.8 ms | 350822.3 ms | 5689.4 ms | 127627.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 288842.8 ms | 283978.3 ms | 4864.5 ms | 166986.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 288738.6 ms | 283768.9 ms | 4969.6 ms | 166832.8 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283661.5 ms | 278981.3 ms | 4680.2 ms | 164788.1 ms |
| Etcdctl | LLGoDeadcodeDrop | 216883.6 ms | 212772.4 ms | 4111.1 ms | 70401.4 ms |
| Etcdctl | LLGoNoLTO | 215209.5 ms | 211095.9 ms | 4113.7 ms | 69899.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 177431.7 ms | 174328.7 ms | 3103.0 ms | 125536.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 177036.5 ms | 173931.2 ms | 3105.3 ms | 124087.0 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 176100.2 ms | 172895.4 ms | 3204.9 ms | 123175.9 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 145969.7 ms | 143770.7 ms | 2199.0 ms | 112533.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 137486.1 ms | 135371.1 ms | 2115.0 ms | 102247.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137406.9 ms | 135294.7 ms | 2112.1 ms | 102774.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 107861.4 ms | 106190.2 ms | 1671.3 ms | 82862.3 ms |
| XGo | LLGoDeadcodeDrop | 105704.6 ms | 103040.8 ms | 2663.8 ms | 40517.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104319.2 ms | 102703.2 ms | 1616.0 ms | 81219.2 ms |
| XGo | LLGoNoLTO | 103920.5 ms | 101421.4 ms | 2499.1 ms | 39741.3 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 102045.9 ms | 100423.1 ms | 1622.8 ms | 79709.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 98327.7 ms | 96706.7 ms | 1620.9 ms | 72798.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97600.8 ms | 96002.7 ms | 1598.0 ms | 72108.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 89312.8 ms | 87740.2 ms | 1572.5 ms | 66539.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 80118.2 ms | 78172.3 ms | 1945.9 ms | 37114.2 ms |
| Aws_restjson | LLGoNoLTO | 78091.6 ms | 76203.8 ms | 1887.8 ms | 36193.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65065.2 ms | 63856.7 ms | 1208.5 ms | 46801.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64258.6 ms | 63045.3 ms | 1213.3 ms | 45748.5 ms |
| Uber_zap | LLGoDeadcodeDrop | 56251.5 ms | 54867.5 ms | 1384.0 ms | 24152.1 ms |
| Uber_zap | LLGoNoLTO | 54207.4 ms | 52868.2 ms | 1339.2 ms | 23644.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54200.5 ms | 53015.1 ms | 1185.3 ms | 35586.6 ms |
| Toml | LLGoFullLTONoGlobalDCE | 52400.7 ms | 51422.8 ms | 977.9 ms | 41184.2 ms |
| K8s_workqueue | LLGoNoLTO | 47535.2 ms | 46130.6 ms | 1404.6 ms | 21747.9 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 47446.6 ms | 46129.6 ms | 1317.0 ms | 21869.9 ms |
| IXGo | Go | 45594.9 ms | 42675.0 ms | 2919.8 ms | 12991.7 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44532.5 ms | 43589.8 ms | 942.7 ms | 33079.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 44347.8 ms | 43401.0 ms | 946.8 ms | 32923.1 ms |
| Gorm_schema | LLGoDeadcodeDrop | 37094.0 ms | 35956.3 ms | 1137.7 ms | 12739.5 ms |
| Gorm_schema | LLGoNoLTO | 36311.9 ms | 35243.0 ms | 1068.9 ms | 12550.7 ms |
| Etcdctl | Go | 33311.3 ms | 31384.6 ms | 1926.7 ms | 9875.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 33236.2 ms | 32488.7 ms | 747.5 ms | 26461.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24493.1 ms | 23832.2 ms | 660.9 ms | 17508.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24404.8 ms | 23696.3 ms | 708.4 ms | 17452.1 ms |
| Toml | LLGoDeadcodeDrop | 21836.5 ms | 21016.4 ms | 820.1 ms | 8084.0 ms |
| Toml | LLGoNoLTO | 21634.6 ms | 20788.4 ms | 846.2 ms | 8073.0 ms |
| XGo | Go | 19090.3 ms | 17928.6 ms | 1161.7 ms | 5800.7 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12523.6 ms | 11857.2 ms | 666.4 ms | 5393.5 ms |
| Dustin_humanize | LLGoNoLTO | 12360.2 ms | 11737.4 ms | 622.8 ms | 5317.5 ms |
| Aws_restjson | Go | 8199.6 ms | 7523.7 ms | 675.8 ms | 3293.8 ms |
| Gorm_schema | Go | 5754.0 ms | 5359.8 ms | 394.3 ms | 2174.4 ms |
| Uber_zap | Go | 5255.7 ms | 4856.7 ms | 399.0 ms | 2040.1 ms |
| K8s_workqueue | Go | 4730.4 ms | 4290.6 ms | 439.8 ms | 1668.9 ms |
| Toml | Go | 2022.1 ms | 1792.6 ms | 229.5 ms | 913.5 ms |
| Dustin_humanize | Go | 807.4 ms | 664.4 ms | 143.0 ms | 375.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1542088.1 ms | 1048208.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1531572.0 ms | 1028132.2 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1527661.4 ms | 1065397.3 ms | 9 |
| LLGoDeadcodeDrop | 941510.0 ms | 352660.4 ms | 9 |
| LLGoNoLTO | 925782.7 ms | 344794.5 ms | 9 |
| Go | 124765.6 ms | 39133.7 ms | 9 |

Dependency download details are in `download-timings.log`.
