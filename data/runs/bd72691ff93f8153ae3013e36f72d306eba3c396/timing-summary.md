## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoNoLTO | 531059.1 ms | 564549.3 ms | 29365.8 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 432472.2 ms | 455032.1 ms | 8996.2 ms |
| IXGo | LLGoFullLTOGlobalDCE | 423724.3 ms | 459335.8 ms | 9101.7 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 411597.6 ms | 445536.5 ms | 9050.6 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 326657.8 ms | 348184.6 ms | 6246.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 324369.8 ms | 356942.4 ms | 6850.0 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 288821.4 ms | 321304.5 ms | 5537.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 277264.7 ms | 277962.1 ms | 8268.0 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 243511.5 ms | 237570.4 ms | 7326.1 ms |
| Etcdctl | LLGoNoLTO | 208635.3 ms | 236672.5 ms | 10629.4 ms |
| XGo | LLGoFullLTONoGlobalDCE | 205753.0 ms | 216249.3 ms | 4328.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 204276.4 ms | 223971.6 ms | 5082.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 172486.5 ms | 191904.0 ms | 3838.3 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 162452.0 ms | 170669.6 ms | 3107.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 161793.8 ms | 173234.8 ms | 4007.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 119298.6 ms | 117909.5 ms | 3073.5 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 115076.5 ms | 122693.2 ms | 2809.6 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 109450.9 ms | 115565.8 ms | 2726.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 106706.7 ms | 112577.4 ms | 2628.2 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 106531.8 ms | 100871.9 ms | 2175.0 ms |
| XGo | LLGoNoLTO | 104584.3 ms | 111487.7 ms | 5513.4 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 104488.2 ms | 99153.3 ms | 2178.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 96931.7 ms | 106065.5 ms | 2718.2 ms |
| Aws_restjson | LLGoNoLTO | 87886.9 ms | 94018.7 ms | 4298.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 85402.3 ms | 87760.5 ms | 3158.4 ms |
| Toml | LLGoFullLTOGlobalDCE | 78192.3 ms | 72741.9 ms | 1816.1 ms |
| Toml | LLGoFullLTONoGlobalDCE | 75867.0 ms | 77332.4 ms | 1762.9 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 74609.1 ms | 68065.6 ms | 1786.5 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 74435.0 ms | 71426.2 ms | 3070.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 61764.0 ms | 53841.0 ms | 1588.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 49815.5 ms | 50018.3 ms | 1504.3 ms |
| Gorm_schema | LLGoNoLTO | 46698.6 ms | 42884.7 ms | 2525.6 ms |
| K8s_workqueue | LLGoNoLTO | 45115.2 ms | 43541.6 ms | 3097.9 ms |
| Uber_zap | LLGoNoLTO | 35094.5 ms | 49339.2 ms | 2820.4 ms |
| IXGo | Go | 22772.6 ms | 40734.9 ms | 2456.6 ms |
| Dustin_humanize | LLGoNoLTO | 20917.4 ms | 16692.5 ms | 1496.9 ms |
| Toml | LLGoNoLTO | 18839.2 ms | 23907.0 ms | 1643.5 ms |
| Etcdctl | Go | 13338.0 ms | 32699.3 ms | 1908.9 ms |
| XGo | Go | 7148.7 ms | 7187.9 ms | 456.4 ms |
| Uber_zap | Go | 6911.5 ms | 6216.5 ms | 457.6 ms |
| Aws_restjson | Go | 6485.0 ms | 5544.8 ms | 464.7 ms |
| Gorm_schema | Go | 2846.3 ms | 3830.3 ms | 212.8 ms |
| Toml | Go | 1852.8 ms | 644.7 ms | 114.9 ms |
| K8s_workqueue | Go | 842.0 ms | 1640.7 ms | 183.0 ms |
| Dustin_humanize | Go | 483.5 ms | 724.4 ms | 158.4 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1709211.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1620798.2 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1563741.1 ms | 9 |
| LLGoNoLTO | 1098830.5 ms | 9 |
| Go | 62680.4 ms | 9 |

Dependency download details are in `download-timings.log`.
