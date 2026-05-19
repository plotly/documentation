
.PHONY: help all setup update_js_search update_python_search update_r_search update_ref_search fetch_adjacent_python_files fetch_upstream_files clean

all: help

help:  ## Show this help (list available targets)
	@echo ""
	@echo "Available targets:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "} {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "See README.md for setup instructions and the 'Search indices' section for details on the search targets."
	@echo ""

setup:  ## Install all dependencies needed to build the site locally (gems, Python, Node, upstream content)
	@echo "Installing Ruby gems..."
	gem install bundler
	bundle install
	@echo "Installing Python packages..."
	pip install -r requirements.txt
	@echo "Installing Node packages..."
	npm install
	@echo "Fetching upstream documentation content..."
	$(MAKE) fetch_upstream_files
	@echo ""
	@echo "Setup complete. Run 'bundle exec jekyll serve --config _config_dev.yml' to start the dev server."

update_js_search:  ## Update the plotly.js Algolia search index
	@echo "Updating js_docs search index"
	python update_js_docs_search.py

update_python_search:  ## Update the Python Algolia search index
	@echo "Updating python_docs index"
	rm -rf plotly.py _posts/python/html
	git clone git@github.com:plotly/plotly.py --branch=doc-prod --depth=1
	cp -R plotly.py/doc/python _posts/python/html
	python process_python_md.py
	bundle exec jekyll algolia push --config _config_python_search.yml
	rm -rf plotly.py _posts/python/html

update_r_search:  ## Update the R/ggplot2 Algolia search index
	@echo "Updating r_docs index"
	rm -rf plotly.r-docs _posts/r/md _posts/ggplot2/md
	git clone git@github.com:plotly/plotly.r-docs --branch=master --depth=1
	bash process_r_md.sh
	cp -R plotly.r-docs/r/ _posts/r/md
	cp -R plotly.r-docs/ggplot2/ _posts/ggplot2/md
	bundle exec jekyll algolia push --config _config_r_search.yml
	rm -rf plotly.r-docs _posts/r/md _posts/ggplot2/md

update_ref_search:  ## Update the schema (reference-pages) Algolia search index
	@echo "Updating search for reference pages"
	python update_ref_search.py

fetch_upstream_files: clean  ## Fetch upstream tutorial content (Python, R, ggplot2, Julia, Matlab, C#, F#)
	git clone --depth 1 -b built https://github.com/plotly/plotly.py-docs _posts/python/html
	git clone --depth 1 -b built https://github.com/plotly/plotlyjs.jl-docs _posts/julia/html
	git clone --depth 1 -b built https://github.com/plotly/plotly.net-docs _posts/fsharp/html
	git clone --depth 1 -b built https://github.com/plotly/plotly.r-docs _posts/r/md
	git clone --depth 1 -b built https://github.com/plotly/plotly.matlab-docs _posts/matlab/md
	mv _posts/r/md/ggplot2 _posts/ggplot2/md
	mv _posts/fsharp/html/csharp _posts/csharp/html

fetch_adjacent_python_files:  ## Copy Python docs from an adjacent ../plotly.py checkout (faster than fetch_upstream_files for Python)
	rm -rf _posts/python/html
	cp -r ../plotly.py/doc/build/html _posts/python/html

clean:  ## Remove all fetched upstream content
	rm -rf _posts/python/html
	rm -rf _posts/julia/html
	rm -rf _posts/fsharp/html
	rm -rf _posts/csharp/html
	rm -rf _posts/r/md
	rm -rf _posts/ggplot2/md
	rm -rf _posts/matlab/md
