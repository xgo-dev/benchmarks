# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12886920 | 10562664 | 12514224 | 10631944 | 10631856 |
| Dustin_humanize | 4999034 | 4688400 | 3375280 | 4449360 | 3330640 | 3330688 |
| Etcdctl | 25896983 | 21699648 | 20445688 | 21150920 | 20834888 | 20834944 |
| Gorm_schema | 9421683 | 7043792 | 6443472 | 6793864 | 6632312 | 5338120 |
| IXGo | 41505755 | 29755664 | 29122232 | 29174024 | 29024968 | 29025192 |
| K8s_workqueue | 10681819 | 11319672 | 10624216 | 10991408 | 10924432 | 8963488 |
| Toml | 7324958 | 6160360 | 5041768 | 5901768 | 5023056 | 5023088 |
| Uber_zap | 10024992 | 11594032 | 9275376 | 11259984 | 9725904 | 9725944 |
| XGo | 18662581 | 17642584 | 15501632 | 17198392 | 16926480 | 16926576 |
