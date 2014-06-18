signin('theengineear', 'o9zlr0hy6z')

%stacked histogram 
sd1 = 0.1; 
mu1 = 0; 
data1 = mu1+ sd1.*randn(5000,1); 
sd2 = 0.1; 
mu2 = 0.3; 
data2 = mu2+ sd2.*randn(5000,1); 
%bin specs. 
nbins = 50; 
bound = 1; 
bins = linspace(-bound,bound,nbins); 

%first histogram 
y1 = hist(data1, bins); 
%second histogram
y2 = hist(data2, bins);

%overlay histograms 
bar(y1.');
hold on; 
bar(y2.','r');

%relabelx-axis range/ticks 
xd = findobj('-property','XData'); 

for i=1:2
    dat = get(xd(i),'XData');
    dat = 2*dat/nbins - bound; 
    set(xd(i),'XData',dat); 
end
 
%PLOTLY 
response = fig2plotly(fig,'strip',1);
plotly_url = response.url;
