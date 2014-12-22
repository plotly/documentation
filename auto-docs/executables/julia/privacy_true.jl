# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")


data = [
  [
    "x" => [0, 2, 4], 
    "y" => [0, 4, 2], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "privacy-true", "world_readable" => true, "fileopt" => "overwrite"])
plot_url = response["url"]
