# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14955536 | 16255680 | 12421480 | 12421480 |
| Dustin_humanize | 4989852 | 5588216 | 5870736 | 3890264 | 3890328 |
| Gorm_schema | 9421659 | 8271280 | 8763040 | 7649528 | 6055640 |
| K8s_workqueue | 10168201 | 12401032 | 13470280 | 12870024 | 12869960 |
| Toml | 7213510 | 7099152 | 7520008 | 5710608 | 5710608 |
| Uber_zap | 8729830 | 13312024 | 14451840 | 10522040 | 10522040 |
