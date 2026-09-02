# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12882920 | 10560328 | 12508216 | 10628712 | 10516232 |
| Dustin_humanize | 4999034 | 4684376 | 3374472 | 4443312 | 3329192 | 3286184 |
| Etcdctl | 25896983 | 21695608 | 20442808 | 21145328 | 20828920 | 20526392 |
| Gorm_schema | 9421683 | 7040272 | 6441480 | 6788424 | 6626504 | 5251280 |
| IXGo | 41505755 | 29753016 | 29120800 | 29169328 | 29019960 | 28887968 |
| K8s_workqueue | 10681819 | 11318680 | 10624184 | 10988328 | 10920856 | 8818584 |
| Toml | 7324958 | 6156272 | 5039184 | 5895704 | 5017928 | 4961120 |
| Uber_zap | 10024992 | 11590096 | 9272616 | 11253976 | 9721144 | 9585256 |
| XGo | 18662581 | 17638776 | 15499272 | 17193600 | 16921368 | 16812656 |
