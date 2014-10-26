signin('TestBot', 'r1neazxo9w')

%read audio text file  
sigtext = urlread('https://raw.githubusercontent.com/plotly/documentation/master/aux/fft-matlab');

%convert to audio samples 
sig = str2num(sigtext);

%sampling frequency
fs = 44100; 

%signal duration 
dur = 1;

%time axis vector
t = linspace(0,dur,fs); 

%fft length
N = 4096; 

%hop size
hop = N/4; 

%overlap
overlap = N - hop; 

%take the STFT of the signal 
S = stft(sig,overlap); 

%Max frequency to visualize 
maxFreq = N/8; 

%time vector
time = linspace(0,dur,size(S,2)); 

%frequency vector
freq= linspace(0,fs*maxFreq/N,size(S(1:maxFreq,:),1)); 

%set colour scale range (dB)
clims = [-100 60]; 

%plot the STFT heatmap 
fig = figure; 
imagesc(time,freq,20*log10(abs(S(1:maxFreq,:))),clims)
colorbar
axis xy
xlabel('TIME (s.)')
ylabel('FREQUENCY (Hz.)')
title(['C4 GUITAR: MAGNITUDE SPECTROGRAM ANALYSIS']);

% PLOTLY 
response = fig2plotly(fig, 'strip', 1); 
plotly_url = response.url; 
