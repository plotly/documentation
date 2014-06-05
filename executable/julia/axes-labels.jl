using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [8, 7, 6, 5, 4, 3, 2, 1, 0], 
    "type" => "scatter"
  ], 
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "type" => "scatter"
  ]
]
layout = [
  "xaxis" => [
    "title" => "AXIS TITLE", 
    "showticklabels" => true, 
    "tickangle" => 45, 
    "exponentformat" => "e", 
    "showexponent" => "All", 
    "titlefont" => [
      "family" => "Arial, sans-serif", 
      "size" => 18, 
      "color" => "lightgrey"
    ], 
    "tickfont" => [
      "family" => "Old Standard TT, serif", 
      "size" => 14, 
      "color" => "black"
    ]
  ], 
  "yaxis" => [
    "title" => "AXIS TITLE", 
    "showticklabels" => true, 
    "tickangle" => 45, 
    "exponentformat" => "e", 
    "showexponent" => "All", 
    "titlefont" => [
      "family" => "Arial, sans-serif", 
      "size" => 18, 
      "color" => "lightgrey"
    ], 
    "tickfont" => [
      "family" => "Old Standard TT, serif", 
      "size" => 14, 
      "color" => "black"
    ]
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-labels", "fileopt" => "overwrite"])
plot_url = response["url"]