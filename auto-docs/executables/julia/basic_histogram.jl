using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

x = randn(500)
data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]