signin('TestBot', 'r1neazxo9w')

x = 0:pi/10:pi;
y = sin(x);
e = std(y)*ones(size(x));

figure
errorbar(x,y,e)

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
