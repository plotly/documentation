import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
trace1 = Histogram(
    x=x0,
    name='control',
    marker=Marker(
        line=Line(
            color='grey',
            width=0
        ),
        color='fuchsia',
        opacity=0.75
    ),
    autobinx=False,
    xbins=XBins(
        start=-3.2,
        end=2.8,
        size=0.2
    ),
    histnorm='count'
)
trace2 = Histogram(
    x=x1,
    name='experimental',
    marker=Marker(
        color='rgb(255, 217, 102)'
    ),
    opacity=0.75,
    autobinx=False,
    xbins=XBins(
        start=-1.8,
        end=4.2,
        size=0.2
    )
)
data = Data([trace1, trace2])
layout = Layout(
    title='Sampled Results',
    xaxis=XAxis(
        title='Value'
    ),
    yaxis=YAxis(
        title='Count'
    ),
    barmode='overlay',
    bargap=0.25,
    bargroupgap=0.3,
    bardir='v'
)
fig = Figure(data=data, layout=layout)

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(fig, filename='style-histogram', auto_open=False)