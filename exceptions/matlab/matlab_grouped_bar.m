signin('TestBot', 'r1neazxo9w')

Y = [1.0 0.5 0.7
     2.0 1.5 2.0
     5.0 4.0 5.0
     4.0 4.0 4.5
     3.0 2.0 2.0];

bar(Y,'group');

response = fig2plotly();
plotly_url = response.url;
