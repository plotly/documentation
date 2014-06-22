using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [1, 2, 3, 4], 
  "y" => [1, 4, 9, 16], 
  "name" => "$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$", 
  "type" => "scatter"
]
trace2 = [
  "x" => [1, 2, 3, 4], 
  "y" => [0.5, 2, 4.5, 8], 
  "name" => "$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "xaxis" => ["title" => "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"], 
  "yaxis" => ["title" => "$d, r \text{ (solar radius)}$"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "latex", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]