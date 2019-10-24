---
permalink: r/maps/
title: R Graphing Library Maps
description: Plotly's R graphing library makes interactive, publication-quality graphs online. Examples of maps.
name: More Maps
layout: langindex
language: r
display_as: maps
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
				<h1>Plotly R Library Maps</h1>
				<p>{{page.description}}</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","maps" |  where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
