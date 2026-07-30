## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 424968.8 ms | 488597.0 ms | 11256.6 ms |
| IXGo | LLGoFullLTOGlobalDCE | 395160.3 ms | 423414.8 ms | 8173.8 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 371767.3 ms | 406332.2 ms | 7842.5 ms |
| IXGo | LLGoNoLTO | 322339.9 ms | 332881.8 ms | 16485.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 295798.1 ms | 322002.9 ms | 6010.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 293845.8 ms | 341016.9 ms | 7743.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 280185.3 ms | 310349.0 ms | 5214.8 ms |
| XGo | LLGoFullLTONoGlobalDCE | 247091.9 ms | 253302.6 ms | 5608.5 ms |
| Etcdctl | LLGoNoLTO | 205689.5 ms | 223885.4 ms | 10031.6 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 191710.1 ms | 198207.3 ms | 4233.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 170652.9 ms | 192118.0 ms | 4069.3 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 169425.0 ms | 186763.5 ms | 3615.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 166699.3 ms | 177499.6 ms | 5878.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 154800.1 ms | 153525.4 ms | 3185.5 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 149615.2 ms | 154259.4 ms | 3312.3 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 138344.8 ms | 148661.7 ms | 4331.7 ms |
| XGo | LLGoNoLTO | 137249.0 ms | 149049.6 ms | 7846.0 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 126678.5 ms | 125901.3 ms | 2955.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 118985.2 ms | 132572.8 ms | 2827.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 102422.3 ms | 98578.8 ms | 4149.4 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 94517.4 ms | 105502.9 ms | 2369.4 ms |
| Gorm_schema | LLGoNoLTO | 91033.4 ms | 84862.8 ms | 8067.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 90466.2 ms | 99966.1 ms | 2522.0 ms |
| K8s_workqueue | LLGoNoLTO | 86978.7 ms | 93104.9 ms | 5297.7 ms |
| Aws_restjson | LLGoNoLTO | 86926.5 ms | 90184.7 ms | 4474.3 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 75548.1 ms | 80866.5 ms | 3556.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 75377.7 ms | 69715.6 ms | 1626.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 65900.9 ms | 67218.1 ms | 1962.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 65652.6 ms | 65278.6 ms | 1610.6 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 65221.3 ms | 71713.0 ms | 1782.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 61278.5 ms | 61120.7 ms | 1583.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 56533.8 ms | 50360.8 ms | 1547.7 ms |
| Uber_zap | LLGoNoLTO | 36298.2 ms | 47249.7 ms | 2910.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 28183.5 ms | 32488.2 ms | 1261.2 ms |
| Toml | LLGoNoLTO | 18924.7 ms | 22060.3 ms | 1650.8 ms |
| IXGo | Go | 15388.8 ms | 34710.7 ms | 2249.9 ms |
| Etcdctl | Go | 14764.0 ms | 18390.7 ms | 900.7 ms |
| XGo | Go | 12644.1 ms | 19498.2 ms | 1158.9 ms |
| Dustin_humanize | LLGoNoLTO | 10511.0 ms | 13582.4 ms | 1293.7 ms |
| Aws_restjson | Go | 7648.1 ms | 8619.4 ms | 586.2 ms |
| Gorm_schema | Go | 5366.7 ms | 4113.1 ms | 232.0 ms |
| Uber_zap | Go | 4339.9 ms | 3345.0 ms | 239.1 ms |
| K8s_workqueue | Go | 2443.7 ms | 1985.7 ms | 226.3 ms |
| Dustin_humanize | Go | 2061.2 ms | 864.8 ms | 140.4 ms |
| Toml | Go | 1019.2 ms | 596.7 ms | 115.0 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1598706.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1450152.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1427971.8 ms | 9 |
| LLGoNoLTO | 995950.9 ms | 9 |
| Go | 65675.8 ms | 9 |

Dependency download details are in `download-timings.log`.
