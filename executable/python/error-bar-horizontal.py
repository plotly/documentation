import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = Data([
    Scatter(
        x=[1, 2, 3, 4],
        y=[2, 1, 3, 4],
        error_x=ErrorX(
            value=10,
            type='percent'
        )
    )
])

plot_url = py.plot(data, filename='error-bar-horizontal')