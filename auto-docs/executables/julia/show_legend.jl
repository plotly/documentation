using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [0, 1, 2], 
  "y" => [1, 2, 3], 
  "name" => "First Trace", 
  "showlegend" => false, 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3], 
  "y" => [8, 4, 2, 0], 
  "name" => "Second Trace", 
  "showlegend" => true, 
  "type" => "scatter"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "show-legend"])
plot_url = response["url"]