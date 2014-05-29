using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [1, 4, 9, 16], 
    "name" => "$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$", 
    "type" => "scatter"
  ], 
  [
    "x" => [1, 2, 3, 4], 
    "y" => [0.5, 2, 4.5, 8], 
    "name" => "$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$", 
    "type" => "scatter"
  ]
]
layout = [
  "xaxis" => ["title" => "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"], 
  "yaxis" => ["title" => "$d, r \text{ (solar radius)}$"]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "latex", "fileopt" => "overwrite"])
plot_url = response["url"]