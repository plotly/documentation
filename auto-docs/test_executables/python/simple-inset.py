import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[1, 2, 3],
    y=[4, 3, 2]
)
trace2 = Scatter(
    x=[20, 30, 40],
    y=[30, 40, 50],
    xaxis='x2',
    yaxis='y2'
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis2=XAxis(
        domain=[0.6, 0.95],
        anchor='y2'
    ),
    yaxis2=YAxis(
        domain=[0.6, 0.95],
        anchor='x2'
    )
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


plot_url = py.plot(fig, filename='simple-inset', auto_open=False)