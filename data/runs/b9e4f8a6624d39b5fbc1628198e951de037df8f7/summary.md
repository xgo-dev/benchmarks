# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12877400 | 10555024 | 12504280 | 10622496 | 10510112 |
| Dustin_humanize | 4999034 | 4678824 | 3368456 | 4439344 | 3322808 | 3279776 |
| Etcdctl | 25896983 | 21691144 | 20438344 | 21141952 | 20825640 | 20523056 |
| Gorm_schema | 9421683 | 7034752 | 6435944 | 6784520 | 6622552 | 5246072 |
| IXGo | 41505755 | 29747288 | 29115072 | 29165024 | 29015600 | 28883616 |
| K8s_workqueue | 10681819 | 11313128 | 10618648 | 10984392 | 10916936 | 8812584 |
| Toml | 7324958 | 6150768 | 5033664 | 5891752 | 5013928 | 4957136 |
| Uber_zap | 10024992 | 11584544 | 9267080 | 11250008 | 9717192 | 9581368 |
| XGo | 18662581 | 17632064 | 15492592 | 17187880 | 16915640 | 16806976 |
