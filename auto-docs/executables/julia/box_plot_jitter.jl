using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "y" => [0, 1, 1, 2, 3, 5, 8, 13, 21], 
    "boxpoints" => "all", 
    "jitter" => 0.3, 
    "pointpos" => -1.8, 
    "type" => "box"
  ]
]

response = Plotly.plot([data], ["filename" => "box-plot-jitter", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]