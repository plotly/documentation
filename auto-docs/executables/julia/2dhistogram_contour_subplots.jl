import numpy as np

t = np.linspace(-1,1.2,2000)
x = (t**3)+(0.3*np.random.randn(2000))
y = (t**6)+(0.3*np.random.randn(2000))
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => x, 
  "y" => y, 
  "mode" => "markers", 
  "name" => "points", 
  "marker" => [
    "color" => "rgb(102,0,0)", 
    "size" => 2, 
    "opacity" => 0.4
  ], 
  "type" => "scatter"
]
trace2 = [
  "x" => x, 
  "y" => y, 
  "name" => "density", 
  "ncontours" => 20, 
  "colorscale" => "Hot", 
  "reversescale" => true, 
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
  "showlegend" => false, 
  "autosize" => false, 
  "width" => 600, 
  "height" => 550, 
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
  "margin" => ["t" => 50], 
  "hovermode" => "closest", 
  "bargap" => 0, 
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
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "2dhistogram-contour-subplots"])
plot_url = response["url"]