using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
x0 = randn(500)
x1 = randn(500)+1

trace1 = [
  "x" => x0, 
  "histnorm" => "count", 
  "name" => "control", 
  "autobinx" => false, 
  "xbins" => [
    "start" => -3.2, 
    "end" => 2.8, 
    "size" => 0.2
  ], 
  "marker" => [
    "color" => "fuchsia", 
    "line" => [
      "color" => "grey", 
      "width" => 0
    ], 
    "opacity" => 0.75
  ], 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "name" => "experimental", 
  "autobinx" => false, 
  "xbins" => [
    "start" => -1.8, 
    "end" => 4.2, 
    "size" => 0.2
  ], 
  "marker" => ["color" => "rgb(255, 217, 102)"], 
  "opacity" => 0.75, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = [
  "title" => "Sampled Results", 
  "xaxis" => ["title" => "Value"], 
  "yaxis" => ["title" => "Count"], 
  "barmode" => "overlay", 
  "bargap" => 0.25, 
  "bargroupgap" => 0.3
]
response = Plotly.plot(data, ["layout" => layout, "fileopt" => "overwrite", "filename" => "style-histogram"])
plot_url = response["url"]