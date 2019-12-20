---
description: APlotly.js makes interactive, publication-quality graphs online. Examples
  of how to make financial charts.
display_as: financial
language: r
layout: langindex
name: More Financial Charts
order: 5
page_type: example_index
permalink: r/financial-charts/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Financial Charts</h1>
				<p>{{page.description}}</consectetur>
				</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","financial" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}