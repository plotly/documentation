using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [8, 7, 6, 5, 4, 3, 2, 1, 0]
  ], 
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8]
  ]
]

layout = [
  "xaxis" => [
    "title" => "AXIS TITLE", 
    "titlefont" => [
      "color" => "lightgrey", 
      "family" => "Arial, sans-serif", 
      "size" => 18
    ], 
    "showticklabels" => true, 
    "tickfont" => [
      "color" => "black", 
      "family" => "Old Standard TT, serif", 
      "size" => 14
    ], 
    "tickangle" => 45, 
    "showexponent" => "All", 
    "exponentformat" => "e"
  ], 
  "yaxis" => [
    "title" => "AXIS TITLE", 
    "titlefont" => [
      "color" => "lightgrey", 
      "family" => "Arial, sans-serif", 
      "size" => 18
    ], 
    "showticklabels" => true, 
    "tickfont" => [
      "color" => "black", 
      "family" => "Old Standard TT, serif", 
      "size" => 14
    ], 
    "tickangle" => 45, 
    "showexponent" => "All", 
    "exponentformat" => "e"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-labels", "fileopt" => "overwrite"])
plot_url = response["url"]