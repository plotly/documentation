# this script assumes that you've got the Jupytext MD files in
# _posts/python/html and you want to 'hoist' the plotly frontmatter
# so as to update the algolia index


import frontmatter
from pathlib import Path

for path in Path("_posts/python/html").glob("*.md"):
    post = frontmatter.load(path)
    post.metadata = post.metadata["jupyter"]["plotly"]
    frontmatter.dump(post, str(path).replace("html/", "html/2019-11-19-"))
