using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [1, 3, 2, 3, 1], 
  "mode" => "lines+markers", 
  "name" => "'linear'", 
  "line" => ["shape" => "linear"], 
  "type" => "scatter"
]
trace2 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [6, 8, 7, 8, 6], 
  "mode" => "lines+markers", 
  "name" => "'spline'", 
  "text" => ["tweak line smoothness<br>with 'smoothing' in line object", "tweak line smoothness<br>with 'smoothing' in line object", "tweak line smoothness<br>with 'smoothing' in line object", "tweak line smoothness<br>with 'smoothing' in line object", "tweak line smoothness<br>with 'smoothing' in line object", "tweak line smoothness<br>with 'smoothing' in line object"], 
  "line" => ["shape" => "spline"], 
  "type" => "scatter"
]
trace3 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [11, 13, 12, 13, 11], 
  "mode" => "lines+markers", 
  "name" => "'vhv'", 
  "line" => ["shape" => "vhv"], 
  "type" => "scatter"
]
trace4 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [16, 18, 17, 18, 16], 
  "mode" => "lines+markers", 
  "name" => "'hvh'", 
  "line" => ["shape" => "hvh"], 
  "type" => "scatter"
]
trace5 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [21, 23, 22, 23, 21], 
  "mode" => "lines+markers", 
  "name" => "'vh'", 
  "line" => ["shape" => "vh"], 
  "type" => "scatter"
]
trace6 = [
  "x" => [1, 2, 3, 4, 5], 
  "y" => [26, 28, 27, 28, 26], 
  "mode" => "lines+markers", 
  "name" => "'hv'", 
  "line" => ["shape" => "hv"], 
  "type" => "scatter"
]
data = [trace1, trace2, trace3, trace4, trace5, trace6]
layout = ["legend" => [
    "y" => 0.5, 
    "traceorder" => "reversed", 
    "font" => ["size" => 16], 
    "yref" => "paper"
  ]]
response = Plotly.plot(data, ["layout" => layout, "filename" => "line-shapes", "fileopt" => "overwrite"])
plot_url = response["url"]
