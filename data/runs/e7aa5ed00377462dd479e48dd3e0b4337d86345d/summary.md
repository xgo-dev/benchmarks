# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14138032 | 10486784 | 13943648 | 11759504 | 11759504 |
| Dustin_humanize | 4989852 | 5321584 | 3617576 | 5114848 | 3784144 | 3784144 |
| Etcdctl | 25896983 | 24411528 | 23128944 | 24103184 | 23482040 | 23482040 |
| Gorm_schema | 9421659 | 7952960 | 5334600 | 7781560 | 7518648 | 6079264 |
| IXGo | 41390963 | 30799064 | 30005368 | 30906856 | 30606216 | 30606216 |
| K8s_workqueue | 10168201 | 11696056 | 7295712 | 11533784 | 11353544 | 11353544 |
| Toml | 7213510 | 6746368 | 4825928 | 6553056 | 5531472 | 5531472 |
| Uber_zap | 8729830 | 12589832 | 8022648 | 12445240 | 10040312 | 10040312 |
| XGo | 18662549 | 19199520 | 16880592 | 19146784 | 18660232 | 18660232 |
