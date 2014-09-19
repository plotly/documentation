import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Bar(
        x=['giraffes', 'orangutans', 'monkeys'],
        y=[20, 14, 23]
    )
])
plot_url = py.plot(data, filename='basic-bar', auto_open=False)