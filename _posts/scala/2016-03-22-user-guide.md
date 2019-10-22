---
name: Plotly for Scala User Guide
permalink: scala/user-guide/
description: User guide to the Scala Plotly client
layout: base
language: scala
page_type: example_index
---

## Setting credentials programmatically

The simplest way to pass credentials to the Plotly client is through the [credentials file](scala/getting-started). However, we sometimes need more flexibility. The Scala Plotly client lets you set credentials within your program:

```
import co.theasi.plotly._

implicit val server = new writer.Server {
  val credentials = writer.Credentials("DemoAccount", "lr1c37zw81")
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
