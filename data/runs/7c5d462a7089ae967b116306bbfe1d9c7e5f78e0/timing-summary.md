## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| Etcdctl | LLGoFullLTONoGlobalDCE | 399261.2 ms | 391888.4 ms | 7372.8 ms | 233060.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 395318.9 ms | 389014.3 ms | 6304.6 ms | 275767.5 ms |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 392615.8 ms | 386058.8 ms | 6557.0 ms | 274535.0 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 361661.5 ms | 355616.4 ms | 6045.1 ms | 262562.5 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 303792.5 ms | 299194.0 ms | 4598.6 ms | 203958.2 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 300304.1 ms | 295839.7 ms | 4464.4 ms | 203056.7 ms |
| IXGo | LLGoDeadcodeDrop | 269945.0 ms | 262212.3 ms | 7732.7 ms | 87088.4 ms |
| XGo | LLGoDeadcodeDrop | 241577.4 ms | 236206.2 ms | 5371.2 ms | 75020.6 ms |
| Etcdctl | LLGoNoLTO | 188967.7 ms | 185292.5 ms | 3675.3 ms | 55965.7 ms |
| Etcdctl | LLGoDeadcodeDrop | 188898.4 ms | 185020.8 ms | 3877.5 ms | 56376.1 ms |
| XGo | LLGoFullLTONoGlobalDCE | 179880.1 ms | 176460.9 ms | 3419.2 ms | 133739.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 179326.0 ms | 174354.6 ms | 4971.4 ms | 97554.1 ms |
| XGo | LLGoFullLTOGlobalDCE | 159091.8 ms | 155730.8 ms | 3360.9 ms | 126636.9 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 158900.7 ms | 155573.4 ms | 3327.3 ms | 126475.8 ms |
| K8s_workqueue | LLGoNoLTO | 153902.0 ms | 150101.3 ms | 3800.7 ms | 52300.2 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 138368.3 ms | 135522.4 ms | 2845.9 ms | 110294.8 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 132500.8 ms | 129393.0 ms | 3107.8 ms | 79781.1 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 122248.1 ms | 119400.8 ms | 2847.3 ms | 93343.8 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 121923.6 ms | 119049.1 ms | 2874.6 ms | 93404.7 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 110040.4 ms | 107449.7 ms | 2590.8 ms | 86724.7 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 95264.0 ms | 92686.4 ms | 2577.6 ms | 78633.7 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 94166.0 ms | 91609.6 ms | 2556.4 ms | 77561.4 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 93913.1 ms | 91432.8 ms | 2480.3 ms | 77462.8 ms |
| Aws_restjson | LLGoNoLTO | 68188.3 ms | 65318.8 ms | 2869.5 ms | 27927.8 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 64338.3 ms | 62547.5 ms | 1790.8 ms | 48412.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 63659.4 ms | 61919.8 ms | 1739.6 ms | 49664.8 ms |
| IXGo | LLGoNoLTO | 63202.2 ms | 59436.4 ms | 3765.8 ms | 21689.6 ms |
| Aws_restjson | LLGoDeadcodeDrop | 61016.0 ms | 58512.6 ms | 2503.4 ms | 25578.6 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 55896.4 ms | 53911.4 ms | 1985.0 ms | 34446.9 ms |
| Toml | LLGoFullLTONoGlobalDCE | 53181.8 ms | 51662.7 ms | 1519.2 ms | 43151.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 51159.7 ms | 49470.4 ms | 1689.3 ms | 36721.5 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 44270.8 ms | 42731.0 ms | 1539.7 ms | 34277.0 ms |
| Toml | LLGoFullLTOGlobalDCE | 43977.0 ms | 42548.6 ms | 1428.4 ms | 34167.0 ms |
| Gorm_schema | LLGoDeadcodeDrop | 43721.7 ms | 41864.3 ms | 1857.4 ms | 13816.5 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 41243.6 ms | 39958.7 ms | 1284.9 ms | 34870.8 ms |
| XGo | LLGoNoLTO | 40072.8 ms | 37594.6 ms | 2478.3 ms | 15520.4 ms |
| Uber_zap | LLGoDeadcodeDrop | 40018.5 ms | 37800.8 ms | 2217.6 ms | 13492.1 ms |
| Uber_zap | LLGoNoLTO | 38869.2 ms | 36659.3 ms | 2210.0 ms | 13064.1 ms |
| IXGo | Go | 32744.4 ms | 30427.4 ms | 2317.0 ms | 9940.3 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 31443.9 ms | 30124.9 ms | 1319.0 ms | 24905.0 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 27366.1 ms | 25303.7 ms | 2062.4 ms | 9775.8 ms |
| Toml | LLGoDeadcodeDrop | 19824.1 ms | 18337.4 ms | 1486.8 ms | 7456.4 ms |
| Etcdctl | Go | 15855.2 ms | 15062.9 ms | 792.3 ms | 5410.9 ms |
| Gorm_schema | LLGoNoLTO | 14783.9 ms | 13406.5 ms | 1377.4 ms | 5577.4 ms |
| Toml | LLGoNoLTO | 12367.9 ms | 11072.3 ms | 1295.6 ms | 4764.4 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 11330.8 ms | 10141.8 ms | 1189.0 ms | 4672.4 ms |
| Dustin_humanize | LLGoNoLTO | 10195.0 ms | 9082.2 ms | 1112.8 ms | 4014.6 ms |
| XGo | Go | 8465.8 ms | 7970.8 ms | 494.9 ms | 3283.5 ms |
| Aws_restjson | Go | 4776.1 ms | 4355.3 ms | 420.8 ms | 1827.0 ms |
| Gorm_schema | Go | 3322.2 ms | 3133.2 ms | 189.0 ms | 1444.0 ms |
| Uber_zap | Go | 2871.8 ms | 2649.4 ms | 222.4 ms | 1261.2 ms |
| K8s_workqueue | Go | 1941.9 ms | 1680.7 ms | 261.2 ms | 855.6 ms |
| Dustin_humanize | Go | 634.7 ms | 527.9 ms | 106.8 ms | 319.9 ms |
| Toml | Go | 536.6 ms | 442.2 ms | 94.4 ms | 305.7 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1442560.2 ms | 1032703.4 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1377346.1 ms | 969294.1 ms | 9 |
| LLGoFullLTOGlobalDCE | 1367841.5 ms | 973173.6 ms | 9 |
| LLGoDeadcodeDrop | 903698.0 ms | 293276.9 ms | 9 |
| LLGoNoLTO | 590549.1 ms | 200824.3 ms | 9 |
| Go | 71148.8 ms | 24648.2 ms | 9 |

Dependency download details are in `download-timings.log`.
