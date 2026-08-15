# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14155160 | 10498488 | 13962608 | 11776056 | 11776056 |
| Dustin_humanize | 4989852 | 5314136 | 3614672 | 5108664 | 3782400 | 3782400 |
| Etcdctl | 25896983 | 24488728 | 23204096 | 24181480 | 23558048 | 23558048 |
| Gorm_schema | 9421659 | 7955552 | 5335560 | 7785224 | 7523384 | 6080688 |
| IXGo | 41390963 | 31074952 | 30280920 | 31177208 | 30881080 | 30881080 |
| K8s_workqueue | 10168201 | 11697592 | 7292104 | 11537424 | 11358680 | 11358680 |
| Toml | 7213510 | 6746368 | 4826912 | 6553776 | 5532200 | 5532200 |
| Uber_zap | 8729830 | 12592712 | 8021488 | 12449808 | 10044208 | 10044208 |
| XGo | 18662549 | 19220304 | 16897208 | 19170456 | 18680968 | 18680968 |
