import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[1, 3, 2, 3, 1],
    mode='lines+markers',
    name='linear',
    line=Line(
        shape='linear'
    )
)
trace2 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[6, 8, 7, 8, 6],
    mode='lines+markers',
    name='spline',
    text=["tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'"],
    line=Line(
        shape='spline'
    )
)
trace3 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[11, 13, 12, 13, 11],
    mode='lines+markers',
    name='vhv',
    line=Line(
        shape='vhv'
    )
)
trace4 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[16, 18, 17, 18, 16],
    mode='lines+markers',
    name='hvh',
    line=Line(
        shape='hvh'
    )
)
trace5 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[21, 23, 22, 23, 21],
    mode='lines+markers',
    name='vh',
    line=Line(
        shape='vh'
    )
)
trace6 = Scatter(
    x=[1, 2, 3, 4, 5],
    y=[26, 28, 27, 28, 26],
    mode='lines+markers',
    name='hv',
    line=Line(
        shape='hv'
    )
)
data = Data([trace1, trace2, trace3, trace4, trace5, trace6])
layout = Layout(
    legend=Legend(
        y=0.5,
        traceorder='reversed',
        yref='paper'
    )
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='line-shapes', auto_open=False)