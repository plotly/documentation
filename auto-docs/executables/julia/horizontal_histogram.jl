using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

y = randn(500)
data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]

response = Plotly.plot([data], ["filename" => "horizontal-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]