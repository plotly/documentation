% Learn about API authentication here: {BASE_URL}/matlab/getting-started
% Find your api_key here: {BASE_URL}/settings/api

size = 100;
x = linspace(-2*pi, 2*pi, size);
y = linspace(-2*pi, 2*pi, size);
z = zeros(size, size);
for n = 1:size
    for m = 1:size
        r2 = x(n)^2 + y(m)^2;
        z(n, m) = sin(x(n))*cos(y(m))*sin(r2)/log(r2+1);
    end
end

signin('TestBot', 'r1neazxo9w')
data = {...
  struct(...
    'z', z, ...
    'x', x, ...
    'y', y, ...
    'type', 'contour')...
};
response = plotly(data, struct('filename', 'simple-contour', 'fileopt', 'overwrite'));
plot_url = response.url
