import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

data = Data([
    Scatter(
        x=[0, 1, 2],
        y=[6, 10, 2],
        error_y=ErrorY(
            value=50,
            type='percent',
            visible=True
        )
    )
])

plot_url = py.plot(data, filename='percent-error-bar')