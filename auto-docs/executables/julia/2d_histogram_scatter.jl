using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
x0 = randn(100)/5. + 0.5
y0 = randn(100)/5. + 0.5
x1 = rand(50)
y1 = rand(50) + 1.0


x = [x0; x1]
y = [y0; y1]

trace1 = [
  "x" => x0, 
  "y" => y0, 
  "mode" => "markers", 
  "marker" => [
    "symbol" => "circle", 
    "opacity" => 0.7
  ], 
  "type" => "scatter"
]
trace2 = [
  "x" => x1, 
  "y" => y1, 
  "mode" => "markers", 
  "marker" => [
    "symbol" => "square", 
    "opacity" => 0.7
  ], 
  "type" => "scatter"
]
trace3 = [
  "x" => x, 
  "y" => y, 
  "type" => "histogram2d"
]
data = [trace1, trace2, trace3]
response = Plotly.plot(data, ["filename" => "2d-histogram-scatter", "fileopt" => "overwrite"])
plot_url = response["url"]
