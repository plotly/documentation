signin('TestBot', 'r1neazxo9w')

% some random points
x = normrnd(5,1,100,1);

% a simple histogram
fig = figure;
hist(x)

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', 'matlab-basic-histogram');
plotly_url = response.url;
