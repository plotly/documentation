using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "value" => 50, 
      "type" => "percent", 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "percent-error-bar", "fileopt" => "overwrite"])
plot_url = response["url"]