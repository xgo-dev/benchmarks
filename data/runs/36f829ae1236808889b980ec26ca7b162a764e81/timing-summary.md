## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 296999.9 ms | 287789.7 ms | 6912.1 ms |
| Aws_restjson | LLGoNoLTO | 275169.1 ms | 258890.8 ms | 12027.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 257821.2 ms | 248452.0 ms | 7322.3 ms |
| K8s_workqueue | LLGoNoLTO | 256766.8 ms | 231279.3 ms | 14744.0 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 188393.0 ms | 194750.6 ms | 5097.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 188042.1 ms | 194621.2 ms | 5077.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 187803.8 ms | 204177.4 ms | 4551.9 ms |
| XGo | LLGoFullLTOGlobalDCE | 171874.7 ms | 189853.9 ms | 4820.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 169469.0 ms | 174500.8 ms | 4243.9 ms |
| IXGo | LLGoNoLTO | 150347.6 ms | 148360.1 ms | 5525.2 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 150268.0 ms | 160943.0 ms | 3506.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 147287.3 ms | 148783.4 ms | 3436.5 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 140892.0 ms | 150585.9 ms | 3016.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 137104.8 ms | 137524.6 ms | 3065.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 126673.0 ms | 127444.3 ms | 2921.7 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 123987.2 ms | 132915.1 ms | 3542.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 105266.8 ms | 99692.0 ms | 2286.1 ms |
| XGo | LLGoNoLTO | 103935.2 ms | 108037.0 ms | 5764.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 101335.1 ms | 106566.0 ms | 2605.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 96914.0 ms | 105665.9 ms | 2557.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 94069.8 ms | 94052.1 ms | 2447.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 59639.7 ms | 59962.1 ms | 1622.6 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 57046.2 ms | 57375.5 ms | 1498.2 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 56524.3 ms | 57181.5 ms | 1668.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 54916.9 ms | 59767.3 ms | 1654.8 ms |
| Uber_zap | LLGoNoLTO | 52842.6 ms | 59069.6 ms | 3301.6 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 52762.6 ms | 57207.8 ms | 1866.2 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 48880.4 ms | 48459.0 ms | 1431.2 ms |
| Gorm_schema | LLGoNoLTO | 28149.0 ms | 34609.6 ms | 2118.4 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 27703.8 ms | 32112.3 ms | 1236.3 ms |
| Toml | LLGoNoLTO | 17776.5 ms | 22767.5 ms | 1627.9 ms |
| IXGo | Go | 14752.6 ms | 18505.1 ms | 801.8 ms |
| XGo | Go | 11139.1 ms | 13342.3 ms | 817.9 ms |
| Dustin_humanize | LLGoNoLTO | 7935.7 ms | 12557.3 ms | 1210.4 ms |
| Aws_restjson | Go | 7788.0 ms | 8187.7 ms | 522.6 ms |
| Gorm_schema | Go | 6641.5 ms | 6056.4 ms | 352.8 ms |
| Uber_zap | Go | 6233.6 ms | 5934.9 ms | 366.9 ms |
| Toml | Go | 5197.9 ms | 2258.5 ms | 285.8 ms |
| K8s_workqueue | Go | 3315.9 ms | 2479.5 ms | 235.4 ms |
| Dustin_humanize | Go | 325.0 ms | 550.0 ms | 102.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTOGlobalDCE | 1182069.5 ms | 8 |
| LLGoFullLTONoGlobalDCE | 967986.6 ms | 8 |
| LLGoNoLTO | 892922.5 ms | 8 |
| LLGoFullLTOGlobalDCEPlugin | 891619.6 ms | 8 |
| Go | 55393.6 ms | 8 |

Dependency download details are in `download-timings.log`.
