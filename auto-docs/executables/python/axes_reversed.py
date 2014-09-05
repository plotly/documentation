import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Scatter(
        x=[1, 2],
        y=[1, 2]
    )
])
layout = Layout(
    xaxis=XAxis(
        autorange='reversed'
    )
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, auto_open=False, filename='axes-reversed')