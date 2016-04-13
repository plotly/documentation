---
title: Getting Started Plotly for Scala
name: Getting Started Plotly for Scala
permalink: scala/getting-started/
description: Getting Started with Plotly for Scala.
layout: base
language: scala
---

# Installation

To include Plotly in your project, add the following dependency to your `build.sbt` file:

```
libraryDependencies += "co.theasi" %% "plotly" % "0.1"
```

The Scala plotly client is updated frequently. Check that you include the [latest version](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22co.theasi%22) in your script.

# Initialization

The Scala Plotly client looks for credentials placed in a file called `~/.plotly/.credentials`. If you have already used another Plotly client, for instance the Python client, you probably have this file already and you do not need to do anything else.

Otherwise, start by [creating a free account](https://plot.ly/ssu) on Plotly to get started. Graphs are saved inside your Plotly account and you control the privacy. Public hosting is free. For private hosting, you can use one of the [paid plans](https://plot.ly/products/cloud).

Once you have an account, generate an [API key](https://plot.ly/settings/api/). Copy the key and create the file `~/.plotly/.credentials` with the following content, replacing the username and API key with your own:

```
{
    "username": "pbugnion",
    "api_key": "qnm2ndgaca"
}
```
