signin('theengineear', 'o9zlr0hy6z')

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
    'scl', 'Bluered', ...
    'type', 'heatmap')...
};
layout = struct('title', 'Bluered');

response = plotly(data, struct('layout', layout, 'filename', 'Bluered-heatmap', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url