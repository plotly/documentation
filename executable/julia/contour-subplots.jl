using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

t = linspace(-1, 1.2, 2000)
x = t.^3+0.3*randn(2000)
y = t.^6+0.3*randn(2000)

data = [
  [
    "x" => x, 
    "y" => y, 
    "mode" => "markers", 
    "name" => "points", 
    "type" => "scatter", 
    "marker" => [
      "color" => "rgb(102,0,0)", 
      "opacity" => 0.4, 
      "size" => 2
    ]
  ], 
  [
    "x" => x, 
    "y" => y, 
    "type" => "histogram2dcontour", 
    "name" => "density", 
    "scl" => "Hot", 
    "reversescl" => true, 
    "showscale" => false, 
    "ncontours" => 20
  ], 
  [
    "x" => x, 
    "type" => "histogram", 
    "name" => "x density", 
    "yaxis" => "y2", 
    "marker" => ["color" => "rgb(102,0,0)"]
  ], 
  [
    "y" => y, 
    "type" => "histogram", 
    "name" => "y density", 
    "xaxis" => "x2", 
    "marker" => ["color" => "rgb(102,0,0)"]
  ]
]

layout = [
  "hovermode" => "closest", 
  "width" => 600, 
  "height" => 550, 
  "autosize" => false, 
  "showlegend" => false, 
  "bargap" => 0, 
  "margin" => ["t" => 50], 
  "xaxis" => [
    "domain" => [0, 0.85], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "yaxis" => [
    "domain" => [0, 0.85], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "xaxis2" => [
    "domain" => [0.85, 1], 
    "showgrid" => false, 
    "zeroline" => false
  ], 
  "yaxis2" => [
    "domain" => [0.85, 1], 
    "showgrid" => false, 
    "zeroline" => false
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "contour-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]