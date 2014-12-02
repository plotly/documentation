signin('TestBot', 'r1neazxo9w')

fig = figure;
plot([1 2 3 4 5 6 7 8],[1 2 5 6 3 3 2 5]);
hold on
plot([1 2 3 4 5 6 7 8],[1 6 2 3 4 3 7 8]);
legend('blue trace','orange trace','Location','BestOutside');

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', 'matlab-legend-outside');
plotly_url = response.url;
