signin('theengineear', 'o9zlr0hy6z')

x = 1:10;
y = sin(x);
e = std(y)*ones(size(x));
h = errorbar(x,y,e, 'o-');
set(h, 'MarkerSize', 10, 'MarkerFaceColor', [.3 1 .3], ...
    'MarkerEdgeColor', [0 .5 0]);

fig2plotly();
