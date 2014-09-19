using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "type" => "percent", 
      "value" => 50, 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "percent-error-bar", "fileopt" => "overwrite"])
plot_url = response["url"]