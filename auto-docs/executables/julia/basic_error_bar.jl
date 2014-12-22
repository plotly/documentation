# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")


data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "type" => "data", 
      "array" => [1, 2, 3], 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "basic-error-bar", "fileopt" => "overwrite"])
plot_url = response["url"]
