using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [1, 2], 
    "y" => [1, 2], 
    "type" => "scatter"
  ]
]
layout = ["xaxis" => ["autorange" => "reversed"]]
response = Plotly.plot(data, ["layout" => layout, "fileopt" => "overwrite", "filename" => "axes-reversed"])
plot_url = response["url"]