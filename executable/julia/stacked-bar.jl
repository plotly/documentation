using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

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
layout = [
  "xaxis" => ["type" => "category"], 
  "categories" => ["giraffes", "orangutans", "monkeys"], 
  "barmode" => "stack"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "stacked-bar", "fileopt" => "overwrite"])
plot_url = response["url"]