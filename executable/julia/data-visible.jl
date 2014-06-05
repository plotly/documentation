using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

trace1 = [
  "x" => [0, 1, 2, 3], 
  "y" => [0, 2, 4, 6], 
  "visible" => true, 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3], 
  "y" => [8, 4, 2, 0], 
  "visible" => false, 
  "type" => "scatter"
]
data = [trace1, trace2]

response = Plotly.plot([data], ["filename" => "data-visible", "fileopt" => "overwrite"])
plot_url = response["url"]