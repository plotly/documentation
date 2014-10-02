signin('TestBot', 'r1neazxo9w')

x = 80 * randn(1, 30);
y = 80 * randn(size(x));
r = randi(1500, size(x));
c = randi(10, size(x));

fig = figure;

scatter(x, y, r, c, 'filled', 'MarkerEdgeColor', 'k')

%--PLOTLY--% 
response = fig2plotly(fig, 'strip', false); % <----- preserve MATLAB style!
plotly_url = response.url;
