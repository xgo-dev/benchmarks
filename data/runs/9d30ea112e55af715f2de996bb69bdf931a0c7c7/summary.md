# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12884128 | 10561504 | 12369656 | 10514248 | 10402104 |
| Dustin_humanize | 4999034 | 4684480 | 3374720 | 4417728 | 3317672 | 3274632 |
| Etcdctl | 25896983 | 21697736 | 20444952 | 21034216 | 20721048 | 20418360 |
| Gorm_schema | 9421683 | 7040248 | 6441472 | 6746576 | 6585552 | 5229736 |
| IXGo | 41505755 | 29754344 | 29122112 | 28972992 | 28722816 | 28589768 |
| K8s_workqueue | 10681819 | 11319480 | 10624952 | 10924952 | 10857832 | 8776320 |
| Toml | 7324958 | 6156424 | 5039296 | 5856376 | 4985240 | 4928536 |
| Uber_zap | 10024992 | 11591728 | 9274352 | 11188000 | 9668392 | 9532864 |
| XGo | 18662581 | 17642680 | 15503240 | 17084704 | 16813080 | 16704376 |
