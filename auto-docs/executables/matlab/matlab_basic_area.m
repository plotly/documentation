signin('TestBot', 'r1neazxo9w')

y = [1, 5, 3;
     3, 2, 7;
     1, 5, 3;
     2, 6, 1];
fig = figure
area(y)

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', 'matlab-basic-area');
plotly_url = response.url;
