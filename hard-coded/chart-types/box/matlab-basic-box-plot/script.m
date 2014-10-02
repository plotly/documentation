signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% some random points
data1 = normrnd(5,1,100,1);
data2 = normrnd(6,1,100,1);

% a simple box plot with two boxes
fig = figure;
boxplot([data1,data2])

%--PLOTLY--%  
response = fig2plotly(fig);
plotly_url = response.url;
