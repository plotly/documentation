# Learn about API authentication here: {{BASE_URL}}/julia/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

using Plotly

Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [1, 2, 3], 
  "y" => [40, 50, 60], 
  "name" => "yaxis data", 
  "type" => "scatter"
]
trace2 = [
  "x" => [2, 3, 4], 
  "y" => [4, 5, 6], 
  "name" => "yaxis2 data", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "title" => "Double Y Axis Example", 
  "yaxis" => ["title" => "yaxis title"], 
  "yaxis2" => [
    "title" => "yaxis2 title", 
    "titlefont" => ["color" => "rgb(148, 103, 189)"], 
    "tickfont" => ["color" => "rgb(148, 103, 189)"], 
    "overlaying" => "y", 
    "side" => "right"
  ]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "multiple-axes-double", "fileopt" => "overwrite"])
plot_url = response["url"]
