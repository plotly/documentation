using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

size = 50
z = rand(size, size)
for r = 1:size
  for c = 1:size
        z(r,c) = r+c

data = [
  [
    "z" => z, 
    "scl" => "Blackbody", 
    "type" => "heatmap"
  ]
]
layout = ["title" => "Blackbody"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "Blackbody-heatmap", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]