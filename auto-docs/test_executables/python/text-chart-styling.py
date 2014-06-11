import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 1, 1],
    text=['Text A', 'Text B', 'Text C'],
    textposition='top right',
    name='Lines, Markers and Text',
    mode='lines+markers+text',
    textfont=Font(
        family='sans serif',
        size=18,
        color='#1f77b4'
    )
)
trace2 = Scatter(
    x=[0, 1, 2],
    y=[2, 2, 2],
    text=['Text G', 'Text H', 'Text I'],
    textposition='bottom',
    name='Lines and Text',
    mode='lines+markers+text',
    textfont=Font(
        family='sans serif',
        size=18,
        color='#ff7f0e'
    )
)
data = Data([trace1, trace2])
layout = Layout(
    showlegend=False
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


plot_url = py.plot(fig, filename='text-chart-styling', auto_open=False)