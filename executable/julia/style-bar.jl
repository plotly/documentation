using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "name" => "SF Zoo", 
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "type" => "bar", 
    "marker" => [
      "color" => "orange", 
      "line" => ["color" => "grey"]
    ]
  ], 
  [
    "name" => "LA Zoo", 
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [12, 18, 29], 
    "type" => "bar", 
    "marker" => [
      "color" => "blue", 
      "line" => [
        "color" => "grey", 
        "width" => 3
      ]
    ]
  ]
]

layout = [
  "title" => "Animal Population", 
  "barmode" => "group", 
  "yaxis" => ["title" => "# of animals (thousands)"], 
  "xaxis" => ["type" => "category"], 
  "categories" => ["giraffes", "orangutans", "monkeys"], 
  "bargap" => 0.25, 
  "bargroupgap" => 0.3, 
  "orientation" => "v"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "style-bar", "fileopt" => "overwrite"])
plot_url = response["url"]