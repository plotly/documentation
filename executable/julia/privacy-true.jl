using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 2, 4], 
    "y" => [0, 4, 2], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "privacy-true", "fileopt" => "overwrite"])
plot_url = response["url"]