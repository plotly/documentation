signin('TestBot', 'r1neazxo9w')
trace1 = struct(...
  'x', [1, 2, 3, 4], ...
  'y', [1, 4, 9, 16], ...
  'name', '$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$', ...
  'type', 'scatter');
trace2 = struct(...
  'x', [1, 2, 3, 4], ...
  'y', [0.5, 2, 4.5, 8], ...
  'name', '$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$', ...
  'type', 'scatter');
data = {trace1, trace2};
layout = struct(...
    'xaxis', struct('title', '$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$'), ...
    'yaxis', struct('title', '$d, r \text{ (solar radius)}$'));
response = plotly(data, struct('layout', layout, 'auto_open', false, 'fileopt', 'overwrite', 'filename', 'iframes'));
plot_url = response.url