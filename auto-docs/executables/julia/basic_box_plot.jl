# Learn about API authentication here: {{BASE_URL}}/julia/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

using Plotly

y0 = randn(50)
y1 = randn(50)+1

Plotly.signin("TestBot", "r1neazxo9w")
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
