# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14955648 | 16255920 | 12421656 | 12421656 |
| Dustin_humanize | 4989852 | 5588384 | 5870896 | 3890504 | 3890504 |
| Gorm_schema | 9421659 | 8271456 | 8763216 | 7649640 | 6055816 |
| K8s_workqueue | 10168201 | 12401192 | 13470456 | 12870200 | 12870200 |
| Toml | 7213510 | 7099328 | 7520184 | 5710784 | 5710720 |
| Uber_zap | 8729830 | 13312264 | 14452016 | 10522200 | 10522200 |
