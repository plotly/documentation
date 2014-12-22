# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')


data = Data([
    Scatter(
        x=[0, 2, 4],
        y=[0, 4, 2]
    )
])
plot_url = py.plot(data, filename='privacy-false', world_readable=False, auto_open=False)
