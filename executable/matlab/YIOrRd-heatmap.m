signin('test-runner', '9h29fe3l0x')

size = 50;
z = zeros(size, size);
for r = 1:size
    for c = 1:size
        z(r,c) = sqrt(r*c/size^2)
    end
end

data = {...
  struct(...
    'z', z, ...
    'scl', 'YIOrRd', ...
    'type', 'heatmap')...
};
layout = struct('title', 'YIOrRd');

response = plotly(data, struct('layout', layout, 'filename', 'YIOrRd-heatmap', 'fileopt', 'overwrite'));
plot_url = response.url