import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Bar(
    x=['Trial 1', 'Trial 2', 'Trial 3'],
    y=[3, 6, 4],
    name='Control',
    error_y=ErrorY(
        array=[1, 0.5, 1.5],
        type='data',
        visible=True
    )
)
trace2 = Bar(
    x=['Trial 1', 'Trial 2', 'Trial 3'],
    y=[4, 7, 3],
    name='Experimental',
    error_y=ErrorY(
        array=[0.5, 1, 2],
        type='data',
        visible=True
    )
)
data = Data([trace1, trace2])
layout = Layout(
    barmode='group'
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


plot_url = py.plot(fig, filename='error-bar-bar', auto_open=False)