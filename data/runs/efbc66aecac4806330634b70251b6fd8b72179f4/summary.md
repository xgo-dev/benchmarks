# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14314816 | 10599672 | 14107440 | 11911816 | 11911816 |
| Dustin_humanize | 4989852 | 5312800 | 3623312 | 5101672 | 3788304 | 3788304 |
| Etcdctl | 25896983 | 24552928 | 23250200 | 24236128 | 23643552 | 23643552 |
| Gorm_schema | 9421659 | 7860192 | 5289088 | 7682056 | 7423728 | 6015800 |
| K8s_workqueue | 10168201 | 11913760 | 7363904 | 11741176 | 11580504 | 11580504 |
| Toml | 7213510 | 6717760 | 4804176 | 6519952 | 5501408 | 5501408 |
| Uber_zap | 8729830 | 12758696 | 8042048 | 12603000 | 10177464 | 10177464 |
| XGo | 18662549 | 19488136 | 17124664 | 19413544 | 18959584 | 18959584 |
