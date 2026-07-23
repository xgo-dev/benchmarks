# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14955472 | 16255744 | 12421416 | 12421480 |
| Dustin_humanize | 4989852 | 5588216 | 5870736 | 3890328 | 3890328 |
| Gorm_schema | 9421659 | 8271280 | 8763040 | 7649528 | 7649528 |
| K8s_workqueue | 10168201 | 12401032 | 13470344 | 12870024 | 12870024 |
| Toml | 7213510 | 7099088 | 7519944 | 5710608 | 5710608 |
| Uber_zap | 8729830 | 13312088 | 14451840 | 10522040 | 10522040 |
