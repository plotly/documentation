using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "z" => [1 20 30; 20 1 60; 30 60 1; 50 80 -10; 1 30 20], 
    "x" => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    "y" => ["Morning", "Afternoon", "Evening"], 
    "type" => "heatmap"
  ]
]

response = Plotly.plot([data], ["filename" => "labelled-heatmap", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]