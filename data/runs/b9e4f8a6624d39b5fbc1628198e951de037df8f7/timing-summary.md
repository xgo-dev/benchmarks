## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 503411.2 ms | 497142.5 ms | 6268.7 ms | 356829.6 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 490056.9 ms | 484249.7 ms | 5807.2 ms | 350750.8 ms |
| IXGo | LLGoFullLTOGlobalDCE | 484726.8 ms | 478736.4 ms | 5990.4 ms | 341753.2 ms |
| IXGo | LLGoNoLTO | 285953.4 ms | 280854.3 ms | 5099.2 ms | 114641.0 ms |
| IXGo | LLGoDeadcodeDrop | 284453.6 ms | 279344.9 ms | 5108.7 ms | 114325.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 241740.1 ms | 237175.2 ms | 4565.0 ms | 143549.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 240277.6 ms | 235632.0 ms | 4645.6 ms | 141557.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 235610.7 ms | 231194.3 ms | 4416.4 ms | 140871.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 176266.5 ms | 172219.1 ms | 4047.4 ms | 57702.7 ms |
| Etcdctl | LLGoNoLTO | 174042.2 ms | 170089.3 ms | 3952.9 ms | 56296.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 150516.3 ms | 147616.2 ms | 2900.2 ms | 106196.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 150203.0 ms | 147344.5 ms | 2858.6 ms | 105874.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 145661.7 ms | 142952.5 ms | 2709.2 ms | 104182.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 127577.8 ms | 125652.8 ms | 1925.0 ms | 100460.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 118938.6 ms | 117052.7 ms | 1885.8 ms | 90547.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 118923.5 ms | 117078.8 ms | 1844.7 ms | 90665.4 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 89569.1 ms | 88036.2 ms | 1532.9 ms | 69673.9 ms |
| XGo | LLGoDeadcodeDrop | 87994.9 ms | 85649.4 ms | 2345.4 ms | 33840.4 ms |
| XGo | LLGoNoLTO | 85478.0 ms | 83006.1 ms | 2471.9 ms | 32618.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 84174.1 ms | 82725.3 ms | 1448.8 ms | 66228.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 83961.6 ms | 82500.4 ms | 1461.1 ms | 66107.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 81480.9 ms | 80018.1 ms | 1462.9 ms | 60528.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 81036.0 ms | 79499.3 ms | 1536.6 ms | 59970.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 75745.1 ms | 74328.1 ms | 1417.0 ms | 56399.2 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68897.0 ms | 67245.0 ms | 1652.0 ms | 34030.7 ms |
| Aws_restjson | LLGoNoLTO | 65735.0 ms | 64077.7 ms | 1657.4 ms | 33023.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 53737.6 ms | 52534.5 ms | 1203.2 ms | 38485.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 52575.2 ms | 51487.6 ms | 1087.6 ms | 37832.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 45836.2 ms | 44515.4 ms | 1320.8 ms | 19792.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 44042.5 ms | 42907.9 ms | 1134.6 ms | 28935.4 ms |
| Uber_zap | LLGoNoLTO | 43648.3 ms | 42434.9 ms | 1213.4 ms | 18895.0 ms |
| Toml | LLGoFullLTONoGlobalDCE | 43360.7 ms | 42472.1 ms | 888.6 ms | 34135.2 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 38959.4 ms | 37749.2 ms | 1210.1 ms | 17910.4 ms |
| K8s_workqueue | LLGoNoLTO | 37929.0 ms | 36785.5 ms | 1143.6 ms | 17289.2 ms |
| Toml | LLGoFullLTOGlobalDCE | 36794.5 ms | 35984.0 ms | 810.5 ms | 27304.6 ms |
| IXGo | Go | 36210.5 ms | 33500.7 ms | 2709.8 ms | 10290.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 35674.9 ms | 34881.4 ms | 793.4 ms | 26384.6 ms |
| Gorm_schema | LLGoDeadcodeDrop | 30345.7 ms | 29305.0 ms | 1040.7 ms | 10568.8 ms |
| Gorm_schema | LLGoNoLTO | 29254.1 ms | 28277.9 ms | 976.2 ms | 10193.4 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 29160.4 ms | 28496.4 ms | 664.0 ms | 23656.5 ms |
| Etcdctl | Go | 28243.2 ms | 26327.4 ms | 1915.8 ms | 8355.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 20831.3 ms | 20212.2 ms | 619.1 ms | 15201.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 20505.0 ms | 19881.8 ms | 623.2 ms | 14843.0 ms |
| Toml | LLGoDeadcodeDrop | 18478.6 ms | 17711.0 ms | 767.6 ms | 6949.8 ms |
| Toml | LLGoNoLTO | 17606.1 ms | 16879.1 ms | 726.9 ms | 6507.2 ms |
| XGo | Go | 15673.4 ms | 14591.8 ms | 1081.6 ms | 4572.4 ms |
| Dustin_humanize | LLGoNoLTO | 10446.8 ms | 9932.4 ms | 514.4 ms | 4708.2 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 10424.1 ms | 9919.4 ms | 504.7 ms | 4598.6 ms |
| Aws_restjson | Go | 6364.0 ms | 5798.5 ms | 565.5 ms | 2509.1 ms |
| Gorm_schema | Go | 4712.5 ms | 4362.3 ms | 350.2 ms | 1752.2 ms |
| Uber_zap | Go | 4591.2 ms | 4254.1 ms | 337.1 ms | 1740.9 ms |
| K8s_workqueue | Go | 3946.4 ms | 3567.8 ms | 378.7 ms | 1377.4 ms |
| Toml | Go | 1667.7 ms | 1499.1 ms | 168.6 ms | 740.3 ms |
| Dustin_humanize | Go | 672.7 ms | 572.7 ms | 100.0 ms | 312.0 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1297746.6 ms | 927791.7 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1271594.6 ms | 883773.5 ms | 9 |
| LLGoFullLTOGlobalDCE | 1270951.9 ms | 887360.6 ms | 9 |
| LLGoDeadcodeDrop | 761656.1 ms | 299719.3 ms | 9 |
| LLGoNoLTO | 750092.9 ms | 294172.3 ms | 9 |
| Go | 102081.6 ms | 31650.3 ms | 9 |

Dependency download details are in `download-timings.log`.
