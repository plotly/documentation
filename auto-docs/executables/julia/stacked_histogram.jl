import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => x0, 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = ["barmode" => "stacked"]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "stacked-histogram"])
plot_url = response["url"]