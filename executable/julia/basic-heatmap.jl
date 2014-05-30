using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "z" => [1 20 30; 20 1 60; 30 60 1], 
    "type" => "heatmap"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-heatmap", "fileopt" => "overwrite"])
plot_url = response["url"]