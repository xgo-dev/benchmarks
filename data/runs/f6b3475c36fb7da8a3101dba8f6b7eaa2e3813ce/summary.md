# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12886936 | 10562264 | 12514216 | 10631944 | 10631856 |
| Dustin_humanize | 4999034 | 4688400 | 3374880 | 4449360 | 3330624 | 3330672 |
| Etcdctl | 25896983 | 21699648 | 20445256 | 21150912 | 20834848 | 20834904 |
| Gorm_schema | 9421683 | 7043792 | 6443072 | 6793864 | 6632312 | 5338136 |
| IXGo | 41505755 | 29755664 | 29121864 | 29174040 | 29024968 | 29025192 |
| K8s_workqueue | 10681819 | 11319672 | 10623816 | 10991400 | 10924408 | 8963488 |
| Toml | 7324958 | 6160360 | 5041368 | 5901768 | 5023056 | 5023088 |
| Uber_zap | 10024992 | 11594040 | 9274976 | 11259976 | 9725888 | 9725928 |
| XGo | 18662581 | 17642576 | 15501232 | 17198368 | 16926456 | 16926552 |
