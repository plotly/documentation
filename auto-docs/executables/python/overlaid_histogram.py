# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Histogram(
    x=x0,
    opacity=0.75
)
trace2 = Histogram(
    x=x1,
    opacity=0.75
)
data = Data([trace1, trace2])
layout = Layout(
    barmode='overlay'
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='overlaid-histogram', auto_open=False)
