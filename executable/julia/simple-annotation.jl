using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 3, 2, 4, 3, 4, 6, 5], 
    "type" => "scatter"
  ], 
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 4, 5, 1, 2, 2, 3, 4, 2], 
    "type" => "scatter"
  ]
]
layout = [
  "showlegend" => false, 
  "annotations" => [
    [
      "x" => 2, 
      "y" => 5, 
      "text" => "Annotation Text", 
      "xref" => "x", 
      "yref" => "y", 
      "showarrow" => true, 
      "arrowhead" => 7, 
      "ay" => -40, 
      "ax" => 0
    ]
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "simple-annotation", "fileopt" => "overwrite"])
plot_url = response["url"]