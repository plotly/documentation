signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% Create data for childhood disease cases
measles = [38556 24472 14556 18060 19549 8122 28541 7880 3283 4135 7953 1884]';
mumps = [20178 23536 34561 37395 36072 32237 18597 9408 6005 6268 8963 13882]';
chickenPox = [37140 32169 37533 39103 33244 23269 16737 5411 3435 6052 12825 23332]';

% Create a stacked bar chart using the bar function
fig = figure;
bar(1:12, [measles mumps chickenPox], 0.5, 'stack');
axis([0 13 0 100000]);
title('Childhood diseases by month');
xlabel('Month');
ylabel('Cases (in thousands)');
legend('Measles', 'Mumps', 'Chicken pox');

% PLOTLY 
response = fig2plotly(fig,'strip',1);
plotly_url = response.url;
