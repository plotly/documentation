using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [10, 15, 13, 17], 
    "type" => "scatter", 
    "mode" => "markers"
  ], 
  [
    "x" => [2, 3, 4, 5], 
    "y" => [16, 5, 11, 9], 
    "type" => "scatter", 
    "mode" => "lines"
  ], 
  [
    "x" => [1, 2, 3, 4], 
    "y" => [12, 9, 15, 12], 
    "type" => "scatter", 
    "mode" => "lines+markers"
  ]
]

response = Plotly.plot([data], ["filename" => "line-scatter", "fileopt" => "overwrite"])
plot_url = response["url"]