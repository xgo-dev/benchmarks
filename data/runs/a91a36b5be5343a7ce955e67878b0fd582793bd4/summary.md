# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12887000 | 10561144 | 12515088 | 10632024 | 10632024 |
| Dustin_humanize | 4999034 | 4686128 | 3372240 | 4447720 | 3328856 | 3328840 |
| Etcdctl | 25896983 | 21702904 | 20447632 | 21154824 | 20838560 | 20838560 |
| Gorm_schema | 9421683 | 7041840 | 6441024 | 6792592 | 6631040 | 5336528 |
| IXGo | 41505755 | 29756256 | 29122512 | 29175416 | 29026384 | 29026384 |
| K8s_workqueue | 10681819 | 11319832 | 10623912 | 10992400 | 10925400 | 10925400 |
| Toml | 7324958 | 6158088 | 5038632 | 5900368 | 5021296 | 5021296 |
| Uber_zap | 10024992 | 11593744 | 9272880 | 11260520 | 9725256 | 9725256 |
| XGo | 18662581 | 17642192 | 15499856 | 17198696 | 16926744 | 16926760 |
