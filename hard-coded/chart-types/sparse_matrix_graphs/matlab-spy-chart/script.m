signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

fig = figure;

B = bucky;
spy(B)

%--PLOTLY--%

% Strip MATLAB style by default!

response = fig2plotly(fig, 'filename', '>>>filename<<<');
plotly_url = response.url;
