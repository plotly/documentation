using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

trace1 = [
  "x" => [1, 2, 3, 4], 
  "y" => [10, 15, 13, 17], 
  "type" => "scatter"
]
trace2 = [
  "x" => [1, 2, 3, 4], 
  "y" => [16, 5, 11, 9], 
  "type" => "scatter"
]
data = [trace1, trace2]

response = Plotly.plot([data], ["filename" => "basic-line1", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]