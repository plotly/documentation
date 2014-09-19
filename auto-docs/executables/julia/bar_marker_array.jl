using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [5, 4, -3, 2], 
    "marker" => ["color" => ["#447adb", "#447adb", "#db5a44", "#447adb"]], 
    "type" => "bar"
  ]
]
response = Plotly.plot(data, ["filename" => "bar-marker-array", "fileopt" => "overwrite"])
plot_url = response["url"]