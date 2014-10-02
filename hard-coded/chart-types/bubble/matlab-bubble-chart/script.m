signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

x = 80 * randn(1, 30);
y = 80 * randn(size(x));
r = randi(1500, size(x));
c = randi(10, size(x));

fig = figure;

scatter(x, y, r, c, 'filled', 'MarkerEdgeColor', 'k')

%--PLOTLY--% 

% strip = false => preserve MATLAB style! 

response = fig2plotly(fig, 'filename', '>>>filename<<<',  'strip', false); 
plotly_url = response.url;
