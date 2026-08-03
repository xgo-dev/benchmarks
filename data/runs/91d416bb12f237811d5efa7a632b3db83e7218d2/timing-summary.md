## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 344334.0 ms | 338609.5 ms | 5724.5 ms | 319675.0 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 343352.2 ms | 337918.6 ms | 5433.6 ms | 317561.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 285800.8 ms | 282724.3 ms | 3076.5 ms | 249485.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 191612.3 ms | 188672.6 ms | 2939.7 ms | 179936.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 182431.3 ms | 179581.9 ms | 2849.4 ms | 159098.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 181047.6 ms | 178298.4 ms | 2749.2 ms | 160996.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 168443.3 ms | 164810.7 ms | 3632.5 ms | 149009.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 153199.8 ms | 150648.4 ms | 2551.4 ms | 131586.2 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 138542.5 ms | 135901.8 ms | 2640.6 ms | 123027.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 133140.1 ms | 130981.5 ms | 2158.6 ms | 118715.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 126725.1 ms | 124356.9 ms | 2368.2 ms | 125475.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 120766.8 ms | 118454.9 ms | 2311.9 ms | 140927.7 ms |
| XGo | LLGoDeadcodeDrop | 115475.8 ms | 113099.8 ms | 2376.0 ms | 103513.1 ms |
| XGo | LLGoNoLTO | 90371.0 ms | 88047.6 ms | 2323.4 ms | 66806.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 88271.4 ms | 86334.7 ms | 1936.7 ms | 76910.1 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 87117.9 ms | 85081.9 ms | 2036.1 ms | 73476.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 87008.1 ms | 84919.9 ms | 2088.2 ms | 73772.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 85672.2 ms | 83714.2 ms | 1958.0 ms | 74776.6 ms |
| Toml | LLGoDeadcodeDrop | 85335.8 ms | 83304.9 ms | 2030.9 ms | 102484.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 81142.9 ms | 78848.4 ms | 2294.5 ms | 76674.3 ms |
| Etcdctl | LLGoNoLTO | 80780.3 ms | 78371.8 ms | 2408.5 ms | 60945.8 ms |
| K8s_workqueue | LLGoNoLTO | 72926.1 ms | 70805.7 ms | 2120.5 ms | 61992.1 ms |
| Aws_restjson | LLGoDeadcodeDrop | 68855.2 ms | 66923.7 ms | 1931.6 ms | 67394.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 66685.2 ms | 65239.5 ms | 1445.8 ms | 64597.0 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 60890.6 ms | 59182.6 ms | 1708.1 ms | 52339.3 ms |
| Aws_restjson | LLGoNoLTO | 59408.9 ms | 57611.4 ms | 1797.5 ms | 45723.8 ms |
| Gorm_schema | LLGoNoLTO | 57865.6 ms | 56386.7 ms | 1478.9 ms | 49541.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54077.3 ms | 52814.5 ms | 1262.8 ms | 51496.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 50423.4 ms | 49240.6 ms | 1182.8 ms | 46448.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 48287.1 ms | 47064.6 ms | 1222.5 ms | 47738.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 46121.1 ms | 45013.2 ms | 1108.0 ms | 45858.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 42181.9 ms | 40411.2 ms | 1770.7 ms | 33633.7 ms |
| Uber_zap | LLGoNoLTO | 37273.9 ms | 35695.0 ms | 1578.9 ms | 26094.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 34573.0 ms | 33484.3 ms | 1088.7 ms | 35937.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 33368.5 ms | 32243.1 ms | 1125.4 ms | 33976.8 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 32582.9 ms | 30865.5 ms | 1717.4 ms | 26273.9 ms |
| Gorm_schema | LLGoDeadcodeDrop | 29112.4 ms | 27888.4 ms | 1224.0 ms | 23278.3 ms |
| XGo | Go | 17170.3 ms | 16037.4 ms | 1132.9 ms | 12774.1 ms |
| Etcdctl | Go | 15997.6 ms | 15039.3 ms | 958.4 ms | 14327.9 ms |
| Toml | LLGoNoLTO | 13662.4 ms | 12677.1 ms | 985.3 ms | 8666.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13608.4 ms | 12589.6 ms | 1018.8 ms | 13700.5 ms |
| Dustin_humanize | LLGoNoLTO | 11786.1 ms | 10860.3 ms | 925.7 ms | 5663.2 ms |
| Uber_zap | Go | 5661.6 ms | 5263.1 ms | 398.5 ms | 9339.1 ms |
| Aws_restjson | Go | 5015.5 ms | 4601.6 ms | 413.9 ms | 5324.0 ms |
| Gorm_schema | Go | 3490.7 ms | 3244.2 ms | 246.5 ms | 3056.4 ms |
| K8s_workqueue | Go | 1559.3 ms | 1374.1 ms | 185.1 ms | 708.1 ms |
| Dustin_humanize | Go | 679.4 ms | 587.8 ms | 91.6 ms | 773.2 ms |
| Toml | Go | 472.0 ms | 386.8 ms | 85.2 ms | 279.6 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1080078.9 ms | 1018132.6 ms | 8 |
| LLGoFullLTOGlobalDCE | 983985.4 ms | 886030.3 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 946538.9 ms | 866236.6 ms | 8 |
| LLGoDeadcodeDrop | 569583.7 ms | 529376.1 ms | 8 |
| LLGoNoLTO | 424074.5 ms | 325433.0 ms | 8 |
| Go | 50046.4 ms | 46582.4 ms | 8 |

Dependency download details are in `download-timings.log`.
