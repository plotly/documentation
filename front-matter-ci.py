import frontmatter
from pathlib import Path, PosixPath
import sys

allPosts = [];

# should be either '_posts' for this repo or 'build/html' for the py-docs repo
try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path that contains the files with front matter.")

#get all posts with frontmatter in html format
for md_path in Path(path).glob("**/*"):
    if md_path.suffix in [".html", ".md"]:
        post = frontmatter.load(str(md_path))
        if len(post.metadata.keys()) > 0:
            allPosts.append(post)
    
#make sure that every post that is not a redirect has a name tag in the front matter
noNamePaths = [];
titlePaths = [];
for post in allPosts:
    if len(post.metadata.keys()) > 0:
        meta = post.metadata
        if "jupyter" in meta:
            meta = meta['jupyter']['plotly']
        if "name" not in meta:
            if "redirect_to" in meta:
                continue
            else:
                noNamePaths.append(post.metadata)
        if "title" in meta:
            titlePaths.append(post.metadata)


if (len(noNamePaths) > 0):
    raise Exception("CI Check #1 Not Passed: post:'{}' is not a redirect but is missing a name frontmatter\n".format('\n'.join([str(item) for item in noNamePaths])))

print("CI Check #1 Passed: All non-redirect posts have names!")

if (len(titlePaths) > 0):
    raise Exception("CI Check #2 Not Passed: post:'{}' has a title. Titles no longer needed!\n".format('\n'.join([str(item) for item in titlePaths])))

print("CI Check #2 Passed: No posts have titles!")
