import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np
x = np.random.randn(500)
data = Data([
    Histogram(
        x=x
    )
])

plot_url = py.plot(data, filename='basic-histogram', auto_open=False)