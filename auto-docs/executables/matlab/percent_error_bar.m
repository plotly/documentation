signin('TestBot', 'r1neazxo9w')

data = {...
  struct(...
    'x', [0, 1, 2], ...
    'y', [6, 10, 2], ...
    'error_y', struct(...
      'type', 'percent', ...
      'value', 50, ...
      'visible', true), ...
    'type', 'scatter')...
};

response = plotly(data, struct('filename', 'percent-error-bar', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url