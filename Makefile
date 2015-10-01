
# get Makefile directory name: http://stackoverflow.com/a/5982798/376773
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

# BIN directory
BIN := $(THIS_DIR)/node_modules/.bin

# applications
NODE ?= node
NPM ?= $(NODE) $(shell which npm)
WEBPACK ?= $(NODE) $(BIN)/webpack

NODE_ENV ?= development

run: build
	@jekyll serve --config _config.yml,_config_local.yml --baseurl '' --watch --verbose

dev:
	@jekyll serve --config _config.yml,_config_local.yml --baseurl '' --watch --verbose &
	@webpack-dev-server --config webpack.config.hot.js --hot --progress --inline --port 4001 --history-api-fallback

build: node_modules index.html
	@jekyll build --config _config.yml,_config_local.yml --verbose

clean:
	@rm -rf index.html index.min.js index.min.js.map

distclean: clean
	@rm -rf node_modules
	@rm -rf _site

index.html: node_modules
ifeq ($(NODE_ENV), development)
	@$(WEBPACK) -d --config webpack.config.js
else
	@$(WEBPACK) -p --optimize-dedupe --config webpack.config.js
endif

node_modules: package.json
	@NODE_ENV= $(NPM) install
	@touch node_modules

.PHONY: all build clean distclean
