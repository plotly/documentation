import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Scatter(
        x=[0, 1, 2],
        y=[1, 3, 2],
        mode='markers',
        text=['Text A', 'Text B', 'Text C']
    )
])
layout = Layout(
    title='Hover over the points to see the text'
)
fig = Figure(data=data, layout=layout)
plot_url = py.plot(fig, filename='hover-chart-basic', auto_open=False)