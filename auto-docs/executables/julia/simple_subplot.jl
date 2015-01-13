# Learn about API authentication here: {{BASE_URL}}/julia/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [1, 2, 3], 
  "y" => [4, 5, 6], 
  "type" => "scatter"
]
trace2 = [
  "x" => [20, 30, 40], 
  "y" => [50, 60, 70], 
  "xaxis" => "x2", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "xaxis" => ["domain" => [0, 0.45]], 
  "yaxis2" => ["anchor" => "x2"], 
  "xaxis2" => ["domain" => [0.55, 1]]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "simple-subplot", "fileopt" => "overwrite"])
plot_url = response["url"]
