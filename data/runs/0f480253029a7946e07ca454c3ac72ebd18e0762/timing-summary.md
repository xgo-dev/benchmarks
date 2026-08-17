## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 366559.9 ms | 360714.5 ms | 5845.4 ms | 224589.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 287798.7 ms | 284295.4 ms | 3503.3 ms | 202640.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283971.5 ms | 280606.0 ms | 3365.5 ms | 200583.5 ms |
| Etcdctl | LLGoDeadcodeDrop | 264873.5 ms | 261060.3 ms | 3813.1 ms | 79448.2 ms |
| XGo | LLGoFullLTOGlobalDCE | 211124.7 ms | 207296.5 ms | 3828.2 ms | 129038.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 148915.6 ms | 146419.5 ms | 2496.1 ms | 108492.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 132864.0 ms | 130402.3 ms | 2461.8 ms | 105871.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 119379.9 ms | 117287.5 ms | 2092.4 ms | 95005.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 106674.6 ms | 104688.6 ms | 1986.0 ms | 81074.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 106604.6 ms | 104565.1 ms | 2039.5 ms | 81513.8 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 88743.1 ms | 86818.1 ms | 1925.0 ms | 70941.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 83352.3 ms | 81339.5 ms | 2012.9 ms | 65455.2 ms |
| XGo | LLGoDeadcodeDrop | 82983.5 ms | 80904.0 ms | 2079.5 ms | 26910.1 ms |
| XGo | LLGoNoLTO | 81347.5 ms | 79341.0 ms | 2006.5 ms | 26215.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 80901.0 ms | 78829.8 ms | 2071.2 ms | 57928.1 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 78869.6 ms | 77017.7 ms | 1851.9 ms | 64627.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 78568.4 ms | 76698.8 ms | 1869.6 ms | 63973.4 ms |
| Toml | LLGoNoLTO | 74354.1 ms | 72725.1 ms | 1629.0 ms | 25522.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 73997.0 ms | 72157.1 ms | 1839.9 ms | 55642.6 ms |
| Etcdctl | LLGoNoLTO | 73715.4 ms | 71253.4 ms | 2462.0 ms | 25392.0 ms |
| Aws_restjson | LLGoDeadcodeDrop | 63895.0 ms | 61735.9 ms | 2159.1 ms | 26315.9 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 57713.6 ms | 56274.4 ms | 1439.1 ms | 41793.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 52328.4 ms | 51087.0 ms | 1241.4 ms | 38954.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 43227.6 ms | 42079.8 ms | 1147.8 ms | 29951.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 42978.0 ms | 41917.1 ms | 1060.9 ms | 34682.9 ms |
| Toml | LLGoFullLTOGlobalDCE | 36178.3 ms | 35093.5 ms | 1084.8 ms | 27566.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 36014.3 ms | 34909.6 ms | 1104.8 ms | 27386.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 34390.9 ms | 33311.0 ms | 1079.9 ms | 10516.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34088.1 ms | 33137.8 ms | 950.3 ms | 28344.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 33791.2 ms | 32183.7 ms | 1607.5 ms | 11562.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 26396.9 ms | 25474.6 ms | 922.3 ms | 20452.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 26001.5 ms | 25065.5 ms | 936.0 ms | 20223.4 ms |
| Aws_restjson | LLGoNoLTO | 24675.2 ms | 23084.7 ms | 1590.5 ms | 9039.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 24357.1 ms | 22817.6 ms | 1539.4 ms | 8642.0 ms |
| Uber_zap | LLGoNoLTO | 22110.4 ms | 20619.2 ms | 1491.2 ms | 8158.5 ms |
| K8s_workqueue | LLGoNoLTO | 20425.6 ms | 19022.9 ms | 1402.7 ms | 7452.3 ms |
| Toml | LLGoDeadcodeDrop | 15718.9 ms | 14792.4 ms | 926.6 ms | 5815.4 ms |
| Etcdctl | Go | 13308.1 ms | 12637.5 ms | 670.6 ms | 4340.7 ms |
| Gorm_schema | LLGoNoLTO | 13057.4 ms | 12017.6 ms | 1039.8 ms | 4862.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 9774.6 ms | 8910.4 ms | 864.2 ms | 3910.4 ms |
| Dustin_humanize | LLGoNoLTO | 8878.9 ms | 8016.0 ms | 862.9 ms | 3428.9 ms |
| XGo | Go | 7063.0 ms | 6686.5 ms | 376.6 ms | 2610.4 ms |
| Aws_restjson | Go | 4022.9 ms | 3702.1 ms | 320.9 ms | 1499.8 ms |
| Gorm_schema | Go | 2768.4 ms | 2606.7 ms | 161.8 ms | 1179.2 ms |
| Uber_zap | Go | 2463.0 ms | 2283.6 ms | 179.5 ms | 1038.8 ms |
| K8s_workqueue | Go | 1609.3 ms | 1425.9 ms | 183.4 ms | 814.1 ms |
| Dustin_humanize | Go | 535.1 ms | 458.1 ms | 77.0 ms | 265.0 ms |
| Toml | Go | 447.2 ms | 382.4 ms | 64.8 ms | 244.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 884672.9 ms | 613254.6 ms | 8 |
| LLGoFullLTOGlobalDCE | 879971.0 ms | 621628.4 ms | 8 |
| LLGoFullLTONoGlobalDCE | 838607.8 ms | 641849.0 ms | 8 |
| LLGoDeadcodeDrop | 529784.6 ms | 173121.1 ms | 8 |
| LLGoNoLTO | 318564.5 ms | 110071.0 ms | 8 |
| Go | 32217.2 ms | 11992.5 ms | 8 |

Dependency download details are in `download-timings.log`.
