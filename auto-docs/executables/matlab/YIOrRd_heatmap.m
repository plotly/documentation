signin('TestBot', 'r1neazxo9w')

size = 50;
z = zeros(size, size);
for r = 1:size
    for c = 1:size
        z(r,c) = r+c
    end
end

data = {...
  struct(...
    'z', z, ...
    'scl', 'YIOrRd', ...
    'type', 'heatmap')...
};
layout = struct('title', 'YIOrRd');

response = plotly(data, struct('layout', layout, 'filename', 'YIOrRd-heatmap', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url