using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
x = randn(500)

data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["filename" => "basic-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
