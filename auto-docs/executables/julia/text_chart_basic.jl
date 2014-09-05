using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [0, 1, 2], 
  "y" => [1, 1, 1], 
  "mode" => "lines+markers+text", 
  "name" => "Lines, Markers and Text", 
  "text" => ["Text A", "Text B", "Text C"], 
  "textposition" => "top", 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2], 
  "y" => [2, 2, 2], 
  "mode" => "markers+text", 
  "name" => "Markers and Text", 
  "text" => ["Text D", "Text E", "Text F"], 
  "textposition" => "bottom", 
  "type" => "scatter"
]
trace3 = [
  "x" => [0, 1, 2], 
  "y" => [3, 3, 3], 
  "mode" => "lines+text", 
  "name" => "Lines and Text", 
  "text" => ["Text G", "Text H", "Text I"], 
  "textposition" => "bottom", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3]
layout = ["showlegend" => false]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "text-chart-basic"])
plot_url = response["url"]