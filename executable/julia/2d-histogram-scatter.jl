using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x0 = randn(100)/5. + 0.5
y0 = randn(100)/5. + 0.5
x1 = rand(50)
y1 = rand(50) + 1.0


x = [x0; x1]
y = [y0; y1]

data = [
  [
    "x" => x0, 
    "y" => y0, 
    "mode" => "markers", 
    "marker" => [
      "symbol" => "circle", 
      "opacity" => 0.7
    ], 
    "type" => "scatter"
  ], 
  [
    "x" => x1, 
    "y" => y1, 
    "mode" => "markers", 
    "marker" => [
      "symbol" => "square", 
      "opacity" => 0.7
    ], 
    "type" => "scatter"
  ], 
  [
    "x" => x, 
    "y" => y, 
    "type" => "histogram2d"
  ]
]

response = Plotly.plot([data], ["filename" => "2d-histogram-scatter", "fileopt" => "overwrite"])
plot_url = response["url"]