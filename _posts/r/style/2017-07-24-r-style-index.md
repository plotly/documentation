---
permalink: r/style-options/
title: R Graphing Library Plotly Style Options
description: Plotly's R graphing library makes interactive, publication-quality graphs online. Tutorials and tips on style options.
name: More Style Options
layout: langindex
language: r
display_as: style_opt
has_thumbnail: false
thumbnail: thumbnail/mixed.jpg
page_type: example_index
order: 10
---


<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Style Options</h1>
				<p>{{page.description}}</consectetur>
				</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelistimg = site.posts | where:"language","r" | where:"display_as","style_opt" | where:"has_thumbnail",true | where: "layout","base" | sort: "order" %}
        {% include documentation_eg.html %}
