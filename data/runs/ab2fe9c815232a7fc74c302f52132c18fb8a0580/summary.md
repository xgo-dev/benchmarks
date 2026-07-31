# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15266600 | 16559840 | 12709480 | 12709480 |
| Dustin_humanize | 4989852 | 5729072 | 6009536 | 4022768 | 4022768 |
| Etcdctl | 25896983 | 27306600 | 29836984 | 26017032 | 26017096 |
| Gorm_schema | 9421659 | 8458872 | 8947808 | 7833848 | 6229320 |
| IXGo | 41390530 | 33470512 | 36935576 | 35790336 | 35790336 |
| K8s_workqueue | 10168201 | 12684584 | 13746208 | 13146040 | 13146040 |
| Toml | 7213510 | 7266360 | 7684216 | 5874760 | 5874760 |
| Uber_zap | 8729830 | 13616952 | 14749408 | 10792904 | 10792904 |
| XGo | 18662549 | 21314832 | 23218568 | 20388408 | 20388344 |
