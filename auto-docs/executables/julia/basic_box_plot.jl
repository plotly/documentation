using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
y0 = randn(50)
y1 = randn(50)+1

trace1 = [
  "y" => y0, 
  "type" => "box"
]
trace2 = [
  "y" => y1, 
  "type" => "box"
]
data = [trace1, trace2]
response = Plotly.plot(data, ["filename" => "basic-box-plot", "fileopt" => "overwrite"])
plot_url = response["url"]
