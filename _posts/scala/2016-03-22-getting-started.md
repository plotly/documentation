---
name: Getting Started with Plotly
permalink: scala/getting-started/
description: Getting Started with Plotly for Scala.
layout: base
language: scala
---

# Installation

To include Plotly in your project, add the following dependency to your `build.sbt` file:

```
libraryDependencies += "co.theasi" %% "plotly" % "0.2.0"
```

The Scala plotly client is updated frequently. Check that you include the [latest version](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22co.theasi%22) in your script.

# API Documentation and Source Code

If you need documentation beyond the tutorials presented here, read either the [Scaladocs](http://asidatascience.github.io/scala-plotly-client/) for API documentation, or the [Source code](https://github.com/asidatascience/scala-plotly-client).

# Initialization

The Scala Plotly client looks for credentials placed in a file called `~/.plotly/.credentials`. If you have already used another Plotly client, for instance the Python client, you probably have this file already and you do not need to do anything else.

Otherwise, start by [creating a free account](https://plot.ly/api_signup) on Plotly to get started. Graphs are saved inside your Plotly account and you control the privacy. Public hosting is free. For private hosting, you can use one of the [paid plans](https://plot.ly/products/cloud).

Once you have an account, generate an [API key](https://plot.ly/settings/api/). Copy the key and create the file `~/.plotly/.credentials` with the following content, replacing the username and API key with your own:

```
{
    "username": "DemoAccount",
    "api_key": "lr1c37zw81"
}
```

# Your First Plot

```
val xs = (0.0 to 2.0 by 0.1)
val ys = xs.map { x => x*x }

val plot = Plot().withScatter(xs, ys)

draw(plot, "my-first-plot")
```

<iframe width="900" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~pbugnion/548.embed"></iframe>

Calling `Plot().withScatter(xs, ys)` constructs a representation of the plot in memory. This representation is dispatched to Plotly with `draw(plot, "my-first-plot")`.


For examples of more advanced plots, see the [examples](/scala) section.
