# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

x0 = randn(500)
x1 = randn(500)+1

trace1 = [
  "x" => x0, 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = ["barmode" => "stack"]
response = Plotly.plot(data, ["layout" => layout, "filename" => "stacked-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
