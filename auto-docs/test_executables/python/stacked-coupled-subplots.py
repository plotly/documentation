import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[10, 11, 12]
)
trace2 = Scatter(
    x=[2, 3, 4],
    y=[100, 110, 120],
    yaxis='y2'
)
trace3 = Scatter(
    x=[3, 4, 5],
    y=[1000, 1100, 1200],
    yaxis='y3'
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    yaxis=YAxis(
        domain=[0, 0.33]
    ),
    legend=Legend(
        traceorder='reversed'
    ),
    yaxis2=YAxis(
        domain=[0.33, 0.66]
    ),
    yaxis3=YAxis(
        domain=[0.66, 1]
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


plot_url = py.plot(fig, filename='stacked-coupled-subplots', auto_open=False)