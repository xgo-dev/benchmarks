# LLGo binary-size CI
All values are ELF file sizes in bytes, collected by Bent `benchsize`.

| Benchmark | Go | LLGoNoLTO | LLGoDeadcodeDrop | LLGoFullLTONoGlobalDCE | LLGoFullLTOGlobalDCE | LLGoFullLTOGlobalDCEPlugin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aws_restjson | 14639564 | 14208704 | 10503496 | 15537032 | 12952752 | 12952752 |
| Dustin_humanize | 4989852 | 5338376 | 3617968 | 5633936 | 4077608 | 4077608 |
| Etcdctl | 25896983 | 24612112 | 23303080 | 27210576 | 26443208 | 26443208 |
| Gorm_schema | 9421659 | 7991632 | 5340784 | 8509360 | 8204016 | 6531864 |
| IXGo | 41390963 | 31195152 | 30380528 | 34674568 | 34306800 | 34306800 |
| K8s_workqueue | 10168201 | 11751408 | 7297144 | 12840920 | 12597880 | 12597880 |
| Toml | 7213510 | 6778144 | 4831360 | 7218632 | 5998080 | 5998080 |
| Uber_zap | 8729830 | 12650512 | 8028864 | 13821704 | 10980968 | 10980968 |
| XGo | 18662549 | 19332000 | 16963176 | 21261840 | 20664896 | 20664896 |
