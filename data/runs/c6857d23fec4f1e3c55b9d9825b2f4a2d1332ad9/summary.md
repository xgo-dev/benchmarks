# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12887360 | 10563112 | 12514672 | 10632424 | 10632336 |
| Dustin_humanize | 4999034 | 4688864 | 3375776 | 4449824 | 3331136 | 3331232 |
| Etcdctl | 25896983 | 21700112 | 20446184 | 21151384 | 20835384 | 20835440 |
| Gorm_schema | 9421683 | 7044240 | 6443936 | 6794328 | 6632792 | 5338600 |
| IXGo | 41505755 | 29756096 | 29122696 | 29174456 | 29025432 | 29025656 |
| K8s_workqueue | 10681819 | 11320120 | 10624712 | 10991872 | 10924896 | 8963968 |
| Toml | 7324958 | 6160808 | 5042216 | 5902232 | 5023536 | 5023568 |
| Uber_zap | 10024992 | 11594504 | 9275840 | 11260464 | 9726384 | 9726424 |
| XGo | 18662581 | 17643040 | 15502096 | 17198856 | 16926944 | 16927040 |
