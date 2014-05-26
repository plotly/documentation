import plotly.plotly as py
from plotly.graph_objs import *

py.sign_in('test-runner', '9h29fe3l0x')

import numpy as np
y = np.random.randn(500)

data = Data([
    Histogram(
        y=y
    )
])
plot_url = py.plot(data, filename='horizontal-histogram')