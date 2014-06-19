signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% some random points
x = normrnd(5,1,100,1);

% a simple histogram
figure;
hist(x)

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
