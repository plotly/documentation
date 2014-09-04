import numpy as np
x = np.random.randn(500)
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => x, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "basic-histogram"])
plot_url = response["url"]