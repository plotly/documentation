# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 2, 3],
    name='First Trace',
    showlegend=False
)
trace2 = Scatter(
    x=[0, 1, 2, 3],
    y=[8, 4, 2, 0],
    name='Second Trace',
    showlegend=True
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='show-legend', auto_open=False)
