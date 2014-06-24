using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

x0 = randn(500)
x1 = randn(500)+1
trace1 = [
  "x" => x0, 
  "opacity" => 0.75, 
  "type" => "histogram"
]
trace2 = [
  "x" => x1, 
  "opacity" => 0.75, 
  "type" => "histogram"
]
data = [trace1, trace2]
layout = ["barmode" => "overlay"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "overlaid-histogram", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]