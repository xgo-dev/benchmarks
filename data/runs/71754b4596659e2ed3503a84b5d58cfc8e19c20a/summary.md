# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12886800 | 10560856 | 12514856 | 10631816 | 10631816 |
| Dustin_humanize | 4999034 | 4685704 | 3371952 | 4447312 | 3328616 | 3328616 |
| Etcdctl | 25896983 | 21702656 | 20447448 | 21154816 | 20838752 | 20838752 |
| Gorm_schema | 9421683 | 7041416 | 6440704 | 6792176 | 6630752 | 5336288 |
| IXGo | 41505755 | 29756712 | 29123008 | 29176040 | 29027168 | 29027168 |
| K8s_workqueue | 10681819 | 11319632 | 10623800 | 10992184 | 10925336 | 10925336 |
| Toml | 7324958 | 6157680 | 5038304 | 5899912 | 5021008 | 5021008 |
| Uber_zap | 10024992 | 11593544 | 9272560 | 11260320 | 9724968 | 9724968 |
| XGo | 18662581 | 17642008 | 15499568 | 17198464 | 16926728 | 16926712 |
