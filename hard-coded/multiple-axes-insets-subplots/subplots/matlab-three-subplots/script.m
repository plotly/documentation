signin({% if username %}'{{username}}'{% else %}'MATLABAPI'{% endif %}, {% if api_key %}'{{api_key}}'{% else %}'jzt0hr6tzv'{% endif %})

% Calculate the data for the plots
fm = 20e3;
fc = 100e3;
tstep = 100e-9;
tmax  = 200e-6;
t = 0:tstep:tmax;
xam = (1 + cos(2*pi*fm*t)).*cos(2*pi*fc*t);

T = 1e-6;
N = 200;
nT = 0:T:N*T;
xn = (1 + cos(2*pi*fm*nT)).*cos(2*pi*fc*nT);

% Create the stem plot for the Sampled Signal spanning positions 1 & 3 of a 2x2 grid
figure;
subplot(2, 2, [1 3]);
stem(nT,xn);
xlabel('t');
ylabel('x[n]');
title('Sampled Every T=1e-6 ');

% Create the xy plot for the AM Modulated signal in position 2 of a 2x2 grid
subplot(2, 2, 2);
plot(t, xam);
axis([0 200e-6 -2 2]);
xlabel('t');
ylabel('xam(t) ');
title('AM Modulated Signal');

% Create the xy plot for the reconstructed signal in position 4 of a 2x2 grid
subplot(2, 2, 4);
plot(nT, xn);
xlabel('t');
ylabel('x_zoh(t)');
title('Reconstruction at T=4e-6 ');

% PLOTLY 
response = fig2plotly();
plotly_url = response.url;
