using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

size = 50
z = rand(size, size)
for r = 1:size
  for c = 1:size
        z(r,c) = sqrt(r*c/size^2)

data = [
  [
    "z" => z, 
    "scl" => "RdBu", 
    "type" => "heatmap"
  ]
]
layout = ["title" => "RdBu"]

response = Plotly.plot([data], ["layout" => layout, "filename" => "RdBu-heatmap", "fileopt" => "overwrite"])
plot_url = response["url"]