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


def next_level(previous_level, chain_dict):
    for sub_attr in previous_level:
        if isinstance(previous_level[sub_attr], dict) and not any(
            v in sub_attr for v in skippable_keys
        ):
            attribute = dict(
                name=chain_dict["name"] + " > " + sub_attr,
                permalink=chain_dict["permalink"] + "-" + sub_attr,
                rank=chain_dict["rank"] + 1,
            )
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


layout_chain_dict = dict(name="layout", permalink="reference/#layout", rank=0)

# recursively add layout attributes to schema
next_level(p["layout"]["layoutAttributes"], layout_chain_dict.copy())

for i, trace_type in enumerate(p["traces"]):
    trace_chain_dict = dict(
        name=trace_type, permalink="reference/#" + trace_type, rank=(i + 1) * 1000
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
