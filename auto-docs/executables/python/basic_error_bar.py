import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')

data = Data([
    Scatter(
        x=[0, 1, 2],
        y=[6, 10, 2],
        error_y=ErrorY(
            type='data',
            array=[1, 2, 3],
            visible=True
        )
    )
])
plot_url = py.plot(data, filename='basic-error-bar', auto_open=False)
