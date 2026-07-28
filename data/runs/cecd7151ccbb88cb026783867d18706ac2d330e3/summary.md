# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15189688 | 16481360 | 12651592 | 12651656 |
| Dustin_humanize | 4989852 | 5703704 | 5982888 | 4005032 | 4005032 |
| Gorm_schema | 9421659 | 8422656 | 8909648 | 7796504 | 6205816 |
| K8s_workqueue | 10168201 | 12606504 | 13666544 | 13066936 | 13066936 |
| Toml | 7213510 | 7238680 | 7655144 | 5847928 | 5847864 |
| Uber_zap | 8729830 | 13538976 | 14669480 | 10745784 | 10745784 |
