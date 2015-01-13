# Learn about API authentication here: {{BASE_URL}}/python/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

import numpy as np
y0 = np.random.randn(50)
y1 = np.random.randn(50)+1

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Box(
    y=y0
)
trace2 = Box(
    y=y1
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='basic-box-plot', auto_open=False)
