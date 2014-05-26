using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "y" => [0, 1, 1, 2, 3, 5, 8, 13, 21], 
    "type" => "box", 
    "boxpoints" => "all", 
    "jitter" => 0.3, 
    "pointpos" => -1.8
  ]
]

response = Plotly.plot([data], ["filename" => "box-plot-jitter", "fileopt" => "overwrite"])
plot_url = response["url"]