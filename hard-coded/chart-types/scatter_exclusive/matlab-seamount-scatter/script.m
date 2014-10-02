signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

fig = figure; 
load seamount; 
s = 10;
c = linspace(1,10,length(x));
scatter(x,y,s,c)
zoom(2)

%--PLOTLY--% 

% strip = false => preserve MATLAB style! 

response = fig2plotly(fig, 'filename', '>>>filename<<<', 'strip', false); 
plotly_url = response.url;
