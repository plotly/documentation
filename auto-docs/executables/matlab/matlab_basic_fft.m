signin('TestBot', 'r1neazxo9w')

% read audio text file  
sigtext = urlread('https://raw.githubusercontent.com/plotly/documentation/reorganization/aux/fft-matlab'); 

% conver to audio samples 
sig = str2num(sigtext); 

% sampling frequency
fs = 44100; 

% signal duration 
dur = 1;

% time axis vector
t = linspace(0,dur,fs); 

% fft length
N = 4096; 

% frequency axis vector 
freq = linspace(0,fs,N); 

% N-point fast fourier transform of signal
F = fft(sig,N); 

% Max frequency to visualize 
maxFreq = N/16; %~2756 Hz. 

% plot time domain waveform 
fig = figure; 
subplot(2,1,1)
plot(t, sig)
title('GUITAR C4 TEMPORAL/SPECTRAL VISUALIZATION'); 
ylabel('AMPLITUDE'); 
xlabel('TIME(s.)')

% plot frequency domain waveform
subplot(2,1,2)
plot(freq(1:maxFreq),abs(F(1:maxFreq))); 
ylabel('MAGNITUDE'); 
xlabel('FREQUENCY(Hz.)'); 

% PLOTLY
response = fig2plotly(fig,'strip',1);
plotly_url = response.url;
