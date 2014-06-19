import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 2, 3],
    name='First Trace',
    showlegend=False
)
trace2 = Scatter(
    x=[0, 1, 2, 3],
    y=[8, 4, 2, 0],
    name='Second Trace',
    showlegend=True
)
data = Data([trace1, trace2])

plot_url = py.plot(data, filename='show-legend', auto_open=False)