using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

t = linspace(-1, 1.2, 2000)
x = t.^3+0.3*randn(2000)
y = t.^6+0.3*randn(2000)
trace1 = [
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
]
trace2 = [
  "x" => x, 
  "y" => y, 
  "scl" => "Hot", 
  "reversescl" => true, 
  "name" => "density", 
  "ncontours" => 20, 
  "showscale" => false, 
  "type" => "histogram2dcontour"
]
trace3 = [
  "x" => x, 
  "name" => "x density", 
  "marker" => ["color" => "rgb(102,0,0)"], 
  "yaxis" => "y2", 
  "type" => "histogram"
]
trace4 = [
  "y" => y, 
  "name" => "y density", 
  "marker" => ["color" => "rgb(102,0,0)"], 
  "xaxis" => "x2", 
  "type" => "histogram"
]
data = [trace1, trace2, trace3, trace4]
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

response = Plotly.plot([data], ["layout" => layout, "filename" => "2dhistogram-contour-subplots", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]