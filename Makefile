build:
	node --version
	yarn run build
dev:
	yarn run dev
fmt:
	yarn run format
fix:
	yarn run format:fix
install:
	yarn install --frozen-locakfile
tag:
	bash ./scripts/tag.sh
push:
	git push origin --tags
.PHONY: build
