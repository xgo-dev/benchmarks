## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 485980.5 ms | 505020.3 ms | 10431.1 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 430664.5 ms | 460150.5 ms | 11677.5 ms |
| IXGo | LLGoFullLTOGlobalDCE | 410498.2 ms | 441798.4 ms | 8702.3 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 385768.6 ms | 439955.6 ms | 9700.2 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 334129.0 ms | 353650.9 ms | 6353.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 332670.9 ms | 341512.2 ms | 9272.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 324639.3 ms | 343536.0 ms | 6611.0 ms |
| Etcdctl | LLGoNoLTO | 252704.3 ms | 261790.1 ms | 11262.6 ms |
| IXGo | LLGoNoLTO | 251225.3 ms | 279027.7 ms | 13270.3 ms |
| Uber_zap | LLGoNoLTO | 241047.3 ms | 222253.5 ms | 13878.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 223511.4 ms | 232439.7 ms | 4372.0 ms |
| XGo | LLGoFullLTONoGlobalDCE | 184278.6 ms | 206405.1 ms | 4207.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 179488.1 ms | 176874.6 ms | 5961.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 155474.4 ms | 158220.6 ms | 3510.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 153093.3 ms | 155968.3 ms | 3269.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 138147.9 ms | 155194.4 ms | 3402.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 129235.8 ms | 128357.5 ms | 3123.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 128167.6 ms | 128701.7 ms | 3259.5 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 125664.0 ms | 127786.3 ms | 2938.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 105037.1 ms | 117331.4 ms | 2614.3 ms |
| XGo | LLGoNoLTO | 104586.1 ms | 124019.6 ms | 6396.5 ms |
| Aws_restjson | LLGoNoLTO | 95892.4 ms | 97331.8 ms | 4347.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 95606.3 ms | 104369.4 ms | 2530.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 91927.8 ms | 86543.1 ms | 2190.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 82579.0 ms | 77443.6 ms | 1772.1 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 76866.9 ms | 73440.6 ms | 1981.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 75576.3 ms | 70168.2 ms | 1599.5 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 68537.8 ms | 72819.4 ms | 1761.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 63070.5 ms | 67345.3 ms | 1871.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 52253.3 ms | 51893.5 ms | 1518.7 ms |
| K8s_workqueue | LLGoNoLTO | 44768.1 ms | 45184.8 ms | 3085.7 ms |
| Gorm_schema | LLGoNoLTO | 30928.8 ms | 40374.4 ms | 2485.4 ms |
| Toml | LLGoNoLTO | 30732.1 ms | 28826.9 ms | 1878.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 28467.3 ms | 33062.2 ms | 1336.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 27639.6 ms | 32036.9 ms | 1187.4 ms |
| XGo | Go | 23488.4 ms | 20219.0 ms | 1129.9 ms |
| Dustin_humanize | LLGoNoLTO | 15748.9 ms | 15388.6 ms | 1372.1 ms |
| IXGo | Go | 11700.1 ms | 36449.4 ms | 2523.3 ms |
| Etcdctl | Go | 8128.3 ms | 17028.3 ms | 879.0 ms |
| Gorm_schema | Go | 5344.0 ms | 4127.1 ms | 219.3 ms |
| Aws_restjson | Go | 2020.8 ms | 4675.5 ms | 427.5 ms |
| Uber_zap | Go | 1319.2 ms | 2773.1 ms | 213.9 ms |
| K8s_workqueue | Go | 847.4 ms | 1637.5 ms | 193.7 ms |
| Dustin_humanize | Go | 750.6 ms | 681.3 ms | 103.4 ms |
| Toml | Go | 481.5 ms | 539.7 ms | 98.5 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCEPlugin | 1750099.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1585332.3 ms | 9 |
| LLGoFullLTONoGlobalDCE | 1553542.2 ms | 9 |
| LLGoNoLTO | 1067633.4 ms | 9 |
| Go | 54080.3 ms | 9 |

Dependency download details are in `download-timings.log`.
