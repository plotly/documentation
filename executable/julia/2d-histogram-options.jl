using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

x = randn(500)
y = randn(500)+1

data = [
  [
    "x" => x, 
    "y" => y, 
    "type" => "histogram2d", 
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
    "scl" => {[0, "rgb(12,51,131)"],[0.25, "rgb(10,136,186)"],[0.5, "rgb(242,211,56)"],[0.75, "rgb(242,143,56)"],[1, "rgb(217,30,30)"]}, 
    "histnorm" => "probability"
  ]
]

response = Plotly.plot([data], ["filename" => "2d-histogram-options", "fileopt" => "overwrite"])
plot_url = response["url"]