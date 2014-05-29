signin('test-runner', '9h29fe3l0x')

y0 = randn(50,1);
y1 = randn(50,1)+1;

trace1 = struct(...
  'y', y0, ...
  'type', 'box');
trace2 = struct(...
  'y', y1, ...
  'type', 'box');
data = {trace1, trace2};

response = plotly(data, struct('filename', 'basic-box-plot', 'fileopt', 'overwrite'));
plot_url = response.url