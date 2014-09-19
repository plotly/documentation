import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
import numpy as np
y = np.random.randn(500)

data = Data([
    Histogram(
        y=y
    )
])
plot_url = py.plot(data, filename='horizontal-histogram', auto_open=False)