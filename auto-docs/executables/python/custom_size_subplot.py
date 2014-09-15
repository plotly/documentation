import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[1, 2, 3],
    y=[4, 5, 6]
)
trace2 = Scatter(
    x=[20, 30, 40],
    y=[50, 60, 70],
    xaxis='x2',
    yaxis='y2'
)
data = Data([trace1, trace2])
layout = Layout(
    xaxis=XAxis(
        domain=[0, 0.7]
    ),
    xaxis2=XAxis(
        domain=[0.8, 1]
    ),
    yaxis2=YAxis(
        anchor='x2'
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, auto_open=False, filename='custom-size-subplot')