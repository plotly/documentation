import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Bar(
        x=['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
        y=[8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
        text=['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
        marker=Marker(
            color='rgb(142, 124, 195)'
        )
    )
])
layout = Layout(
    title='Number of graphs made this week',
    font=Font(
        family='Raleway, sans-serif'
    ),
    showlegend=False,
    xaxis={'tickangle': -45},
    yaxis={'zeroline': False, 'gridwidth': 2},
    bargap=0.05
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='bar-with-hover-text', auto_open=False)