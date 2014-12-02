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
  "title" => "Global Font", 
  "font" => [
    "family" => "Courier New, monospace", 
    "size" => 18, 
    "color" => "#7f7f7f"
  ]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "global-font", "fileopt" => "overwrite"])
plot_url = response["url"]
