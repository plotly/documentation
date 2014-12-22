# Learn about API authentication here: plot.ly/julia/getting-started
# Find your api_key here: plot.ly/settings/api

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")


trace1 = [
  "x" => ["giraffes", "orangutans", "monkeys"], 
  "y" => [20, 14, 23], 
  "name" => "SF Zoo", 
  "type" => "bar"
]
trace2 = [
  "x" => ["giraffes", "orangutans", "monkeys"], 
  "y" => [12, 18, 29], 
  "name" => "LA Zoo", 
  "type" => "bar"
]
data = [trace1, trace2]
layout = ["barmode" => "group"]
response = Plotly.plot(data, ["layout" => layout, "filename" => "grouped-bar", "fileopt" => "overwrite"])
plot_url = response["url"]
