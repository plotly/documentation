import frontmatter
from pathlib import Path, PosixPath
import sys

# path here is intended to include only posts from a single language
try:
    file_path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):
        if file_path == 'build/html':
            if index+1 == 5:
                continue

        if index+1 != post['order']:      
            postToBeAltered = frontmatter.load(post['path'])
            postToBeAltered.metadata['order'] = index+1
            frontmatter.dump(postToBeAltered, post['path'])

def checkConsecutive(l): 
    if len(order) != len(set(order)):
        return False
    
    if sorted(l) == list(range(1, len(l)+1)):
        return True
    else:
        return False

categories = ["file_settings", "basic", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]

paths = []
for suffix in ["md", "html"]:
    paths += [x for x in Path(file_path).glob("**/*."+suffix)]

for category in categories:
    postFamily = []
    #get all posts with frontmatter in md format
    for md_path in paths:
        post = frontmatter.load(str(md_path))
        if len(post.metadata.keys()) > 0:
            if "display_as" in post.metadata:
                if post.metadata['display_as'] == category:
                    postFamily.append({'path':str(md_path), 'order' : post.metadata['order']})
                
    if file_path == 'build/html':
        postFamily.append({'path':'placeholder', 'order' : 5 })

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