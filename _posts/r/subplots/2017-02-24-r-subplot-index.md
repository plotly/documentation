---
permalink: r/subplot-charts/
title: R Graphing Library Plotly Subplots and Multiple Axes
description: Plotly's R graphing library makes interactive, publication-quality graphs online. Examples of how to make charts with multiple axes and subplots.
layout: langindex
language: r
name: More Subplots
display_as: multiple_axes
has_thumbnail: true
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
				<h1>Plotly R Library Subplots and Multiple Axes</h1>
				<p>{{page.description}}</consectetur>
				</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelistimg = site.posts | where:"language","r" | where:"display_as","multiple_axes" | where:"has_thumbnail",true | where: "layout","base" | sort: "order" %}
        {% include documentation_eg.html %}
