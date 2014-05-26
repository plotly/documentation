using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3], 
    "y" => [4, 5, 6]
  ], 
  [
    "x" => [20, 30, 40], 
    "y" => [50, 60, 70], 
    "xaxis" => "x2", 
    "yaxis" => "y2"
  ]
]

layout = [
  "xaxis" => ["domain" => [0, 0.45]], 
  "xaxis2" => ["domain" => [0.55, 1]], 
  "yaxis2" => ["anchor" => "x2"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "simple-subplot", "fileopt" => "overwrite"])
plot_url = response["url"]