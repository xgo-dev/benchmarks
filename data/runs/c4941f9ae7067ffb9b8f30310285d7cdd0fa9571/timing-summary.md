## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 635643.2 ms | 628515.9 ms | 7127.3 ms | 451693.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 634478.8 ms | 627305.8 ms | 7172.9 ms | 435424.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 606026.0 ms | 599007.8 ms | 7018.2 ms | 414378.5 ms |
| IXGo | LLGoDeadcodeDrop | 360210.7 ms | 353839.9 ms | 6370.8 ms | 131719.2 ms |
| IXGo | LLGoNoLTO | 345399.1 ms | 339212.3 ms | 6186.8 ms | 126966.6 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 274763.0 ms | 269649.1 ms | 5113.8 ms | 163788.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 274186.6 ms | 269033.9 ms | 5152.6 ms | 163455.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 270541.4 ms | 265370.1 ms | 5171.2 ms | 161802.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 209119.1 ms | 204514.1 ms | 4604.9 ms | 70298.0 ms |
| Etcdctl | LLGoNoLTO | 203240.5 ms | 198917.2 ms | 4323.3 ms | 68599.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 179389.0 ms | 175870.3 ms | 3518.8 ms | 128913.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 176103.6 ms | 172748.0 ms | 3355.6 ms | 126521.1 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 170579.6 ms | 167229.7 ms | 3349.9 ms | 121202.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 153864.4 ms | 151591.8 ms | 2272.7 ms | 122130.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 149170.5 ms | 146818.4 ms | 2352.1 ms | 115680.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 137113.8 ms | 134619.8 ms | 2494.0 ms | 103960.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105390.6 ms | 103610.7 ms | 1779.9 ms | 82122.9 ms |
| XGo | LLGoDeadcodeDrop | 104145.4 ms | 101293.4 ms | 2852.0 ms | 42297.4 ms |
| XGo | LLGoNoLTO | 102520.8 ms | 99695.8 ms | 2825.1 ms | 41852.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 99693.8 ms | 97922.6 ms | 1771.1 ms | 79272.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 99403.2 ms | 97656.8 ms | 1746.3 ms | 78376.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 97867.1 ms | 96101.9 ms | 1765.2 ms | 74145.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 97240.5 ms | 95480.7 ms | 1759.8 ms | 73344.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 87165.9 ms | 85505.4 ms | 1660.5 ms | 65840.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 79628.3 ms | 77642.4 ms | 1985.9 ms | 40144.6 ms |
| Aws_restjson | LLGoNoLTO | 76203.5 ms | 74152.6 ms | 2050.9 ms | 38381.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 61770.1 ms | 60409.8 ms | 1360.3 ms | 44703.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 61049.8 ms | 59755.8 ms | 1294.0 ms | 44394.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 53529.7 ms | 52110.6 ms | 1419.1 ms | 24383.0 ms |
| Uber_zap | LLGoNoLTO | 52710.9 ms | 51272.8 ms | 1438.1 ms | 24149.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51200.6 ms | 49986.1 ms | 1214.6 ms | 33546.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 49290.7 ms | 48266.8 ms | 1023.9 ms | 39016.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46873.4 ms | 45444.8 ms | 1428.6 ms | 22455.9 ms |
| K8s_workqueue | LLGoNoLTO | 46343.5 ms | 45016.3 ms | 1327.2 ms | 22562.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 42461.9 ms | 41505.3 ms | 956.6 ms | 31819.9 ms |
| IXGo | Go | 42398.9 ms | 39278.9 ms | 3120.0 ms | 12237.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 41475.2 ms | 40531.8 ms | 943.4 ms | 30933.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33719.2 ms | 32573.2 ms | 1146.0 ms | 12206.9 ms |
| Gorm_schema | LLGoNoLTO | 33300.9 ms | 32218.5 ms | 1082.4 ms | 11731.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32607.1 ms | 31807.1 ms | 800.0 ms | 25913.0 ms |
| Etcdctl | Go | 32005.5 ms | 29901.7 ms | 2103.8 ms | 9588.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 24320.9 ms | 23584.8 ms | 736.1 ms | 17852.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 23828.6 ms | 23105.0 ms | 723.6 ms | 17146.1 ms |
| Toml | LLGoDeadcodeDrop | 20571.6 ms | 19641.9 ms | 929.7 ms | 7877.9 ms |
| Toml | LLGoNoLTO | 20541.3 ms | 19674.3 ms | 867.0 ms | 7783.2 ms |
| XGo | Go | 18212.4 ms | 16938.0 ms | 1274.4 ms | 5360.0 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11954.2 ms | 11334.4 ms | 619.7 ms | 5188.0 ms |
| Dustin_humanize | LLGoNoLTO | 11376.4 ms | 10766.0 ms | 610.4 ms | 5012.8 ms |
| Aws_restjson | Go | 7511.9 ms | 6795.9 ms | 716.0 ms | 3079.1 ms |
| Gorm_schema | Go | 5477.8 ms | 5060.9 ms | 416.9 ms | 2078.9 ms |
| Uber_zap | Go | 5088.8 ms | 4631.8 ms | 457.0 ms | 1966.5 ms |
| K8s_workqueue | Go | 4455.0 ms | 4004.1 ms | 450.9 ms | 1586.4 ms |
| Toml | Go | 1989.6 ms | 1746.6 ms | 243.0 ms | 935.0 ms |
| Dustin_humanize | Go | 783.7 ms | 606.9 ms | 176.7 ms | 373.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1560942.5 ms | 1087978.1 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1554567.4 ms | 1095551.8 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1521116.0 ms | 1063848.9 ms | 9 |
| LLGoDeadcodeDrop | 919751.5 ms | 356570.9 ms | 9 |
| LLGoNoLTO | 891637.0 ms | 347041.0 ms | 9 |
| Go | 117923.5 ms | 37205.2 ms | 9 |

Dependency download details are in `download-timings.log`.
