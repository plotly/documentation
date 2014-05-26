using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["Trial 1", "Trial 2", "Trial 3"], 
    "y" => [3, 6, 4], 
    "type" => "bar", 
    "name" => "Control", 
    "error_y" => [
      "type" => "data", 
      "array" => [1, 0.5, 1.5], 
      "visible" => true
    ]
  ], 
  [
    "x" => ["Trial 1", "Trial 2", "Trial 3"], 
    "y" => [4, 7, 3], 
    "type" => "bar", 
    "name" => "Experimental", 
    "error_y" => [
      "type" => "data", 
      "array" => [0.5, 1, 2], 
      "visible" => true
    ]
  ]
]

layout = ["barmode" => "group"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "error-bar-bar", "fileopt" => "overwrite"])
plot_url = response["url"]