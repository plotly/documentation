using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

size = 50
z = rand(size, size)
for r = 1:size
  for c = 1:size
        z(r,c) = sqrt(r*c/size^2)
data = [
  [
    "z" => z, 
    "scl" => "Picnic", 
    "type" => "heatmap"
  ]
]
layout = ["title" => "Picnic"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "Picnic-heatmap", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]