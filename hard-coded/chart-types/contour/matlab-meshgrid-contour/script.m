signin('', '')

x = linspace(-2*pi,2*pi);
y = linspace(0,4*pi);
[X,Y] = meshgrid(x,y);
Z = sin(X)+cos(Y);

figure
contour(X,Y,Z)

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
