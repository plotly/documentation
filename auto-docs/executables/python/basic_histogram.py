# Learn about API authentication here: {{BASE_URL}}/python/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

import numpy as np
x = np.random.randn(500)

py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Histogram(
        x=x
    )
])
plot_url = py.plot(data, filename='basic-histogram', auto_open=False)
