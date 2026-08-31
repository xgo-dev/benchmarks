# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12881408 | 10558656 | 12507744 | 10628232 | 10515816 |
| Dustin_humanize | 4999034 | 4682832 | 3372728 | 4442712 | 3328808 | 3285736 |
| Etcdctl | 25896983 | 21695072 | 20442280 | 21145400 | 20829040 | 20526472 |
| Gorm_schema | 9421683 | 7038728 | 6439944 | 6787904 | 6625936 | 5250896 |
| IXGo | 41505755 | 29751328 | 29119056 | 29168536 | 29019144 | 28887144 |
| K8s_workqueue | 10681819 | 11317104 | 10622632 | 10987792 | 10920352 | 8818120 |
| Toml | 7324958 | 6154768 | 5037712 | 5895152 | 5017328 | 4960536 |
| Uber_zap | 10024992 | 11588568 | 9271064 | 11253456 | 9720624 | 9584720 |
| XGo | 18662581 | 17638664 | 15499168 | 17193488 | 16921256 | 16812544 |
