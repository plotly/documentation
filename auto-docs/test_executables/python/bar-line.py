import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[0, 1, 2, 3, 4, 5],
    y=[1.5, 1, 1.3, 0.7, 0.8, 0.9]
)
trace2 = Bar(
    x=[0, 1, 2, 3, 4, 5],
    y=[1, 0.5, 0.7, -1.2, 0.3, 0.4]
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


plot_url = py.plot(data, filename='bar-line', auto_open=False)