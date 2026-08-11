# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14208104 | 10503304 | 15536048 | 12952360 | 12952360 |
| Dustin_humanize | 4989852 | 5338352 | 3618088 | 5633512 | 4077560 | 4077560 |
| Etcdctl | 25896983 | 24610040 | 23305088 | 27208088 | 26445096 | 26445096 |
| Gorm_schema | 9421659 | 7991112 | 5340688 | 8508448 | 8203760 | 6531632 |
| IXGo | 41390963 | 31195120 | 30384120 | 34674112 | 34310344 | 34310344 |
| K8s_workqueue | 10168201 | 11750960 | 7297064 | 12840072 | 12597592 | 12597592 |
| Toml | 7213510 | 6777784 | 4831248 | 7217872 | 5997824 | 5997824 |
| Uber_zap | 8729830 | 12649976 | 8028720 | 13820768 | 10980624 | 10980624 |
| XGo | 18662549 | 19316320 | 16953048 | 21245776 | 20654720 | 20654720 |
