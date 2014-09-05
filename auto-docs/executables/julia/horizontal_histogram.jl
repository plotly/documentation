import numpy as np
y = np.random.randn(500)
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "horizontal-histogram"])
plot_url = response["url"]