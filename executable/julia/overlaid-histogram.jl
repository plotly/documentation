using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x0 = randn(500)
x1 = randn(500)+1

data = [
  [
    "x" => x0, 
    "type" => "histogram", 
    "opacity" => 0.75
  ], 
  [
    "x" => x1, 
    "type" => "histogram", 
    "opacity" => 0.75
  ]
]

layout = ["barmode" => "overlay"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "overlaid-histogram", "fileopt" => "overwrite"])
plot_url = response["url"]