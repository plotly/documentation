import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[1, 2, 3],
    y=[4, 5, 6]
)
trace2 = Scatter(
    x=[20, 30, 40],
    y=[50, 60, 70],
    xaxis='x2',
    yaxis='y2'
)
trace3 = Scatter(
    x=[300, 400, 500],
    y=[600, 700, 800],
    xaxis='x3',
    yaxis='y3'
)
trace4 = Scatter(
    x=[4000, 5000, 6000],
    y=[7000, 8000, 9000],
    xaxis='x4',
    yaxis='y4'
)
data = Data([trace1, trace2, trace3, trace4])
layout = Layout(
    xaxis=XAxis(
        domain=[0, 0.45]
    ),
    yaxis=YAxis(
        domain=[0, 0.45]
    ),
    xaxis2=XAxis(
        domain=[0.55, 1]
    ),
    xaxis3=XAxis(
        domain=[0, 0.45],
        anchor='y3'
    ),
    xaxis4=XAxis(
        domain=[0.55, 1],
        anchor='y4'
    ),
    yaxis2=YAxis(
        domain=[0, 0.45],
        anchor='x2'
    ),
    yaxis3=YAxis(
        domain=[0.55, 1]
    ),
    yaxis4=YAxis(
        domain=[0.55, 1],
        anchor='x4'
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


plot_url = py.plot(fig, filename='multiple-subplots', auto_open=False)