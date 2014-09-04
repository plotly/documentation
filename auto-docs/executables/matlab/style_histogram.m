import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
signin('TestBot', 'r1neazxo9w')
trace1 = struct(...
  'x', x0, ...
  'histnorm', 'count', ...
  'name', 'control', ...
  'autobinx', false, ...
  'xbins', struct(...
    'start', -3.2, ...
    'end', 2.8, ...
    'size', 0.2), ...
  'marker', struct(...
    'color', 'fuchsia', ...
    'line', struct(...
      'color', 'grey', ...
      'width', 0), ...
    'opacity', 0.75), ...
  'type', 'histogram');
trace2 = struct(...
  'x', x1, ...
  'name', 'experimental', ...
  'autobinx', false, ...
  'xbins', struct(...
    'start', -1.8, ...
    'end', 4.2, ...
    'size', 0.2), ...
  'marker', struct('color', 'rgb(255, 217, 102)'), ...
  'opacity', 0.75, ...
  'type', 'histogram');
data = {trace1, trace2};
layout = struct(...
    'title', 'Sampled Results', ...
    'xaxis', struct('title', 'Value'), ...
    'yaxis', struct('title', 'Count'), ...
    'barmode', 'overlay', ...
    'bargap', 0.25, ...
    'bargroupgap', 0.3);
response = plotly(data, struct('layout', layout, 'auto_open', false, 'fileopt', 'overwrite', 'filename', 'style-histogram'));
plot_url = response.url