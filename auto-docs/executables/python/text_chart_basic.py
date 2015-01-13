# Learn about API authentication here: {{BASE_URL}}/python/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 1, 1],
    mode='lines+markers+text',
    name='Lines, Markers and Text',
    text=['Text A', 'Text B', 'Text C'],
    textposition='top'
)
trace2 = Scatter(
    x=[0, 1, 2],
    y=[2, 2, 2],
    mode='markers+text',
    name='Markers and Text',
    text=['Text D', 'Text E', 'Text F'],
    textposition='bottom'
)
trace3 = Scatter(
    x=[0, 1, 2],
    y=[3, 3, 3],
    mode='lines+text',
    name='Lines and Text',
    text=['Text G', 'Text H', 'Text I'],
    textposition='bottom'
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    showlegend=False
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='text-chart-basic', auto_open=False)
