import numpy as np
y0 = np.random.randn(50)
y1 = np.random.randn(50)+1
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "y" => y0, 
  "type" => "box"
]
trace2 = [
  "y" => y1, 
  "type" => "box"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "basic-box-plot"])
plot_url = response["url"]