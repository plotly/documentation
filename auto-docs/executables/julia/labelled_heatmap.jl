using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "z" => [1 20 30; 20 1 60; 30 60 1; 50 80 -10; 1 30 20], 
    "x" => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    "y" => ["Morning", "Afternoon", "Evening"], 
    "type" => "heatmap"
  ]
]
response = Plotly.plot(data, ["fileopt" => "overwrite", "filename" => "labelled-heatmap"])
plot_url = response["url"]