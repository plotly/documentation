using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

t = linspace(-1, 1.2, 2000)
x = t.^3+0.3*randn(2000)
y = t.^6+0.3*randn(2000)

data = [
  [
    "x" => x, 
    "y" => y, 
    "name" => "points", 
    "mode" => "markers", 
    "marker" => [
      "size" => 2, 
      "color" => "rgb(102,0,0)", 
      "opacity" => 0.4
    ], 
    "type" => "scatter"
  ], 
  [
    "x" => x, 
    "y" => y, 
    "name" => "density", 
    "ncontours" => 20, 
    "scl" => "Hot", 
    "reversescl" => true, 
    "showscale" => false, 
    "type" => "histogram2dcontour"
  ], 
  [
    "x" => x, 
    "name" => "x density", 
    "marker" => ["color" => "rgb(102,0,0)"], 
    "yaxis" => "y2", 
    "type" => "histogram"
  ], 
  [
    "y" => y, 
    "name" => "y density", 
    "marker" => ["color" => "rgb(102,0,0)"], 
    "xaxis" => "x2", 
    "type" => "histogram"
  ]
]
layout = [
  "xaxis" => [
    "domain" => [0, 0.85], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "yaxis" => [
    "domain" => [0, 0.85], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "width" => 600, 
  "height" => 550, 
  "autosize" => false, 
  "margin" => ["t" => 50], 
  "hovermode" => "closest", 
  "bargap" => 0, 
  "showlegend" => false, 
  "xaxis2" => [
    "domain" => [0.85, 1], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "yaxis2" => [
    "domain" => [0.85, 1], 
    "showgrid" => false, 
    "zeroline" => false
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "contour-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]