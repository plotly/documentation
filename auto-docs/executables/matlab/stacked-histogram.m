signin('theengineear', 'o9zlr0hy6z')

x0 = randn(500,1);
x1 = randn(500,1)+1;
trace1 = struct(...
  'x', x0, ...
  'type', 'histogram');
trace2 = struct(...
  'x', x1, ...
  'type', 'histogram');
data = {trace1, trace2};
layout = struct('barmode', 'stacked');

response = plotly(data, struct('layout', layout, 'filename', 'stacked-histogram', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url