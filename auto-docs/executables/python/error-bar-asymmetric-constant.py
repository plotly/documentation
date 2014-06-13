import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Scatter(
        x=[1, 2, 3, 4],
        y=[2, 1, 3, 4],
        error_y=ErrorY(
            value=15,
            type='percent',
            symmetric=False,
            valueminus=25
        )
    )
])

plot_url = py.plot(data, filename='error-bar-asymmetric-constant', auto_open=False)