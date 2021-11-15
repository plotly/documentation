
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
	rm -rf plotly.r-docs _posts/r/md _posts/ggplot2/md
	git clone git@github.com:plotly/plotly.r-docs --branch=master --depth=1
	bash process_r_md.sh
	cp -R plotly.r-docs/r/ _posts/r/md
	cp -R plotly.r-docs/ggplot2/ _posts/ggplot2/md
	bundle exec jekyll algolia push --config _config_r_search.yml
	rm -rf plotly.r-docs _posts/r/md _posts/ggplot2/md

update_ref_search :
	@echo "Updating search for reference pages"
	python update_ref_search.py

fetch_adjacent_python_files:
	rm -rf _posts/python/html
	cp -r ../plotly.py/doc/build/html _posts/python/html

fetch_upstream_files: clean
	git clone --depth 1 -b built git@github.com:plotly/plotly.py-docs _posts/python/html
	git clone --depth 1 -b built git@github.com:plotly/plotlyjs.jl-docs _posts/julia/html
#	git clone --depth 1 -b built git@github.com:plotly/plotly.net-docs _posts/fsharp/html
	git clone --depth 1 -b built git@github.com:plotly/plotly.r-docs _posts/r/md
	git clone --depth 1 -b built git@github.com:plotly/plotly.matlab-docs _posts/matlab/md
	mv _posts/r/md/ggplot2 _posts/ggplot2/md
#	mv _posts/fsharp/html/csharp _posts/csharp/html

clean:
	rm -rf _posts/python/html
	rm -rf _posts/julia/html
#	rm -rf _posts/fsharp/html
#	rm -rf _posts/csharp/html
	rm -rf _posts/r/md
	rm -rf _posts/ggplot2/md
	rm -rf _posts/matlab/md
