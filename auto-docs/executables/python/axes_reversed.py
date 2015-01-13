# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Scatter(
        x=[1, 2],
        y=[1, 2]
    )
])
layout = Layout(
    xaxis=XAxis(
        autorange='reversed'
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='axes-reversed', auto_open=False)
