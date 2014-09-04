using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
trace1 = [
  "x" => [0, 1, 2], 
  "y" => [10, 11, 12], 
  "type" => "scatter"
]
trace2 = [
  "x" => [2, 3, 4], 
  "y" => [100, 110, 120], 
  "xaxis" => "x2", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
trace3 = [
  "x" => [3, 4, 5], 
  "y" => [1000, 1100, 1200], 
  "xaxis" => "x3", 
  "yaxis" => "y3", 
  "type" => "scatter"
]
data = [trace1, trace2, trace3]
layout = [
  "yaxis" => ["domain" => [0, 0.266]], 
  "legend" => ["traceorder" => "reversed"], 
  "xaxis3" => ["anchor" => "y3"], 
  "xaxis2" => ["anchor" => "y2"], 
  "yaxis2" => ["domain" => [0.366, 0.633]], 
  "yaxis3" => ["domain" => [0.733, 1]]
]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "stacked-subplots"])
plot_url = response["url"]