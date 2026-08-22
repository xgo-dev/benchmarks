## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 701097.4 ms | 694523.8 ms | 6573.6 ms | 462822.5 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 679059.9 ms | 672762.2 ms | 6297.7 ms | 460596.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 620515.6 ms | 615132.9 ms | 5382.7 ms | 434454.4 ms |
| IXGo | LLGoNoLTO | 359927.0 ms | 355777.2 ms | 4149.9 ms | 115795.0 ms |
| IXGo | LLGoDeadcodeDrop | 351942.8 ms | 347393.0 ms | 4549.9 ms | 113344.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 294851.0 ms | 290978.0 ms | 3872.9 ms | 192928.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 294274.2 ms | 289998.9 ms | 4275.2 ms | 190008.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 293239.4 ms | 289073.7 ms | 4165.7 ms | 189668.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 277906.2 ms | 273606.5 ms | 4299.7 ms | 173964.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 198695.1 ms | 195215.9 ms | 3479.2 ms | 68159.3 ms |
| Etcdctl | LLGoNoLTO | 193733.5 ms | 190393.4 ms | 3340.1 ms | 66718.4 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 192880.1 ms | 189461.7 ms | 3418.5 ms | 66873.6 ms |
| XGo | LLGoFullLTONoGlobalDCE | 190695.5 ms | 187435.3 ms | 3260.2 ms | 148162.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 187300.5 ms | 184089.8 ms | 3210.7 ms | 144490.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 158026.9 ms | 155260.8 ms | 2766.2 ms | 126177.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 144954.5 ms | 142102.1 ms | 2852.4 ms | 110919.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 143223.0 ms | 140489.7 ms | 2733.3 ms | 110184.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 125684.4 ms | 123183.1 ms | 2501.4 ms | 101414.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 119087.2 ms | 116635.5 ms | 2451.7 ms | 98081.8 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 118977.2 ms | 116588.5 ms | 2388.7 ms | 98468.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 118651.2 ms | 116060.4 ms | 2590.8 ms | 97650.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 115103.7 ms | 112549.2 ms | 2554.5 ms | 91208.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 112076.8 ms | 109671.6 ms | 2405.2 ms | 87920.0 ms |
| XGo | LLGoDeadcodeDrop | 94540.3 ms | 91995.2 ms | 2545.2 ms | 38063.1 ms |
| XGo | LLGoNoLTO | 92950.3 ms | 90466.3 ms | 2484.0 ms | 37312.4 ms |
| Aws_restjson | LLGoDeadcodeDrop | 81398.8 ms | 79075.7 ms | 2323.1 ms | 37860.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 73275.0 ms | 71612.8 ms | 1662.2 ms | 55907.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 72396.8 ms | 70799.9 ms | 1596.8 ms | 57326.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 61879.0 ms | 60379.0 ms | 1500.0 ms | 51437.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 60652.4 ms | 59111.1 ms | 1541.2 ms | 43197.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 55836.2 ms | 54394.9 ms | 1441.4 ms | 41981.2 ms |
| Uber_zap | LLGoDeadcodeDrop | 53145.2 ms | 51023.0 ms | 2122.1 ms | 23603.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51735.7 ms | 50296.3 ms | 1439.4 ms | 41075.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 45034.0 ms | 43715.3 ms | 1318.7 ms | 37985.1 ms |
| Aws_restjson | LLGoNoLTO | 39791.8 ms | 37670.9 ms | 2120.9 ms | 20052.2 ms |
| Uber_zap | LLGoNoLTO | 36460.1 ms | 34469.4 ms | 1990.7 ms | 19021.0 ms |
| K8s_workqueue | LLGoNoLTO | 35715.4 ms | 33808.6 ms | 1906.8 ms | 18815.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33604.8 ms | 32271.5 ms | 1333.3 ms | 26305.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31996.2 ms | 30707.6 ms | 1288.6 ms | 24944.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31959.6 ms | 30499.2 ms | 1460.4 ms | 11164.3 ms |
| Gorm_schema | LLGoNoLTO | 30744.0 ms | 29378.8 ms | 1365.2 ms | 10803.2 ms |
| Toml | LLGoNoLTO | 21097.2 ms | 19835.6 ms | 1261.5 ms | 8207.6 ms |
| Toml | LLGoDeadcodeDrop | 21065.6 ms | 19729.6 ms | 1336.0 ms | 8366.8 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12387.1 ms | 11210.9 ms | 1176.2 ms | 5351.6 ms |
| Dustin_humanize | LLGoNoLTO | 12141.7 ms | 10989.9 ms | 1151.9 ms | 5280.1 ms |
| IXGo | Go | 1964.1 ms | 1726.4 ms | 237.7 ms | 1113.8 ms |
| Etcdctl | Go | 1548.5 ms | 1297.8 ms | 250.7 ms | 841.0 ms |
| XGo | Go | 1088.9 ms | 937.2 ms | 151.8 ms | 612.4 ms |
| Aws_restjson | Go | 813.9 ms | 678.2 ms | 135.8 ms | 441.6 ms |
| K8s_workqueue | Go | 683.4 ms | 569.7 ms | 113.7 ms | 372.7 ms |
| Uber_zap | Go | 663.2 ms | 545.0 ms | 118.2 ms | 370.2 ms |
| Gorm_schema | Go | 561.6 ms | 467.1 ms | 94.5 ms | 299.2 ms |
| Toml | Go | 512.2 ms | 415.2 ms | 97.0 ms | 282.5 ms |
| Dustin_humanize | Go | 380.5 ms | 311.8 ms | 68.6 ms | 225.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1746604.7 ms | 1274495.7 ms | 9 |
| LLGoFullLTOGlobalDCE | 1731355.3 ms | 1221324.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1703174.9 ms | 1203461.1 ms | 9 |
| LLGoDeadcodeDrop | 1038014.6 ms | 372786.3 ms | 9 |
| LLGoNoLTO | 822561.0 ms | 302005.7 ms | 9 |
| Go | 8216.2 ms | 4559.1 ms | 9 |

Dependency download details are in `download-timings.log`.
