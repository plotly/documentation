import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

import numpy as np
y0 = np.random.randn(50)
y1 = np.random.randn(50)+1

trace1 = Box(
    y=y0
)
trace2 = Box(
    y=y1
)
data = Data([trace1, trace2])
plot_url = py.plot(data, filename='basic-box-plot')