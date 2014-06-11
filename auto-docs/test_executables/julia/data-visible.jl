using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

trace1 = [
  "x" => [0, 1, 2, 3], 
  "y" => [0, 2, 4, 6], 
  "visible" => true, 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3], 
  "y" => [8, 4, 2, 0], 
  "visible" => false, 
  "type" => "scatter"
]
data = [trace1, trace2]

response = Plotly.plot([data], ["filename" => "data-visible", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]