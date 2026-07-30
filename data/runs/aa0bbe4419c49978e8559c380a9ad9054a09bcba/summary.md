# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15190688 | 16481344 | 12651512 | 12651576 |
| Dustin_humanize | 4989852 | 5704544 | 5982728 | 4004864 | 4004864 |
| Etcdctl | 25896983 | 27198512 | 29726216 | 25907392 | 25907392 |
| Gorm_schema | 9421659 | 8423496 | 8909488 | 7796336 | 6205656 |
| IXGo | 41390530 | 33297584 | 36755512 | 35611664 | 35611664 |
| K8s_workqueue | 10168201 | 12606824 | 13665848 | 13066256 | 13066192 |
| Toml | 7213510 | 7239616 | 7655056 | 5847848 | 5847848 |
| Uber_zap | 8729830 | 13539224 | 14668648 | 10745000 | 10745000 |
| XGo | 18662549 | 21196768 | 23095088 | 20267008 | 20266944 |
