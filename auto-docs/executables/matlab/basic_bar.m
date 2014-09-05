signin('TestBot', 'r1neazxo9w')
data = {...
  struct(...
    'x', { {'giraffes', 'orangutans', 'monkeys'} }, ...
    'y', [20, 14, 23], ...
    'type', 'bar')...
};
response = plotly(data, struct('auto_open', false, 'fileopt', 'overwrite', 'filename', 'basic-bar'));
plot_url = response.url