# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14952880 | 16251104 | 12419072 | 12419072 |
| Dustin_humanize | 4989852 | 5585568 | 5866832 | 3887848 | 3887848 |
| Gorm_schema | 9421659 | 8268624 | 8758808 | 7645672 | 6052912 |
| K8s_workqueue | 10168201 | 12398352 | 13465392 | 12865944 | 12865944 |
| Toml | 7213510 | 7096496 | 7516216 | 5707408 | 5707408 |
| Uber_zap | 8729830 | 13309384 | 14446584 | 10518856 | 10518920 |
