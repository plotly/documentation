signin('TestBot', 'r1neazxo9w')

trace1 = struct(...
  'x', [0, 1, 2], ...
  'y', [10, 11, 12], ...
  'type', 'scatter');
trace2 = struct(...
  'x', [2, 3, 4], ...
  'y', [100, 110, 120], ...
  'xaxis', 'x2', ...
  'yaxis', 'y2', ...
  'type', 'scatter');
trace3 = struct(...
  'x', [3, 4, 5], ...
  'y', [1000, 1100, 1200], ...
  'xaxis', 'x3', ...
  'yaxis', 'y3', ...
  'type', 'scatter');
data = {trace1, trace2, trace3};
layout = struct(...
    'yaxis', struct('domain', [0, 0.266]), ...
    'legend', struct('traceorder', 'reversed'), ...
    'xaxis3', struct('anchor', 'y3'), ...
    'xaxis2', struct('anchor', 'y2'), ...
    'yaxis2', struct('domain', [0.366, 0.633]), ...
    'yaxis3', struct('domain', [0.733, 1]));
response = plotly(data, struct('layout', layout, 'filename', 'stacked-subplots', 'fileopt', 'overwrite'));
plot_url = response.url
