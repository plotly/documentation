import frontmatter
from pathlib import Path, PosixPath
import sys

try:
    category = str(sys.argv[2])
except:
    raise Exception("You need to specify a display_as category!")

try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path!")

# will contain all posts with display_as: file_settings
postFamily = []

paths = []
for suffix in ["md", "hmtl"]:
    paths += [x for x in Path(path).glob("**/*."+suffix)]
  
#get all posts with frontmatter in md format
for path in paths:
    post = frontmatter.load(str(path))
    if len(post.metadata.keys()) > 0:
        if "display_as" in post.metadata:
            if post.metadata['display_as'] == category:
                postFamily.append({'path':str(path), 'order' : post.metadata['order']})
        
sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

order = []

for post in sortedPostFamily:
   order.append(post['order'])

print(order)

if order[0] != 1:
    raise Exception("Order Check Failed! First post does not have order 1!")

def checkConsecutive(l): 
    return sorted(l) == list(range(min(l), max(l)+1)) 

try:
    checkConsecutive(order)
except:
    raise Exception("Order Check Failed! Orders are not consecutive integers!!")

print("Order Checks Passed!")