# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly

y = randn(500)

Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["filename" => "horizontal-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
