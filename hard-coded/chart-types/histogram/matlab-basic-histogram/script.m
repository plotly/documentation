signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% some random points
x = normrnd(5,1,100,1);

% a simple histogram
fig = figure;
hist(x)

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', '>>>filename<<<');
plotly_url = response.url;
