## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 862871.5 ms | 855757.8 ms | 7113.8 ms | 647099.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 857283.8 ms | 849609.6 ms | 7674.2 ms | 633195.4 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 796234.9 ms | 788794.9 ms | 7440.0 ms | 589778.7 ms |
| IXGo | LLGoDeadcodeDrop | 394466.7 ms | 387869.2 ms | 6597.5 ms | 147512.0 ms |
| IXGo | LLGoNoLTO | 378640.6 ms | 372285.4 ms | 6355.2 ms | 132892.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 297148.2 ms | 291587.4 ms | 5560.8 ms | 178442.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 291682.4 ms | 286020.6 ms | 5661.8 ms | 173557.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 283782.7 ms | 278620.5 ms | 5162.2 ms | 170977.8 ms |
| Etcdctl | LLGoDeadcodeDrop | 211385.7 ms | 206484.3 ms | 4901.4 ms | 69935.6 ms |
| Etcdctl | LLGoNoLTO | 207901.3 ms | 203157.8 ms | 4743.5 ms | 68699.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 201264.7 ms | 198663.8 ms | 2600.9 ms | 166441.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 183840.8 ms | 180214.0 ms | 3626.8 ms | 131607.9 ms |
| XGo | LLGoFullLTONoGlobalDCE | 182253.5 ms | 178743.3 ms | 3510.2 ms | 130853.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 179731.4 ms | 176209.7 ms | 3521.7 ms | 128576.0 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 176483.1 ms | 174103.8 ms | 2379.3 ms | 141847.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 150329.2 ms | 148063.9 ms | 2265.3 ms | 117021.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 112597.3 ms | 110747.6 ms | 1849.7 ms | 87808.4 ms |
| XGo | LLGoDeadcodeDrop | 104687.9 ms | 101766.1 ms | 2921.8 ms | 40821.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104108.1 ms | 102286.5 ms | 1821.6 ms | 82348.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 104066.0 ms | 102217.1 ms | 1848.8 ms | 82216.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 103885.5 ms | 102059.1 ms | 1826.4 ms | 78149.3 ms |
| XGo | LLGoNoLTO | 102322.0 ms | 99453.9 ms | 2868.1 ms | 40924.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 101787.5 ms | 99935.3 ms | 1852.2 ms | 76487.3 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 90042.9 ms | 88268.5 ms | 1774.4 ms | 67934.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 82225.6 ms | 80080.3 ms | 2145.3 ms | 41479.2 ms |
| Aws_restjson | LLGoNoLTO | 77588.5 ms | 75546.9 ms | 2041.5 ms | 39088.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64304.3 ms | 62892.3 ms | 1412.0 ms | 46428.1 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 62718.4 ms | 61381.3 ms | 1337.1 ms | 45619.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 55194.7 ms | 53685.0 ms | 1509.6 ms | 24992.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54794.9 ms | 53676.2 ms | 1118.7 ms | 43815.9 ms |
| Uber_zap | LLGoNoLTO | 54265.7 ms | 52824.9 ms | 1440.8 ms | 24397.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51997.1 ms | 50708.3 ms | 1288.9 ms | 34339.1 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 47517.5 ms | 46008.5 ms | 1509.0 ms | 22809.9 ms |
| K8s_workqueue | LLGoNoLTO | 47163.8 ms | 45754.8 ms | 1409.0 ms | 22498.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46152.0 ms | 45086.5 ms | 1065.5 ms | 34518.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 45433.2 ms | 44422.9 ms | 1010.3 ms | 34353.0 ms |
| IXGo | Go | 44373.1 ms | 41011.4 ms | 3361.7 ms | 12881.7 ms |
| Gorm_schema | LLGoDeadcodeDrop | 36022.8 ms | 34837.4 ms | 1185.4 ms | 12808.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 34915.6 ms | 34057.7 ms | 858.0 ms | 28285.7 ms |
| Gorm_schema | LLGoNoLTO | 34022.8 ms | 32831.1 ms | 1191.7 ms | 11907.0 ms |
| Etcdctl | Go | 32971.5 ms | 30718.6 ms | 2252.9 ms | 10040.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 26012.3 ms | 25239.1 ms | 773.2 ms | 19251.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 24676.2 ms | 23885.8 ms | 790.4 ms | 17725.0 ms |
| Toml | LLGoNoLTO | 21265.4 ms | 20369.5 ms | 895.9 ms | 8005.3 ms |
| Toml | LLGoDeadcodeDrop | 21003.7 ms | 20115.8 ms | 887.8 ms | 7846.6 ms |
| XGo | Go | 18789.4 ms | 17473.6 ms | 1315.8 ms | 5572.6 ms |
| Dustin_humanize | LLGoNoLTO | 12303.3 ms | 11617.0 ms | 686.3 ms | 5371.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12242.1 ms | 11573.5 ms | 668.6 ms | 5409.1 ms |
| Aws_restjson | Go | 7676.8 ms | 6938.1 ms | 738.7 ms | 3149.1 ms |
| Gorm_schema | Go | 5590.5 ms | 5140.2 ms | 450.2 ms | 2181.5 ms |
| Uber_zap | Go | 5130.9 ms | 4709.5 ms | 421.4 ms | 2031.0 ms |
| K8s_workqueue | Go | 4532.5 ms | 4050.6 ms | 482.0 ms | 1621.2 ms |
| Toml | Go | 2008.9 ms | 1767.6 ms | 241.3 ms | 919.5 ms |
| Dustin_humanize | Go | 797.0 ms | 631.1 ms | 165.9 ms | 380.1 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1899264.7 ms | 1403118.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1825543.5 ms | 1314385.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1765589.5 ms | 1271174.5 ms | 9 |
| LLGoDeadcodeDrop | 964746.8 ms | 373614.8 ms | 9 |
| LLGoNoLTO | 935473.3 ms | 353782.9 ms | 9 |
| Go | 121870.6 ms | 38777.1 ms | 9 |

Dependency download details are in `download-timings.log`.
