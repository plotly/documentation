using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

y = randn(500)
data = [
  [
    "y" => y, 
    "type" => "histogram"
  ]
]

response = Plotly.plot([data], ["filename" => "horizontal-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]