#!/usr/bin/env python3
import frontmatter
from pathlib import Path
import sys

for path in sys.argv[1:]:
    for f in Path(path).glob("**/*.html"):
        try:
            post = frontmatter.load(f)
        except:
            continue

        permalink = post.get('permalink', '').lower()
        redirects = post.get('redirect_from', [])
        if isinstance(redirects, str):
            redirects = [redirects]

        fixed = [r for r in redirects if r.lower() != permalink]

        if len(fixed) < len(redirects):
            removed = [r for r in redirects if r.lower() == permalink]
            print(f"{f}: removed {removed}")
            if fixed:
                post['redirect_from'] = fixed
            else:
                del post['redirect_from']
            with open(f, 'w') as out:
                out.write(frontmatter.dumps(post))
