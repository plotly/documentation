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
# Add trace dictionaries to schema array.
# The trace dictionary include name: trace name, permalink: reference/#trace-name, and description if applicable.

for i in p['schema']['traces']:
    trace = {}
    trace ['name'] = i
    trace ['permalink'] = 'reference/#'+i
    if p['schema']['traces'][i]['meta']:
        trace ['description'] = (p['schema']['traces'][i]['meta']['description']).replace('*', '"')
    else: pass
    schema.append(trace)

## Data Level 2: Nested Attributes

for i in p['schema']['traces']:
    for att1 in p['schema']['traces'][i]['attributes']:
        if not any(value in att1 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
            try:
                attribute = {}
                attribute ['name'] = i+' > '+att1
                attribute ['permalink'] = 'reference/#'+i+'-'+att1
                attribute ['description'] = (p['schema']['traces'][i]['attributes'][att1]['description']).replace('*', '"')
                schema.append(attribute)
            except:
                attribute = {}
                attribute ['name'] = i+' > '+att1
                attribute ['permalink'] = 'reference/#'+i+'-'+att1
                attribute ['description'] = 'Properties for '+att1
                schema.append(attribute)
        for att2 in p['schema']['traces'][i]['attributes'][att1]:
            if not any(value in att2 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                try:
                    if isinstance(p['schema']['traces'][i]['attributes'][att1][att2], dict):
                        try:
                            attribute = {}
                            attribute ['name'] = i+' > '+att1+' > '+att2
                            attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2
                            attribute ['description'] = (p['schema']['traces'][i]['attributes'][att1][att2]['description']).replace('*', '"')
                            schema.append(attribute)
                        except:
                            attribute = {}
                            attribute ['name'] = i+' > '+att1+' > '+att2
                            attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2
                            attribute ['description'] = 'Properties for '+att2
                            schema.append(attribute)
                except:
                    pass
                try:
                    for att3 in p['schema']['traces'][i]['attributes'][att1][att2]:
                        if not any(value in att3 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                            try:
                                if isinstance(p['schema']['traces'][i]['attributes'][att1][att2][att3], dict):
                                    try:
                                        attribute = {}
                                        attribute ['name'] = i+' > '+att1+' > '+att2+' > '+att3
                                        attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2+'-'+att3
                                        attribute ['description'] = (p['schema']['traces'][i]['attributes'][att1][att2][att3]['description']).replace('*', '"')
                                        schema.append(attribute)
                                    except:
                                        attribute = {}
                                        attribute ['name'] = i+' > '+att1+' > '+att2+' > '+att3
                                        attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2+'-'+att3
                                        attribute ['description'] = 'Properties for '+att3
                                        schema.append(attribute)
                            except:
                                pass
                        try:
                            for att4 in p['schema']['traces'][i]['attributes'][att1][att2][att3]:
                                if not any(value in att4 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                                    try:
                                        if isinstance(p['schema']['traces'][i]['attributes'][att1][att2][att3][att4], dict):
                                            try:
                                                attribute = {}
                                                attribute ['name'] = i+' > '+att1+' > '+att2+' > '+att3+' > '+att4
                                                attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2+'-'+att3+'-'+att4
                                                attribute ['description'] = (p['schema']['traces'][i]['attributes'][att1][att2][att3][att4]['description']).replace('*', '"')
                                                schema.append(attribute)
                                            except:
                                                attribute = {}
                                                attribute ['name'] = i+' > '+att1+' > '+att2+' > '+att3+' > '+att4
                                                attribute ['permalink'] = 'reference/#'+i+'-'+att1+'-'+att2+'-'+att3+'-'+att4
                                                attribute ['description'] = 'Properties for '+att4
                                                schema.append(attribute)
                                    except:
                                        pass
                        except:
                            pass
                except:
                    pass

## Layout Attributes

for att1 in p['schema']['layout']['layoutAttributes']:
    if not any(value in att1 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
        try:
            attribute = {}
            attribute ['name'] = 'Layout > '+att1
            attribute ['permalink'] = 'reference/#layout-'+att1
            attribute ['description'] = (p['schema']['layout']['layoutAttributes'][att1]['description']).replace('*', '"')
            schema.append(attribute)
        except:
            attribute = {}
            attribute ['name'] = 'Layout > '+att1
            attribute ['permalink'] = 'reference/#layout-'+att1
            attribute ['description'] = 'Properties for '+att1
            schema.append(attribute)
    for att2 in p['schema']['layout']['layoutAttributes'][att1]:
        if not any(value in att2 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
            try:
                if isinstance(p['schema']['layout']['layoutAttributes'][att1][att2], dict):
                    try:
                        attribute = {}
                        attribute ['name'] = 'Layout > '+att1+' > '+att2
                        attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2
                        attribute ['description'] = (p['schema']['layout']['layoutAttributes'][att1][att2]['description']).replace('*', '"')
                        schema.append(attribute)
                    except:
                        attribute = {}
                        attribute ['name'] = 'Layout > '+att1+' > '+att2
                        attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2
                        attribute ['description'] = 'Properties for '+att2
                        schema.append(attribute)
            except:
                pass
            try:
                for att3 in p['schema']['layout']['layoutAttributes'][att1][att2]:
                    if not any(value in att3 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                        if isinstance(p['schema']['layout']['layoutAttributes'][att1][att2][att3], dict):
                            try:
                                attribute = {}
                                attribute ['name'] = 'Layout > '+att1+' > '+att2+' > '+att3
                                attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2+'-'+att3
                                attribute ['description'] = (p['schema']['layout']['layoutAttributes'][att1][att2][att3]['description']).replace('*', '"')
                                schema.append(attribute)
                            except:
                                attribute = {}
                                attribute ['name'] = 'Layout > '+att1+' > '+att2+' > '+att3
                                attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2+'-'+att3
                                attribute ['description'] = 'Properties for '+att3
                                schema.append(attribute)
                    try:
                        for att4 in p['schema']['layout']['layoutAttributes'][att1][att2][att3]:
                            if not any(value in att4 for value in ("src", "_deprecated", "impliedEdits", "uid", "editType")):
                                    if isinstance(p['schema']['layout']['layoutAttributes'][att1][att2][att3][att4], dict):
                                        try:
                                            attribute = {}
                                            attribute ['name'] = 'Layout > '+att1+' > '+att2+' > '+att3+' > '+att4
                                            attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2+'-'+att3+'-'+att4
                                            attribute ['description'] = (p['schema']['layout']['layoutAttributes'][att1][att2][att3][att4]['description']).replace('*', '"')
                                            schema.append(attribute)
                                        except:
                                            attribute = {}
                                            attribute ['name'] = 'Layout > '+att1+' > '+att2+' > '+att3+' > '+att4
                                            attribute ['permalink'] = 'reference/#layout-'+att1+'-'+att2+'-'+att3+'-'+att4
                                            attribute ['description'] = 'Properties for '+att4
                                            schema.append(attribute)
                    except:
                        pass
            except:
                pass

## Send to Algolia

index.clear_index()
index.add_objects(schema)
