using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
x = (["day 1", "day 1", "day 1", "day 1", "day 1", "day 1", 
      "day 2", "day 2", "day 2", "day 2", "day 2", "day 2"])

trace1 = [
  "y" => [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3], 
  "x" => x, 
  "name" => "kale", 
  "marker" => ["color" => "#3D9970"], 
  "type" => "box"
]
trace2 = [
  "y" => [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2], 
  "x" => x, 
  "name" => "radishes", 
  "marker" => ["color" => "#FF4136"], 
  "type" => "box"
]
trace3 = [
  "y" => [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5], 
  "x" => x, 
  "name" => "carrots", 
  "marker" => ["color" => "#FF851B"], 
  "type" => "box"
]
data = [trace1, trace2, trace3]
layout = [
  "yaxis" => [
    "title" => "normalized moisture", 
    "zeroline" => false
  ], 
  "boxmode" => "group"
]
response = Plotly.plot(data, ["layout" => layout, "filename" => "box-grouped", "fileopt" => "overwrite"])
plot_url = response["url"]
