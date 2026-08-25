# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12891056 | 10563752 | 12518896 | 10634496 | 10634496 |
| Dustin_humanize | 4999034 | 4689880 | 3374824 | 4451264 | 3331264 | 3331264 |
| Etcdctl | 25896983 | 21706848 | 20450360 | 21158776 | 20842688 | 20842688 |
| Gorm_schema | 9421683 | 7045672 | 6443576 | 6796184 | 6634784 | 5338904 |
| IXGo | 41505755 | 29760904 | 29125872 | 29180080 | 29031104 | 29031104 |
| K8s_workqueue | 10681819 | 11323840 | 10626736 | 10996208 | 10929304 | 10929304 |
| Toml | 7324958 | 6161872 | 5041184 | 5903928 | 5023688 | 5023688 |
| Uber_zap | 10024992 | 11597832 | 9275472 | 11264256 | 9727608 | 9727608 |
| XGo | 18662581 | 17646200 | 15502464 | 17202464 | 16930696 | 16930696 |
