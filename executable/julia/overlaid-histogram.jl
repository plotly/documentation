using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x0 = randn(500)
x1 = randn(500)+1

data = [
  [
    "x" => x0, 
    "opacity" => 0.75, 
    "type" => "histogram"
  ], 
  [
    "x" => x1, 
    "opacity" => 0.75, 
    "type" => "histogram"
  ]
]
layout = ["barmode" => "overlay"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "overlaid-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]