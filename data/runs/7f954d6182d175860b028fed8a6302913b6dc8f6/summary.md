# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14136336 | 10484560 | 13939048 | 11755512 | 11755512 |
| Dustin_humanize | 4989852 | 5322040 | 3617560 | 5112728 | 3782536 | 3782536 |
| Etcdctl | 25896983 | 24409848 | 23127248 | 24099080 | 23477960 | 23477960 |
| Gorm_schema | 9421659 | 7952928 | 5333344 | 7779144 | 7516304 | 6076272 |
| IXGo | 41390963 | 30798056 | 30004368 | 30902600 | 30602120 | 30602120 |
| K8s_workqueue | 10168201 | 11694296 | 7293416 | 11529656 | 11349560 | 11349560 |
| Toml | 7213510 | 6744800 | 4823888 | 6548968 | 5527616 | 5527616 |
| Uber_zap | 8729830 | 12588168 | 8020376 | 12441184 | 10036520 | 10036520 |
| XGo | 18662549 | 19197832 | 16878608 | 19142688 | 18656376 | 18656376 |
