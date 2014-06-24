import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 1, 1],
    mode='lines+markers+text',
    name='Lines, Markers and Text',
    text=['Text A', 'Text B', 'Text C'],
    textfont=Font(
        family='sans serif',
        size=18,
        color='#1f77b4'
    ),
    textposition='top right'
)
trace2 = Scatter(
    x=[0, 1, 2],
    y=[2, 2, 2],
    mode='lines+markers+text',
    name='Lines and Text',
    text=['Text G', 'Text H', 'Text I'],
    textfont=Font(
        family='sans serif',
        size=18,
        color='#ff7f0e'
    ),
    textposition='bottom'
)
data = Data([trace1, trace2])
layout = Layout(
    showlegend=False
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='text-chart-styling', auto_open=False)