import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Heatmap(
        z=[[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
        x=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y=['Morning', 'Afternoon', 'Evening']
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


plot_url = py.plot(data, filename='labelled-heatmap', auto_open=False)