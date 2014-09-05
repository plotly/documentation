import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
import plotly.plotly as py
from plotly.graph_objs import *
py.sign_in('TestBot', 'r1neazxo9w')
data = Data([
    Histogram2d(
        x=x,
        y=y
    )
])
plot_url = py.plot(data, auto_open=False, filename='2d-histogram')