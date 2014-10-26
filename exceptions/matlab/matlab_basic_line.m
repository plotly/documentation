signin('TestBot', 'r1neazxo9w')

x = linspace(-2*pi,2*pi);
y1 = sin(x);
y2 = cos(x);

fig = figure; 
plot(x,y1,x,y2);

%--PLOTLY--%
response = fig2plotly(fig, 'filename', 'matlab-basic-line'); 
plotly_url = response.url; 
