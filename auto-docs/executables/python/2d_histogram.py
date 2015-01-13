# Learn about API authentication here: {{BASE_URL}}/python/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1

py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Histogram2d(
        x=x,
        y=y
    )
])
plot_url = py.plot(data, filename='2d-histogram', auto_open=False)
