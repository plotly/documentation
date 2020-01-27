import json
import os

from algoliasearch import algoliasearch

## Algolia Credentials

client = algoliasearch.Client("7EK9KHJW8M", os.environ['ALGOLIA_API_KEY'])
index = client.init_index('js_docs')

# get all plotly_js index files
indices = []
# array to fill with dictionaries of each file
all_js_files = []

for root, dirs, files in os.walk("_posts/plotly_js/", topdown=False):
    for name in files:
        if 'index' in name:
            indices.append(os.path.join(root, name))

for i in range(len(indices)):
    with open(indices[i]) as f:
        file_content = f.readlines()
    file_content = [x.strip() for x in file_content]
    js_file = {}
    for line in file_content:
        if 'permalink' in line:
            js_file['permalink']= line.split(': ')[1]
        elif 'name' in line:
            try:
                js_file['name']= line.split(': ')[1]
            except:
                pass
        elif 'description' in line:
            try:
                js_file['description']= line.split(': ')[1]
            except:
                pass
        elif 'display_as' in line:
            js_file['display_as']= line.split(': ')[1]
        elif 'tags' in line:
            js_file['tags']= line.split(': ')[1]
        else:
            pass
    all_js_files.append(js_file)


## Send to Algolia

index.clear_index()
index.add_objects(all_js_files)
