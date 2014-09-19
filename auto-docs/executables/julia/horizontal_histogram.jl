using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
y = randn(500)

data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["filename" => "horizontal-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]
