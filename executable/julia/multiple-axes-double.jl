using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3], 
    "y" => [40, 50, 60], 
    "name" => "yaxis data"
  ], 
  [
    "x" => [2, 3, 4], 
    "y" => [4, 5, 6], 
    "yaxis" => "y2", 
    "name" => "yaxis2 data"
  ]
]

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

response = Plotly.plot([data], ["layout" => layout, "filename" => "multiple-axes-double", "fileopt" => "overwrite"])
plot_url = response["url"]