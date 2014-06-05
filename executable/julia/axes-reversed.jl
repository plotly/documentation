using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2], 
    "y" => [1, 2], 
    "type" => "scatter"
  ]
]
layout = ["xaxis" => ["autorange" => "reversed"]]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-reversed", "fileopt" => "overwrite"])
plot_url = response["url"]