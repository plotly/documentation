import frontmatter
from pathlib import Path, PosixPath
import sys

# 'path' == '_posts' in 'documentation'
# 'path' == 'build/html' in 'py-docs'
# 'path' == 'r' in 'r-docs'
try:
    path = str(sys.argv[1])
except:
    raise Exception("You need to specify a path that contains the files with front matter.")

def ci_check(checkList, error_message):
    print("***********************************!")
    print("Checking... {}".format(error_message))
    if len(checkList) > 0:
        print("NOT PASSED!\n")
        print("List of failed permalinks:")
        print("**{}**".format(checkList))
        print("\n")
        return False
    else:
        print("Passed!")
        return True

paths = []
allPosts = []
postsWithNoName = []
postsWithTitle = []
allPermalinks = []
indexOverflow = []
postsWithNoThumbnail = []
temp = []
duplicatePermalinks = []
noTrailingSlash = []

categories = ["file_settings", "basic", "financial", "statistical", "scientific", "maps", "3d_charts", "multiple_axes"]
languages = ["python", "python/v3", "plotly_js", "r"]

if path == "r":
    for suffix in ["Rmd"]:
        paths += [x for x in Path(path).glob("*."+suffix)]
else:
    # collect all paths 
    for suffix in ["md", "html"]:
        paths += [x for x in Path(path).glob("**/*."+suffix)]
print("number posts:")
print (len(paths))

# collect all posts
for path in paths:
    post = frontmatter.load(str(path))
    if len(post.metadata.keys()) > 0:
        allPosts.append(post)

# perform checks
for post in allPosts:
    meta = post.metadata
   
    # ignore posts with 'jupyter' in front-matter
    if "jupyter" in meta:
        continue

    # Check #1 - do all non-redirect posts have names? 
    if "name" not in meta and "redirect_to" not in meta:
        postsWithNoName.append(post.metadata['permalink'])

    # Check #2 - do any posts have titles?
    if "title" in meta:
        postsWithTitle.append(post.metadata['permalink'])

    # Check #3 - are there duplicate permalinks/redirect_froms?
    if "permalink" in meta and meta['permalink'] != '//plot.ly/products/dash/':
        allPermalinks.append(meta['permalink'])
    if "redirect_from" in meta:
        allPermalinks.append(meta['redirect_from'])
    
    # Check #4 - are there posts with order > 5 and 'page_type: example_index'?
    if "display_as" in meta and meta['display_as'] in categories:
        if "language" in meta and meta['language'] in languages:
            if "order" in meta and meta['order'] > 5:
                if "page_type" in meta and meta['page_type'] == "example_index":
                    indexOverflow.append(meta['permalink'])
                        
    # Check #5 - does every post have a thumbnail?
    if "thumbnail" not in meta:
        if "display_as" in meta and meta['display_as'] in categories:
            if "language" in meta and meta['language'] in languages:
                postsWithNoThumbnail.append(meta['permalink'])
    
    # Check #6 - do any permalinks not end with a trailing slash?
    if "permalink" in meta:
        if meta['permalink'][-1] != "/":
            noTrailingSlash.append(meta['permalink'])


for post in allPermalinks:
    if post in temp:
        duplicatePermalinks.append(post)
        continue
    else:
        temp.append(post)

print("Begin CI Checks!\n")
passed_check_1 = ci_check(postsWithNoName, "do all non-redirect posts have names?")
passed_check_2 = ci_check(postsWithTitle, "do any posts have titles?")
passed_check_3 = ci_check(indexOverflow, "are there posts with order > 5 and 'page_type: example_index'?")
passed_check_4 = ci_check(duplicatePermalinks, "are there duplicate permalinks/redirect_froms?")
passed_check_5 = ci_check(postsWithNoThumbnail, "does every post have a thumbnail?")
passed_check_6 = ci_check(noTrailingSlash, "do any permalinks not end with a trailing slash?")
print("End CI Checks!\n")

if not passed_check_1 or not passed_check_2 or not passed_check_3 or not passed_check_4 or not passed_check_5 or not passed_check_6:
    raise Exception("***********CI Checks Not Passed! Check Error Messages!*********************")
