import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Scatter(
        x=[2, 4, 6],
        y=[-3, 0, 3]
    )
])
layout = Layout(
    showlegend=False,
    xaxis=XAxis(
        rangemode='tozero',
        autorange=True
    ),
    yaxis=YAxis(
        rangemode='nonnegative',
        autorange=True
    )
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='axes-range-mode', auto_open=False)