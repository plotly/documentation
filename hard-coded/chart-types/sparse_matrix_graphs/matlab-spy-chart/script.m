signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

B = bucky;
spy(B)

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
