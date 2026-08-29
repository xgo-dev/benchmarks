# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12887952 | 10563704 | 12515136 | 10632872 | 10632784 |
| Dustin_humanize | 4999034 | 4689376 | 3376288 | 4450192 | 3331504 | 3331600 |
| Etcdctl | 25896983 | 21701624 | 20447656 | 21152800 | 20836808 | 20836848 |
| Gorm_schema | 9421683 | 7045392 | 6445080 | 6795448 | 6633912 | 5339576 |
| IXGo | 41505755 | 29757576 | 29124168 | 29175872 | 29026832 | 29027072 |
| K8s_workqueue | 10681819 | 11323720 | 10628016 | 10995320 | 10928280 | 8966832 |
| Toml | 7324958 | 6161392 | 5042792 | 5902632 | 5023936 | 5023968 |
| Uber_zap | 10024992 | 11595144 | 9276480 | 11260960 | 9726880 | 9726920 |
| XGo | 18662581 | 17644200 | 15503096 | 17200024 | 16928080 | 16928176 |
