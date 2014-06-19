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
    'scl', 'Electric', ...
    'type', 'heatmap')...
};
layout = struct('title', 'Electric');

response = plotly(data, struct('layout', layout, 'filename', 'Electric-heatmap', 'fileopt', 'overwrite', 'auto_open', 'false'));
plot_url = response.url