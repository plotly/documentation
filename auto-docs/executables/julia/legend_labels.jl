# Learn about API authentication here: {BASE_URL}/julia/getting-started
# Find your api_key here: {BASE_URL}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [0, 3, 6, 4, 5, 2, 3, 5, 4], 
  "name" => "Blue Trace", 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [0, 4, 7, 8, 3, 6, 3, 3, 4], 
  "name" => "Orange Trace", 
  "type" => "scatter"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["filename" => "legend-labels", "fileopt" => "overwrite"])
plot_url = response["url"]
