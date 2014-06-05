using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

trace1 = [
  "x" => ["Trial 1", "Trial 2", "Trial 3"], 
  "y" => [3, 6, 4], 
  "name" => "Control", 
  "error_y" => [
    "array" => [1, 0.5, 1.5], 
    "type" => "data", 
    "visible" => true
  ], 
  "type" => "bar"
]
trace2 = [
  "x" => ["Trial 1", "Trial 2", "Trial 3"], 
  "y" => [4, 7, 3], 
  "name" => "Experimental", 
  "error_y" => [
    "array" => [0.5, 1, 2], 
    "type" => "data", 
    "visible" => true
  ], 
  "type" => "bar"
]
data = [trace1, trace2]
layout = ["barmode" => "group"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "error-bar-bar", "fileopt" => "overwrite"])
plot_url = response["url"]