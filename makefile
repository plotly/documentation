
all : readme

readme :
	echo ""
	less make_instructions.txt

update_python_search :
	echo "Updating python_docs index"
	bundle exec jekyll algolia push --config _config_dev.yml

update_default_schema :
	@echo "Making sure the default-schema.json file is up to date"
	python -c "import requests;\
               from requests.compat import json as _json;\
               response = requests.get('https://api.plot.ly/v2/plot-schema?sha1');\
               f = open('plotly/package_data/default-schema.json', 'w');\
               _json.dump(response.json()['schema'], f, indent=4,\
                          sort_keys=True, separators=(',', ': '));\
               f.close()"
	@echo "Auto-generating graph objects based on updated default-schema."
	python update_graph_objs.py
