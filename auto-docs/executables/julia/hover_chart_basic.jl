using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [0, 1, 2], 
    "y" => [1, 3, 2], 
    "mode" => "markers", 
    "text" => ["Text A", "Text B", "Text C"], 
    "type" => "scatter"
  ]
]
layout = ["title" => "Hover over the points to see the text"]
response = Plotly.plot(data, ["layout" => layout, "fileopt" => "overwrite", "filename" => "hover-chart-basic"])
plot_url = response["url"]