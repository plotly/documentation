signin('TestBot', 'r1neazxo9w')

% some random points
x = normrnd(5,1,100,1);

% a simple histogram
figure;
hist(x)

response = fig2plotly();
plotly_url = response.url;
