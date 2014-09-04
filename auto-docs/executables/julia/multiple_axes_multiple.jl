using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [1, 2, 3], 
  "y" => [4, 5, 6], 
  "name" => "yaxis1 data", 
  "type" => "scatter"
]
trace2 = [
  "x" => [2, 3, 4], 
  "y" => [40, 50, 60], 
  "name" => "yaxis2 data", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
trace3 = [
  "x" => [4, 5, 6], 
  "y" => [40000, 50000, 60000], 
  "name" => "yaxis3 data", 
  "yaxis" => "y3", 
  "type" => "scatter"
]
trace4 = [
  "x" => [5, 6, 7], 
  "y" => [400000, 500000, 600000], 
  "name" => "yaxis4 data", 
  "yaxis" => "y4", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3, trace4]
layout = [
  "title" => "multiple y-axes example", 
  "width" => 800, 
  "xaxis" => ["domain" => [0.3, 0.7]], 
  "yaxis" => [
    "title" => "yaxis title", 
    "titlefont" => ["color" => "#1f77b4"], 
    "tickfont" => ["color" => "#1f77b4"]
  ], 
  "yaxis2" => [
    "title" => "yaxis2 title", 
    "titlefont" => ["color" => "#ff7f0e"], 
    "tickfont" => ["color" => "#ff7f0e"], 
    "anchor" => "free", 
    "overlaying" => "y", 
    "side" => "left", 
    "position" => 0.15
  ], 
  "yaxis3" => [
    "title" => "yaxis4 title", 
    "titlefont" => ["color" => "#d62728"], 
    "tickfont" => ["color" => "#d62728"], 
    "anchor" => "x", 
    "overlaying" => "y", 
    "side" => "right"
  ], 
  "yaxis4" => [
    "title" => "yaxis5 title", 
    "titlefont" => ["color" => "#9467bd"], 
    "tickfont" => ["color" => "#9467bd"], 
    "anchor" => "free", 
    "overlaying" => "y", 
    "side" => "right", 
    "position" => 0.85
  ]
]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "multiple-axes-multiple"])
plot_url = response["url"]