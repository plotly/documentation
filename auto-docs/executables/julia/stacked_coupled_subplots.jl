# Learn about API authentication here: {{BASE_URL}}/julia/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [0, 1, 2], 
  "y" => [10, 11, 12], 
  "type" => "scatter"
]
trace2 = [
  "x" => [2, 3, 4], 
  "y" => [100, 110, 120], 
  "yaxis" => "y2", 
  "type" => "scatter"
]
trace3 = [
  "x" => [3, 4, 5], 
  "y" => [1000, 1100, 1200], 
  "yaxis" => "y3", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3]
layout = [
  "yaxis" => ["domain" => [0, 0.33]], 
  "legend" => ["traceorder" => "reversed"], 
  "yaxis2" => ["domain" => [0.33, 0.66]], 
  "yaxis3" => ["domain" => [0.66, 1]]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "stacked-coupled-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]
