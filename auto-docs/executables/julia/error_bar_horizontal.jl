# Learn about API authentication here: {BASE_URL}/julia/getting-started
# Find your api_key here: {BASE_URL}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_x" => [
      "type" => "percent", 
      "value" => 10
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "error-bar-horizontal", "fileopt" => "overwrite"])
plot_url = response["url"]
