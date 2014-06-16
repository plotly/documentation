import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

data = Data([
    Scatter(
        x=[0, 2, 4],
        y=[0, 4, 2]
    )
])

plot_url = py.plot(data, filename='privacy-true', auto_open=False)