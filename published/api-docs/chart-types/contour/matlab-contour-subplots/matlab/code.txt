signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

[X,Y,Z] = peaks;
contour(X,Y,Z,20)

response = fig2plotly();
plotly_url = response.url;
