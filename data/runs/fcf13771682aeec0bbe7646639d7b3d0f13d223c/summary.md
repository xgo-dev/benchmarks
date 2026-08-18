# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15232376 | 11193552 | 15029496 | 12644248 | 12644248 |
| Dustin_humanize | 4989852 | 5531648 | 3807368 | 5322824 | 3975456 | 3975456 |
| Etcdctl | 25896983 | 25702888 | 24283848 | 25391728 | 24798408 | 24798408 |
| Gorm_schema | 9421659 | 8197064 | 5532216 | 8024176 | 7762400 | 6305904 |
| K8s_workqueue | 10168201 | 12831432 | 7743536 | 12663680 | 12497840 | 12497840 |
| Toml | 7213510 | 6957688 | 5018832 | 6762456 | 5726712 | 5726712 |
| Uber_zap | 8729830 | 13689616 | 8418992 | 13539040 | 10868896 | 10868896 |
| XGo | 18662549 | 21237896 | 18657144 | 21180880 | 20722472 | 20722472 |
