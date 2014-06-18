x = 0:pi/10:pi;
y = sin(x);
e = std(y)*ones(size(x));

figure
errorbar(x,y,e)

response = fig2plotly();
plotly_url = response.url;
