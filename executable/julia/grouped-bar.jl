using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "name" => "SF Zoo", 
    "type" => "bar"
  ], 
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [12, 18, 29], 
    "name" => "LA Zoo", 
    "type" => "bar"
  ]
]
layout = [
  "xaxis" => ["type" => "category"], 
  "categories" => ["giraffes", "orangutans", "monkeys"], 
  "barmode" => "group"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "grouped-bar", "fileopt" => "overwrite"])
plot_url = response["url"]