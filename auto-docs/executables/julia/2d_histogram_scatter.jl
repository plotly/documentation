import numpy as np


x0 = np.random.randn(100)/5. + 0.5  # 5. enforces float division
y0 = np.random.randn(100)/5. + 0.5
x1 = np.random.rand(50)
y1 = np.random.rand(50) + 1.0


x = np.concatenate([x0, x1])
y = np.concatenate([y0, y1])
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
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
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "2d-histogram-scatter"])
plot_url = response["url"]