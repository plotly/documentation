using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_x" => [
      "type" => "percent", 
      "value" => 10
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "error-bar-horizontal"])
plot_url = response["url"]