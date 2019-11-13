import frontmatter
from pathlib import Path, PosixPath
import sys

try:
    file_path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):
        if index+1 != post['order']:      
            postToBeAltered = frontmatter.load(post['path'])
            postToBeAltered.metadata['order'] = index+1
            frontmatter.dump(postToBeAltered, post['path'])

def checkConsecutive(l): 
        return sorted(l) == list(range(1, len(l)+1)) 

categories = ["file_settings", "basic", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]

try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

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
                
    sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

    order = [ p['order'] for p in sortedPostFamily ]

    print(order)

    if order[0] != 1:
        if len(sys.argv) == 3:
            if sys.argv[2] == 'enforce':
                print('Order Check Did Not Pass! ENFORCING CORRECT ORDER for {}'.format(category))
                enforceOrder(sortedPostFamily)
        else:
            raise Exception("Order Check Failed! First post in {} display_as does not have order 1!".format(category))

    

    if not checkConsecutive(order):
        if len(sys.argv) == 3:
            if sys.argv[2] == 'enforce':
                print('Order Check Did Not Pass! ENFORCING CORRECT ORDER for {}'.format(category))
                enforceOrder(sortedPostFamily)
        else: 
            raise Exception("Order Check Failed! Order front-matter in '{}' display_as are not consecutive integers!!".format(category))

    if len(order) != len(set(order)):
        if len(sys.argv) == 3:
            if sys.argv[2] == 'enforce':
                print('Order Check Did Not Pass! ENFORCING CORRECT ORDER for {}'.format(category))
                enforceOrder(sortedPostFamily)
        else:         
            raise Exception("Order Check Failed! {} display_as has duplicate order frontmatter!!".format(category))

    print("Order Checks Passed for {} display_as!".format(category))
    order = []