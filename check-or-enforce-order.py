import frontmatter
from pathlib import Path, PosixPath
import sys

# path here is intended to include only posts from a single language
try:
    file_path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

# check to see if enforce flag was given
enforce = False
if len(sys.argv) == 3:
    if sys.argv[2] == 'enforce':
        enforce = True

# post families with these strings as "display_as" front-matter will be checked
categories = ["file_settings", "basic", "financial", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]

paths = []
for suffix in ["md", "html"]:
    paths += [x for x in Path(file_path).glob("**/*."+suffix)]

def get_meta(post):
    if "jupyter" in post.metadata:
        return post["jupyter"]["plotly"]
    else:
        return post.metadata

# this function will mutate the front-matter to enforce a sequential order
def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):
        postToBeAltered = frontmatter.load(post['path'])
        if file_path == "_posts/r": # accounts for the fact that sometimes there are both .md and .Rmd files
            if post['path'][-3:] == ".md":
                postToBeAltered.metadata['order'] = index+1
                frontmatter.dump(postToBeAltered, post['path'])
                rPath = post['path'][:-3] + '.Rmd'
                try: 
                    rPostToBeAltered = frontmatter.load(rPath)
                    rPostToBeAltered.metadata['order'] = index+1
                    frontmatter.dump(rPostToBeAltered, rPath)
                except:
                    continue
        elif file_path == "python": # accounts for the fact that this is also run in the plotly.py-docs repo
            postToBeAltered.metadata["jupyter"]["plotly"]['order'] = (index+2 if index>=4 else index+1)
            frontmatter.dump(postToBeAltered, post['path'])
        else:        
            postToBeAltered.metadata['order'] = index+1
            frontmatter.dump(postToBeAltered, post['path'])

def checkConsecutive(listToBeChecked): 
    if file_path in ["python", "build/html"]:
        listToBeChecked = listToBeChecked + [5]
    return sorted(listToBeChecked) == list(range(1, len(listToBeChecked)+1))

def main():
    # 1. collect the current order of posts 
    # 2. sort and check if sorted order is sequential
    for category in categories:
        postFamily = []
        #get all posts with frontmatter in md format
        for md_path in paths:
            post = frontmatter.load(str(md_path))
            if ".ipynb_checkpoints" in str(md_path):
                continue
            metadata = get_meta(post)
            if len(post.metadata.keys()) > 0:
                if "display_as" in metadata:
                    if metadata['display_as'] == category:
                        postFamily.append({'path':str(md_path), 'order' : metadata['order']})
        
        sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

        order = [ p['order'] for p in sortedPostFamily ]

        print(order)

        if not checkConsecutive(order):
            if enforce is True:
                print('Order Check Did Not Pass! ENFORCING CORRECT ORDER for {}'.format(category))
                enforceOrder(sortedPostFamily)
            else:
                arg = file_path if file_path != "build/html" else "python"
                raise Exception("Order Check Failed in '{}' display_as! Run 'python check-or-enforce-order.py {} enforce' to resolve!".format(category, arg))

        print("Order Check Passed for {} display_as in {}!".format(category, file_path))
        order = []

main()

if enforce is True:
    print("******************Double Checking Order After Enforcing!***********************")
    print("******************Double Checking Order After Enforcing!***********************")
    main()