using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"], 
    "y" => [1, 3, 6], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "date-axes", "fileopt" => "overwrite"])
plot_url = response["url"]