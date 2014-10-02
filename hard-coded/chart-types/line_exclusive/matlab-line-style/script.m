signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

x = 0:pi/10:2*pi;
y1 = sin(x);
y2 = sin(x-0.25);
y3 = sin(x-0.5);

fig = figure;
hold on

plot(x,y1,'Color',[150 244 100]/255,'LineWidth',3,'LineStyle','-.');
plot(x,y2,'Color',[201 24 100]/255,'LineWidth',3,'LineStyle','--');
plot(x,y3,'Color',[21 24 250]/255,'LineWidth',2,'LineStyle','o');


%--PLOTLY--%
response = fig2plotly(fig, 'strip', false); % <----- preserve MATLAB style!
plotly_url = response.url;
