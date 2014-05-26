using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x = (["day 1", "day 1", "day 1", "day 1", "day 1", "day 1", 
      "day 2", "day 2", "day 2", "day 2", "day 2", "day 2"])

data = [
  [
    "y" => [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3], 
    "x" => x, 
    "type" => "box", 
    "name" => "kale", 
    "marker" => ["color" => "#3D9970"]
  ], 
  [
    "y" => [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2], 
    "x" => x, 
    "type" => "box", 
    "name" => "radishes", 
    "marker" => ["color" => "#FF4136"]
  ], 
  [
    "y" => [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5], 
    "x" => x, 
    "type" => "box", 
    "name" => "carrots", 
    "marker" => ["color" => "#FF851B"]
  ]
]

layout = [
  "boxmode" => "group", 
  "yaxis" => [
    "zeroline" => false, 
    "title" => "normalized moisture"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "box-grouped", "fileopt" => "overwrite"])
plot_url = response["url"]