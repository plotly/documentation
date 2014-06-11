using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

trace1 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "type" => "scatter"
]
data = [trace1, trace2]
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

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-labels", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]