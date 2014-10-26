signin('TestBot', 'r1neazxo9w')

x = 0:pi/10:2*pi;
y1 = sin(x);
y2 = sin(x-0.25);
y3 = sin(x-0.5);

fig = figure;
hold on

plot(x,y1,'Color',[50 204 10]/255,'LineWidth',3,'LineStyle','-.');
plot(x,y2,'Color',[21 24 100]/255,'LineWidth',3,'LineStyle','--');
plot(x,y3,'Color',[201 24 50]/255,'LineWidth',2,'LineStyle','o');

%--PLOTLY--%

% strip = false => preserve MATLAB style! 

response = fig2plotly(fig, 'filename', 'matlab-line-style', 'strip', false); 
plotly_url = response.url;
