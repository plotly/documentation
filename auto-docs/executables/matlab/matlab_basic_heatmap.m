signin('TestBot', 'r1neazxo9w')

z = rand(50)*4+10;
figure;

colormap('hot');
imagesc(z);
colorbar;

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
