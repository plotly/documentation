#!/usr/bin/env python3
import frontmatter
from pathlib import Path

def generate_sitemap():
    base_url = "https://plotly.com"
    urls = []
    
    # Find all HTML and MD files in _posts/python
    for file_path in Path("_posts/python").rglob("*.[hm][td]*"):
        # Skip files in redir directory
        if "redir" in file_path.parts:
            continue
        try:
            post = frontmatter.load(file_path)
            if 'permalink' in post:
                permalink = post['permalink']
                # Use permalink as-is if it has a domain, otherwise prepend base_url
                url = permalink if permalink.startswith(('http://', 'https://')) else f"{base_url}/{permalink.lstrip('/')}"
                # Skip dash.plotly.com URLs
                if 'dash.plotly.com' in url:
                    continue
                # Only include URLs that are under /python/
                if permalink.startswith('python/'):
                    urls.append(url)
        except:
            pass
    
    # Remove duplicates and sort
    urls = sorted(set(urls))
    
    # Generate sitemap
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    xml += ''.join(f'  <url>\n    <loc>{url}</loc>\n    <priority>0.5</priority>\n  </url>\n' for url in urls)
    xml += '</urlset>'
    
    # Write to file
    Path('python').mkdir(exist_ok=True)
    Path('python/sitemap.xml').write_text(xml, encoding='utf-8')
    
    print(f"Generated sitemap with {len(urls)} URLs")

if __name__ == "__main__":
    generate_sitemap() 

