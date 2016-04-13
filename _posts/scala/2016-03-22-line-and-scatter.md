---
title: Line and Scatter Plots in Scala | Examples | Plotly
name: Line and Scatter Plots
permalink: scala/line-and-scatter/
description: How to create line and scatter plots in Scala.
layout: base
thumbnail: thumbnail/line-and-scatter.jpg
language: scala
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 1
---

# Scatter plots in Scala

## Simple scatter plot

```scala
import co.theasi.plotly
import util.Random

// Generate uniformly distributed x
val xs = (0 until 100)

// Generate random y
val ys = (0 until 100).map { i => i + 5.0 * Random.nextDouble }

val p = Plot().withScatter(xs, ys)

draw(p, "basic-scatter", writer.FileOptions(overwrite=true))
// returns  PlotFile(pbugnion:173,basic-scatter)
```

<iframe id="graph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~pbugnion/173.embed" height="525px" width="100%"></iframe>

## Line and scatter plots

```scala
import co.theasi.plotly
import util.Random

// Generate uniformly distributed x
val xs = (0 until 100)

// Generate random y
val ys0 = (0 until 100).map { i => Random.nextDouble }
val ys1 = ys0.map { _ + 5.0 }
val ys2 = ys0.map { _ - 5.0 }

val p = Plot()
  .withScatter(xs, ys0, ScatterOptions().mode(ScatterMode.Marker).name("marker"))
  .withScatter(xs, ys1,
    ScatterOptions()
      .mode(ScatterMode.Marker, ScatterMode.Line)
      .name("line+marker"))
  .withScatter(xs, ys2, ScatterOptions().mode(ScatterMode.Line).name("line"))

draw(p, "scatter-mode", writer.FileOptions(overwrite=true))
// returns  PlotFile(pbugnion:216,scatter-mode)
```

<iframe id="graph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~pbugnion/322.embed" height="525px" width="100%"></iframe>

## Style scatter plots

```scala
import co.theasi.plotly
import util.Random

val n = 500

val xs = (0 until n).map { i => Random.nextDouble }
val ys0 = (0 until n).map { i => Random.nextDouble + 2.0 }
val ys1 = (0 until n).map { i => Random.nextDouble - 2.0 }

val p = Plot()
  .withScatter(xs, ys0, ScatterOptions()
    .mode(ScatterMode.Marker)
    .name("Above")
    .marker(
      MarkerOptions()
        .size(10)
        .color(152, 0, 0, 0.8)
        .lineWidth(2)
        .lineColor(0, 0, 0)))
  .withScatter(xs, ys1, ScatterOptions()
    .mode(ScatterMode.Marker)
    .name("Below")
    .marker(
      MarkerOptions()
        .size(10)
        .color(255, 182, 193, 0.9)
        .lineWidth(2)))

draw(p, "styled-scatter", writer.FileOptions(overwrite=true))
```

<iframe id="graph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~pbugnion/324.embed" height="525px" width="100%"></iframe>

## Data labels on the plot

