# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 13862264 | 10248976 | 15160648 | 12651792 | 12651792 |
| Dustin_humanize | 4989852 | 5206640 | 3547120 | 5492704 | 4001736 | 4001736 |
| Etcdctl | 25896983 | 23895688 | 22596920 | 26450408 | 25728560 | 25728560 |
| Gorm_schema | 9421659 | 7660448 | 5174000 | 8158304 | 7874328 | 6288584 |
| IXGo | 41390963 | 30778696 | 29974256 | 34214832 | 33847400 | 33847400 |
| K8s_workqueue | 10168201 | 11476312 | 7128184 | 12544248 | 12317792 | 12317792 |
| Toml | 7213510 | 6586136 | 4695152 | 7014024 | 5843496 | 5843496 |
| Uber_zap | 8729830 | 12330712 | 7815152 | 13465888 | 10706648 | 10706648 |
| XGo | 18662549 | 18966368 | 16626432 | 20872312 | 20293968 | 20293968 |
