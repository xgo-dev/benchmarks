## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 348228.3 ms | 396605.3 ms | 8496.7 ms |
| IXGo | LLGoFullLTOGlobalDCE | 319620.5 ms | 354585.0 ms | 6114.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 318555.8 ms | 351110.1 ms | 6045.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 277501.5 ms | 320358.1 ms | 6530.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 256807.9 ms | 283353.2 ms | 4111.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 254459.9 ms | 282927.6 ms | 4277.5 ms |
| XGo | LLGoFullLTONoGlobalDCE | 223521.0 ms | 241326.4 ms | 6654.5 ms |
| IXGo | LLGoNoLTO | 217542.9 ms | 245172.0 ms | 9621.7 ms |
| Etcdctl | LLGoNoLTO | 164259.7 ms | 182202.5 ms | 6808.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 156696.7 ms | 153274.2 ms | 4795.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 150712.9 ms | 157397.7 ms | 3342.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 127379.8 ms | 135700.8 ms | 2735.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 121821.6 ms | 137049.3 ms | 2847.8 ms |
| XGo | LLGoNoLTO | 119569.2 ms | 130023.5 ms | 5961.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 118757.3 ms | 122232.7 ms | 2564.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 103605.4 ms | 109690.7 ms | 2333.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 99731.5 ms | 101566.4 ms | 2435.6 ms |
| Toml | LLGoNoLTO | 98045.8 ms | 84234.8 ms | 5732.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94224.1 ms | 95027.3 ms | 2069.9 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 70330.9 ms | 59836.1 ms | 2753.3 ms |
| Aws_restjson | LLGoNoLTO | 69785.8 ms | 69393.0 ms | 2853.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 69001.4 ms | 78597.1 ms | 1798.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 68036.1 ms | 74328.0 ms | 1810.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 59042.2 ms | 69350.8 ms | 1826.0 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 56207.8 ms | 53476.9 ms | 1688.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 47663.0 ms | 42344.0 ms | 1187.8 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 46980.6 ms | 52433.8 ms | 1322.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 45445.2 ms | 49091.0 ms | 1382.8 ms |
| Toml | LLGoFullLTONoGlobalDCE | 43338.4 ms | 46676.4 ms | 1122.3 ms |
| Gorm_schema | LLGoNoLTO | 40689.5 ms | 34174.4 ms | 1784.0 ms |
| Uber_zap | LLGoNoLTO | 38079.5 ms | 42100.7 ms | 2196.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32573.5 ms | 30400.7 ms | 1053.3 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 31845.0 ms | 34474.7 ms | 1013.9 ms |
| K8s_workqueue | LLGoNoLTO | 31322.4 ms | 31148.3 ms | 1926.7 ms |
| Toml | LLGoFullLTOGlobalDCE | 30716.7 ms | 34409.8 ms | 1008.7 ms |
| IXGo | Go | 17310.4 ms | 25899.6 ms | 2117.6 ms |
| Dustin_humanize | LLGoNoLTO | 13835.9 ms | 11883.1 ms | 963.8 ms |
| Etcdctl | Go | 8843.9 ms | 12255.9 ms | 797.1 ms |
| XGo | Go | 5460.5 ms | 5036.5 ms | 359.3 ms |
| Aws_restjson | Go | 2286.2 ms | 3555.4 ms | 336.1 ms |
| Toml | Go | 2217.7 ms | 570.4 ms | 109.5 ms |
| Gorm_schema | Go | 1106.2 ms | 2242.8 ms | 151.6 ms |
| Uber_zap | Go | 929.5 ms | 1931.2 ms | 171.3 ms |
| K8s_workqueue | Go | 576.6 ms | 1103.9 ms | 143.0 ms |
| Dustin_humanize | Go | 236.2 ms | 390.6 ms | 68.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1242384.1 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1189292.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1141128.7 ms | 9 |
| LLGoNoLTO | 793130.7 ms | 9 |
| Go | 38967.2 ms | 9 |

Dependency download details are in `download-timings.log`.
