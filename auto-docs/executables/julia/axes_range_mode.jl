# Learn about API authentication here: {{BASE_URL}}/julia/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [2, 4, 6], 
    "y" => [-3, 0, 3], 
    "type" => "scatter"
  ]
]
layout = [
  "showlegend" => false, 
  "xaxis" => [
    "rangemode" => "tozero", 
    "autorange" => true
  ], 
  "yaxis" => [
    "rangemode" => "nonnegative", 
    "autorange" => true
  ]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "axes-range-mode", "fileopt" => "overwrite"])
plot_url = response["url"]
