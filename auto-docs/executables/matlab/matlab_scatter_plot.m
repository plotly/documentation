signin('TestBot', 'r1neazxo9w')

% Load undersea elevation data
load seamount x y z;

% Create a scatter plot using the scatter function
fig = figure;
scatter(x, y, 10, z);

% Add title and axis labels
title('Undersea Elevation');
xlabel('Longitude');
ylabel('Latitude');

%--PLOTLY--% 

% strip = false => preserve MATLAB style! 

response = fig2plotly(fig, 'filename', 'matlab-scatter-plot', 'strip', false);
plotly_url = response.url;
