% Create a set of points representing a point cloud
numpts = 192;
t = linspace( -pi, pi, numpts+1 )';
r = 0.1 + 5*sqrt( cos( 6*t ).^2 + (0.7).^2 );
x = r.*cos(t);
y = r.*sin(t);

% Construct a Delaunay Triangulation of the point set
dt  = DelaunayTri(x,y);
tri = dt(:,:);

% Create a triangle plot of the Delauney Triangulation
figure;
triplot(tri,x,y);
axis equal;

% Add title and axis labels
title('Curve reconstruction from a point cloud');
xlabel('x');
ylabel('y');

fig2plotly();