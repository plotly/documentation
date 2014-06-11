import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[0, 1, 2, 3],
    y=[0, 2, 4, 6],
    visible=True
)
trace2 = Scatter(
    x=[0, 1, 2, 3],
    y=[8, 4, 2, 0],
    visible=False
)
data = Data([trace1, trace2])

if 'fig' not in locals():
    if 'data' not in locals():
        raise Exception('no data OR figure!!')
    fig = dict(data=data)  # assumes fig or data
if 'layout' not in fig:
    fig['layout'] = dict()
if 'margin' not in fig['layout']:
    fig['layout']['margin'] = dict(t=50, b=50, r=50, l=50)
fig['layout'].update(autosize=False, width=500, height=500)


plot_url = py.plot(data, filename='data-visible', auto_open=False)