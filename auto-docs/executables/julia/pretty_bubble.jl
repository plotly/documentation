using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [974, 29796, 1391, 1713, 4959], 
  "y" => [43, 75, 64, 59, 72], 
  "mode" => "markers", 
  "name" => "Europe", 
  "text" => ["Afghanistan", "Bahrain", "Bangladesh", "Cambodia", "China"], 
  "marker" => [
    "color" => "#0074D9", 
    "size" => [5.647, 0.841, 12.265, 3.759, 36.313], 
    "sizemode" => "area", 
    "sizeref" => 0.01
  ], 
  "type" => "scatter"
]
trace2 = [
  "x" => [6223, 4797, 1441, 12569, 430], 
  "y" => [72, 42, 56, 50, 49], 
  "mode" => "markers", 
  "name" => "Africa", 
  "text" => ["Algeria", "Angola", "Benin", "Botswana", "Burundi"], 
  "marker" => [
    "color" => "#FF851B", 
    "size" => [5.773, 3.524, 2.842, 1.28, 2.896], 
    "sizemode" => "area", 
    "sizeref" => 0.1
  ], 
  "type" => "scatter"
]
trace3 = [
  "x" => [12779, 3822, 9065, 36319, 13171], 
  "y" => [75, 65, 72, 80, 78], 
  "mode" => "markers", 
  "name" => "Americas", 
  "text" => ["Argentina", "Bolivia", "Brazil", "Canada", "Chile"], 
  "marker" => [
    "color" => "#3D9970", 
    "size" => [6.348, 3.019, 13.784, 5.778, 4.035], 
    "sizemode" => "area", 
    "sizeref" => 0.1
  ], 
  "type" => "scatter"
]
data = [trace1, trace2, trace3]
layout = [
  "xaxis" => [
    "title" => "GDP per Capita", 
    "type" => "log"
  ], 
  "yaxis" => ["title" => "Life Expectancy"], 
  "annotations" => [
    [
      "x" => -0.15, 
      "y" => -0.15, 
      "xref" => "paper", 
      "yref" => "paper", 
      "text" => "Points are sized by<br>country population", 
      "showarrow" => false, 
      "xanchor" => "left"
    ]
  ], 
  "hovermode" => "closest"
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "pretty-bubble", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]