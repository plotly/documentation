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
    yaxis='y2'
)
trace3 = Scatter(
    x=[3, 4, 5],
    y=[1000, 1100, 1200],
    yaxis='y3'
)
data = Data([trace1, trace2, trace3])
layout = Layout(
    yaxis=YAxis(
        domain=[0, 0.33]
    ),
    legend=Legend(
        traceorder='reversed'
    ),
    yaxis2=YAxis(
        domain=[0.33, 0.66]
    ),
    yaxis3=YAxis(
        domain=[0.66, 1]
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, auto_open=False, filename='stacked-coupled-subplots')