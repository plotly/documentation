import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Scatter(
        x=[0, 1, 2],
        y=[6, 10, 2],
        error_y=ErrorY(
            array=[1, 2, 3],
            type='data',
            visible=True
        )
    )
])

plot_url = py.plot(data, filename='basic-error-bar', auto_open=False)