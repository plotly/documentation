import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Scatter(
        x=[1, 2, 3, 4],
        y=[2, 1, 3, 4],
        error_y=ErrorY(
            array=[0.1, 0.2, 0.1, 0.1],
            type='data',
            symmetric=False,
            arrayminus=[0.2, 0.4, 1, 0.2]
        )
    )
])

plot_url = py.plot(data, filename='error-bar-asymmetric-array', auto_open=False)