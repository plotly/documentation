x = 0:pi/10:pi;
y = sin(x);
e = std(y)*ones(size(x));

figure
errorbar(x,y,e)

fig2plotly();