signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% Load undersea elevation data
load seamount x y z;

% Create a scatter plot using the scatter function
figure;
scatter(x, y, 10, z);

% Add title and axis labels
title('Undersea Elevation');
xlabel('Longitude');
ylabel('Latitude');

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
