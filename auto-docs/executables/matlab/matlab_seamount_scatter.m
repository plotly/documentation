signin('TestBot', 'r1neazxo9w')

fig = figure; 
load seamount; 
s = 10;
c = linspace(1,10,length(x));
scatter(x,y,s,c)
zoom(2)

%--PLOTLY--% 

% strip = false => preserve MATLAB style! 

response = fig2plotly(fig, 'filename', 'matlab-seamount-scatter', 'strip', false); 
plotly_url = response.url;
