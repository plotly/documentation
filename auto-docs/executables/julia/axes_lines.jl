using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  "type" => "scatter"
]
trace2 = [
  "x" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "y" => [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "xaxis" => [
    "showgrid" => true, 
    "zeroline" => true, 
    "showline" => true, 
    "mirror" => "ticks", 
    "gridcolor" => "#bdbdbd", 
    "gridwidth" => 2, 
    "zerolinecolor" => "#969696", 
    "zerolinewidth" => 4, 
    "linecolor" => "#636363", 
    "linewidth" => 6
  ], 
  "yaxis" => [
    "showgrid" => true, 
    "zeroline" => true, 
    "showline" => true, 
    "mirror" => "ticks", 
    "gridcolor" => "#bdbdbd", 
    "gridwidth" => 2, 
    "zerolinecolor" => "#969696", 
    "zerolinewidth" => 4, 
    "linecolor" => "#636363", 
    "linewidth" => 6
  ]
]
response = Plotly.plot(data, ["layout" => layout, "fileopt" => "overwrite", "filename" => "axes-lines"])
plot_url = response["url"]