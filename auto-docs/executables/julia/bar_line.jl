using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [0, 1, 2, 3, 4, 5], 
  "y" => [1.5, 1, 1.3, 0.7, 0.8, 0.9], 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3, 4, 5], 
  "y" => [1, 0.5, 0.7, -1.2, 0.3, 0.4], 
  "type" => "bar"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["filename" => "bar-line", "fileopt" => "overwrite"])
plot_url = response["url"]