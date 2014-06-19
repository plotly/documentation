function [B,win_pos] =  stft (a,win,overlap,nfft)
%[B] =  Stft (a,winlen,overlap,nfft)
% this function calculate the STFT for a samples
% a - sample vector
% win - window samples or window size (for hanning window)
% overlap - overlap in samples
% nfft - fft size (could be >= winlen)
% (c) Shlomo Dubnov sdubnov@ucsd.edu

[a, nshift] = shiftdim(a);

if nargin < 2,
    win = 512;
end
if nargin < 3,
    overlap = win/2;
end

%win could be a number, in which case default is hanning, or actual window
%samples need to be provided
if length(win) == 1,
    window = hanning(win,'periodic');
    winlen = win;
else
    window = win(:);
    winlen = length(window);
end

if nargin < 4,
    nfft = winlen;
end

hop = winlen-overlap;
win_pos = [1: hop: length(a) - winlen];
b = zeros (winlen,length(win_pos));
B = zeros (nfft,length(win_pos));

for i=1:length(win_pos)
   b(:,i) = a(win_pos(i):win_pos(i)+winlen-1).*window;
end

B = fft(b,nfft);

%return value
B = B(1:nfft/2+1,:);