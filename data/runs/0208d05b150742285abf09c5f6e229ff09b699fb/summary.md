# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12883432 | 10560824 | 12508272 | 10629248 | 10516832 |
| Dustin_humanize | 4999034 | 4685048 | 3375256 | 4443752 | 3329728 | 3286720 |
| Etcdctl | 25896983 | 21696176 | 20443400 | 21145712 | 20830408 | 20527840 |
| Gorm_schema | 9421683 | 7040816 | 6441992 | 6787968 | 6626896 | 5251720 |
| IXGo | 41505755 | 29753592 | 29121392 | 29169072 | 29021256 | 28889200 |
| K8s_workqueue | 10681819 | 11319160 | 10624664 | 10988424 | 10921704 | 8819184 |
| Toml | 7324958 | 6156896 | 5039840 | 5895960 | 5018312 | 4961480 |
| Uber_zap | 10024992 | 11590656 | 9273256 | 11254392 | 9721624 | 9585768 |
| XGo | 18662581 | 17639192 | 15499720 | 17193968 | 16922256 | 16813624 |
