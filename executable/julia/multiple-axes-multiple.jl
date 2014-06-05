using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

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
  "x" => [3, 4, 5], 
  "y" => [400, 500, 600], 
  "name" => "yaxis3 data", 
  "yaxis" => "y3", 
  "type" => "scatter"
]
trace4 = [
  "x" => [4, 5, 6], 
  "y" => [40000, 50000, 60000], 
  "name" => "yaxis4 data", 
  "yaxis" => "y4", 
  "type" => "scatter"
]
trace5 = [
  "x" => [5, 6, 7], 
  "y" => [400000, 500000, 600000], 
  "name" => "yaxis5 data", 
  "yaxis" => "y5", 
  "type" => "scatter"
]
trace6 = [
  "x" => [6, 7, 8], 
  "y" => [4000000, 5000000, 6000000], 
  "name" => "yaxis6 data", 
  "yaxis" => "y6", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3, trace4, trace5, trace6]
layout = [
  "title" => "multiple y-axes example", 
  "xaxis" => ["domain" => [0.3, 0.7]], 
  "yaxis" => [
    "title" => "yaxis title", 
    "titlefont" => ["color" => "#1f77b4"], 
    "tickfont" => ["color" => "#1f77b4"]
  ], 
  "width" => 800, 
  "yaxis2" => [
    "title" => "yaxis2 title", 
    "titlefont" => ["color" => "#ff7f0e"], 
    "tickfont" => ["color" => "#ff7f0e"], 
    "position" => 0.15, 
    "anchor" => "free", 
    "side" => "left", 
    "overlaying" => "y"
  ], 
  "yaxis3" => [
    "title" => "yaxis3 title", 
    "titlefont" => ["color" => "#2ca02c"], 
    "tickfont" => ["color" => "#2ca02c"], 
    "position" => 0, 
    "anchor" => "free", 
    "side" => "left", 
    "overlaying" => "y"
  ], 
  "yaxis4" => [
    "title" => "yaxis4 title", 
    "titlefont" => ["color" => "#d62728"], 
    "tickfont" => ["color" => "#d62728"], 
    "anchor" => "x", 
    "side" => "right", 
    "overlaying" => "y"
  ], 
  "yaxis5" => [
    "title" => "yaxis5 title", 
    "titlefont" => ["color" => "#9467bd"], 
    "tickfont" => ["color" => "#9467bd"], 
    "position" => 0.85, 
    "anchor" => "free", 
    "side" => "right", 
    "overlaying" => "y"
  ], 
  "yaxis6" => [
    "title" => "yaxis6 title", 
    "titlefont" => ["color" => "#8c564b"], 
    "tickfont" => ["color" => "#8c564b"], 
    "position" => 1.0, 
    "anchor" => "free", 
    "side" => "right", 
    "overlaying" => "y"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "multiple-axes-multiple", "fileopt" => "overwrite"])
plot_url = response["url"]