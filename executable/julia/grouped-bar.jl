using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "name" => "SF Zoo", 
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "type" => "bar"
  ], 
  [
    "name" => "LA Zoo", 
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [12, 18, 29], 
    "type" => "bar"
  ]
]

layout = [
  "barmode" => "group", 
  "xaxis" => ["type" => "category"], 
  "categories" => ["giraffes", "orangutans", "monkeys"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "grouped-bar", "fileopt" => "overwrite"])
plot_url = response["url"]