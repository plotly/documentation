using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "type" => "bar"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "basic-bar"])
plot_url = response["url"]