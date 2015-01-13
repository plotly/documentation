# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "type" => "scatter"
  ]
]
layout = [
  "autosize" => false, 
  "width" => 500, 
  "height" => 500, 
  "margin" => [
    "l" => 50, 
    "r" => 50, 
    "b" => 100, 
    "t" => 100, 
    "pad" => 4
  ], 
  "paper_bgcolor" => "#7f7f7f", 
  "plot_bgcolor" => "#c7c7c7"
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "size-margins", "fileopt" => "overwrite"])
plot_url = response["url"]
