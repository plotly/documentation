---
permalink: r/layout-options/
title: R Graphing Library Plotly Layout Options
description: Plotly's R graphing library makes interactive, publication-quality graphs online. Tutorials and tips on layout options.
name: More Layout Options
layout: langindex
language: r
display_as: layout_opt
thumbnail: thumbnail/mixed.jpg
page_type: example_index
order: 20
---


<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">
			<div class="--category-img"><img src="https://plot.ly/gh-pages/documentation/static/images/r-small.png" alt=""></div>
			<div class="--body">
				<h1>Plotly R Library Layout Options</h1>
				<p>{{page.description}}</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","layout_opt" |  where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
