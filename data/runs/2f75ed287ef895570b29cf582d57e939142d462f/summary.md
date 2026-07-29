# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15190616 | 16481344 | 12651576 | 12651576 |
| Dustin_humanize | 4989852 | 5704544 | 5982664 | 4004864 | 4004864 |
| Etcdctl | 25896983 | 27198504 | 29726216 | 25907392 | 25907392 |
| Gorm_schema | 9421659 | 8423488 | 8909488 | 7796336 | 6205592 |
| IXGo | 16593279 | 14830776 | 16059192 | 15604328 | 15604328 |
| K8s_workqueue | 10168201 | 12606808 | 13665848 | 13066256 | 13066256 |
| Toml | 7213510 | 7239608 | 7655056 | 5847848 | 5847784 |
| Uber_zap | 8729830 | 13539216 | 14668712 | 10744936 | 10745000 |
| XGo | 13792869 | 18941816 | 20554120 | 15799688 | 15799688 |
