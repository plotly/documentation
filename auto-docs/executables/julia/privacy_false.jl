using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [0, 2, 4], 
    "y" => [0, 4, 2], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "privacy-false", "world_readable" => false, "fileopt" => "overwrite"])
plot_url = response["url"]
