using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x = randn(500)

data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]