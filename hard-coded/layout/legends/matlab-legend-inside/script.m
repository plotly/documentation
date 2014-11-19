signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

fig = figure;
plot([1 2 3 4 5 6 7 8],[1 2 5 6 3 3 2 5]);
hold on
plot([1 2 3 4 5 6 7 8],[1 6 2 3 4 7 7 8]);
legend('blue trace','orange trace');

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', '>>>filename<<<');
plotly_url = response.url;
