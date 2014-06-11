import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
data = Data([
    Histogram2d(
        x=x,
        y=y,
        scl=[[0, 'rgb(12,51,131)'], [0.25, 'rgb(10,136,186)'], [0.5, 'rgb(242,211,56)'], [0.75, 'rgb(242,143,56)'], [1, 'rgb(217,30,30)']],
        autobinx=False,
        autobiny=False,
        xbins=XBins(
            start=-3,
            end=3,
            size=0.1
        ),
        ybins=YBins(
            start=-2.5,
            end=4,
            size=0.1
        ),
        histnorm='probability'
    )
])

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(data, filename='2d-histogram-options', auto_open=False)