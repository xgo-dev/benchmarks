# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 13865064 | 10250504 | 15160208 | 12653424 | 12653424 |
| Dustin_humanize | 4989852 | 5208448 | 3547504 | 5492008 | 4001240 | 4001240 |
| Etcdctl | 25896983 | 23899176 | 22599888 | 26450512 | 25730448 | 25730448 |
| Gorm_schema | 9421659 | 7662256 | 5174360 | 8157592 | 7873912 | 6288072 |
| K8s_workqueue | 10168201 | 11479080 | 7129704 | 12543816 | 12319296 | 12319296 |
| Toml | 7213510 | 6588920 | 4695528 | 7013584 | 5843368 | 5843368 |
| Uber_zap | 8729830 | 12333480 | 7816648 | 13465440 | 10708232 | 10708232 |
| XGo | 18662549 | 18971056 | 16631304 | 20872264 | 20295616 | 20295616 |
