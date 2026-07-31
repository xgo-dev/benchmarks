## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTONoGlobalDCE | 450544.0 ms | 489872.1 ms | 10944.4 ms |
| IXGo | LLGoFullLTOGlobalDCE | 418511.3 ms | 428475.5 ms | 7448.6 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 363690.1 ms | 387286.7 ms | 6549.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 319566.3 ms | 343558.0 ms | 6931.7 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 310125.2 ms | 322686.9 ms | 5346.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 258549.3 ms | 283962.4 ms | 4196.4 ms |
| IXGo | LLGoNoLTO | 243467.9 ms | 270884.2 ms | 10263.2 ms |
| Etcdctl | LLGoNoLTO | 214166.6 ms | 233780.0 ms | 9226.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 210432.2 ms | 201038.6 ms | 5564.6 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 194088.1 ms | 192221.9 ms | 4359.9 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 188306.2 ms | 177588.7 ms | 5721.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 180212.9 ms | 185342.3 ms | 3394.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 178912.1 ms | 166938.8 ms | 4751.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 136084.2 ms | 136898.7 ms | 2562.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 125937.6 ms | 128685.2 ms | 2745.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 125478.8 ms | 144893.8 ms | 2760.6 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 117187.0 ms | 109374.1 ms | 2334.5 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 117093.9 ms | 113487.9 ms | 2296.2 ms |
| XGo | LLGoNoLTO | 103250.4 ms | 124588.4 ms | 5782.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 99794.4 ms | 111515.1 ms | 2276.0 ms |
| Dustin_humanize | LLGoNoLTO | 99064.2 ms | 77958.7 ms | 5925.9 ms |
| Aws_restjson | LLGoNoLTO | 94619.0 ms | 91624.2 ms | 4191.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 85109.7 ms | 90571.5 ms | 2052.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 75193.0 ms | 71856.9 ms | 1624.0 ms |
| Uber_zap | LLGoNoLTO | 72366.1 ms | 78922.4 ms | 3768.7 ms |
| Toml | LLGoFullLTONoGlobalDCE | 68553.9 ms | 64434.2 ms | 1305.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 58407.7 ms | 54337.6 ms | 1269.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 57467.1 ms | 58740.3 ms | 1427.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46279.5 ms | 47106.5 ms | 1212.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 45794.5 ms | 48180.6 ms | 1604.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 44771.9 ms | 38342.7 ms | 1146.0 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 37009.6 ms | 36813.8 ms | 1105.7 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 32505.8 ms | 36380.4 ms | 1001.2 ms |
| K8s_workqueue | LLGoNoLTO | 22024.3 ms | 27472.3 ms | 1804.9 ms |
| Gorm_schema | LLGoNoLTO | 20760.6 ms | 26565.4 ms | 1640.5 ms |
| Toml | LLGoNoLTO | 18719.0 ms | 18386.9 ms | 1223.6 ms |
| IXGo | Go | 16264.5 ms | 29376.0 ms | 2193.3 ms |
| Etcdctl | Go | 10044.1 ms | 14024.3 ms | 827.3 ms |
| Toml | Go | 5910.1 ms | 1796.1 ms | 221.0 ms |
| Aws_restjson | Go | 5654.1 ms | 4286.7 ms | 392.9 ms |
| K8s_workqueue | Go | 4824.1 ms | 1671.3 ms | 231.9 ms |
| Gorm_schema | Go | 3986.7 ms | 3198.2 ms | 174.0 ms |
| Uber_zap | Go | 3715.2 ms | 2785.7 ms | 215.4 ms |
| XGo | Go | 2987.8 ms | 5167.7 ms | 371.7 ms |
| Dustin_humanize | Go | 830.8 ms | 568.2 ms | 86.5 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1563019.3 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1405781.6 ms | 9 |
| LLGoFullLTOGlobalDCE | 1376805.4 ms | 9 |
| LLGoNoLTO | 888438.2 ms | 9 |
| Go | 54217.3 ms | 9 |

Dependency download details are in `download-timings.log`.
