# Learn about API authentication here: {BASE_URL}/python/getting-started
# Find your api_key here: {BASE_URL}/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[8, 7, 6, 5, 4, 3, 2, 1, 0]
)
trace2 = Scatter(
    x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
    y=[0, 1, 2, 3, 4, 5, 6, 7, 8]
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis=XAxis(
        range=[2, 5]
    ),
    yaxis=YAxis(
        range=[2, 5]
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='axes-range-manual', auto_open=False)
