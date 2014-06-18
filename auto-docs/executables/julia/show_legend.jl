using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

trace1 = [
  "x" => [0, 1, 2], 
  "y" => [1, 2, 3], 
  "name" => "First Trace", 
  "showlegend" => false, 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3], 
  "y" => [8, 4, 2, 0], 
  "name" => "Second Trace", 
  "showlegend" => true, 
  "type" => "scatter"
]
data = [trace1, trace2]

response = Plotly.plot([data], ["filename" => "show-legend", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]