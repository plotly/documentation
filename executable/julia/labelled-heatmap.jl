using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    "y" => ["Morning", "Afternoon", "Evening"], 
    "z" => {[1, 20, 30, 50, 1],[20, 1, 60, 80, 30],[30, 60, 1, -10, 20]}, 
    "type" => "heatmap"
  ]
]

response = Plotly.plot([data], ["filename" => "labelled-heatmap", "fileopt" => "overwrite"])
plot_url = response["url"]