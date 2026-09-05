# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12915776 | 10586664 | 12358576 | 10503064 | 10390368 |
| Dustin_humanize | 4999034 | 4697216 | 3382416 | 4418544 | 3318080 | 3274864 |
| Etcdctl | 25896983 | 21761232 | 20505280 | 21046864 | 20734024 | 20431176 |
| Gorm_schema | 9421683 | 7058456 | 6453384 | 6749528 | 6587120 | 5232016 |
| IXGo | 41505755 | 29800800 | 29167256 | 28959904 | 28709920 | 28576760 |
| K8s_workqueue | 10681819 | 11346504 | 10649104 | 10923000 | 10855472 | 8775072 |
| Toml | 7324958 | 6169488 | 5047432 | 5854984 | 4981824 | 4924856 |
| Uber_zap | 10024992 | 11619888 | 9295608 | 11178048 | 9659112 | 9523176 |
| XGo | 18662581 | 17674832 | 15529344 | 17076792 | 16804640 | 16695920 |
