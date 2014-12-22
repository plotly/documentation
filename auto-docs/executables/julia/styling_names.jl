# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")


trace1 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "name" => "Name of Trace 1", 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [1, 0, 3, 2, 5, 4, 7, 6, 8], 
  "name" => "Name of Trace 2", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "title" => "Plot Title", 
  "xaxis" => [
    "title" => "x Axis", 
    "titlefont" => [
      "family" => "Courier New, monospace", 
      "size" => 18, 
      "color" => "#7f7f7f"
    ]
  ], 
  "yaxis" => [
    "title" => "y Axis", 
    "titlefont" => [
      "family" => "Courier New, monospace", 
      "size" => 18, 
      "color" => "#7f7f7f"
    ]
  ]
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "styling-names", "fileopt" => "overwrite"])
plot_url = response["url"]
