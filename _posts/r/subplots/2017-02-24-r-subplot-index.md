---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Examples of how to make charts with multiple axes and subplots.
display_as: multiple_axes
language: r
layout: langindex
name: More Subplots
order: 5
page_type: example_index
permalink: r/subplot-charts/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Subplots and Multiple Axes</h1>
				<p>{{page.description}}</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","multiple_axes" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}