import numpy as np
y = np.random.randn(500)
import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Histogram(
        y=y
    )
])
plot_url = py.plot(data, auto_open=False, filename='horizontal-histogram')