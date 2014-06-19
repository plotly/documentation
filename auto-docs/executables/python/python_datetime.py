import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

from datetime import datetime
x = [
    datetime(year=2013, month=10, day=04),
    datetime(year=2013, month=11, day=05),
    datetime(year=2013, month=12, day=06)
]

data = Data([
    Scatter(
        x=x,
        y=[1, 3, 6]
    )
])

plot_url = py.plot(data, filename='python-datetime', auto_open=False)