# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15190224 | 16488552 | 12656472 | 12656472 |
| Dustin_humanize | 4989852 | 5701352 | 5982744 | 4003760 | 4003696 |
| Gorm_schema | 9421659 | 8420776 | 8910928 | 7797872 | 6205176 |
| K8s_workqueue | 10168201 | 12606712 | 13673816 | 13074368 | 13074368 |
| Toml | 7213510 | 7236936 | 7656736 | 5847944 | 5848008 |
| Uber_zap | 8729830 | 13539464 | 14676704 | 10749048 | 10749048 |
