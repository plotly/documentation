import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1

data = Data([
    Histogram2d(
        x=x,
        y=y
    )
])

plot_url = py.plot(data, filename='2d-histogram')