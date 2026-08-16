# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14134168 | 10482968 | 13938568 | 11754360 | 11754360 |
| Dustin_humanize | 4989852 | 5320144 | 3616176 | 5112184 | 3781416 | 3781416 |
| Etcdctl | 25896983 | 24407720 | 23125144 | 24097928 | 23476808 | 23476808 |
| Gorm_schema | 9421659 | 7951032 | 5331888 | 7778408 | 7515552 | 6075152 |
| IXGo | 41390963 | 30795568 | 30001896 | 30902024 | 30601432 | 30601432 |
| K8s_workqueue | 10168201 | 11692176 | 7291936 | 11528680 | 11348472 | 11348472 |
| Toml | 7213510 | 6742872 | 4822376 | 6548376 | 5526704 | 5526704 |
| Uber_zap | 8729830 | 12586048 | 8018824 | 12440208 | 10035176 | 10035176 |
| XGo | 18662549 | 19195752 | 16876776 | 19141952 | 18655480 | 18655480 |
