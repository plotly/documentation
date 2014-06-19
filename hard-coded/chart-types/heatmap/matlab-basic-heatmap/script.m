signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

z = rand(50)*4+10;
figure;

colormap('hot');
imagesc(z);
colorbar;

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
