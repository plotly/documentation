import frontmatter
from pathlib import Path, PosixPath
import sys

# should be either '_posts' for this repo or 'build/html' for the py-docs repo
try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path that contains the files with front matter.")

paths = []
for suffix in ["md", "hmtl"]:
    paths += [x for x in Path(path).glob("**/*."+suffix)]

# this will store the front matter for all posts in the given directory
allPosts = [];

#get all posts with frontmatter in md format
for path in paths:
    post = frontmatter.load(str(path))
    if len(post.metadata.keys()) > 0:
        allPosts.append(post)

#make sure that every post that is not a redirect has a name tag in the front matter
noNamePaths = [];
titlePaths = [];
permalinks = [];

for post in allPosts:
    if len(post.metadata.keys()) > 0:
        meta = post.metadata

        #in case the front-matter format is different
        if "jupyter" in meta:
            continue

        # Check 1
        if "name" not in meta and "redirect_to" not in meta:
                noNamePaths.append(post.metadata)

        # Check 2
        if "title" in meta:
            titlePaths.append(post.metadata)

        # Check 3 - ignor dash call outs
        if "permalink" in meta and meta['permalink'] != '//plot.ly/products/dash/':
            permalinks.append(meta['permalink'])
        if "redirect_from" in meta:
            permalinks.append(meta['redirect_from'])

# Check 1
if len(noNamePaths) > 0:
    raise Exception("CI Check #1 Not Passed: post:\n'{}' is not a redirect but is missing a name frontmatter\n".format('\n'.join([str(item) for item in noNamePaths])))
print("CI Check #1 Passed: All non-redirect posts have names!")

# Check 2
if len(titlePaths) > 0:
    raise Exception("CI Check #2 Not Passed: post:\n'{}' has a title. Titles no longer needed!\n".format('\n'.join([str(item) for item in titlePaths])))
print("CI Check #2 Passed: No posts have titles!")

# Check 3
temp = [];
dupeLinks = [];

for post in permalinks:
    if post in temp:
        dupeLinks.append(post)
        continue
    else:
        temp.append(post)

if len(dupeLinks) > 0:
    raise Exception("CI Check #3 Not Passed: Following permalinks:\n{} are duplicated!\n".format('\n'.join([str(item) for item in dupeLinks])))
print("CI Check #3 Passed: No duplicate permalinks!")