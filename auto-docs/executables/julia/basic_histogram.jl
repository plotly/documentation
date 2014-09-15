using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
x = randn(500)

data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["fileopt" => "overwrite", "filename" => "basic-histogram"])
plot_url = response["url"]