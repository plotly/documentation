---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Examples of how to make scientific charts.
display_as: scientific
language: r
layout: langindex
name: More Scientific Charts
order: 5
page_type: example_index
permalink: r/scientific-charts/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Scientific Charts</h1>
				<p>{{page.description}}</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","scientific" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}