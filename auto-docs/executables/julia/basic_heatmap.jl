using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "z" => [1 20 30; 20 1 60; 30 60 1], 
    "type" => "heatmap"
  ]
]
response = Plotly.plot(data, ["filename" => "basic-heatmap", "fileopt" => "overwrite"])
plot_url = response["url"]
