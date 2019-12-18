---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Tutorials and tips about fundamental features of Plotly's R API.
display_as: file_settings
language: r
layout: langindex
name: More Plotly Fundamentals
order: 5
page_type: example_index
permalink: r/plotly-fundamentals/
redirect_from: 
  - r/fundamentals/
  - r/style-options/
  - r/layout-options/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Fundamentals</h1>
				<p>{{page.description}}</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","file_settings" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
