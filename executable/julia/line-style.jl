using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3], 
    "y" => [4, 5, 6], 
    "type" => "scatter", 
    "name" => "Experiment", 
    "line" => [
      "color" => "rgb(3,78,123)", 
      "width" => 6, 
      "dash" => "dot"
    ], 
    "marker" => [
      "opacity" => 1.0, 
      "symbol" => "square", 
      "size" => 12, 
      "color" => "rgb(54,144,192)", 
      "line" => [
        "width" => 3, 
        "color" => "darkblue"
      ]
    ]
  ], 
  [
    "x" => [1, 2, 3], 
    "y" => [2, 10, 12], 
    "type" => "scatter", 
    "name" => "Control", 
    "line" => [
      "color" => "purple", 
      "width" => 4, 
      "dash" => "dashdot"
    ], 
    "marker" => [
      "opacity" => 0.9, 
      "symbol" => "cross", 
      "size" => 16, 
      "color" => "fuchsia", 
      "line" => [
        "color" => "", 
        "width" => 0
      ]
    ]
  ]
]

response = Plotly.plot([data], ["filename" => "line-style", "fileopt" => "overwrite"])
plot_url = response["url"]