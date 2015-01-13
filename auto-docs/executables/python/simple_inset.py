# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[1, 2, 3],
    y=[4, 3, 2]
)
trace2 = Scatter(
    x=[20, 30, 40],
    y=[30, 40, 50],
    xaxis='x2',
    yaxis='y2'
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis2=XAxis(
        domain=[0.6, 0.95],
        anchor='y2'
    ),
    yaxis2=YAxis(
        domain=[0.6, 0.95],
        anchor='x2'
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='simple-inset', auto_open=False)
