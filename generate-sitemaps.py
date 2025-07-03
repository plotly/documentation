#!/usr/bin/env python3
import frontmatter
from pathlib import Path

def generate_sitemap_for_language(posts_dir, url_prefix, output_dir, reference_dir=None):
    base_url = "https://plotly.com"
    urls = []
    
    # Define directories to scan
    directories_to_scan = [posts_dir]
    if reference_dir:
        directories_to_scan.append(reference_dir)
    
    # Find all HTML and MD files in all specified directories
    for directory in directories_to_scan:
        for file_path in Path(directory).rglob("*.[hm][td]*"):
            # Skip files in redir directory
            if "redir" in file_path.parts:
                continue
            post = frontmatter.load(file_path)
            if 'permalink' in post:
                permalink = post['permalink']
                # Use permalink as-is if it has a domain, otherwise prepend base_url
                url = permalink if permalink.startswith(('http://', 'https://')) else f"{base_url}/{permalink.lstrip('/')}"
                # Skip dash.plotly.com URLs
                if 'dash.plotly.com' in url:
                    continue
                # Skip chart-studio URLs
                if 'chart-studio' in url:
                    continue
                # Only include URLs that start with the specified prefix (with or without leading slash)
                if permalink.startswith(url_prefix) or permalink.startswith(f"/{url_prefix}"):
                    urls.append(url)
    
    # Remove duplicates and sort
    urls = sorted(set(urls))
    
    # Generate sitemap
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    xml += ''.join(f'  <url>\n    <loc>{url}</loc>\n    <priority>0.5</priority>\n  </url>\n' for url in urls)
    xml += '</urlset>'
    
    # Write to file
    Path(output_dir).mkdir(exist_ok=True)
    Path(f'{output_dir}/sitemap.xml').write_text(xml, encoding='utf-8')
    
    print(f"Generated {output_dir} sitemap with {len(urls)} URLs")

def generate_sitemap():
    # Generate Python sitemap
    generate_sitemap_for_language("_posts/python", "python/", "python", "_posts/reference_pages/python")
    
    # Generate JavaScript sitemap
    generate_sitemap_for_language("_posts/plotly_js", "javascript/", "javascript", "_posts/reference_pages/javascript")

if __name__ == "__main__":
    generate_sitemap() 

