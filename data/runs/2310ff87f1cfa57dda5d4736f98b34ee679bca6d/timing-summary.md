## Build timing diagnostics

Native Bent `-report-build-time` records, sorted by CPU time (`user + sys`, slowest first). Wall time is diagnostic only.

| Benchmark | Configuration | CPU (user + sys) | User | Sys | Wall (reference) |
| --- | --- | ---: | ---: | ---: | ---: |
| IXGo | LLGoFullLTOGlobalDCEPlugin | 475432.0 ms | 465367.9 ms | 10064.1 ms | 444862.9 ms |
| IXGo | LLGoFullLTONoGlobalDCE | 472213.7 ms | 461393.3 ms | 10820.3 ms | 411104.3 ms |
| IXGo | LLGoFullLTOGlobalDCE | 464298.5 ms | 454842.5 ms | 9455.9 ms | 440290.8 ms |
| IXGo | LLGoDeadcodeDrop | 376187.9 ms | 358647.7 ms | 17540.2 ms | 339535.7 ms |
| Etcdctl | LLGoFullLTOGlobalDCE | 335888.0 ms | 328809.4 ms | 7078.6 ms | 275569.5 ms |
| Etcdctl | LLGoFullLTONoGlobalDCE | 326450.8 ms | 320842.8 ms | 5608.0 ms | 288375.8 ms |
| Etcdctl | LLGoFullLTOGlobalDCEPlugin | 311614.9 ms | 306198.6 ms | 5416.3 ms | 274539.9 ms |
| IXGo | LLGoNoLTO | 309410.0 ms | 295304.6 ms | 14105.3 ms | 269029.7 ms |
| XGo | LLGoFullLTOGlobalDCEPlugin | 291994.4 ms | 283787.4 ms | 8207.0 ms | 258531.0 ms |
| Etcdctl | LLGoDeadcodeDrop | 258232.0 ms | 247399.8 ms | 10832.1 ms | 239356.3 ms |
| Etcdctl | LLGoNoLTO | 243259.5 ms | 233007.1 ms | 10252.4 ms | 220107.4 ms |
| Aws_restjson | LLGoFullLTONoGlobalDCE | 231528.3 ms | 225265.1 ms | 6263.3 ms | 222028.3 ms |
| Aws_restjson | LLGoFullLTOGlobalDCE | 226345.1 ms | 219496.3 ms | 6848.8 ms | 202152.3 ms |
| XGo | LLGoFullLTOGlobalDCE | 199064.4 ms | 194854.2 ms | 4210.2 ms | 175745.7 ms |
| XGo | LLGoFullLTONoGlobalDCE | 195009.4 ms | 191334.2 ms | 3675.2 ms | 177303.7 ms |
| Uber_zap | LLGoNoLTO | 191484.6 ms | 179721.0 ms | 11763.6 ms | 178232.5 ms |
| K8s_workqueue | LLGoDeadcodeDrop | 152405.5 ms | 142084.4 ms | 10321.2 ms | 137537.6 ms |
| Aws_restjson | LLGoFullLTOGlobalDCEPlugin | 136875.0 ms | 133971.4 ms | 2903.6 ms | 120372.9 ms |
| XGo | LLGoNoLTO | 134956.0 ms | 128310.8 ms | 6645.1 ms | 116357.2 ms |
| Uber_zap | LLGoFullLTOGlobalDCEPlugin | 128817.6 ms | 125646.4 ms | 3171.2 ms | 129416.1 ms |
| Uber_zap | LLGoFullLTONoGlobalDCE | 123353.2 ms | 120612.4 ms | 2740.8 ms | 108232.2 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCEPlugin | 112854.8 ms | 110193.9 ms | 2660.9 ms | 102008.2 ms |
| K8s_workqueue | LLGoFullLTONoGlobalDCE | 108888.5 ms | 106452.9 ms | 2435.5 ms | 96955.8 ms |
| K8s_workqueue | LLGoFullLTOGlobalDCE | 104556.3 ms | 102098.3 ms | 2458.0 ms | 91251.4 ms |
| Uber_zap | LLGoFullLTOGlobalDCE | 96900.7 ms | 94421.4 ms | 2479.4 ms | 81655.6 ms |
| XGo | LLGoDeadcodeDrop | 92592.3 ms | 88117.8 ms | 4474.5 ms | 68919.2 ms |
| Toml | LLGoFullLTONoGlobalDCE | 80817.5 ms | 78802.9 ms | 2014.5 ms | 84832.3 ms |
| Aws_restjson | LLGoDeadcodeDrop | 75703.8 ms | 72052.0 ms | 3651.8 ms | 58777.3 ms |
| Toml | LLGoFullLTOGlobalDCE | 73071.1 ms | 71209.0 ms | 1862.1 ms | 75266.0 ms |
| Dustin_humanize | LLGoFullLTONoGlobalDCE | 71653.6 ms | 70103.7 ms | 1549.9 ms | 76005.3 ms |
| Gorm_schema | LLGoFullLTONoGlobalDCE | 70887.5 ms | 69159.2 ms | 1728.3 ms | 62555.5 ms |
| Gorm_schema | LLGoFullLTOGlobalDCE | 67417.5 ms | 65736.0 ms | 1681.5 ms | 59132.6 ms |
| Gorm_schema | LLGoNoLTO | 55447.2 ms | 52530.4 ms | 2916.8 ms | 53465.9 ms |
| Gorm_schema | LLGoFullLTOGlobalDCEPlugin | 54884.1 ms | 53224.4 ms | 1659.7 ms | 46568.3 ms |
| Uber_zap | LLGoDeadcodeDrop | 47931.7 ms | 45209.8 ms | 2721.9 ms | 32773.2 ms |
| Aws_restjson | LLGoNoLTO | 47478.0 ms | 44650.2 ms | 2827.9 ms | 45466.4 ms |
| Toml | LLGoFullLTOGlobalDCEPlugin | 46988.3 ms | 45546.3 ms | 1442.0 ms | 40080.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCE | 44020.4 ms | 42525.7 ms | 1494.8 ms | 45914.9 ms |
| IXGo | Go | 39871.9 ms | 37536.8 ms | 2335.1 ms | 18566.8 ms |
| Dustin_humanize | LLGoFullLTOGlobalDCEPlugin | 34334.4 ms | 33093.5 ms | 1240.9 ms | 28772.3 ms |
| Gorm_schema | LLGoDeadcodeDrop | 33624.9 ms | 31479.1 ms | 2145.8 ms | 25412.2 ms |
| K8s_workqueue | LLGoNoLTO | 32574.5 ms | 30496.4 ms | 2078.1 ms | 21431.3 ms |
| Toml | LLGoNoLTO | 29909.2 ms | 27834.1 ms | 2075.1 ms | 32820.1 ms |
| Toml | LLGoDeadcodeDrop | 23476.5 ms | 21894.3 ms | 1582.2 ms | 17693.8 ms |
| Etcdctl | Go | 18043.8 ms | 17206.6 ms | 837.2 ms | 8169.1 ms |
| Dustin_humanize | LLGoDeadcodeDrop | 13339.3 ms | 12132.9 ms | 1206.4 ms | 7625.6 ms |
| Dustin_humanize | LLGoNoLTO | 13204.1 ms | 12093.0 ms | 1111.1 ms | 7454.4 ms |
| XGo | Go | 10661.7 ms | 10135.3 ms | 526.5 ms | 11006.4 ms |
| Uber_zap | Go | 6650.0 ms | 6253.5 ms | 396.5 ms | 7425.7 ms |
| Aws_restjson | Go | 5678.0 ms | 5242.0 ms | 436.0 ms | 3429.6 ms |
| Gorm_schema | Go | 3489.6 ms | 3305.6 ms | 184.0 ms | 1524.7 ms |
| Toml | Go | 2398.1 ms | 2170.4 ms | 227.6 ms | 5069.5 ms |
| K8s_workqueue | Go | 2107.2 ms | 1938.5 ms | 168.7 ms | 1409.5 ms |
| Dustin_humanize | Go | 844.3 ms | 730.5 ms | 113.7 ms | 1543.4 ms |

### Configuration totals

| Configuration | Total CPU (user + sys) | Total wall (reference) | Cases |
| --- | ---: | ---: | ---: |
| LLGoFullLTONoGlobalDCE | 1680802.6 ms | 1527393.3 ms | 9 |
| LLGoFullLTOGlobalDCE | 1611562.0 ms | 1446978.9 ms | 9 |
| LLGoFullLTOGlobalDCEPlugin | 1593795.5 ms | 1445152.4 ms | 9 |
| LLGoDeadcodeDrop | 1073493.7 ms | 927630.8 ms | 9 |
| LLGoNoLTO | 1057723.1 ms | 944364.8 ms | 9 |
| Go | 89744.7 ms | 58144.8 ms | 9 |

Dependency download details are in `download-timings.log`.
