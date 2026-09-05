# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12884568 | 10561960 | 12369864 | 10514456 | 10402264 |
| Dustin_humanize | 4999034 | 4684544 | 3374784 | 4417792 | 3317736 | 3274696 |
| Etcdctl | 25896983 | 21698272 | 20445488 | 21034472 | 20721256 | 20418552 |
| Gorm_schema | 9421683 | 7040312 | 6441536 | 6746640 | 6585616 | 5229800 |
| IXGo | 41505755 | 29754768 | 29122568 | 28973208 | 28723008 | 28589944 |
| K8s_workqueue | 10681819 | 11319888 | 10625384 | 10925144 | 10858056 | 8776480 |
| Toml | 7324958 | 6156496 | 5039352 | 5856440 | 4985304 | 4928600 |
| Uber_zap | 10024992 | 11592184 | 9274792 | 11188224 | 9668552 | 9533056 |
| XGo | 18662581 | 17643112 | 15503656 | 17084912 | 16813272 | 16704584 |
