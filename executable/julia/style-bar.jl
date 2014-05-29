using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [20, 14, 23], 
    "name" => "SF Zoo", 
    "marker" => [
      "line" => ["color" => "grey"], 
      "color" => "orange"
    ], 
    "type" => "bar"
  ], 
  [
    "x" => ["giraffes", "orangutans", "monkeys"], 
    "y" => [12, 18, 29], 
    "name" => "LA Zoo", 
    "marker" => [
      "line" => [
        "color" => "grey", 
        "width" => 3
      ], 
      "color" => "blue"
    ], 
    "type" => "bar"
  ]
]
layout = [
  "title" => "Animal Population", 
  "xaxis" => ["type" => "category"], 
  "yaxis" => ["title" => "# of animals (thousands)"], 
  "categories" => ["giraffes", "orangutans", "monkeys"], 
  "barmode" => "group", 
  "bargap" => 0.25, 
  "bargroupgap" => 0.3, 
  "orientation" => "v"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "style-bar", "fileopt" => "overwrite"])
plot_url = response["url"]