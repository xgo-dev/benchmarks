# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14155824 | 10499024 | 13963472 | 11776856 | 11776856 |
| Dustin_humanize | 4989852 | 5314696 | 3615248 | 5109448 | 3783104 | 3783104 |
| Etcdctl | 25896983 | 24490240 | 23205312 | 24182968 | 23559408 | 23559408 |
| Gorm_schema | 9421659 | 7956056 | 5336040 | 7785512 | 7523688 | 6080896 |
| IXGo | 41390963 | 31078056 | 30283736 | 31179816 | 30883464 | 30883464 |
| K8s_workqueue | 10168201 | 11698472 | 7292544 | 11538352 | 11359448 | 11359448 |
| Toml | 7213510 | 6746784 | 4827248 | 6554416 | 5532872 | 5532872 |
| Uber_zap | 8729830 | 12593512 | 8021816 | 12450912 | 10044992 | 10044992 |
| XGo | 18662549 | 19220944 | 16897640 | 19171160 | 18681512 | 18681512 |
