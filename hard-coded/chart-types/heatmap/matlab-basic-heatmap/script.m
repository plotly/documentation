signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

size = 50;
z = zeros(size, size);
for r = 1:size
    for c = 1:size
        z(r,c) = r+c;
    end
end
figure;

colormap('hot');
imagesc(z);
colorbar;

% PLOTLY
response = fig2plotly();
plotly_url = response.url;
