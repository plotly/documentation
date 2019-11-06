---
permalink: r/chart-events/
description: All Plotly charts have click, hover and zoom events exposed to add custom controls with Plotly's JavaScript
name: More Chart Events
layout: langindex
language: r
display_as: chart_events
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
				<h1>Plotly R Library Chart Events</h1>
				<p>{{page.description}}<a href="https://github.com/plotly/postMessage-API">postMessageAPI</a>.</p>
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","chart_events" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
