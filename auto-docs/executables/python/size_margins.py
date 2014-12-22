# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')


data = Data([
    Scatter(
        x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
        y=[0, 1, 2, 3, 4, 5, 6, 7, 8]
    )
])
layout = Layout(
    autosize=False,
    width=500,
    height=500,
    margin=Margin(
        l=50,
        r=50,
        b=100,
        t=100,
        pad=4
    ),
    paper_bgcolor='#7f7f7f',
    plot_bgcolor='#c7c7c7'
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='size-margins', auto_open=False)
