signin('theengineear', 'o9zlr0hy6z')

% some random points
data1 = normrnd(5,1,100,1);
data2 = normrnd(6,1,100,1);

% a simple box plot with two boxes
figure;
boxplot([data1,data2])

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
