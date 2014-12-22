# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')


trace1 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 3, 6, 4, 5, 2, 3, 5, 4],
    name='Blue Trace'
)
trace2 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 4, 7, 8, 3, 6, 3, 3, 4],
    name='Orange Trace'
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='legend-labels', auto_open=False)
