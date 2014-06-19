signin('theengineear', 'o9zlr0hy6z')

y = [1, 5, 3;
     3, 2, 7;
     1, 5, 3;
     2, 6, 1];
figure
area(y)

response = fig2plotly();
plotly_url = response.url;
