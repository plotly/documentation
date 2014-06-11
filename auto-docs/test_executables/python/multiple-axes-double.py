import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[1, 2, 3],
    y=[40, 50, 60],
    name='yaxis data'
)
trace2 = Scatter(
    x=[2, 3, 4],
    y=[4, 5, 6],
    name='yaxis2 data',
    yaxis='y2'
)
data = Data([trace1, trace2])
layout = Layout(
    title='Double Y Axis Example',
    yaxis=YAxis(
        title='yaxis title'
    ),
    yaxis2=YAxis(
        title='yaxis2 title',
        titlefont=Font(
            color='rgb(148, 103, 189)'
        ),
        tickfont=Font(
            color='rgb(148, 103, 189)'
        ),
        side='right',
        overlaying='y'
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


plot_url = py.plot(fig, filename='multiple-axes-double', auto_open=False)