import json
import os
from algoliasearch import algoliasearch

client = algoliasearch.Client("7EK9KHJW8M", os.environ["ALGOLIA_API_KEY"])
index = client.init_index("schema")

p = json.load(open("_data/plotschema.json"))
schema = []

skippable_keys = [
    "src",
    "_deprecated",
    "impliedEdits",
    "uid",
    "editType",
]

def insert_whitespace(x):
    for word in ["axis", "scatter", "bar", "group", "show", "text",
                 "hover", "auto", "reverse", "max", "min", "mode", "anchor", "pad",
                "prefix", "suffix", "format", "color", "item", "name", "direction", "revision",
                "mapbox", "polar",
                ]:
        x = x.replace(word, " " + word + " ").replace("  ", " ")
    return x.strip(" ")

split_layout_attrs = [
        "xaxis", "yaxis", "coloraxis", "scene", "polar", "ternary", "geo", "mapbox",
        "sliders", "updatemenus", "annotations", "shapes", "images"
    ]

_epsilon = 0.0

def epsilon():
    global _epsilon
    _epsilon += 0.00001
    return _epsilon

def next_level(previous_level, chain_dict):
    for sub_attr in previous_level:
        if isinstance(previous_level[sub_attr], dict) and not any(
            v in sub_attr for v in skippable_keys
        ):
            attribute = dict(
                name=chain_dict["name"] + " > " + sub_attr,
                split_name=insert_whitespace(chain_dict["name"] + " > " + sub_attr),
                permalink=chain_dict["permalink"] + "-" + sub_attr,
                rank=chain_dict["rank"] + 1 + epsilon(),
            )
            for attr in split_layout_attrs:
                if attribute["permalink"].endswith("layout-"+attr):
                    attribute["permalink"] = attribute["permalink"].replace("/layout/", "/layout/"+attr+"/")

            if "description" in previous_level[sub_attr]:
                attribute["description"] = previous_level[sub_attr][
                    "description"
                ].replace("*", '"')
            else:
                attribute["description"] = "Properties for " + sub_attr
            if "values" in previous_level[sub_attr]:
                attribute["values"] = ", ".join(str(x) for x in previous_level[sub_attr][
                    "values"
                ]).replace("*", '"')
            schema.append(attribute)
            next_level(previous_level[sub_attr], attribute.copy())


layout_chain_dict = dict(name="layout", split_name="layout", permalink="reference/layout/#layout", rank=epsilon())

# recursively add layout attributes to schema
next_level(p["layout"]["layoutAttributes"], layout_chain_dict.copy())

for i, trace_type in enumerate(p["traces"]):
    trace_chain_dict = dict(
        name=trace_type + " traces",
        split_name=insert_whitespace(trace_type),
        permalink="reference/"+ trace_type + "/#" + trace_type, rank=epsilon()
    )
    if p["traces"][trace_type]["meta"]:
        trace_chain_dict["description"] = (
            p["traces"][trace_type]["meta"]["description"]
        ).replace("*", '"')
    schema.append(trace_chain_dict)

    next_level(p["traces"][trace_type]["attributes"], trace_chain_dict.copy())

    # if there are layoutAttributes in the trace add them too.
    if p["traces"][trace_type].get("layoutAttributes"):
        next_level(
            p["traces"][trace_type]["layoutAttributes"], layout_chain_dict.copy()
        )


index.clear_index()
index.add_objects(schema)
