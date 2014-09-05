import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => x, 
    "y" => y, 
    "histnorm" => "probability", 
    "autobinx" => false, 
    "xbins" => [
      "start" => -3, 
      "end" => 3, 
      "size" => 0.1
    ], 
    "autobiny" => false, 
    "ybins" => [
      "start" => -2.5, 
      "end" => 4, 
      "size" => 0.1
    ], 
    "colorscale" => {[0, "rgb(12,51,131)"],[0.25, "rgb(10,136,186)"],[0.5, "rgb(242,211,56)"],[0.75, "rgb(242,143,56)"],[1, "rgb(217,30,30)"]}, 
    "type" => "histogram2d"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "2d-histogram-options"])
plot_url = response["url"]