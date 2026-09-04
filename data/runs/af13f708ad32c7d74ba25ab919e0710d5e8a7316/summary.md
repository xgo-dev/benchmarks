# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14635492 | 12884640 | 10562040 | 12509488 | 10630432 | 10518016 |
| Dustin_humanize | 4999034 | 4685056 | 3375272 | 4443752 | 3329728 | 3286720 |
| Etcdctl | 25896983 | 21698264 | 20445488 | 21147688 | 20832384 | 20529848 |
| Gorm_schema | 9421683 | 7040840 | 6442000 | 6787968 | 6626896 | 5251720 |
| IXGo | 41505755 | 29754760 | 29122568 | 29170248 | 29022400 | 28890392 |
| K8s_workqueue | 10681819 | 11319976 | 10625464 | 10989216 | 10922488 | 8819952 |
| Toml | 7324958 | 6156928 | 5039872 | 5895992 | 5018344 | 4961480 |
| Uber_zap | 10024992 | 11592264 | 9274872 | 11255968 | 9723240 | 9587376 |
| XGo | 18662581 | 17643112 | 15503656 | 17197744 | 16926104 | 16817384 |
