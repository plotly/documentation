signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

Y = [1.0 0.5 0.7
     2.0 1.5 2.0
     5.0 4.0 5.0
     4.0 4.0 4.5
     3.0 2.0 2.0];

bar(Y,'group');

fig2plotly();