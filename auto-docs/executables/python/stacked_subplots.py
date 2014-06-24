import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('TestBot', 'r1neazxo9w')

trace1 = Scatter(
    x=[0, 1, 2],
    y=[10, 11, 12]
)
trace2 = Scatter(
    x=[2, 3, 4],
    y=[100, 110, 120],
    xaxis='x2',
    yaxis='y2'
)
trace3 = Scatter(
    x=[3, 4, 5],
    y=[1000, 1100, 1200],
    xaxis='x3',
    yaxis='y3'
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    yaxis={'domain': [0, 0.266]},
    legend=Legend(
        traceorder='reversed'
    ),
    xaxis2=XAxis(
        anchor='y2'
    ),
    xaxis3=XAxis(
        anchor='y3'
    ),
    yaxis2=YAxis(
        domain=[0.366, 0.633]
    ),
    yaxis3=YAxis(
        domain=[0.733, 1]
    )
)
fig = Figure(data=data, layout=layout)

plot_url = py.plot(fig, filename='stacked-subplots', auto_open=False)