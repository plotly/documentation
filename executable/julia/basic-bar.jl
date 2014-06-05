using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "type" => "bar"
  ]
]

response = Plotly.plot([data], ["filename" => "basic-bar", "fileopt" => "overwrite"])
plot_url = response["url"]