## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 611789.8 ms | 606576.8 ms | 5213.0 ms | 431850.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 608923.4 ms | 603738.0 ms | 5185.5 ms | 425175.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 600369.5 ms | 595026.4 ms | 5343.1 ms | 423712.4 ms |
| IXGo | LLGoDeadcodeDrop | 352288.1 ms | 347644.9 ms | 4643.2 ms | 117257.8 ms |
| IXGo | LLGoNoLTO | 337607.5 ms | 333461.4 ms | 4146.1 ms | 110698.3 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 297271.2 ms | 293067.9 ms | 4203.3 ms | 192814.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 296446.9 ms | 292363.3 ms | 4083.6 ms | 190339.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 296165.7 ms | 291992.5 ms | 4173.2 ms | 190999.6 ms |
| Etcdctl | LLGoDeadcodeDrop | 270536.5 ms | 266980.4 ms | 3556.1 ms | 85901.3 ms |
| XGo | LLGoNoLTO | 253616.8 ms | 249857.6 ms | 3759.2 ms | 84461.7 ms |
| XGo | LLGoFullLTOGlobalDCE | 202182.8 ms | 198785.6 ms | 3397.3 ms | 148502.4 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 199621.1 ms | 196375.0 ms | 3246.1 ms | 148012.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 199150.9 ms | 195342.6 ms | 3808.2 ms | 122364.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 194451.0 ms | 190921.4 ms | 3529.5 ms | 116069.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 189836.8 ms | 186725.9 ms | 3111.0 ms | 147580.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 160663.2 ms | 158032.3 ms | 2630.9 ms | 113860.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 159282.6 ms | 156509.8 ms | 2772.8 ms | 127826.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 145770.8 ms | 142975.0 ms | 2795.7 ms | 110440.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 144099.9 ms | 141440.8 ms | 2659.1 ms | 110212.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 119561.0 ms | 117036.1 ms | 2524.9 ms | 98289.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 118271.6 ms | 115812.9 ms | 2458.7 ms | 96968.6 ms |
| XGo | LLGoDeadcodeDrop | 117006.4 ms | 114372.5 ms | 2633.9 ms | 43746.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 110870.1 ms | 108429.2 ms | 2440.9 ms | 87311.6 ms |
| Toml | LLGoDeadcodeDrop | 103475.6 ms | 101190.2 ms | 2285.4 ms | 35208.3 ms |
| Toml | LLGoFullLTONoGlobalDCE | 103344.2 ms | 100901.7 ms | 2442.5 ms | 64850.3 ms |
| Etcdctl | LLGoNoLTO | 101693.3 ms | 98602.8 ms | 3090.5 ms | 40536.7 ms |
| Aws_restjson | LLGoNoLTO | 76847.5 ms | 74418.8 ms | 2428.7 ms | 36345.7 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75309.8 ms | 72917.3 ms | 2392.5 ms | 36775.4 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 73578.3 ms | 71985.9 ms | 1592.5 ms | 57481.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 72573.6 ms | 70957.6 ms | 1616.0 ms | 55773.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 60594.5 ms | 58961.5 ms | 1633.0 ms | 43796.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 52357.3 ms | 50362.9 ms | 1994.4 ms | 23432.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 51826.7 ms | 50499.4 ms | 1327.3 ms | 41202.8 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51792.5 ms | 50406.7 ms | 1385.8 ms | 41002.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 46716.4 ms | 44518.9 ms | 2197.5 ms | 21888.9 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 43453.7 ms | 42195.8 ms | 1257.9 ms | 36564.4 ms |
| Uber_zap | LLGoNoLTO | 36804.8 ms | 34792.0 ms | 2012.8 ms | 19007.4 ms |
| K8s_workqueue | LLGoNoLTO | 35441.0 ms | 33444.1 ms | 1996.9 ms | 18717.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 32228.6 ms | 30957.7 ms | 1270.9 ms | 25208.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32122.5 ms | 30862.6 ms | 1259.8 ms | 25154.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31619.2 ms | 30242.0 ms | 1377.2 ms | 11036.7 ms |
| Gorm_schema | LLGoNoLTO | 30889.7 ms | 29499.2 ms | 1390.5 ms | 10713.3 ms |
| Toml | LLGoNoLTO | 13388.6 ms | 12148.2 ms | 1240.4 ms | 5471.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 12327.4 ms | 11207.8 ms | 1119.6 ms | 5327.6 ms |
| Dustin_humanize | LLGoNoLTO | 11141.9 ms | 10044.6 ms | 1097.3 ms | 4575.0 ms |
| IXGo | Go | 1973.7 ms | 1732.3 ms | 241.4 ms | 1124.9 ms |
| Etcdctl | Go | 1340.9 ms | 1137.2 ms | 203.7 ms | 988.4 ms |
| XGo | Go | 1074.5 ms | 906.8 ms | 167.7 ms | 756.6 ms |
| Aws_restjson | Go | 1047.5 ms | 851.4 ms | 196.1 ms | 523.5 ms |
| K8s_workqueue | Go | 701.9 ms | 563.7 ms | 138.2 ms | 419.3 ms |
| Uber_zap | Go | 661.4 ms | 548.8 ms | 112.6 ms | 370.3 ms |
| Gorm_schema | Go | 536.0 ms | 458.7 ms | 77.3 ms | 286.9 ms |
| Toml | Go | 533.4 ms | 435.3 ms | 98.2 ms | 310.2 ms |
| Dustin_humanize | Go | 351.9 ms | 271.2 ms | 80.7 ms | 196.3 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1755914.6 ms | 1264443.9 ms | 9 |
| LLGoFullLTOGlobalDCE | 1720888.0 ms | 1213425.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1699440.2 ms | 1195495.5 ms | 9 |
| LLGoDeadcodeDrop | 1061636.7 ms | 380574.7 ms | 9 |
| LLGoNoLTO | 897431.1 ms | 330526.5 ms | 9 |
| Go | 8221.2 ms | 4976.3 ms | 9 |

Dependency download details are in `download-timings.log`.
