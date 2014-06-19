zeta = [0.01 .02 0.05 0.1 .2 .5 1 ];
colors = ['r' 'g' 'b' 'c' 'm' 'y' 'k'];

w = logspace(-1, 1, 1000);

figure;
for i = 1:7
    a = w.^2 - 1;
    b = 2*w*zeta(i);
    gain = sqrt(1./(a.^2 + b.^2));
    loglog(w, gain, 'color', colors(i), 'linewidth', 2);
    hold on;
end

% Set the axis limits
axis([0.1 10 0.01 100]);

% title and labels
<<<<<<< HEAD
title('$$|G|(\omega) \hbox{ vs } \omega$$','interpreter','latex');
xlabel('$$\omega$$','interpreter','latex');
ylabel('$$|G|(\omega)$$','interpreter','latex');


fig2plotly() 
=======
title('|G|[omega]  vs omega');
xlabel('omega');
ylabel('|G|[omega]');

response = fig2plotly(gcf, 'name', 'log_log_line');
plotly_url = response.url;
>>>>>>> fdf48d742e7cb937d6fad92ceafe0c8ce482f10d
