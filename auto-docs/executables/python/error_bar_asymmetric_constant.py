import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Scatter(
        x=[1, 2, 3, 4],
        y=[2, 1, 3, 4],
        error_y=ErrorY(
            type='percent',
            symmetric=False,
            value=15,
            valueminus=25
        )
    )
])
plot_url = py.plot(data, auto_open=False, filename='error-bar-asymmetric-constant')