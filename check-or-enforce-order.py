import frontmatter
from pathlib import Path, PosixPath
import sys

# path here is intended to include only posts from a single language
try:
    file_path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

# if "enforce" is the second command line argument, 
# this function will mutate the front-matter to enforce a sequential order
def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):    
        postToBeAltered = frontmatter.load(post['path'])
        # if file_path == "build/html" conditional accounts for the fact that
        # this script is run in the plotly.py-docs repo
        # where there are no posts with order 5 
        postToBeAltered.metadata['order'] = (index+2 if file_path == "build/html" and index>=5 else index+1)
        frontmatter.dump(postToBeAltered, post['path'])

def checkConsecutive(listToBeChecked): 
    if file_path == "build/html":
        listToBeChecked = listToBeChecked + [5]
    return sorted(listToBeChecked) == list(range(1, len(listToBeChecked)+1))

# post families with these strings as "display_as" front-matter will be checked
categories = ["file_settings", "basic", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]

paths = []
for suffix in ["md", "html"]:
    paths += [x for x in Path(file_path).glob("**/*."+suffix)]

# 1. collect the current order of posts 
# 2. sort and check if sorted order is sequential
for category in categories:
    postFamily = []
    #get all posts with frontmatter in md format
    for md_path in paths:
        post = frontmatter.load(str(md_path))
        if len(post.metadata.keys()) > 0:
            if "display_as" in post.metadata:
                if post.metadata['display_as'] == category:
                    postFamily.append({'path':str(md_path), 'order' : post.metadata['order']})
    
    sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

    order = [ p['order'] for p in sortedPostFamily ]

    print(order)

    if not checkConsecutive(order):
        if len(sys.argv) == 3:
            if sys.argv[2] == 'enforce':
                print('Order Check Did Not Pass! ENFORCING CORRECT ORDER for {}'.format(category))
                enforceOrder(sortedPostFamily)
        else: 
            raise Exception("Order Check in '{}' display_as!!".format(category))

    print("Order Checks Passed for {} display_as in {}!".format(category, file_path))
    order = []
