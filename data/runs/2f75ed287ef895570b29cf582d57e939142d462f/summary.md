# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15190688 | 16481344 | 12651512 | 12651576 |
| Dustin_humanize | 4989852 | 5704480 | 5982728 | 4004864 | 4004864 |
| Gorm_schema | 9421659 | 8423496 | 8909488 | 7796336 | 6205656 |
| IXGo | 16593279 | 14830784 | 16059192 | 15604328 | 15604328 |
| K8s_workqueue | 10168201 | 12606816 | 13665848 | 13066256 | 13066256 |
| Toml | 7213510 | 7239616 | 7654992 | 5847848 | 5847848 |
| Uber_zap | 8729830 | 13539224 | 14668712 | 10745000 | 10744936 |
| XGo | 13792869 | 18941824 | 20554120 | 15799688 | 15799688 |
