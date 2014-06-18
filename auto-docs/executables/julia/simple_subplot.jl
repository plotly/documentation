using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

trace1 = [
  "x" => [1, 2, 3], 
  "y" => [4, 5, 6], 
  "type" => "scatter"
]
trace2 = [
  "x" => [20, 30, 40], 
  "y" => [50, 60, 70], 
  "xaxis" => "x2", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "xaxis" => ["domain" => [0, 0.45]], 
  "yaxis2" => ["anchor" => "x2"], 
  "xaxis2" => ["domain" => [0.55, 1]]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "simple-subplot", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]