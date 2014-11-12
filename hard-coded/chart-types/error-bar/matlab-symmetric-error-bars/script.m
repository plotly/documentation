signin('', '')

x = 0:pi/10:pi;
y = sin(x);
e = std(y)*ones(size(x));

fig = figure
errorbar(x,y,e)

% PLOTLY 
response = fig2plotly(fig, 'filename', '>>>filename<<<', 'strip', false);
plotly_url = response.url;
