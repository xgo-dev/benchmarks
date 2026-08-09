## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 523412.5 ms | 515025.7 ms | 8386.8 ms | 478053.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 446491.0 ms | 439854.8 ms | 6636.1 ms | 414975.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 408630.2 ms | 404095.5 ms | 4534.7 ms | 385279.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 394564.5 ms | 390010.3 ms | 4554.2 ms | 354223.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 392634.3 ms | 386130.9 ms | 6503.4 ms | 401815.9 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 391871.6 ms | 384991.9 ms | 6879.7 ms | 401274.2 ms |
| IXGo | LLGoDeadcodeDrop | 324069.8 ms | 316068.0 ms | 8001.9 ms | 317264.7 ms |
| IXGo | LLGoNoLTO | 242837.3 ms | 239399.2 ms | 3438.1 ms | 196705.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 213912.4 ms | 210993.3 ms | 2919.1 ms | 184253.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 205573.7 ms | 197920.1 ms | 7653.6 ms | 224624.1 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 204787.0 ms | 201466.9 ms | 3320.1 ms | 193230.7 ms |
| Uber_zap | LLGoDeadcodeDrop | 200656.5 ms | 196545.9 ms | 4110.6 ms | 214312.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 189277.4 ms | 186693.2 ms | 2584.1 ms | 169635.4 ms |
| XGo | LLGoFullLTOGlobalDCE | 186261.4 ms | 183077.3 ms | 3184.1 ms | 160900.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 161058.2 ms | 158440.2 ms | 2617.9 ms | 122414.6 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 134355.5 ms | 132039.0 ms | 2316.5 ms | 144475.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 131265.8 ms | 129140.2 ms | 2125.6 ms | 117087.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 120602.0 ms | 118440.5 ms | 2161.5 ms | 127220.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 119920.5 ms | 117209.2 ms | 2711.3 ms | 143216.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 109178.5 ms | 107222.1 ms | 1956.4 ms | 91728.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 100251.5 ms | 98259.3 ms | 1992.2 ms | 88245.3 ms |
| Etcdctl | LLGoNoLTO | 99570.0 ms | 96312.1 ms | 3257.9 ms | 83436.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 98243.9 ms | 96391.8 ms | 1852.2 ms | 83657.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 94961.3 ms | 93059.0 ms | 1902.3 ms | 80649.2 ms |
| XGo | LLGoDeadcodeDrop | 94804.1 ms | 92755.4 ms | 2048.7 ms | 65062.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 73199.6 ms | 71825.0 ms | 1374.5 ms | 71582.5 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68090.5 ms | 66237.4 ms | 1853.1 ms | 50142.2 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63541.5 ms | 62265.8 ms | 1275.6 ms | 55400.6 ms |
| XGo | LLGoNoLTO | 60590.2 ms | 58569.8 ms | 2020.4 ms | 37798.4 ms |
| Toml | LLGoFullLTONoGlobalDCE | 58704.7 ms | 57453.2 ms | 1251.4 ms | 56648.6 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 51856.6 ms | 50450.6 ms | 1406.0 ms | 51828.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 45676.4 ms | 44596.8 ms | 1079.6 ms | 37198.2 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 42536.6 ms | 41570.0 ms | 966.6 ms | 35577.5 ms |
| Aws_restjson | LLGoNoLTO | 38443.3 ms | 36659.1 ms | 1784.1 ms | 21352.7 ms |
| Uber_zap | LLGoNoLTO | 37608.3 ms | 35805.7 ms | 1802.5 ms | 27701.6 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 36208.2 ms | 34317.2 ms | 1891.0 ms | 24528.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 35595.6 ms | 34501.0 ms | 1094.5 ms | 31583.1 ms |
| K8s_workqueue | LLGoNoLTO | 34132.0 ms | 32273.4 ms | 1858.6 ms | 26589.0 ms |
| IXGo | Go | 33613.5 ms | 31424.1 ms | 2189.4 ms | 10063.7 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 33385.9 ms | 32362.4 ms | 1023.5 ms | 26600.8 ms |
| Gorm_schema | LLGoDeadcodeDrop | 31519.3 ms | 30399.3 ms | 1120.1 ms | 23755.7 ms |
| Gorm_schema | LLGoNoLTO | 29606.0 ms | 28517.6 ms | 1088.4 ms | 19708.3 ms |
| Toml | LLGoDeadcodeDrop | 21472.4 ms | 20383.1 ms | 1089.3 ms | 14577.9 ms |
| Etcdctl | Go | 18546.9 ms | 17634.2 ms | 912.7 ms | 15557.4 ms |
| Toml | LLGoNoLTO | 17643.1 ms | 16571.9 ms | 1071.3 ms | 15068.5 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 15168.3 ms | 14185.9 ms | 982.4 ms | 13799.2 ms |
| Dustin_humanize | LLGoNoLTO | 14184.5 ms | 13162.1 ms | 1022.3 ms | 13779.4 ms |
| XGo | Go | 8749.9 ms | 8258.4 ms | 491.6 ms | 3369.6 ms |
| Aws_restjson | Go | 5753.7 ms | 5339.2 ms | 414.5 ms | 6427.7 ms |
| Gorm_schema | Go | 3892.0 ms | 3690.8 ms | 201.1 ms | 2795.8 ms |
| Uber_zap | Go | 3732.7 ms | 3481.9 ms | 250.8 ms | 7684.5 ms |
| Toml | Go | 2399.9 ms | 2083.5 ms | 316.5 ms | 2869.9 ms |
| K8s_workqueue | Go | 2034.0 ms | 1877.8 ms | 156.2 ms | 1526.7 ms |
| Dustin_humanize | Go | 787.3 ms | 707.2 ms | 80.1 ms | 942.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1634148.4 ms | 1606469.2 ms | 9 |
| LLGoFullLTOGlobalDCE | 1623239.6 ms | 1454523.5 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1613303.8 ms | 1549974.5 ms | 9 |
| LLGoDeadcodeDrop | 953047.2 ms | 845858.2 ms | 9 |
| LLGoNoLTO | 574614.7 ms | 442140.0 ms | 9 |
| Go | 79509.8 ms | 51237.8 ms | 9 |

Dependency download details are in `download-timings.log`.
