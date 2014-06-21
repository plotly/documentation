signin('TestBot', 'r1neazxo9w')

x = linspace(-2*pi,2*pi);
y1 = sin(x);
y2 = cos(x);

figure
plot(x,y1,x,y2)

% PLOTL Y
response = fig2plotly();
plotly_url = response.url;
