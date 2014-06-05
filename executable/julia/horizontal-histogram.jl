using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

y = randn(500)

data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]

response = Plotly.plot([data], ["filename" => "horizontal-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]