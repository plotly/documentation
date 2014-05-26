using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 3, 6, 4, 5, 2, 3, 5, 4]
  ], 
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 4, 7, 8, 3, 6, 3, 3, 4]
  ]
]

layout = ["legend" => [
    "x" => 0, 
    "y" => 1, 
    "bgcolor" => "#E2E2E2", 
    "bordercolor" => "#FFFFFF", 
    "borderwidth" => 2, 
    "traceorder" => "normal", 
    "font" => [
      "color" => "#000", 
      "family" => "sans-serif", 
      "size" => 12
    ], 
    "showlegend" => true
  ]]

response = Plotly.plot([data], ["layout" => layout, "filename" => "legend-style", "fileopt" => "overwrite"])
plot_url = response["url"]