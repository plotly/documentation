using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "type" => "scatter"
  ]
]
layout = [
  "title" => "Global Font", 
  "font" => [
    "family" => "Courier New, monospace", 
    "size" => 18, 
    "color" => "#7f7f7f"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "global-font", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]