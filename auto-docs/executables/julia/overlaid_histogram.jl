# Learn about API authentication here: {BASE_URL}/julia/getting-started
# Find your api_key here: {BASE_URL}/settings/api

using Plotly

x0 = randn(500)
x1 = randn(500)+1

Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => x0, 
  "opacity" => 0.75, 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "opacity" => 0.75, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = ["barmode" => "overlay"]
response = Plotly.plot(data, ["layout" => layout, "filename" => "overlaid-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
