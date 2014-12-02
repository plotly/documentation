# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

import numpy as np
x = np.random.randn(500)

data = Data([
    Histogram(
        x=x
    )
])
plot_url = py.plot(data, filename='basic-histogram', auto_open=False)
