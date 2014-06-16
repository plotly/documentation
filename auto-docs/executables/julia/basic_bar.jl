using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "type" => "bar"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-bar", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]