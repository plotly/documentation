import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
trace1 = Scatter(
    x=[1, 2, 3],
    y=[40, 50, 60],
    name='yaxis data'
)
trace2 = Scatter(
    x=[2, 3, 4],
    y=[4, 5, 6],
    name='yaxis2 data',
    yaxis='y2'
)
data = Data([trace1, trace2])
layout = Layout(
    title='Double Y Axis Example',
    yaxis=YAxis(
        title='yaxis title'
    ),
    yaxis2=YAxis(
        title='yaxis2 title',
        titlefont=Font(
            color='rgb(148, 103, 189)'
        ),
        tickfont=Font(
            color='rgb(148, 103, 189)'
        ),
        overlaying='y',
        side='right'
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, auto_open=False, filename='multiple-axes-double')