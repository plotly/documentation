using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [10, 11, 12]
  ], 
  [
    "x" => [2, 3, 4], 
    "y" => [100, 110, 120], 
    "yaxis" => "y2"
  ], 
  [
    "x" => [3, 4, 5], 
    "y" => [1000, 1100, 1200], 
    "yaxis" => "y3"
  ]
]

layout = [
  "yaxis" => ["domain" => [0, 0.33]], 
  "yaxis2" => ["domain" => [0.33, 0.66]], 
  "yaxis3" => ["domain" => [0.66, 1]], 
  "legend" => ["traceorder" => "reversed"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "stacked-coupled-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]