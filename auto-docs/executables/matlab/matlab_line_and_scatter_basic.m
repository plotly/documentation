signin('TestBot', 'r1neazxo9w')

% sampling rate
fs = 500; 

% duration 
dur = 1; 

% time vector 
t = 1 + linspace(-dur,dur,fs); 

% signal
sig = [t(1:length(t)/2) t(1:length(t)/2)]; 

% noise
sign = sig + 0.1*randn(1,length(sig)); 

% plot signal + noise
fig = figure; 
sp = plot(t,sig,'LineWidth',8); 
hold on
sn = plot(t,sign,'ro'); 

% title/labels
title('Singal Noise'); 
xlabel('Time (s.)'); 
ylabel('Amplitude'); 

%--PLOTLY--% 
response = fig2plotly(fig, 'filename', 'matlab-line-and-scatter-basic');
plotly_url = response.url; 
