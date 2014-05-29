using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [1, 1, 1], 
    "text" => ["Text A", "Text B", "Text C"], 
    "textposition" => "top right", 
    "name" => "Lines, Markers and Text", 
    "mode" => "lines+markers+text", 
    "textfont" => [
      "family" => "sans serif", 
      "size" => 18, 
      "color" => "#1f77b4"
    ], 
    "type" => "scatter"
  ], 
  [
    "x" => [0, 1, 2], 
    "y" => [2, 2, 2], 
    "text" => ["Text G", "Text H", "Text I"], 
    "textposition" => "bottom", 
    "name" => "Lines and Text", 
    "mode" => "lines+markers+text", 
    "textfont" => [
      "family" => "sans serif", 
      "size" => 18, 
      "color" => "#ff7f0e"
    ], 
    "type" => "scatter"
  ]
]
layout = ["showlegend" => false]

response = Plotly.plot([data], ["layout" => layout, "filename" => "text-chart-styling", "fileopt" => "overwrite"])
plot_url = response["url"]