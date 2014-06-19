using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => [1, 2], 
    "y" => [1, 2], 
    "type" => "scatter"
  ]
]
layout = ["xaxis" => ["autorange" => "reversed"]]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-reversed", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]