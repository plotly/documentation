signin('TestBot', 'r1neazxo9w')

data = {...
  struct(...
    'x', [1, 2, 3, 4], ...
    'y', [2, 1, 3, 4], ...
    'error_y', struct(...
      'type', 'data', ...
      'symmetric', false, ...
      'array', [0.1, 0.2, 0.1, 0.1], ...
      'arrayminus', [0.2, 0.4, 1, 0.2]), ...
    'type', 'scatter')...
};

response = plotly(data, struct('filename', 'error-bar-asymmetric-array', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url