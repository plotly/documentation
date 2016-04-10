---
title: Setting credentials programmatically
name: Setting credentials programmatically
permalink: scala/programmatic-credentials/
description: How to set Plotly credentials programmatically
layout: base
language: scala
---

The simplest way to pass credentials to the Plotly client is through the [credentials file](scala/getting-started). However, we sometimes need more flexibility. The Scala Plotly client lets you set credentials within your program:

```
import co.theasi.plotly._

implicit val server = new writer.Server {
  val credentials = writer.Credentials("<username>", "<api-key>")
  val url = "https://api.plot.ly/v2/"
}

val p = Plot().withScatter(Vector(1, 2), Vector(3, 4))
draw(p, "custom-credentials")
```

The `draw` method looks for an instance of type `writer.Server` that is present in scope. Let's, for instance, write a program that asks the user for a username and password and sends a graph to their account:

```
import co.theasi.plotly._

object PlotlyDrawer extends App {

  // Generate random data
  val xs = (0 to 100).map { i => Random.nextGaussian }
  val ys = (0 to 100).map { i => Random.nextGaussian }

  val p = Plot().withScatter(xs, ys)
  val plotFile = draw(p, "credentials-demo", writer.FileOptions(overwrite=true))
  println("Plotted graph at:")
  println(plotFile.fileId)
}
```
