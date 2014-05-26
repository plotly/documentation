using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8]
  ]
]

layout = [
  "title" => "Global Font", 
  "font" => [
    "color" => "#7f7f7f", 
    "family" => "Courier New, monospace", 
    "size" => 18
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "global-font", "fileopt" => "overwrite"])
plot_url = response["url"]