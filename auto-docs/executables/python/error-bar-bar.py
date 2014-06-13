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

plot_url = py.plot(fig, filename='error-bar-bar', auto_open=False)