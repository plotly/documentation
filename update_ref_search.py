import json
import os

from algoliasearch import algoliasearch

## Algolia Credentials

client = algoliasearch.Client("7EK9KHJW8M", os.environ['ALGOLIA_API_KEY'])
index = client.init_index('schema')

## Load plotschema.json
# Note _data/plotschema.json is updated upon each deploy

p = json.load(open('_data/plotschema.json'))
schema = []

## Data Level 1: Traces
# Add dictionaries to schema array.
# The trace dictionary include name: trace name, permalink: reference/#trace-name, and description if applicable.

for i in p['schema']['traces']:
    trace = {}
    trace ['name'] = i
    trace ['permalink'] = 'reference/#'+i
    if p['schema']['traces'][i]['meta']:
        trace ['description'] = (p['schema']['traces'][i]['meta']['description']).replace('*', '"')
    else: pass
    schema.append(trace)

def next_level(previous_level,chain_dict):
    for sub_attr in previous_level:
        try:
            if isinstance(previous_level[sub_attr],dict):
                if not any(value in sub_attr for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                    try:
                        attribute = {}
                        attribute ['name'] = chain_dict['name']+' > '+sub_attr
                        attribute ['permalink'] = chain_dict['permalink']+'-'+sub_attr
                        attribute ['description'] = (previous_level[sub_attr]['description']).replace('*', '"')
                        schema.append(attribute)
                        next_level(previous_level[sub_attr],{'name':attribute['name'], 'permalink':attribute['permalink']})
                    except:
                        attribute = {}
                        attribute ['name'] = chain_dict['name']+' > '+sub_attr
                        attribute ['permalink'] = chain_dict['permalink']+'-'+sub_attr
                        attribute ['description'] = 'Properties for '+sub_attr
                        schema.append(attribute)
                        next_level(previous_level[sub_attr],{'name':attribute['name'], 'permalink':attribute['permalink']})
        except:
            pass

layout_chain_dict = {'name':'Layout', 'permalink':'reference/#layout'}

# recursively add trace attributes to schema
for i in p['schema']['traces']:
    chain_dict = {'name':i, 'permalink':'reference/#'+i }
    next_level(p['schema']['traces'][i]['attributes'], chain_dict)

    # if there are layoutAttributes in the trace add them too.
    if p['schema']['traces'][i].get('layoutAttributes'):
        next_level(p['schema']['traces'][i]['layoutAttributes'], layout_chain_dict)

# recursively add layout attributes to schema
next_level(p['schema']['layout']['layoutAttributes'], layout_chain_dict)

## Send to Algolia

index.clear_index()
index.add_objects(schema)
