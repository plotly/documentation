figure
load seamount
s = 10;
c = linspace(1,10,length(x));
scatter(x,y,s,c)
zoom(2)

response = fig2plotly();
plotly_url = response.url;
