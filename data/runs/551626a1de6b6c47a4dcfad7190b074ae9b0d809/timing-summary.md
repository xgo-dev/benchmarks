## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by real time (slowest first).

| Benchmark | Configuration | Real | User | Sys |
| --- | --- | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCE | 526572.9 ms | 534382.3 ms | 13539.7 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 452881.7 ms | 479642.0 ms | 11402.1 ms |
| IXGo | LLGoNoLTO | 439195.5 ms | 478384.6 ms | 27633.2 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 411323.1 ms | 437699.2 ms | 9484.1 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 331916.0 ms | 353162.5 ms | 7244.4 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 312486.4 ms | 332057.5 ms | 6747.3 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 310827.7 ms | 344625.4 ms | 7281.7 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 293699.0 ms | 286649.2 ms | 8112.6 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 286454.4 ms | 273539.5 ms | 8839.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 279233.3 ms | 283346.2 ms | 7372.5 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 274845.1 ms | 260370.5 ms | 8863.0 ms |
| Etcdctl | LLGoNoLTO | 259434.4 ms | 258722.6 ms | 13650.0 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 258160.5 ms | 247064.5 ms | 8466.8 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 186119.2 ms | 188080.2 ms | 3818.2 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 166256.1 ms | 184548.0 ms | 4377.6 ms |
| XGo | LLGoFullLTOGlobalDCE | 159618.7 ms | 177738.7 ms | 4009.9 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 159608.3 ms | 165706.9 ms | 3909.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 134396.7 ms | 134764.9 ms | 3086.9 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 129688.3 ms | 131100.1 ms | 3191.1 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 106743.8 ms | 109450.6 ms | 3024.5 ms |
| Toml | LLGoFullLTONoGlobalDCE | 97107.2 ms | 85673.0 ms | 2199.7 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 91443.8 ms | 90828.6 ms | 2346.0 ms |
| Dustin_humanize | LLGoNoLTO | 82126.4 ms | 63536.5 ms | 7522.1 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 80103.4 ms | 79514.5 ms | 2198.4 ms |
| XGo | LLGoNoLTO | 78479.2 ms | 91407.5 ms | 5171.4 ms |
| Aws_restjson | LLGoNoLTO | 76408.8 ms | 81340.0 ms | 4465.1 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 65373.4 ms | 62145.1 ms | 1711.7 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 57226.1 ms | 63495.4 ms | 2339.1 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 52693.0 ms | 45490.1 ms | 1867.5 ms |
| Toml | LLGoFullLTOGlobalDCE | 42483.0 ms | 48479.8 ms | 1845.0 ms |
| K8s_workqueue | LLGoNoLTO | 42116.3 ms | 41300.9 ms | 3124.3 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 40618.0 ms | 45742.4 ms | 1555.3 ms |
| Gorm_schema | LLGoNoLTO | 39215.2 ms | 38680.3 ms | 2815.2 ms |
| Uber_zap | LLGoNoLTO | 33169.3 ms | 44487.7 ms | 2983.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 32727.8 ms | 35297.7 ms | 1385.6 ms |
| Toml | LLGoNoLTO | 31754.2 ms | 27581.6 ms | 2132.7 ms |
| IXGo | Go | 11270.3 ms | 34973.6 ms | 2681.0 ms |
| Etcdctl | Go | 9718.7 ms | 29888.6 ms | 2067.9 ms |
| Aws_restjson | Go | 9690.8 ms | 5786.4 ms | 827.0 ms |
| XGo | Go | 7824.3 ms | 6970.9 ms | 486.5 ms |
| Gorm_schema | Go | 5201.0 ms | 3952.0 ms | 254.6 ms |
| Uber_zap | Go | 5139.1 ms | 3419.7 ms | 449.7 ms |
| K8s_workqueue | Go | 3142.1 ms | 1983.4 ms | 228.0 ms |
| Dustin_humanize | Go | 343.0 ms | 551.7 ms | 109.4 ms |
| Toml | Go | 316.8 ms | 437.2 ms | 120.2 ms |

### Configuration totals

| Configuration | Total real | Cases |
| --- | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1883367.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1853846.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1603393.2 ms | 9 |
| LLGoNoLTO | 1081899.3 ms | 9 |
| Go | 52646.1 ms | 9 |

Dependency download details are in `download-timings.log`.
