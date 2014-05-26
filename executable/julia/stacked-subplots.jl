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
    "yaxis" => "y2", 
    "xaxis" => "x2"
  ], 
  [
    "x" => [3, 4, 5], 
    "y" => [1000, 1100, 1200], 
    "yaxis" => "y3", 
    "xaxis" => "x3"
  ]
]

layout = [
  "yaxis" => ["domain" => [0, 0.266]], 
  "yaxis2" => ["domain" => [0.366, 0.633]], 
  "yaxis3" => ["domain" => [0.733, 1]], 
  "xaxis2" => ["anchor" => "y2"], 
  "xaxis3" => ["anchor" => "y3"], 
  "legend" => ["traceorder" => "reversed"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "stacked-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]