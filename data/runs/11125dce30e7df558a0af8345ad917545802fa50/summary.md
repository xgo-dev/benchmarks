# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15266608 | 10364880 | 16559840 | 12709480 | 12709480 |
| Dustin_humanize | 4989852 | 5729072 | 3588544 | 6009536 | 4022768 | 4022768 |
| Etcdctl | 25896983 | 27306720 | 25141888 | 29836920 | 26017096 | 26017096 |
| Gorm_schema | 9421659 | 8458880 | 5227472 | 8947808 | 7833848 | 6229320 |
| IXGo | 41390530 | 33470520 | 31887744 | 36935576 | 35790336 | 35790336 |
| K8s_workqueue | 10168201 | 12684592 | 7202456 | 13746272 | 13145976 | 13145976 |
| Toml | 7213510 | 7266624 | 4758712 | 7684216 | 5874760 | 5874760 |
| Uber_zap | 8729830 | 13617024 | 7946104 | 14749408 | 10792904 | 10792904 |
| XGo | 18662549 | 21314840 | 17197728 | 23218568 | 20388408 | 20388408 |
