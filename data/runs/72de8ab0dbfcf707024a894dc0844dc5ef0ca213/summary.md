# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14952880 | 16251104 | 12419008 | 12419072 |
| Dustin_humanize | 4989852 | 5585576 | 5866832 | 3887848 | 3887848 |
| Gorm_schema | 9421659 | 8268624 | 8758808 | 7645672 | 6052976 |
| K8s_workqueue | 10168201 | 12398360 | 13465392 | 12865944 | 12865880 |
| Toml | 7213510 | 7096432 | 7516216 | 5707408 | 5707344 |
| Uber_zap | 8729830 | 13309448 | 14446584 | 10518920 | 10518920 |
