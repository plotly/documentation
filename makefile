
all : search_readme

search_readme :
	@echo ""
	less make_instructions.txt

update_js_search :
	@echo "Updating js_docs index"
	bundle exec jekyll algolia push --config _config_js_search.yml

update_python_search :
	@echo "Updating python_docs index"
	bundle exec jekyll algolia push --config _config_python_search.yml

update_r_search :
	@echo "Updating r_docs index"
	bundle exec jekyll algolia push --config _config_r_search.yml

update_ref_search :
	@echo "Install algoliasearch python package:" 
	pip install --upgrade algoliasearch
	@echo "Updating search for reference pages"
	python update_ref_search.py
