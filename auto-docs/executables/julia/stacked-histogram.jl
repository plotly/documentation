using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

x0 = randn(500)
x1 = randn(500)+1
trace1 = [
  "x" => x0, 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = ["barmode" => "stacked"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "stacked-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]