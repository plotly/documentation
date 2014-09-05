import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[1, 2, 3, 4],
    y=[10, 11, 12, 13],
    mode='markers',
    marker=Marker(
        color=['hsl(0,100,40)', 'hsl(33,100,40)', 'hsl(66,100,40)', 'hsl(99,100,40)'],
        size=[12, 22, 32, 42],
        opacity=[0.6, 0.7, 0.8, 0.9]
    )
)
trace2 = Scatter(
    x=[1, 2, 3, 4],
    y=[11, 12, 13, 14],
    mode='markers',
    marker=Marker(
        color='rgb(31, 119, 180)',
        size=18,
        symbol=['circle', 'square', 'diamond', 'cross']
    )
)
trace3 = Scatter(
    x=[1, 2, 3, 4],
    y=[12, 13, 14, 15],
    mode='markers',
    marker=Marker(
        size=18,
        line=Line(
            color=['rgb(120,120,120)', 'rgb(120,120,120)', 'red', 'rgb(120,120,120)'],
            width=[2, 2, 6, 2]
        )
    )
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    showlegend=False
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, auto_open=False, filename='bubblechart')