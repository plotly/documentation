signin('TestBot', 'r1neazxo9w')

% some random points
x = normrnd(5,1,100,1);

% a simple histogram
fig = figure;
hist(x)

% PLOTLY 
response = fig2plotly(fig,'strip',1);
plotly_url = response.url;
