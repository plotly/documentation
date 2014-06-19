using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "value" => 50, 
      "type" => "percent", 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "percent-error-bar", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]