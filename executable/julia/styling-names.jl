using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "name" => "Name of Trace 1"
  ], 
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [1, 0, 3, 2, 5, 4, 7, 6, 8], 
    "name" => "Name of Trace 2"
  ]
]

layout = [
  "title" => "Plot Title", 
  "xaxis" => [
    "title" => "x Axis", 
    "titlefont" => [
      "color" => "#7f7f7f", 
      "family" => "Courier New, monospace", 
      "size" => 18
    ]
  ], 
  "yaxis" => [
    "title" => "y Axis", 
    "titlefont" => [
      "color" => "#7f7f7f", 
      "family" => "Courier New, monospace", 
      "size" => 18
    ]
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "styling-names", "fileopt" => "overwrite"])
plot_url = response["url"]