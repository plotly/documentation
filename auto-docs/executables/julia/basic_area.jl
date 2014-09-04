using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [1, 2, 3, 4], 
  "y" => [0, 2, 3, 5], 
  "fill" => "tozeroy", 
  "type" => "scatter"
]
trace2 = [
  "x" => [1, 2, 3, 4], 
  "y" => [3, 5, 1, 7], 
  "fill" => "tonexty", 
  "type" => "scatter"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "basic-area"])
plot_url = response["url"]