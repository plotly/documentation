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
for md_path in Path(path).glob("**/*"):
    if md_path.suffix in [".html", ".md"]:
        post = frontmatter.load(str(md_path))
        if len(post.metadata.keys()) > 0:
            if "display_as" in post.metadata:
                if post.metadata['display_as'] == category:
                    postFamily.append({'path':str(md_path), 'order' : post.metadata['order']})
         
sortedPostFamily = sorted(postFamily, key = lambda i: i['order'])

def enforceOrder(listToBeOrdered):
    for index, post in enumerate(listToBeOrdered):
        if index+1 != post['order']:      
            postToBeAltered = frontmatter.load(post['path'])
            postToBeAltered.metadata['order'] = index+1
            frontmatter.dump(postToBeAltered, post['path'])

enforceOrder(sortedPostFamily)



