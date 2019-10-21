import frontmatter
from pathlib import Path

#pydocs = Path("python");

#pathNames = pydocs.glob('*.md')

#for md_path in pathNames:
#    print(md_path)
#    post = frontmatter.load(md_path)

pathNames = [];

for md_path in Path("_posts/scala").glob("**/*.html"):
    post = frontmatter.load(md_path)
    try:
        print(post['name'])
    except:
        print('********* NO name, PRINTING permalink *************')
        pathNames.append(md_path)
        print('********* NO name, PRINTING permalink *************')

print('********* pathNAMES *************')
print('********* pathNAMES *************')
print('********* pathNAMES *************')
print(pathNames)