```scala
import co.theasi.plotly

val gdpAmerica = Vector(12779.379640000001, 3822.1370840000004, 9065.800825, 36319.235010000004,
  13171.63885, 7006.580419, 9645.06142, 8948.102923, 6025.374752000001,
  6873.262326000001, 5728.353514, 5186.050003, 1201.637154,
  3548.3308460000003, 7320.880262000001, 11977.57496, 2749.320965,
  9809.185636, 4172.838464, 7408.905561, 19328.70901, 18008.50924,
  42951.65309, 10611.46299, 11415.805690000001)

val lifeExpectancyAmerica = Vector(75.32, 65.554, 72.39, 80.653, 78.553, 72.889,
  78.782, 78.273, 72.235, 74.994, 71.878, 70.259, 60.916, 70.198, 72.567,
  76.195, 72.899, 75.537, 71.752, 71.421, 78.746, 69.819, 78.242, 76.384, 73.747)

val labelAmerica = Vector(
  "Country: Argentina<br>Population: 40301927",
  "Country: Bolivia<br>Population: 9119152",
  "Country: Brazil<br>Population: 190010647",
  "Country: Canada<br>Population: 33390141",
  "Country: Chile<br>Population: 16284741",
  "Country: Colombia<br>Population: 44227550",
  "Country: Costa Rica<br>Population: 4133884",
  "Country: Cuba<br>Population: 11416987",
  "Country: Dominican Republic<br>Population: 9319622",
  "Country: Ecuador<br>Population: 13755680",
  "Country: El Salvador<br>Population: 6939688",
  "Country: Guatemala<br>Population: 12572928",
  "Country: Haiti<br>Population: 8502814",
  "Country: Honduras<br>Population: 7483763",
  "Country: Jamaica<br>Population: 2780132",
  "Country: Mexico<br>Population: 108700891",
  "Country: Nicaragua<br>Population: 5675356",
  "Country: Panama<br>Population: 3242173",
  "Country: Paraguay<br>Population: 6667147",
  "Country: Peru<br>Population: 28674757",
  "Country: Puerto Rico<br>Population: 3942491",
  "Country: Trinidad and Tobago<br>Population: 1056608",
  "Country: United States<br>Population: 301139947",
  "Country: Uruguay<br>Population: 3447496",
  "Country: Venezuela<br>Population: 26084662"
)

val gdpEurope = Vector(5937.029525999999, 36126.4927, 33692.60508, 7446.298803, 10680.79282,
  14619.222719999998, 22833.30851, 35278.41874, 33207.0844, 30470.0167,
  32170.37442, 27538.41188, 18008.94444, 36180.789189999996, 40675.99635,
  28569.7197, 9253.896111, 36797.93332, 49357.19017, 15389.924680000002,
  20509.64777, 10808.47561, 9786.534714, 18678.31435, 25768.25759,
  28821.0637, 33859.74835, 37506.419069999996, 8458.276384, 33203.2612)

val lifeExpectancyEurope = Vector(76.423, 79.829, 79.441, 74.852, 73.005, 75.748, 76.486,
  78.332, 79.313, 80.657, 79.406, 79.483, 73.33800000000001, 81.757, 78.885, 80.546,
  74.543, 79.762, 80.196, 75.563, 78.098, 72.476, 74.002, 74.663, 77.926,
  80.941, 80.884, 81.70100000000001, 71.777, 79.425)

val labelEurope = Vector(
  "Country: Albania<br>Population: 3600523",
  "Country: Austria<br>Population: 8199783",
  "Country: Belgium<br>Population: 10392226",
  "Country: Bosnia and Herzegovina<br>Population: 4552198",
  "Country: Bulgaria<br>Population: 7322858",
  "Country: Croatia<br>Population: 4493312",
  "Country: Czech Republic<br>Population: 10228744",
  "Country: Denmark<br>Population: 5468120",
  "Country: Finland<br>Population: 5238460",
  "Country: France<br>Population: 61083916",
  "Country: Germany<br>Population: 82400996",
  "Country: Greece<br>Population: 10706290",
  "Country: Hungary<br>Population: 9956108",
  "Country: Iceland<br>Population: 301931",
  "Country: Ireland<br>Population: 4109086",
  "Country: Italy<br>Population: 58147733",
  "Country: Montenegro<br>Population: 684736",
  "Country: Netherlands<br>Population: 16570613",
  "Country: Norway<br>Population: 4627926",
  "Country: Poland<br>Population: 38518241",
  "Country: Portugal<br>Population: 10642836",
  "Country: Romania<br>Population: 22276056",
  "Country: Serbia<br>Population: 10150265",
  "Country: Slovak Republic<br>Population: 5447502",
  "Country: Slovenia<br>Population: 2009245",
  "Country: Spain<br>Population: 40448191",
  "Country: Sweden<br>Population: 9031088",
  "Country: Switzerland<br>Population: 7554661",
  "Country: Turkey<br>Population: 71158647",
  "Country: United Kingdom<br>Population: 60776238"
)

// Options common to both traces
val commonOptions = ScatterOptions()
  .mode(ScatterMode.Marker)
  .marker(MarkerOptions().size(12).lineWidth(1))

// Options common to both axes
val commonAxisOptions = AxisOptions()
  .tickLength(5)
  .gridWidth(2)

val xAxisOptions = commonAxisOptions.title("GDP per capita (dollars)").noZeroLine
val yAxisOptions = commonAxisOptions.title("Life expectancy (years)")

val layout = SingleAxisLayout()
  .xAxisOptions(xAxisOptions)
  .yAxisOptions(yAxisOptions)
  .title("Life Expectancy v. Per Capita GDP, 2007")

val p = Plot()
  .layout(layout)
  .withScatter(gdpAmerica, lifeExpectancyAmerica,
    commonOptions.name("Americas").text(labelAmerica))
  .withScatter(gdpEurope, lifeExpectancyEurope,
    commonOptions.name("Europe").text(labelEurope))

draw(p, "life-expectancy-per-GDP-2007", writer.FileOptions(overwrite=true))
```

<iframe id="graph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~pbugnion/326.embed" height="525px" width="100%"></iframe>

## Categorical dot plot

```scala

val country = List("Switzerland (2011)",
  "Chile (2013)",
  "Japan (2014)",
  "United States (2012)",
  "Slovenia (2014)",
  "Canada (2011)",
  "Poland (2010)",
  "Estonia (2015)",
  "Luxembourg (2013)",
  "Portugal (2011)")

val votingPopulation = List(40.0, 45.7, 52, 53.6, 54.1, 54.2, 54.5, 54.7, 55.1, 56.6)
val registeredVoters = List(49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9)

// Options common to both traces
val commonOptions = ScatterOptions()
  .mode(ScatterMode.Marker)
  .marker(MarkerOptions()
    .symbol("circle")
    .lineWidth(1)
    .size(16))

// layout
val layout = SingleAxisLayout()
  .title("Votes cast for ten lowest voting age population in OECD countries")
  .xAxisOptions(AxisOptions()
    .noGrid
    .withLine
    .lineColor(102, 102, 102)
    .titleColor(204, 204, 204)
    .tickFontColor(102, 102, 102)
    .noAutoTick
    .tickSpacing(10.0)
    .tickColor(102, 102, 102))
  .legend(LegendOptions()
    .yAnchor(YAnchor.Middle)
    .xAnchor(XAnchor.Right))
  .leftMargin(140)
  .rightMargin(40)
  .bottomMargin(50)
  .topMargin(80)
  .width(800)
  .height(600)
  .paperBackgroundColor(254, 247, 234)
  .plotBackgroundColor(254, 247, 234)

  val p = Plot()
    .layout(layout)
    .withScatter(votingPopulation, country, commonOptions
      .name("Percent of estimated voting age population")
      .updatedMarker(_.color(156, 165, 196, 0.95).lineColor(156, 165, 196, 1.0)))
    .withScatter(registeredVoters, country, commonOptions
      .name("Percent of estimated registered voters")
      .updatedMarker(_.color(204, 204, 204, 0.95).lineColor(217, 217, 217, 1.0)))

draw(p, "lowest-oecd-votes-cast", writer.FileOptions(overwrite=true))
```

<iframe id="graph" scrolling="no" style="border:none;" seamless="seamless" src="https://plot.ly/~pbugnion/328.embed" height="525px" width="100%"></iframe>
