using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "array" => [1, 2, 3], 
      "type" => "data", 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-error-bar", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]