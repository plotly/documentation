using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8]
  ]
]

layout = [
  "autosize" => false, 
  "height" => 500, 
  "width" => 500, 
  "margin" => [
    "t" => 100, 
    "b" => 100, 
    "r" => 50, 
    "l" => 50, 
    "pad" => 4
  ], 
  "plot_bgcolor" => "#c7c7c7", 
  "paper_bgcolor" => "#7f7f7f"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "size-margins", "fileopt" => "overwrite"])
plot_url = response["url"]