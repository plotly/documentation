using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [0, 2, 4], 
    "y" => [0, 4, 2], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "world_readable" => true, "filename" => "privacy-true"])
plot_url = response["url"]