using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "y" => [0, 1, 1, 2, 3, 5, 8, 13, 21], 
    "boxpoints" => "all", 
    "jitter" => 0.3, 
    "pointpos" => -1.8, 
    "type" => "box"
  ]
]

response = Plotly.plot([data], ["filename" => "box-plot-jitter", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]