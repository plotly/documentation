signin('TestBot', 'r1neazxo9w')

[X,Y,Z] = peaks;
contour(X,Y,Z,20)

response = fig2plotly();
plotly_url = response.url;
