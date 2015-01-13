# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly

x = randn(500)

Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["filename" => "basic-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
