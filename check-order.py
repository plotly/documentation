import frontmatter
from pathlib import Path, PosixPath
import sys

try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

# will contain all posts with display_as: file_settings
postFamily = []

paths = []
for suffix in ["md", "html"]:
    paths += [x for x in Path(path).glob("**/*."+suffix)]
  
#get all posts with frontmatter in md format
for path in paths:
    post = frontmatter.load(str(path))
    if len(post.metadata.keys()) > 0:
        if "display_as" in post.metadata and "order" in post.metadata:
            if post.metadata['display_as'] in ["file_settings", "basic", "statistical", "scientific", "financial", "maps", "3d_charts", "multiple_axes"]:
                postFamily.append({'path':str(path), 'order' : post.metadata['order']})
        
sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

order = []

for post in sortedPostFamily:
   order.append(post['order'])

print(order)

def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):
        if index+1 != post['order']:      
            postToBeAltered = frontmatter.load(post['path'])
            postToBeAltered.metadata['order'] = index+1
            frontmatter.dump(postToBeAltered, post['path'])

if len(sys.argv) > 2:
    enforceOrder(sortedPostFamily)
else:
    if order[0] != 1:
        raise Exception("Order Check Failed! First post does not have order 1!")

    def checkConsecutive(l): 
        return sorted(l) == list(range(min(l), max(l)+1)) 

    try:
        checkConsecutive(order)
    except:
        raise Exception("Order Check Failed! Orders are not consecutive integers!!")

    print("Order Checks Passed!")


