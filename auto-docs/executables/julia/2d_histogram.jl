import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => x, 
    "y" => y, 
    "type" => "histogram2d"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "2d-histogram"])
plot_url = response["url"]