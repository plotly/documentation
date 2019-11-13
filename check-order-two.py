import frontmatter
from pathlib import Path, PosixPath
import sys

categories = ["file_settings", "basic", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]
languages = ["python", "plotly_js", "r", "python/v3"]
try:
    file_path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

exclude = ["reference"]

paths = []
for suffix in ["md", "html"]:
    paths += [x for x in Path(file_path).glob("**/*."+suffix)]

for language in languages:
    for category in categories:
        postFamily = []
        #get all posts with frontmatter in md format
        for path in paths:
            post = frontmatter.load(str(path))
            if len(post.metadata.keys()) > 0:
                if "display_as" in post.metadata:
                    if "order" in post.metadata:
                        if "page_type" in post.metadata:
                            if post.metadata['display_as'] == category:
                                if post.metadata['language'] in languages:
                                    if post.metadata['page_type'] == "reference":
                                        print(post.metadata['page_type'])
                                        continue
                                    else:
                                        postFamily.append({'path':str(path), 'order' : post.metadata['order']})
                    
        sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])
        print(sortedPostFamily)

        order = []

        for post in sortedPostFamily:
            order.append(post['order'])

        print(order)

        if order[0] != 1:
            raise Exception("Order Check Failed! First post in {} display_as in {} does not have order 1!".format(category, path))

        def checkConsecutive(l): 
            return sorted(l) == list(range(min(l), max(l)+1)) 

        try:
            checkConsecutive(order)
        except:
            raise Exception("Order Check Failed! Orders in {} display_as in {} are not consecutive integers!!".format(category, path))

        if len(order) != len(set(order)):
            raise Exception("Order Check Failed! {} display_as in {} has duplicate order frontmatter!!".format(category, path))


        print("Order Checks Passed for {} display_as in {}!".format(category, language))
        order = []
        sortedPostFamily = []