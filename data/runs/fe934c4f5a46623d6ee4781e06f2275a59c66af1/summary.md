# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 15232144 | 11193272 | 15029488 | 12644176 | 12644176 |
| Dustin_humanize | 4989852 | 5531408 | 3807184 | 5322816 | 3975440 | 3975440 |
| Etcdctl | 25896983 | 25702648 | 24283560 | 25391680 | 24798424 | 24798424 |
| Gorm_schema | 9421659 | 8196864 | 5531976 | 8024176 | 7762400 | 6305888 |
| K8s_workqueue | 10168201 | 12831232 | 7743320 | 12663688 | 12497840 | 12497840 |
| Toml | 7213510 | 6957496 | 5018576 | 6762440 | 5726672 | 5726672 |
| Uber_zap | 8729830 | 13689376 | 8418720 | 13539016 | 10868864 | 10868864 |
| XGo | 18662549 | 21237672 | 18656928 | 21180872 | 20722480 | 20722480 |
