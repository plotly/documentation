using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [10, 11, 12, 13], 
    "marker" => [
      "size" => [12, 22, 32, 42], 
      "color" => ["hsl(0,100,40)", "hsl(33,100,40)", "hsl(66,100,40)", "hsl(99,100,40)"], 
      "opacity" => [0.6, 0.7, 0.8, 0.9]
    ], 
    "mode" => "markers"
  ], 
  [
    "x" => [1, 2, 3, 4], 
    "y" => [11, 12, 13, 14], 
    "marker" => [
      "color" => "rgb(31, 119, 180)", 
      "size" => 18, 
      "symbol" => ["circle", "square", "diamond", "cross"]
    ], 
    "mode" => "markers"
  ], 
  [
    "x" => [1, 2, 3, 4], 
    "y" => [12, 13, 14, 15], 
    "marker" => [
      "size" => 18, 
      "line" => [
        "color" => ["rgb(120,120,120)", "rgb(120,120,120)", "red", "rgb(120,120,120)"], 
        "width" => [2, 2, 6, 2]
      ]
    ], 
    "mode" => "markers"
  ]
]

layout = ["showlegend" => false]

response = Plotly.plot([data], ["layout" => layout, "filename" => "bubblechart", "fileopt" => "overwrite"])
plot_url = response["url"]