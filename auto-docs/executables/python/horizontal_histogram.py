import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('theengineear', 'o9zlr0hy6z')

import numpy as np
y = np.random.randn(500)
data = Data([
    Histogram(
        y=y
    )
])

plot_url = py.plot(data, filename='horizontal-histogram', auto_open=False)