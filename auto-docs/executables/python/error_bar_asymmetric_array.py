# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')


data = Data([
    Scatter(
        x=[1, 2, 3, 4],
        y=[2, 1, 3, 4],
        error_y=ErrorY(
            type='data',
            symmetric=False,
            array=[0.1, 0.2, 0.1, 0.1],
            arrayminus=[0.2, 0.4, 1, 0.2]
        )
    )
])
plot_url = py.plot(data, filename='error-bar-asymmetric-array', auto_open=False)
