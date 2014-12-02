# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1

data = Data([
    Histogram2d(
        x=x,
        y=y
    )
])
plot_url = py.plot(data, filename='2d-histogram', auto_open=False)
