import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[1, 1, 1],
    text=['Text A', 'Text B', 'Text C'],
    textposition='top',
    name='Lines, Markers and Text',
    mode='lines+markers+text'
)
trace2 = Scatter(
    x=[0, 1, 2],
    y=[2, 2, 2],
    text=['Text D', 'Text E', 'Text F'],
    textposition='bottom',
    name='Markers and Text',
    mode='markers+text'
)
trace3 = Scatter(
    x=[0, 1, 2],
    y=[3, 3, 3],
    text=['Text G', 'Text H', 'Text I'],
    textposition='bottom',
    name='Lines and Text',
    mode='lines+text'
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    showlegend=False
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='text-chart-basic', auto_open=False)