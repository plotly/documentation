using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

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

response = Plotly.plot([data], ["filename" => "basic-area", "fileopt" => "overwrite"])
plot_url = response["url"]