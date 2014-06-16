% Generate some data using the besselj function
x = 0:0.2:10;
y0 = besselj(0,x);
y1 = besselj(1,x);
y2 = besselj(2,x);
y3 = besselj(3,x);
y4 = besselj(4,x);
y5 = besselj(5,x);
y6 = besselj(6,x);

% Plot the points from the Bessel functions using standard marker types
figure;
plot(x, y0, 'r+', x, y1, 'go', x, y2, 'b*', x, y3, 'cx', ...
    x, y4, 'ms', x, y5, 'yd', x, y6, 'kv');

response = fig2plotly();
plotly_url = response.url;
