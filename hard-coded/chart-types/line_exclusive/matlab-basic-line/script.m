signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

x = linspace(-2*pi,2*pi);
y1 = sin(x);
y2 = cos(x);

fig = figure; 
plot(x,y1,x,y2);

%--PLOTLY--%
response = fig2plotly(fig, 'filename', '>>>filename<<<'); 
plotly_url = response.url; 
