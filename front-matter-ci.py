import frontmatter
from pathlib import Path, PosixPath
import sys

allPosts = [];

path = str(sys.argv[1])

#get all posts with frontmatter in html format
for md_path in Path(path).glob("**/*.html"):
    post = frontmatter.load(str(md_path))
    if len(post.metadata.keys()) > 0:
        allPosts.append(post)
    
#get all posts with frontmatter in md format
for md_path in Path(path).glob("**/*.md"):
    post = frontmatter.load(str(md_path))
    if len(post.metadata.keys()) > 0:
        allPosts.append(post); 

#make sure that every post that is not a redirect has a name tag in the front matter
noNamePaths = [];
for post in allPosts:
    if len(post.metadata.keys()) > 0:
        try:
            name = post.metadata['name']
        except:
            try:
                name = post.metadata['jupyter']['plotly']['name']
            except:
                try:
                    if 'redirect_to' in post.metadata.keys() or 'redirect_from' in post.metadata.keys() or 'redirect_to' in post.metadata['jupyter']['plotly'] or 'redirect_from' in post.metadata['jupyter']['plotly'] :
                        continue
                except:
                    noNamePaths.append(post.metadata)


if (len(noNamePaths) > 0):
    raise Exception("CI Check #1 Not Passed: post:'{}' is not a redirect but is missing a name frontmatter\n".format('\n'.join([str(item) for item in noNamePaths])))

print("CI Check #1 Passed: All non-redirect posts have names!")

#make sure no posts have titles
titlePaths = [];
for post in allPosts:
    if 'title' in post.metadata.keys():
        titlePaths.append(post.metadata)

if (len(titlePaths) > 0):
    raise Exception("CI Check #2 Not Passed: following permalinks:'{}' have title front-matter. No longer needed!\n".format('\n'.join([str(item['permalink']) for item in titlePaths])))

print("CI Check #2 Passed: No Post has a title!")
