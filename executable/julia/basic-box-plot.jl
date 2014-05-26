using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

y0 = randn(50)
y1 = randn(50)+1

data = [
  [
    "y" => y0, 
    "type" => "box"
  ], 
  [
    "y" => y1, 
    "type" => "box"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-box-plot", "fileopt" => "overwrite"])
plot_url = response["url"]