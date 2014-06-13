% Load undersea elevation data
load seamount x y z;

% Create a scatter plot using the scatter function
figure;
scatter(x, y, 10, z);

% Add title and axis labels
title('Undersea Elevation');
xlabel('Longitude');
ylabel('Latitude');

fig2plotly();