using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => ["Trial 1", "Trial 2", "Trial 3"], 
  "y" => [3, 6, 4], 
  "name" => "Control", 
  "error_y" => [
    "type" => "data", 
    "array" => [1, 0.5, 1.5], 
    "visible" => true
  ], 
  "type" => "bar"
]
trace2 = [
  "x" => ["Trial 1", "Trial 2", "Trial 3"], 
  "y" => [4, 7, 3], 
  "name" => "Experimental", 
  "error_y" => [
    "type" => "data", 
    "array" => [0.5, 1, 2], 
    "visible" => true
  ], 
  "type" => "bar"
]
data = [trace1, trace2]
layout = ["barmode" => "group"]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "error-bar-bar"])
plot_url = response["url"]