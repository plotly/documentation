using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [1, 2, 3, 4], 
  "y" => [10, 15, 13, 17], 
  "mode" => "markers", 
  "type" => "scatter"
]
trace2 = [
  "x" => [2, 3, 4, 5], 
  "y" => [16, 5, 11, 9], 
  "mode" => "lines", 
  "type" => "scatter"
]
trace3 = [
  "x" => [1, 2, 3, 4], 
  "y" => [12, 9, 15, 12], 
  "mode" => "lines+markers", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3]
response = Plotly.plot(data, ["filename" => "line-scatter", "fileopt" => "overwrite"])
plot_url = response["url"]
