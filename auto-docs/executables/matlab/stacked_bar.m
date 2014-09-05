signin('TestBot', 'r1neazxo9w')
trace1 = struct(...
  'x', { {'giraffes', 'orangutans', 'monkeys'} }, ...
  'y', [20, 14, 23], ...
  'name', 'SF Zoo', ...
  'type', 'bar');
trace2 = struct(...
  'x', { {'giraffes', 'orangutans', 'monkeys'} }, ...
  'y', [12, 18, 29], ...
  'name', 'LA Zoo', ...
  'type', 'bar');
data = {trace1, trace2};
layout = struct('barmode', 'stack');
response = plotly(data, struct('layout', layout, 'auto_open', false, 'fileopt', 'overwrite', 'filename', 'stacked-bar'));
plot_url = response.url