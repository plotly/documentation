# Learn about API authentication here: plot.ly/python/getting-started
# Find your api_key here: plot.ly/settings/api

import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

import numpy as np

t = np.linspace(-1,1.2,2000)
x = (t**3)+(0.3*np.random.randn(2000))
y = (t**6)+(0.3*np.random.randn(2000))

trace1 = Scatter(
    x=x,
    y=y,
    mode='markers',
    name='points',
    marker=Marker(
        color='rgb(102,0,0)',
        size=2,
        opacity=0.4
    )
)
trace2 = Histogram2dContour(
    x=x,
    y=y,
    name='density',
    ncontours=20,
    colorscale='Hot',
    reversescale=True,
    showscale=False
)
trace3 = Histogram(
    x=x,
    name='x density',
    marker=Marker(
        color='rgb(102,0,0)'
    ),
    yaxis='y2'
)
trace4 = Histogram(
    y=y,
    name='y density',
    marker=Marker(
        color='rgb(102,0,0)'
    ),
    xaxis='x2'
)
data = Data([trace1, trace2, trace3, trace4])
layout = Layout(
    showlegend=False,
    autosize=False,
    width=600,
    height=550,
    xaxis=XAxis(
        domain=[0, 0.85],
        showgrid=False,
        zeroline=False
    ),
    yaxis=YAxis(
        domain=[0, 0.85],
        showgrid=False,
        zeroline=False
    ),
    margin=Margin(
        t=50
    ),
    hovermode='closest',
    bargap=0,
    xaxis2=XAxis(
        domain=[0.85, 1],
        showgrid=False,
        zeroline=False
    ),
    yaxis2=YAxis(
        domain=[0.85, 1],
        showgrid=False,
        zeroline=False
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='2dhistogram-contour-subplots', auto_open=False)
