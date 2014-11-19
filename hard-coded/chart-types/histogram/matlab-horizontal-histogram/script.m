signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% horizontal histogram
sd = 0.1;
mu = 1;
data = mu + sd*randn(1,5000);

% bin specs.
nbins = 50;

% make/plot histogram of data
fig = figure;
[h1 bins]= hist(data,nbins);
barh(bins,h1);

%--PLOTLY--%

% Strip MATLAB style by default!
response = fig2plotly(fig, 'filename', '>>>filename<<<');
plotly_url = response.url;
