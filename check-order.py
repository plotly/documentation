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
  
#get all posts with frontmatter in md format
for md_path in Path(path).glob("**/*.html"):
    post = frontmatter.load(str(md_path))
    if len(post.metadata.keys()) > 0:
        if "display_as" in post.metadata:
            if post.metadata['display_as'] == category:
                postFamily.append({'path':str(md_path), 'order' : post.metadata['order']})

#get all posts with frontmatter in md format
for md_path in Path(path).glob("**/*.md"):
    post = frontmatter.load(str(md_path))
    if len(post.metadata.keys()) > 0:
        if "display_as" in post.metadata:
            if post.metadata['display_as'] == category:
                postFamily.append({'path':str(md_path), 'order' : post.metadata['order']})
            
sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

order = []

for post in sortedPostFamily:
    order.append(post['order'])

if order[0] != 1:
    raise Exception("Order Check Failed! First post does not have order 1!")

def checkConsecutive(l): 
    return sorted(l) == list(range(min(l), max(l)+1)) 

def checkSequential(l):
    return all(i == j-1 for i, j in zip(l, l[1:])) 


print(order)

try:
    checkConsecutive(order)
except:
    raise Exception("Order Check Failed! Orders are not consecutive integers!!")

if not checkSequential(order):
    raise Exception("Order Check Failed! Orders are not sequential integers!!")

print("Order Checks Passed!")