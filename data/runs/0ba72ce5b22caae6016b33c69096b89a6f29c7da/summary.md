# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14202736 | 10521584 | 14101816 | 11910648 | 11910648 |
| Dustin_humanize | 4989852 | 5232040 | 3581176 | 5082368 | 3777528 | 3777528 |
| Etcdctl | 25896983 | 24550288 | 23256600 | 24232984 | 23637976 | 23637976 |
| Gorm_schema | 9421659 | 7768984 | 5237616 | 7654920 | 7393800 | 5992392 |
| K8s_workqueue | 10168201 | 11808208 | 7320856 | 11730384 | 11568376 | 11568376 |
| Toml | 7213510 | 6633328 | 4740440 | 6497440 | 5472520 | 5472520 |
| Uber_zap | 8729830 | 12643216 | 7974648 | 12581408 | 10158672 | 10158672 |
| XGo | 18662549 | 19365176 | 17008152 | 19390992 | 18927504 | 18927504 |
