% Create some data
eb = 0:5;
SER = [0.1447 0.1112 0.0722 0.0438 0.0243 0.0122];
BER = [0.0753 0.0574 0.0370 0.0222 0.0122 0.0061];

% Create a y-axis semilog plot using the semilogy function
% Plot SER data in blue and BER data in red
figure;
semilogy(eb, SER, 'bo-');
hold on;
semilogy(eb, BER, 'r^-');

% Turn on the grid
grid on;

% Add title and axis labels
title('Performance of Baseband QPSK');
xlabel('EbNo (dB)');
ylabel('SER and BER');

fig2plotly();
