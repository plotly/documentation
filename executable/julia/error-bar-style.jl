using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x_theo = linspace(-4, 4, 100)
sincx = sinc(x_theo)
x = [-3.8, -3.03, -1.91, -1.46, -0.89, -0.24, -0.0, 0.41, 0.89, 1.01, 1.91, 2.28, 2.79, 3.56]
y = [-0.02, 0.04, -0.01, -0.27, 0.36, 0.75, 1.03, 0.65, 0.28, 0.02, -0.11, 0.16, 0.04, -0.15]

data = [
  [
    "name" => "sinc(x)", 
    "type" => "scatter", 
    "x" => x_theo, 
    "y" => sincx
  ], 
  [
    "name" => "measured", 
    "mode" => "markers", 
    "x" => x, 
    "y" => y, 
    "error_x" => [
      "color" => "#85144B", 
      "opacity" => 1, 
      "thickness" => 1.5, 
      "type" => "constant", 
      "value" => 0.2, 
      "width" => 3
    ], 
    "error_y" => [
      "color" => "#85144B", 
      "opacity" => 1, 
      "thickness" => 1.5, 
      "type" => "constant", 
      "value" => 0.1, 
      "width" => 3
    ], 
    "marker" => [
      "color" => "#85144B", 
      "size" => 8
    ]
  ]
]

response = Plotly.plot([data], ["filename" => "error-bar-style", "fileopt" => "overwrite"])
plot_url = response["url"]