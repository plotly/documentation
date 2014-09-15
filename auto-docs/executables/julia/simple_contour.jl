using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
size = 100
x = linspace(-2*pi, 2*pi, size)
y = linspace(-2*pi, 2*pi, size)
z = rand(size, size)
for i = 1:size
  for j = 1:size
    r2 = (x(i)^2 + y(j)^2)
        z(i,j) = sin(x(i))*cos(y(j))*sin(r2)/log(r2+1)

data = [
  [
    "z" => z, 
    "x" => x, 
    "y" => y, 
    "type" => "contour"
  ]
]
response = Plotly.plot(data, ["fileopt" => "overwrite", "filename" => "simple-contour"])
plot_url = response["url"]