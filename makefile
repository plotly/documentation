
all : search_readme

search_readme :
	@echo ""
	less make_instructions.txt

update_js_search :
	@echo "Updating js_docs search index"
	python update_js_docs_search.py

update_python_search :
	@echo "Updating python_docs index"
	rm -rf plotly.py _posts/python/html
	git clone git@github.com:plotly/plotly.py --branch=doc-prod --depth=1
	cp -R plotly.py/doc/python _posts/python/html
	python process_python_md.py
	bundle exec jekyll algolia push --config _config_python_search.yml
	rm -rf plotly.py _posts/python/html

update_r_search :
	@echo "Updating r_docs index"
	bundle exec jekyll algolia push --config _config_r_search.yml

update_ref_search :
	@echo "Updating search for reference pages"
	python update_ref_search.py
