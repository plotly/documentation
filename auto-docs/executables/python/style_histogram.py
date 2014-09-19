import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1

trace1 = Histogram(
    x=x0,
    histnorm='count',
    name='control',
    autobinx=False,
    xbins=XBins(
        start=-3.2,
        end=2.8,
        size=0.2
    ),
    marker=Marker(
        color='fuchsia',
        line=Line(
            color='grey',
            width=0
        ),
        opacity=0.75
    )
)
trace2 = Histogram(
    x=x1,
    name='experimental',
    autobinx=False,
    xbins=XBins(
        start=-1.8,
        end=4.2,
        size=0.2
    ),
    marker=Marker(
        color='rgb(255, 217, 102)'
    ),
    opacity=0.75
)
data = Data([trace1, trace2])
layout = Layout(
    title='Sampled Results',
    xaxis=XAxis(
        title='Value'
    ),
    yaxis=YAxis(
        title='Count'
    ),
    barmode='overlay',
    bargap=0.25,
    bargroupgap=0.3
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='style-histogram', auto_open=False)