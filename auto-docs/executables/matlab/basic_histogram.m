% Learn about API authentication here: plot.ly/matlab/getting-started
% Find your api_key here: plot.ly/settings/api

signin('TestBot', 'r1neazxo9w')

x = randn(500,1);

data = {...
  struct(...
    'x', x, ...
    'type', 'histogram')...
};
response = plotly(data, struct('filename', 'basic-histogram', 'fileopt', 'overwrite'));
plot_url = response.url
