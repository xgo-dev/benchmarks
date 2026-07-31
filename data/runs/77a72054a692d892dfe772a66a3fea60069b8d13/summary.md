# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15265608 | 16556104 | 12707912 | 12707912 |
| Dustin_humanize | 4989852 | 5730872 | 6008400 | 4022752 | 4022752 |
| Etcdctl | 25896983 | 27299552 | 29827344 | 26008328 | 26008328 |
| Gorm_schema | 9421659 | 8460224 | 8946120 | 7832576 | 6229040 |
| IXGo | 41390530 | 33468144 | 36931520 | 35786800 | 35786800 |
| K8s_workqueue | 10168201 | 12683136 | 13742056 | 13142344 | 13142408 |
| Toml | 7213510 | 7267360 | 7682192 | 5873864 | 5873864 |
| Uber_zap | 8729830 | 13615960 | 14745544 | 10792264 | 10792200 |
| XGo | 18662549 | 21314744 | 23215936 | 20386176 | 20386176 |
