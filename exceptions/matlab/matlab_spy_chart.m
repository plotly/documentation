signin('TestBot', 'r1neazxo9w')

fig = figure;

B = bucky;
spy(B)

%--PLOTLY--%

% Strip MATLAB style by default!

response = fig2plotly(fig, 'filename', 'matlab-spy-chart');
plotly_url = response.url;
