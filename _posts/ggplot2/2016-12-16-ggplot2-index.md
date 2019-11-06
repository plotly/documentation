---
permalink: /ggplot2/
name: ggplot2 Graphing Library
description: With ggplotly() by Plotly, you can convert your ggplot2 figures into interactive ones powered by plotly.js, ready for embedding into Dash applications.
layout: langindex
language: ggplot2
redirect_from: ggplot2/reference/
---

<header class="--welcome">
  <div class="--welcome-body">
    <!--div.--wrap-inner-->
    <div class="--title">
      <div class="--category-img"><img src="https://images.plot.ly/language-icons/api-home/ggplot2-logo.png" alt=""></div>
      <div class="--body">
        <h1>Plotly ggplot2 Library</h1>
        <p>{{page.description}}</p>
      </div>
    </div>
  </div>
</header>

<div class="content container">
  <div class="search-header">Search</div>
	<input type="text" class="algolia__input js-algolia__input" autocomplete="off" name="query" placeholder="Search Plotly's R & ggplot2 Docs" />
	<!-- <nav class="--sidebar-body watch" id="search"> -->

	<div class="algolia__search-content js-algolia__search-content">
		<div class="posts algolia__results"></div>
	</div>
</div>

{% assign languagelist = site.posts | where:"page_type","example_index" | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
