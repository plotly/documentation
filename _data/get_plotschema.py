import json
from urllib.request import urlopen

orders = json.load(open("orderings.json", "r"))

schema = json.load(urlopen("https://raw.githubusercontent.com/plotly/plotly.js/master/dist/plot-schema.json"))
del schema["traces"]["area"]

def reorder_keys(parent, target, order):
    original = parent[target]
    parent[target] = {}
    for k in order:
        if k in original:
            parent[target][k] = original[k]
    for k in original.keys():
        if k not in parent[target]:
            parent[target][k] = original[k]
            print("missing key in %s: %s" % (target, k))

reorder_keys(schema, "traces", orders["traces"])
reorder_keys(schema["layout"], "layoutAttributes", orders["layout"])

for trace in schema["traces"].values():
    reorder_keys(trace, "attributes", orders["trace_attr_order"])

json.dump(schema, open('plotschema.json', 'w'), indent=2)