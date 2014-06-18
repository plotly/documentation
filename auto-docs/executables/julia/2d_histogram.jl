using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

x = randn(500)
y = randn(500)+1
data = [
  [
    "x" => x, 
    "y" => y, 
    "type" => "histogram2d"
  ]
]

response = Plotly.plot([data], ["filename" => "2d-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]