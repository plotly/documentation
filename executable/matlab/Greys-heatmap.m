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
    'scl', 'Greys', ...
    'type', 'heatmap')...
};
layout = struct('title', 'Greys');

response = plotly(data, struct('layout', layout, 'filename', 'Greys-heatmap', 'fileopt', 'overwrite'));
plot_url = response.url